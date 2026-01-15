/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-extraneous-dependencies */
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import isBetween from 'dayjs/plugin/isBetween';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

import { getFormattedTimeIn12 } from './time-in-12';
import { getFormattedTimeIn24 } from './time-in-24';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(isBetween);
dayjs.extend(customParseFormat);

export const convertTimeToTimeZone = (
  isoString: string,
  timeZone?: string,
  use12HourFormat: boolean = false,
  showFormat: boolean = true,
  use24HourFormat: boolean = false
): string => {
  // Parse ISO string to dayjs object
  const date = dayjs.utc(isoString);

  // Convert to the desired time zone
  const timeZoneDate = timeZone ? date.tz(timeZone) : date.local();

  // Format the time based on the specified format
  const formattedTime = timeZoneDate.format('HH:mm:ss');

  // Return the time in 12-hour format if specified
  return use12HourFormat
    ? getFormattedTimeIn12(formattedTime, showFormat)
    : use24HourFormat
      ? getFormattedTimeIn24(formattedTime)
      : formattedTime;
};

export const convertDateTimeToLocalTime = (
  isoString: string,
  timeZone: string = dayjs.tz.guess(), // Default to local time zone if not provided
  showFormat: boolean = true,
  use24HourFormat: boolean = false,
  customFormat: string | null = null
): string => {
  const date = dayjs(isoString).tz(timeZone);

  // Define the format based on time options
  const timeFormat = use24HourFormat ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD  hh:mm A'; // 24-hour or 12-hour format

  return showFormat
    ? date.format(timeFormat)
    : customFormat
      ? date.format(customFormat)
      : date.format('YYYY-MM-DD');
};

/**
 * Formats a date for list pages using DD/MM/YYYY format
 * @param isoString - The ISO date string to format
 * @returns A formatted date string in DD/MM/YYYY format
 */
export const formatDateForList = (isoString: string | Date, showTime: boolean = false): string => {
  if (!isoString) return '--';
  return convertDateTimeToLocalTime(
    isoString instanceof Date ? isoString.toISOString() : isoString,
    dayjs.tz.guess(),
    false,
    false,
    showTime ? 'DD/MM/YYYY h:mm A' : 'DD/MM/YYYY'
  );
};

export function convertToLocalTimeISO(dateTime: string): string {
  return dayjs.utc(dateTime).local().toISOString();
}

/**
 * Converts a local time to UTC time
 * @param dateTime - The local date time string to convert
 * @param format - Optional format for the input date time string
 * @returns An ISO string representing the time in UTC
 */
export function convertLocalTimeToUTC(dateTime: string, format?: string): string {
  // If format is provided, parse using that format, otherwise assume ISO format
  const date = format ? dayjs(dateTime, format).utc() : dayjs(dateTime).utc();

  return date.toISOString();
}

/**
 * Removes timezone information from a date string
 * @param dateTimeString - The date time string that may contain timezone information
 * @param format - Optional output format (defaults to 'YYYY/MM/DD')
 * @param inputFormat - Optional input format if the dateTimeString is in a specific format
 * @returns A timezone-neutral date time string in the format 'YYYY/MM/DD' by default
 */
export function removeTimeZone(
  dateTimeString: string,
  format: string = 'YYYY-MM-DD',
  inputFormat?: string
): string {
  // Parse the date, using input format if provided
  const date = inputFormat ? dayjs(dateTimeString, inputFormat) : dayjs(dateTimeString);

  // Return the date in the specified format without timezone information
  return date.format(format);
}

export function toISOString(date: Date | string): string {
  return dayjs(date).toISOString();
}
