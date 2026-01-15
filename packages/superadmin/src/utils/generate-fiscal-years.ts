export function generateFiscalYears(): string[] {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // getMonth() returns 0-11

  // If current month is July (7) or later, fiscal year starts this year
  // Otherwise, fiscal year started last year
  const currentFiscalYearStart = currentMonth >= 7 ? currentYear : currentYear - 1;

  const fiscalYears: string[] = [];

  // Generate 10 fiscal years from current to 9 years back
  for (let i = 0; i < 10; i += 1) {
    const startYear = currentFiscalYearStart - i - 1;
    const endYear = startYear + 1;
    fiscalYears.push(`${startYear}-${endYear}`);
  }

  return fiscalYears;
}

