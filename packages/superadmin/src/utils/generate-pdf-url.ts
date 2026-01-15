/**
 * Generates a URL for PDF data that can be used in iframes or for downloads
 * 
 * @param pdfData - PDF data from API response (Blob, ArrayBuffer, or BufferSource)
 * @returns URL string or null if generation fails
 * 
 * @example
 * const url = generatePdfUrl(apiResponse.data);
 * if (url) {
 *   setPdfUrl(url);
 * }
 */
export const generatePdfUrl = (
  pdfData: Blob | BufferSource | null | undefined
): string | null => {
  try {
    if (!pdfData) {
      return null;
    }

    // If it's already a Blob, use it directly
    if (pdfData instanceof Blob) {
      return URL.createObjectURL(pdfData);
    }

    // If it's ArrayBuffer or other BufferSource, convert to Blob
    const blob = new Blob([pdfData], { type: 'application/pdf' });
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error('Error generating PDF URL:', error);
    return null;
  }
};
