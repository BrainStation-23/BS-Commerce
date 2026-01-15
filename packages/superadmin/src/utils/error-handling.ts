/**
 * Centralized error handling utilities
 */

/**
 * Extracts a user-friendly error message from different error object formats
 */
export const getErrorMessage = (error: any): string => {
  if (typeof error === 'string') return error;

  if (error?.response?.data?.message) return error.response.data.message;
  if (error?.response?.data?.error) return error.response.data.error;
  if (error?.message) return error.message;

  return 'An unknown error occurred';
};

/**
 * Handles API error logging consistently
 */
export const logApiError = (error: any, context = ''): void => {
  const prefix = context ? `[${context}] ` : '';

  if (process.env.NODE_ENV !== 'production') {
    console.error(`${prefix}API Error:`, error);

    if (error?.response) {
      console.error(`Status: ${error.response.status}`, error.response.data);
    }
  }
};

/**
 * Creates a standardized error response object
 */
export const createErrorResponse = (
  message: string,
  code: string | number = 'UNKNOWN_ERROR',
  data?: any
) => ({
  success: false,
  error: {
    message,
    code,
    ...(data && { data }),
  },
});

/**
 * Safely parses a JSON string without throwing exceptions
 */
export const safeParseJSON = <T>(json: string, fallback: T): T => {
  try {
    return JSON.parse(json) as T;
  } catch (error) {
    logApiError(error, 'JSON Parse');
    return fallback;
  }
};

/**
 * Handles async operations with standardized error handling
 * Returns a tuple of [data, error]
 */
export const tryCatchAsync = async <T>(promise: Promise<T>): Promise<[T | null, Error | null]> => {
  try {
    const data = await promise;
    return [data, null];
  } catch (error) {
    return [null, error instanceof Error ? error : new Error(getErrorMessage(error))];
  }
};
