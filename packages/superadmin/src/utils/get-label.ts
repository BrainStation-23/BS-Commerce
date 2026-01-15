export const getLabel = (value: any, searchIn: any) => {
  const found = searchIn.find((option: any) => option.value === value);
  return found ? found.label : 'Unknown';
};
