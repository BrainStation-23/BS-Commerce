/**
 * Formats a number as currency with proper formatting
 * @param value - The number to format
 * @param currency - The currency code (default: 'BDT')
 * @param locale - The locale to use (default: 'en-BD')
 * @returns Formatted currency string
 */
export const formatCurrency = (
  value: number | string,
  currency: string = 'BDT',
  locale: string = 'en-BD'
): string => {
  const numValue = typeof value === 'string' ? parseFloat(value) : value;

  if (Number.isNaN(numValue)) {
    return '0.00';
  }

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numValue);
};

/**
 * Formats a number with commas for thousands separators
 * @param value - The number to format
 * @param decimals - Number of decimal places (default: 2)
 * @returns Formatted number string
 */
export const formatNumber = (value: number | string, decimals: number = 2): string => {
  const numValue = typeof value === 'string' ? parseFloat(value) : value;

  if (Number.isNaN(numValue)) {
    return '0';
  }

  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(numValue);
};

// ----------------------------------------------------------------------
// Existing dashboard/widgets depend on this signature

type InputValue = string | number | null | undefined;

const getLocaleCode = () => ({ code: 'en-US' });

export function fNumber(inputValue: InputValue) {
  const { code } = getLocaleCode();

  if (!inputValue) return '';

  const number = Number(inputValue);

  const fm = new Intl.NumberFormat(code, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(number);

  return fm;
}
