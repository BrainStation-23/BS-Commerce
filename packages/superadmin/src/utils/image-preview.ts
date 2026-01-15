/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
export const handleImagePreview = (file: any) => {
  if (file) {
    if (typeof file === 'string') return file;
    else {
      const objectUrl = URL.createObjectURL(file);
      return objectUrl;
    }
  }
};
