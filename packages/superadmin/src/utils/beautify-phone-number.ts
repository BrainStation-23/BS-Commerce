/**
 * Country code mappings to their respective dialing codes
 */
interface CountryDialingCode {
  code: string; // Dialing code (e.g. '+880')
  format: string; // Format pattern (e.g. 'xxx xxx xxxx')
  length: number; // Expected length without country code
}

const COUNTRY_CODES: Record<string, CountryDialingCode> = {
  BD: { code: '+880', format: 'xxx xxx xxxx', length: 10 },
  IN: { code: '+91', format: 'xxxxx xxxxx', length: 10 },
  US: { code: '+1', format: 'xxx-xxx-xxxx', length: 10 },
  UK: { code: '+44', format: 'xxxx xxxxxx', length: 10 },
  // Add more countries as needed
};

/**
 * Formats a phone number according to the country's standard format
 * @param phone - Phone number to format
 * @param countryCode - ISO country code (e.g. 'BD', 'US')
 * @param formatPhoneNumber - Whether to format the number according to country's format (default: false)
 * @returns Formatted phone number with country code prefix
 */
export const beautifyPhoneNumber = (
  phone: string,
  countryCode?: string,
  formatPhoneNumber: boolean = false
): string => {
  if (!phone) return '';

  // Strip any non-digit characters from the phone number
  const digitsOnly = phone.replace(/\D/g, '');

  if (!countryCode) return phone;

  const countryInfo = COUNTRY_CODES[countryCode];
  if (!countryInfo) return phone; // Return original if country not supported

  // Handle Bangladesh's special case with different prefix lengths
  if (countryCode === 'BD' && digitsOnly.length === 11 && digitsOnly.startsWith('0')) {
    // Remove leading 0 for BD numbers that include it
    const phoneWithoutLeadingZero = digitsOnly.substring(1);
    return formatPhoneNumber
      ? formatNumberByCountry(phoneWithoutLeadingZero, countryInfo)
      : `${countryInfo.code}${phoneWithoutLeadingZero}`;
  }

  // For other countries, just add the dialing code
  return formatPhoneNumber
    ? formatNumberByCountry(digitsOnly, countryInfo)
    : `${countryInfo.code}${digitsOnly}`;
};

/**
 * Helper function to format a phone number according to country-specific format
 */
const formatNumberByCountry = (digitsOnly: string, countryInfo: CountryDialingCode): string => {
  // Simple formatting implementation - can be expanded for more complex formats

  // Simple formatting example - insert spaces according to format pattern
  // This is a basic implementation that could be enhanced with proper regex patterns
  if (countryInfo.code === '+880') {
    // Bangladesh
    if (digitsOnly.length === 10) {
      return `${countryInfo.code} ${digitsOnly.substring(0, 3)} ${digitsOnly.substring(
        3,
        6
      )} ${digitsOnly.substring(6)}`;
    }
  } else if (countryInfo.code === '+1') {
    // US
    if (digitsOnly.length === 10) {
      return `${countryInfo.code} ${digitsOnly.substring(0, 3)}-${digitsOnly.substring(
        3,
        6
      )}-${digitsOnly.substring(6)}`;
    }
  }

  // Default formatting if no specific rule
  return `${countryInfo.code} ${digitsOnly}`;
};
