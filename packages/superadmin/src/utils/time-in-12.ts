export const getFormattedTimeIn12 = (timeString: string, showFormat: boolean) => {
  const [hour, minute] = timeString.split(':');

  let hourNumber = parseInt(hour!, 10);

  const amPm = hourNumber >= 12 ? 'PM' : 'AM';

  hourNumber = hourNumber % 12 || 12;

  return `${hourNumber}:${minute} ${showFormat ? amPm : ''}`;
};
