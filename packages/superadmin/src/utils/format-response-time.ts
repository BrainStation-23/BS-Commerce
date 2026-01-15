/**
 * Formats response time in minutes to a human-readable format like Facebook
 * Examples: "22 min", "1 hour", "2 hours", "1 hour 30 min"
 * @param minutes - The response time in minutes
 * @returns Formatted time string
 */
export const formatResponseTime = (minutes: number | null | undefined): string => {
  if (minutes === null || minutes === undefined || Number.isNaN(minutes)) {
    return '--';
  }

  const roundedMinutes = Math.max(0, Math.round(minutes));
  const minutesInHour = 60;
  const minutesInDay = 24 * minutesInHour;

  // Less than 60 minutes - show in minutes
  if (roundedMinutes < minutesInHour) {
    return `${roundedMinutes} min`;
  }

  // 1 day or more
  if (roundedMinutes >= minutesInDay) {
    const days = Math.floor(roundedMinutes / minutesInDay);
    const leftoverMinutes = roundedMinutes % minutesInDay;
    const leftoverHours = Math.floor(leftoverMinutes / minutesInHour);
    const remainingMinutes = leftoverMinutes % minutesInHour;

    const parts: string[] = [`${days} day${days === 1 ? '' : 's'}`];

    if (leftoverHours > 0) {
      parts.push(`${leftoverHours} hour${leftoverHours === 1 ? '' : 's'}`);
    }

    if (remainingMinutes > 0) {
      parts.push(`${remainingMinutes} min`);
    }

    return parts.join(' ');
  }

  // Less than a day - show hours/minutes
  const hours = Math.floor(roundedMinutes / minutesInHour);
  const remainingMinutes = roundedMinutes % minutesInHour;

  if (remainingMinutes === 0) {
    return `${hours} hour${hours === 1 ? '' : 's'}`;
  }

  return `${hours} hour${hours === 1 ? '' : 's'} ${remainingMinutes} min`;
};

