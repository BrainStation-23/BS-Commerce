import { generatePdfUrl } from './generate-pdf-url';

/**
 * Downloads a PDF file from API response data
 * Creates a temporary download link, triggers the download, and cleans up
 *
 * @param pdfData - PDF data from API response (Blob, ArrayBuffer, or BufferSource)
 * @param filename - Name for the downloaded file (should include .pdf extension)
 * @returns Promise that resolves to true if download was successful, false otherwise
 *
 * @example
 * // Basic usage
 * const success = await downloadPdf(apiResponse.data, 'invoice.pdf');
 *
 * @example
 * // With dynamic filename
 * const filename = `statement_${userId}_${date}.pdf`;
 * await downloadPdf(pdfResponse, filename);
 *
 * @example
 * // With error handling
 * const success = await downloadPdf(data, 'report.pdf');
 * if (!success) {
 *   console.error('Failed to download PDF');
 * }
 */
export const downloadPdf = async (
  pdfData: Blob | BufferSource | null | undefined,
  filename: string
): Promise<boolean> => {
  try {
    // Generate URL from PDF data
    const pdfUrl = generatePdfUrl(pdfData);
    
    if (!pdfUrl) {
      console.error('Failed to generate PDF URL');
      return false;
    }

    // Create temporary download link
    const link = document.createElement('a');
    link.download = filename.endsWith('.pdf') ? filename : `${filename}.pdf`;
    link.href = pdfUrl;
    link.style.display = 'none';
    
    // Add to DOM, trigger download, and cleanup
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(pdfUrl); // Free up memory
    }, 100);

    return true;
  } catch (error) {
    console.error('Error downloading PDF:', error);
    return false;
  }
};

/**
 * Opens a PDF in a new browser tab instead of downloading it
 *
 * @param pdfData - PDF data from API response
 * @param title - Optional title for the new tab
 * @returns Promise that resolves to true if successful, false otherwise
 *
 * @example
 * await openPdfInNewTab(apiResponse.data, 'Invoice Preview');
 */
export const openPdfInNewTab = async (
  pdfData: Blob | BufferSource | null | undefined,
  title?: string
): Promise<boolean> => {
  try {
    const pdfUrl = generatePdfUrl(pdfData);
    
    if (!pdfUrl) {
      console.error('Failed to generate PDF URL');
      return false;
    }

    const newWindow = window.open(pdfUrl, '_blank');
    
    if (newWindow && title) {
      newWindow.document.title = title;
    }

    // Cleanup URL after window loads
    if (newWindow) {
      newWindow.addEventListener('load', () => {
        setTimeout(() => {
          URL.revokeObjectURL(pdfUrl);
        }, 1000);
      });
    }

    return true;
  } catch (error) {
    console.error('Error opening PDF in new tab:', error);
    return false;
  }
};
