export const getFormattedTimeIn24 = (timeString: string): string => {
  const [hour, minute] = timeString.split(':');
  const hourNumber = parseInt(hour!, 10);

  // Format the hour to ensure it’s two digits (00-23)
  return `${String(hourNumber).padStart(2, '0')}:${minute}`;
};
