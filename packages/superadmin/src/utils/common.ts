export const paramsSerializer = (params: any) => {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => query.append(key, v));
      } else if (value !== undefined && value !== null && value !== '') {
        query.append(key, String(value));
      }
    });
    return query.toString();
  }
