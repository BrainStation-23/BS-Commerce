import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import relativeTime from 'dayjs/plugin/relativeTime';

// Extend dayjs with plugins
dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);

// ----------------------------------------------------------------------

type InputValue = Date | string | number | null | undefined;

/**
 * Format a date using Day.js
 * @param date - The date to format
 * @param newFormat - Optional format string (defaults to 'DD MMM YYYY')
 * @returns Formatted date string
 */
export function fDate(date: InputValue, newFormat?: string) {
  const fm = newFormat || 'DD MMM YYYY';

  return date ? dayjs(date).format(fm) : '';
}

/**
 * Format time using Day.js
 * @param date - The date to format
 * @param newFormat - Optional format string (defaults to 'h:mm A')
 * @returns Formatted time string
 */
export function fTime(date: InputValue, newFormat?: string) {
  const fm = newFormat || 'h:mm A';

  return date ? dayjs(date).format(fm) : '';
}

/**
 * Format date and time using Day.js
 * @param date - The date to format
 * @param newFormat - Optional format string (defaults to 'DD MMM YYYY h:mm A')
 * @returns Formatted date and time string
 */
export function fDateTime(date: InputValue, newFormat?: string) {
  const fm = newFormat || 'DD MMM YYYY h:mm A';

  return date ? dayjs(date).format(fm) : '';
}

/**
 * Get timestamp in milliseconds
 * @param date - The date to convert to timestamp
 * @returns Timestamp in milliseconds
 */
export function fTimestamp(date: InputValue) {
  return date ? dayjs(date).valueOf() : '';
}

/**
 * Format relative time (e.g., "2 hours ago")
 * @param date - The date to calculate relative time from
 * @returns Relative time string
 */
export function fToNow(date: InputValue) {
  return date ? dayjs(date).fromNow() : '';
}

/**
 * Check if a date is between two dates (inclusive)
 * @param inputDate - The date to check
 * @param startDate - Start date of the range
 * @param endDate - End date of the range
 * @returns Boolean indicating if the date is in the range
 */
export function isBetween(inputDate: Date | string | number, startDate: Date, endDate: Date) {
  const date = dayjs(inputDate).startOf('day');
  const start = dayjs(startDate).startOf('day');
  const end = dayjs(endDate).startOf('day');

  return date.isAfter(start) || (date.isSame(start) && (date.isBefore(end) || date.isSame(end)));
}

/**
 * Check if first date is after second date
 * @param startDate - First date to compare
 * @param endDate - Second date to compare
 * @returns Boolean indicating if startDate is after endDate
 */
export function isAfter(startDate: Date | null, endDate: Date | null) {
  return startDate && endDate ? dayjs(startDate).isAfter(dayjs(endDate)) : false;
}

/**
 * Format schedule date for display (e.g., "Every 15th of month")
 * @param date - The date to format
 * @returns Formatted schedule string or '-' if date is null/undefined
 */
export function formatScheduleDate(date: string | null | undefined) {
  if (!date) return '-';

  const day = parseInt(fDate(date, 'DD'), 10);
  
  // Get ordinal suffix (1st, 2nd, 3rd, 4th, etc.)
  let suffix = 'th';
  if (day % 10 === 1 && day % 100 !== 11) {
    suffix = 'st';
  } else if (day % 10 === 2 && day % 100 !== 12) {
    suffix = 'nd';
  } else if (day % 10 === 3 && day % 100 !== 13) {
    suffix = 'rd';
  }

  return `Every ${day}${suffix} of month`;
}