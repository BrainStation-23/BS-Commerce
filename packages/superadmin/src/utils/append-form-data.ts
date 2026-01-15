/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-lonely-if */
export const appendFormData = (data: any, parentKey = ''): FormData => {
  const formData = new FormData();

  const appendData = (data: any, parentKey: string) => {
    if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
      Object.keys(data).forEach((key) => {
        appendData(data[key], parentKey ? `${parentKey}[${key}]` : key);
      });
    } else {
      if (data !== null && data !== undefined && data !== '') {
        const value = data instanceof Date ? data.toISOString() : data;
        formData.append(parentKey, value);
      }
    }
  };

  appendData(data, parentKey);

  return formData;
};
