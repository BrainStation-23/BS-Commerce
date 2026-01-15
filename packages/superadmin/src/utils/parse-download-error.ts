// Utility to extract a user-friendly error message from download errors
// Handles cases where the backend returns a Blob (responseType: 'blob')
// as well as typical Axios error shapes

export async function FindError(
  error: any,
  fallbackMessage = 'Failed to download files'
): Promise<string> {
  const parseBlob = async (blob: Blob): Promise<string> => {
    try {
      const text = await blob.text();
      try {
        const json = JSON.parse(text);
        return json?.message || json?.error || text || fallbackMessage;
      } catch {
        return text || fallbackMessage;
      }
    } catch {
      return fallbackMessage;
    }
  };

  try {
    if (!error) return fallbackMessage;

    // Direct blob rejection
    if (error instanceof Blob) {
      return await parseBlob(error);
    }

    // Some interceptors may put blob at error.data
    if (error?.data instanceof Blob) {
      return await parseBlob(error.data);
    }

    // Typical Axios error shape
    const responseData = error?.response?.data;
    if (responseData instanceof Blob) {
      return await parseBlob(responseData);
    }

    if (responseData?.message) return responseData.message;
    if (responseData?.error) return responseData.error;

    if (typeof error === 'string') return error;
    if (error?.message) return error.message;
    if (error?.error?.message) return error.error.message;

    return fallbackMessage;
  } catch {
    return fallbackMessage;
  }
}


