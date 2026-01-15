import dayjs from 'dayjs';
import dayJsIsLeapYear from 'dayjs/plugin/isLeapYear';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(dayJsIsLeapYear);

type TimeFormat = `${number}:${number}`; // Accepts strings like 'HH:mm'

export const getTodayDateOnly = (): string => {
  const today = new Date();
  return today.toLocaleDateString('en-GB'); // gives YYYY-MM-DD
};

export const getTimeRangeForDay = (
  date: Date = new Date(),
  fromTime: TimeFormat = '10:00', // Default from time: 10:00 AM
  toTime: TimeFormat = '14:30' // Default to time: 2:30 PM
): {
  start: string;
  end: string;
} => {
  const currentDate = dayjs(date).tz('Asia/Dhaka');

  const [fromHour, fromMinute] = fromTime.split(':').map(Number);
  const [toHour, toMinute] = toTime.split(':').map(Number);

  const start = currentDate
    .hour(fromHour)
    .minute(fromMinute)
    .second(0)
    .millisecond(0)
    .format('YYYY-MM-DD HH:mm:ss');

  const end = currentDate
    .hour(toHour)
    .minute(toMinute)
    .second(0)
    .millisecond(0)
    .format('YYYY-MM-DD HH:mm:ss');

  return { start, end };
};

/**
 * Formats a date into a specified template string.
 * @param template - The format template string.
 * @param date - Optional date object to format. If not provided, the current date and time are used.
 * @returns A formatted date string based on the provided template.
 */
export const formattedDateTime = (template: string, date?: any) => {
  const currentDate = date ? dayjs(date).tz('Asia/Dhaka') : dayjs().tz('Asia/Dhaka'); // Fix: Use dayjs() to get the current date when no date is provided.
  return currentDate.format(template);
};

export const startOfDay = (
  date?: Date
): {
  start: string;
} => {
  const currentDate = date ? dayjs(date).tz('Asia/Dhaka') : dayjs().tz('Asia/Dhaka');
  const start = currentDate
    .hour(0)
    .minute(0)
    .second(0)
    .millisecond(0)
    .format('YYYY-MM-DD HH:mm:ss');
  return { start };
};

export const endOfDay = (
  date?: Date
): {
  end: string;
} => {
  const currentDate = date ? dayjs(date).tz('Asia/Dhaka') : dayjs().tz('Asia/Dhaka');
  const end = currentDate
    .hour(23)
    .minute(59)
    .second(59)
    .millisecond(0)
    .format('YYYY-MM-DD HH:mm:ss');
  return { end };
};

export const getStartAndEndOfDay = (
  date?: Date
): {
  start: string;
  end: string;
} => {
  const currentDate = date ? dayjs(date).tz('Asia/Dhaka') : dayjs().tz('Asia/Dhaka');
  const start = currentDate
    .hour(0)
    .minute(0)
    .second(0)
    .millisecond(0)
    .format('YYYY-MM-DD HH:mm:ss');

  const end = currentDate.hour(24).minute(0).second(0).millisecond(0).format('YYYY-MM-DD HH:mm:ss');
  return { start, end };
};

export const currentWeekStartEndDate = (date?: Date) => {
  const currentDate = date ? dayjs(date).tz('Asia/Dhaka') : dayjs().tz('Asia/Dhaka');
  const currentWeekStartDate = currentDate.startOf('week').add(0, 'day').toDate();

  const currentWeekEndDate = dayjs().startOf('week').add(4, 'day').toDate(); // Thursday
  return { currentWeekStartDate, currentWeekEndDate };
};

export const getCurrentWeekDateRange = () => {
  const currentDate = dayjs().tz('Asia/Dhaka');
  const weekStart = currentDate.startOf('week').format('YYYY-MM-DD');
  const weekEnd = currentDate.endOf('week').format('YYYY-MM-DD');
  return { from_date: weekStart, to_date: weekEnd };
};

// Function to ceil the given date to the next full minute
export const ceilToNextMinute = (date?: Date) => {
  // Create a new Date object to avoid modifying the original date
  const newDate = date ? new Date(date) : new Date();

  // If the seconds or milliseconds are not zero, round up to the next minute
  if (newDate.getSeconds() > 0 || newDate.getMilliseconds() > 0) {
    // Set seconds and milliseconds to 0, and increment the minute by 1
    newDate.setSeconds(0, 0);
    newDate.setMinutes(newDate.getMinutes() + 1);
  }

  return newDate;
};

/**
 * Checks if a given date matches the specified format and is valid.
 * @param date - Date to validate.
 * @param format - Format string describing the expected date format (e.g., 'YYYY-MM-DD').
 * @returns True if the date is valid and matches the format; otherwise, false.
 */
