/* eslint-disable no-else-return */
/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-extraneous-dependencies */
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export const checkDateInRange = (
  currentDate: string,
  startDate: string,
  endDate: string
): string => {
  const current = dayjs.utc(currentDate).local();
  const start = dayjs.utc(startDate).local();
  const end = dayjs.utc(endDate).local();

  if (current.isBefore(start)) {
    return 'before';
  } else if (current.isAfter(end)) {
    return 'after';
  } else if (current.isBetween(start, end, null, '[]')) {
    return 'in-range';
  } else {
    return 'Invalid date range.';
  }
};
