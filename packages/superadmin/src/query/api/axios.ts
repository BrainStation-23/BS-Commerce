/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable arrow-body-style */
import axios, { AxiosRequestConfig } from 'axios';

import { HOST_API } from 'src/config-global';
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: HOST_API });

// Track 403 retry attempts per request
const forbiddenRetryMap = new Map<string, number>();

// Track 429 retry attempts per request
const rateLimitRetryMap = new Map<string, number>();

// Global flag to prevent infinite loops when already redirecting to 403 page
let isHandling403Redirect = false;

// Reset flag when page loads (in case we successfully navigated to 403 page)
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    isHandling403Redirect = false;
  });
}

export const clearTokens = () => {
  localStorage.removeItem('accessToken');
};

axiosInstance.interceptors.response.use(
  (response) => {
    // Clear retry count for successful requests
    const requestKey = `${response.config.method?.toUpperCase()}-${response.config.url}`;
    forbiddenRetryMap.delete(requestKey);
    rateLimitRetryMap.delete(requestKey);

    // Reset redirect flag on successful requests
    isHandling403Redirect = false;

    // Clear retry loading state on successful requests
    window.postMessage({
      messageType: 'setRetryLoading',
      retryLoading: false,
    });

    return response;
  },
  async (error) => {
    // Handle network errors
    if (error.code === 'ERR_NETWORK') {
      error.message = 'Unable to connect to the server. Please try again later.';
      return Promise.reject(error);
    }

    // Handle 401 Unauthorized errors - no refresh token flow, just clear and logout
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      clearTokens();

      // logging out using auth-provider
      window.postMessage({
        messageType: 'logout',
      });

      return Promise.reject(error);
    }

    // Handle 403 Forbidden errors
    if (error.response?.status === 403 || error.response?.data?.statusCode === 403) {
      // Check if we're already handling a 403 redirect to prevent infinite loops
      const currentPath = window.location.pathname;
      const isOnErrorPage =
        currentPath.includes(paths.error.forbidden) || currentPath.includes(paths.error.notFound);

      // If already on error page or handling redirect, don't retry - just reject
      if (isOnErrorPage || isHandling403Redirect) {
        return Promise.reject(error);
      }

      const requestKey = `${originalRequest.method?.toUpperCase()}-${originalRequest.url}`;
      const currentRetryCount = forbiddenRetryMap.get(requestKey) || 0;

      // If this is the first 403 for this request, set retry loading state
      if (currentRetryCount === 0) {
        window.postMessage({
          messageType: 'setRetryLoading',
          retryLoading: true,
        });
      }

      // If we've already retried 2 times, stop retrying and redirect
      if (currentRetryCount >= 2) {
        forbiddenRetryMap.delete(requestKey);

        // Clear retry loading state before redirecting
        window.postMessage({
          messageType: 'setRetryLoading',
          retryLoading: false,
        });

        // Set flag to prevent infinite loops during redirect
        isHandling403Redirect = true;

        // Redirect to access denied page
        window.location.href = paths.error.forbidden;

        // Dispatch a global event for more flexibility
        window.dispatchEvent(
          new CustomEvent('access-denied', {
            detail: {
              path: originalRequest.url,
              message: error.response?.data?.message || 'Access Denied after 2 attempts',
            },
          })
        );

        // Reset flag after a delay (in case redirect fails)
        setTimeout(() => {
          isHandling403Redirect = false;
        }, 5000);

        return Promise.reject(error);
      }

      // Increment retry count and retry the request
      forbiddenRetryMap.set(requestKey, currentRetryCount + 1);

      // Add a small delay before retrying to avoid rapid consecutive requests
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return axiosInstance(originalRequest);
    }

    // Handle 429 Too Many Requests errors
    if (error.response?.status === 429 || error.response?.data?.statusCode === 429) {
      const requestKey = `${originalRequest.method?.toUpperCase()}-${originalRequest.url}`;
      const currentRetryCount = rateLimitRetryMap.get(requestKey) || 0;

      // If we haven't reached the maximum retry limit (3 times), retry the request
      if (currentRetryCount < 3) {
        // Increment retry count
        rateLimitRetryMap.set(requestKey, currentRetryCount + 1);

        // Get retry delay from Retry-After header or use fixed delay
        const retryAfter = error.response?.headers?.['retry-after'];
        const delay = retryAfter ? parseInt(retryAfter, 10) * 1000 : 1000;

        console.log(
          `Rate limited. Retrying request ${requestKey} after ${delay}ms (attempt ${
            currentRetryCount + 1
          }/3)`
        );

        // Add delay before retrying
        await new Promise((resolve) => setTimeout(resolve, delay));

        return axiosInstance(originalRequest);
      }

      // Clean up retry count after max retries reached
      rateLimitRetryMap.delete(requestKey);
    }

    // Handle other errors
    return Promise.reject((error.response && error.response.data) || 'Something went wrong');
  }
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosInstance.get(url, { ...config });

  return res.data;
};

// ----------------------------------------------------------------------
