export const createQueryUrl = (searchParams: Record<string, any>) => {
  const queryParams: string[] = [];

  Object.entries(searchParams).forEach(([key, value]) => {
    if (value !== null && value !== undefined && value !== '') {
      queryParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
    }
  });

  return queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
};
