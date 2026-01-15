/* eslint-disable no-nested-ternary */
type FormatKey = 'BD' | 'US';

export const formatNumberWithCommas = (
  amountValue: number | string,
  formatTo?: FormatKey,
  showTakaSymbol: boolean = true,
  useFixed: boolean = false,
  toFixed: number = 1,
  noDecimalPoint: boolean = false,
  showNA: boolean = true
) => {
  const formats: Record<FormatKey, RegExp> = {
    BD: /\B(?=(\d{2})+(?!\d))/g,
    US: /\B(?=(\d{3})+(?!\d))/g,
  };

  if (amountValue === 'N/A') return amountValue;
  if (amountValue === null || amountValue === '' || amountValue === undefined)
    return showNA ? 'N/A' : '';

  let amount = typeof amountValue === 'string' ? parseFloat(amountValue) : amountValue;

  // Check if the amount is negative and store the sign
  const isNegative = amount < 0;
  amount = Math.abs(amount);

  // Apply toFixed(1) if useFixed is true, even for whole numbers
  if (useFixed) {
    amount = parseFloat(amount.toFixed(toFixed));
  }

  let [integerPart, decimalPart] = amount.toString().split('.');

  if (useFixed && !decimalPart) {
    if (toFixed === 2) decimalPart = '00';
    else decimalPart = '0';
  } else if (useFixed && toFixed === 2 && decimalPart?.length! === 1) {
    decimalPart += '0';
  }

  // Format the integer part with commas
  let lastThree = integerPart?.slice(-3);
  const otherNumbers = integerPart?.slice(0, -3);
  if (otherNumbers !== '') lastThree = `,${lastThree}`;
  integerPart = otherNumbers!.replace(formats[formatTo ?? 'US'], ',') + lastThree;

  // Rebuild the formatted number (ensure decimalPart exists when useFixed is true and omit decimal part if noDecimalPoint is true)
  let formattedNumber = noDecimalPoint
    ? `${integerPart}`
    : decimalPart
      ? `${integerPart}.${decimalPart}`
      : `${integerPart}`;

  // Add the negative sign if needed
  if (isNegative) {
    formattedNumber = `-${formattedNumber}`;
  }

  // Return the formatted number with or without the Taka symbol
  return `${!showTakaSymbol ? '' : '৳'}${formattedNumber}`;
};
