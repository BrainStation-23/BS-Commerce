/**
 * Extracts the file URL from various file formats
 * @param file - Can be a string (URL), object with url/preview/path/location, or null/undefined
 * @returns The file URL string or empty string if not found
 */
export const getFileUrl = (file: any): string => {
  if (!file) return '';
  if (typeof file === 'string') return file;
  if (typeof file === 'object') {
    return file.url || file.preview || file.path || file.location || '';
  }
  return '';
};

