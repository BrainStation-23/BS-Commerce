export const formatAmount = (
  value: number | string | null | undefined,
  options: Intl.NumberFormatOptions = {}
): string => {
  if (value === null || value === undefined || value === '') return '--';

  const numberValue = typeof value === 'string' ? parseFloat(value) : value;

  if (Number.isNaN(numberValue)) return '--';

  const [integerPart, decimalPart] = numberValue.toString().split('.');

  if (!decimalPart) {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      ...options,
    }).format(numberValue);
  }

  const trimmedDecimal = decimalPart.substring(0, 4).replace(/0+$/, '');

  return trimmedDecimal.length > 0
    ? `${new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      ...options,
    }).format(Number(integerPart))}.${trimmedDecimal}`
    : new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      ...options,
    }).format(Number(integerPart));
};

// Accounting-style formatter: negative numbers shown as (100) instead of -100
export const formatAccountingAmount = (
  value: number | string | null | undefined,
  options: Intl.NumberFormatOptions = {}
): string => {
  if (value === null || value === undefined || value === '') return '0.00';

  const numberValue = typeof value === 'string' ? parseFloat(value) : value;

  if (Number.isNaN(numberValue)) return '0.00';

  const absFormatted = formatAmount(Math.abs(numberValue), options);

  return numberValue < 0 ? `(${absFormatted})` : absFormatted;
};
