export const getFormChangedFields = (dirtyFields: any, formData: any) => {
  const changedFields: Record<string, any> = {};

  Object.keys(dirtyFields).forEach((key) => {
    if (dirtyFields[key]) {
      changedFields[key] = formData[key];
    }
  });

  return changedFields;
};