export const checkValidDateFormat = (date: any, format?: string) =>
  dayjs(date, format || undefined, true).isValid();
/**
 * Checks if one date is chronologically after another date.
 * @param dateA - The date to check if it is after `dateB`.
 * @param dateB - The date to compare against.
 * @returns True if `dateA` is after `dateB`; otherwise, false.
 */
export const isDateAfter = (dateA: any, dateB: any) => dayjs(dateA).isAfter(dayjs(dateB));

/**
 * Checks if two dates are the same (ignoring time).
 * @param dateA - The first date to compare.
 * @param dateB - The second date to compare.
 * @returns True if `dateA` and `dateB` are the same; otherwise, false.
 */
export const isSameDate = (dateA: any, dateB: any = new Date()) =>
  dayjs(dateA).isSame(dayjs(dateB), 'day');

/**
 * Checks if a given date matches the specified format and is valid.
 * @param year - Year to validate.
 * @returns True if the year is valid and matches the format; otherwise, false.
 */
export const checkValidYearFormat = (year: string) =>
  /^\d{4}$/.test(year) && dayjs(year, 'YYYY', true).isValid();

/**
 * Calculates the number of months between two dates.
 *
 * @param startDate - The start date in ISO format (e.g., '2024-01-01').
 * @param endDate - The end date in ISO format (e.g., '2024-08-01').
 * @returns The absolute number of months between the two dates.
 */
export const getMonthDifference = (startDate: string, endDate: string): number => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Calculate the difference in years and months
  const yearDifference = end.getFullYear() - start.getFullYear();
  const monthDifference = end.getMonth() - start.getMonth();

  // Total months difference
  const totalMonthDifference = yearDifference * 12 + monthDifference;

  // Return the absolute value of the month difference
  return Math.abs(totalMonthDifference);
};

/**
 * Calculates the number of days between two dates.
 *
 * @param startDate - The start date in ISO format.
 * @param endDate - The end date in ISO format.
 * @param includeEndDate - Optional boolean flag to include the end date in the calculation.
 * @returns The absolute number of days between the two dates.
 */
export const getDayDifference = (startDate: any, endDate: any, includeEndDate = false): number => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  // Calculate the difference in time (milliseconds)
  const timeDifference = end.getTime() - start.getTime();
  // Convert time difference to days
  const dayDifference = timeDifference / (1000 * 60 * 60 * 24);
  // Return the absolute value of the day difference
  return Math.abs(Math.ceil(dayDifference + (includeEndDate ? 1 : 0)));
};

// Function to convert HH:MM format to minutes from midnight
export const timeToMinutes = (time: string) => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};

/**
 * Extracts only the date portion from a date string and returns a Date object.
 * @param date - The date string to extract the date from.
 * @param onlyDate - Optional boolean flag to exclude time information.
 * @returns The Date object representing the extracted date (and time if not onlyDate).
 */
export const getFormattedDate = (date: string | Date, onlyDate?: boolean): any => {
  const formatted = dayjs(date).format(onlyDate ? 'YYYY-MM-DD' : 'YYYY-MM-DD HH:mm:ss');
  return formatted;
};

/**
 * Parses date from 'DD MMM YYYY' format to 'YYYY-MM-DD' format
 * @param dateString - Date string in 'DD MMM YYYY' format (e.g., '25 Nov 1983')
 * @returns Formatted date string in 'YYYY-MM-DD' format or null if invalid
 */
export const parseNidDateFormat = (dateString: string): string | null => {
  if (!dateString || typeof dateString !== 'string') {
    return null;
  }

  try {
    // Parse the date string using dayjs with the specific format
    const parsedDate = dayjs(dateString, 'DD MMM YYYY', true);

    // Check if the parsing was successful
    if (!parsedDate.isValid()) {
      return null;
    }

    // Return formatted date in YYYY-MM-DD format
    return parsedDate.format('YYYY-MM-DD');
  } catch (error) {
    console.error('Error parsing date:', error);
    return null;
  }
};

export const isLeapYear = (input: any) => {
  let date;
  if (typeof input === 'number') {
    date = dayjs(`${input}-01-01`);
  } else {
    date = dayjs(input);
  }

  if (!date.isValid()) {
    throw new Error('Invalid input for date/year');
  }

  return date.isLeapYear();
};

export const getDateInUtc = (date: Date) => dayjs(date).utc().toDate();

export const getTodayDate = (returnAsString = false): Date | string => {
  const date = dayjs().tz('Asia/Dhaka').toDate();
  if (returnAsString) {
    return dayjs(date).format('YYYY-MM-DD');
  }
  return new Date(dayjs(date).format('YYYY-MM-DD'));
};
