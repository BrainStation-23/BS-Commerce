// utils/amount-beautify.ts
export function amountBeautify(
  rawValue: string,
  style: 'intl' | 'bd' = 'intl'
) {
  // Remove all invalid characters except digits and dot
  let cleanedValue = rawValue.replace(/[^0-9.]/g, '');

  // Only allow one dot
  const firstDotIndex = cleanedValue.indexOf('.');
  if (firstDotIndex !== -1) {
    cleanedValue =
      cleanedValue.slice(0, firstDotIndex + 1) +
      cleanedValue.slice(firstDotIndex + 1).replace(/\./g, '');
  }

  // Split into integer and decimal parts
  const parts = cleanedValue.split('.');
  const integerPart = parts[0];
  let decimalPart = parts[1] ? parts[1].slice(0, 2) : ''; // up to 2 decimals
  const originalDecimalPart = decimalPart;
  // Check if rawValue ends with trailing zeros after decimal point (e.g., "4.0", "4.00")
  // This indicates the user might still be typing, so preserve the zeros
  const hasTrailingZerosOnly = rawValue.includes('.') && /\.0+$/.test(rawValue);
  // Remove unnecessary trailing zeros, but preserve them if user is actively typing (ends with .0)
  if (!hasTrailingZerosOnly) {
    // Only remove trailing zeros if the decimal part is not all zeros
    // This preserves "06" as "06" (the zero is not trailing, it's in the middle)
    if (decimalPart && !/^0+$/.test(decimalPart)) {
      decimalPart = decimalPart.replace(/0+$/, '');
    } else if (decimalPart && /^0+$/.test(decimalPart)) {
      // If decimal part is all zeros and user isn't typing, remove them
      decimalPart = '';
    }
  }
  // Format integer part
  let formattedIntegerPart = '';
  if (style === 'intl') {
    formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else if (integerPart.length > 3) {
    const lastThree = integerPart.slice(-3);
    const other = integerPart.slice(0, -3);
    formattedIntegerPart = `${other.replace(/\B(?=(\d{2})+(?!\d))/g, ',')},${lastThree}`;
  } else {
    formattedIntegerPart = integerPart;
  }

  // Combine display value
  let displayValue = formattedIntegerPart;
  if (decimalPart) {
    displayValue += `.${decimalPart}`;
  } else if (rawValue.endsWith('.')) {
    displayValue += '.'; // preserve trailing dot
  } else if (hasTrailingZerosOnly && originalDecimalPart) {
    // Preserve trailing zeros if they exist in the original input
    displayValue += `.${originalDecimalPart}`;
  }

  return {
    displayValue, // formatted with commas
    cleanValue: `${integerPart}${decimalPart ? `.${decimalPart}` : ''}`, // numeric string
  };
}

/**
 * Formats amount with up to 3 decimal places
 * Similar to amountBeautify but supports 3 decimal digits
 */
export function amountBeautifyWithThreeDecimals(
  rawValue: string,
  style: 'intl' | 'bd' = 'intl'
) {
  // Remove all invalid characters except digits and dot
  let cleanedValue = rawValue.replace(/[^0-9.]/g, '');

  // Only allow one dot
  const firstDotIndex = cleanedValue.indexOf('.');
  if (firstDotIndex !== -1) {
    cleanedValue =
      cleanedValue.slice(0, firstDotIndex + 1) +
      cleanedValue.slice(firstDotIndex + 1).replace(/\./g, '');
  }

  // Split into integer and decimal parts
  const parts = cleanedValue.split('.');
  const integerPart = parts[0];
  let decimalPart = parts[1] ? parts[1].slice(0, 3) : ''; // up to 3 decimals
  // Remove unnecessary trailing zeros
  decimalPart = decimalPart.replace(/0+$/, '');
  // Format integer part
  let formattedIntegerPart = '';
  if (style === 'intl') {
    formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else if (integerPart.length > 3) {
    const lastThree = integerPart.slice(-3);
    const other = integerPart.slice(0, -3);
    formattedIntegerPart = `${other.replace(/\B(?=(\d{2})+(?!\d))/g, ',')},${lastThree}`;
  } else {
    formattedIntegerPart = integerPart;
  }

  // Combine display value
  let displayValue = formattedIntegerPart;
  if (decimalPart) {
    displayValue += `.${decimalPart}`;
  } else if (rawValue.endsWith('.')) {
    displayValue += '.'; // preserve trailing dot
  }

  return {
    displayValue, // formatted with commas
    cleanValue: `${integerPart}${decimalPart ? `.${decimalPart}` : ''}`, // numeric string
  };
}

/**
 * Formats amount with up to 4 decimal places
 * Similar to amountBeautify but supports 4 decimal digits
 */
export function amountBeautifyWithFourDecimals(
  rawValue: string,
  style: 'intl' | 'bd' = 'intl'
) {
  // Remove all invalid characters except digits and dot
  let cleanedValue = rawValue.replace(/[^0-9.]/g, '');

  // Only allow one dot
  const firstDotIndex = cleanedValue.indexOf('.');
  if (firstDotIndex !== -1) {
    cleanedValue =
      cleanedValue.slice(0, firstDotIndex + 1) +
      cleanedValue.slice(firstDotIndex + 1).replace(/\./g, '');
  }

  // Split into integer and decimal parts
  const parts = cleanedValue.split('.');
  const integerPart = parts[0];
  let decimalPart = parts[1] ? parts[1].slice(0, 4) : ''; // up to 4 decimals
  const originalDecimalPart = decimalPart;
  // Check if rawValue ends with trailing zeros after decimal point (e.g., "4.0", "4.00")
  // This indicates the user might still be typing, so preserve the zeros
  const hasTrailingZerosOnly = rawValue.includes('.') && /\.0+$/.test(rawValue);
  // Remove unnecessary trailing zeros, but preserve them if user is actively typing (ends with .0)
  if (!hasTrailingZerosOnly) {
    // Only remove trailing zeros if the decimal part is not all zeros
    // This preserves "06" as "06" (the zero is not trailing, it's in the middle)
    if (decimalPart && !/^0+$/.test(decimalPart)) {
      decimalPart = decimalPart.replace(/0+$/, '');
    } else if (decimalPart && /^0+$/.test(decimalPart)) {
      // If decimal part is all zeros and user isn't typing, remove them
      decimalPart = '';
    }
  }
  // Format integer part
  let formattedIntegerPart = '';
  if (style === 'intl') {
    formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else if (integerPart.length > 3) {
    const lastThree = integerPart.slice(-3);
    const other = integerPart.slice(0, -3);
    formattedIntegerPart = `${other.replace(/\B(?=(\d{2})+(?!\d))/g, ',')},${lastThree}`;
  } else {
    formattedIntegerPart = integerPart;
  }

  // Combine display value
  let displayValue = formattedIntegerPart;
  if (decimalPart) {
    displayValue += `.${decimalPart}`;
  } else if (rawValue.endsWith('.')) {
    displayValue += '.'; // preserve trailing dot
  } else if (hasTrailingZerosOnly && originalDecimalPart) {
    // Preserve trailing zeros if they exist in the original input
    displayValue += `.${originalDecimalPart}`;
  }

  return {
    displayValue, // formatted with commas
    cleanValue: `${integerPart}${decimalPart ? `.${decimalPart}` : ''}`, // numeric string
  };
}

/**
 * Formats an income range string (e.g., "1000-5000" -> "1,000-5,000")
 */
export function formatIncomeRange(rawValue: string | null | undefined): {
  displayValue: string;
  cleanValue: string;
} {
  if (!rawValue) return { displayValue: '', cleanValue: '' };

  const hasHyphen = rawValue.includes('-');
  const formatNumber = (num: string) => num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
  if (!hasHyphen) {
    const cleaned = rawValue.replace(/[^0-9]/g, '');
    return cleaned ? { displayValue: formatNumber(cleaned), cleanValue: cleaned } : { displayValue: '', cleanValue: '' };
  }

  const parts = rawValue.split('-');
  const cleanedMin = (parts[0] || '').replace(/[^0-9]/g, '');
  const cleanedMax = (parts[1] || '').replace(/[^0-9]/g, '');
  
  if (!cleanedMin && !cleanedMax) return { displayValue: '', cleanValue: '' };

  const formattedMin = cleanedMin ? formatNumber(cleanedMin) : '';
  const formattedMax = cleanedMax ? formatNumber(cleanedMax) : '';
  const showHyphen = hasHyphen && (cleanedMin || cleanedMax);
  
  return {
    displayValue: showHyphen ? `${formattedMin}-${formattedMax}` : formattedMin || formattedMax,
    cleanValue: showHyphen ? `${cleanedMin}-${cleanedMax}` : cleanedMin || cleanedMax,
  };
}