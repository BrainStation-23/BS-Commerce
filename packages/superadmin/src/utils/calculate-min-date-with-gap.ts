/**
 * Calculates the minimum selectable date ensuring a minimum gap from today
 * Only allows selection of specific dates in a month (5th, 15th, 25th by default)
 *
 * @param selectableDatesInMonth - Array of allowed dates in a month (default: [5, 15, 25])
 * @param minGapDays - Minimum number of days gap required from today (default: 5)
 * @returns Date object representing the minimum selectable date, or undefined if no restriction needed
 */
export function calculateMinDateWithGap(
  selectableDatesInMonth: number[] = [5, 15, 25],
  minGapDays: number = 5
): Date | undefined {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const currentDate = today.getDate();

  // Find the next selectable date in current month
  let nextSelectableDate = selectableDatesInMonth.find((date) => date > currentDate);
  let targetMonth = currentMonth;
  let targetYear = currentYear;

  // If no selectable date found in current month, use first selectable date of next month
  if (!nextSelectableDate) {
    nextSelectableDate = selectableDatesInMonth[0];
    targetMonth += 1;
    if (targetMonth > 11) {
      targetMonth = 0;
      targetYear += 1;
    }
  }

  const nextSelectableDateTime = new Date(targetYear, targetMonth, nextSelectableDate);
  const daysDifference = Math.ceil(
    (nextSelectableDateTime.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  // If gap is less than minimum required days, find next selectable date after that
  if (daysDifference < minGapDays) {
    const currentSelectableIndex = selectableDatesInMonth.indexOf(nextSelectableDate);
    let nextIndex = currentSelectableIndex + 1;

    if (nextIndex >= selectableDatesInMonth.length) {
      // Move to next month's first selectable date
      nextIndex = 0;
      targetMonth += 1;
      if (targetMonth > 11) {
        targetMonth = 0;
        targetYear += 1;
      }
    }

    return new Date(targetYear, targetMonth, selectableDatesInMonth[nextIndex]);
  }

  return nextSelectableDateTime;
}

/**
 * Calculates minimum date for SIP schedule dates with 5-day gap requirement
 * Specifically for dates that must be 5th, 15th, or 25th of the month
 */
export function calculateSIPMinDate(): Date | undefined {
  return calculateMinDateWithGap([5, 15, 25], 5);
}
