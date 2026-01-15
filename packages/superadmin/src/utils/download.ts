// src/utils/download.ts
export interface DownloadOptions {
  data: BlobPart;
  filename: string;
  mimeType?: string;
  invalidateQueries?: string[][];
}

export const downloadFile = (options: DownloadOptions): void => {
  const { data, filename, mimeType = 'application/octet-stream', invalidateQueries } = options;

  // Handle the case where data might be undefined or null
  if (!data) {
    console.error('No data received for download');
    return;
  }

  try {
    // Create a download link and trigger download
    const blob = new Blob([data], { type: mimeType });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    setTimeout(() => {
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    }, 100);

    // Invalidate queries if provided
    if (invalidateQueries && invalidateQueries.length > 0) {
      import('src/query/providers/query-provider').then(({ default: queryClient }) => {
        invalidateQueries.forEach(queryKey => {
          queryClient.invalidateQueries({ queryKey });
        });
      }).catch(error => {
        console.error('Error importing queryClient:', error);
      });
    }
  } catch (error) {
    console.error('Error creating download:', error);
  }
};

// Common MIME types for reuse
export const MIME_TYPES = {
  EXCEL: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  PDF: 'application/pdf',
  CSV: 'text/csv',
  JSON: 'application/json',
  ZIP: 'application/zip',
} as const;
