/* eslint-disable arrow-body-style */
export const isTimeInRange = (startTime: string, endTime: string, timeToCheck: string) => {
  const start = new Date(`1970-01-01T${startTime}:00Z`);
  const end = new Date(`1970-01-01T${endTime}:00Z`);
  const check = new Date(`1970-01-01T${timeToCheck}:00Z`);

  return check >= start && check < end;
};

export const convertToIso8601 = (date: Date): string => {
  return date.toISOString();
};
