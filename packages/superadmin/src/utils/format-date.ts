import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';

// Extend dayjs with plugins
dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);

/**
 * Formats a date or timestamp string using Day.js
 *
 * @param timestamp - Date object or ISO date string to format
 * @param formatString - Optional format string (defaults to 'MMM D, YYYY' which is similar to 'LLL dd, y' in date-fns)
 * @returns Formatted date string
 *
 * @example
 * // Returns "Jun 18, 2025"
 * formatDate(new Date());
 *
 * @example
 * // Returns "18/06/2025"
 * formatDate('2025-06-18', 'DD/MM/YYYY');
 */
export const formatDate = (
  timestamp: string | Date,
  formatString: string = 'MMM D, YYYY'
): string => dayjs(timestamp).format(formatString);

/**
 * Formats a date and time string using Day.js
 *
 * @param timestamp - Date object or ISO date string to format
 * @param formatString - Optional format string (defaults to 'MMM D, YYYY h:mm A')
 * @returns Formatted date and time string
 */
export const formatDateTime = (
  timestamp: string | Date,
  formatString: string = 'MMM D, YYYY h:mm A'
): string => dayjs(timestamp).format(formatString);

/**
 * Formats a date string for list cells as 'DD/MM/YYYY h:mm a'.
 * Returns empty string if input is falsy or invalid.
 */

/**
 * Additional date formatting utilities using Day.js
 */
export const dateUtils = {
  /**
   * Format date to relative time (e.g., "2 hours ago", "in 3 days")
   */
  fromNow: (date: string | Date): string => dayjs(date).fromNow(),

  /**
   * Format date as ISO string
   */
  toISO: (date: string | Date): string => dayjs(date).toISOString(),

  /**
   * Check if a date is valid
   */
  isValid: (date: string | Date): boolean => dayjs(date).isValid(),

  /**
   * Get current date formatted
   */
  today: (formatString: string = 'MMM D, YYYY'): string => dayjs().format(formatString),
};
