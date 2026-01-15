export const findMinMaxValues = (data: any, valueKey: any) => {
  const values = data.map((item: any) => item[valueKey]);

  const maxValue = Math.max(...values) + 5;
  const minValue = Math.min(...values) - 5 >= 0 ? Math.min(...values) - 5 : Math.min(...values);

  return [minValue, maxValue];
};
