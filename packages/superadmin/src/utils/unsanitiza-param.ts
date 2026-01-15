/**
 * Reverses the sanitization performed by sanitizeParamValue, converting
 * plus signs (+) back to ampersands (&).
 *
 * @param paramValue - The sanitized parameter value to convert back
 * @returns The original parameter value with ampersands restored
 */
export const unSanitizeParamValue = (paramValue: string | null | undefined): string => {
  // Return empty string for null or undefined values
  if (paramValue === null || paramValue === undefined) return '';

  // Convert to string if not already a string
  const value = String(paramValue);

  // Replace plus signs with ampersands
  return value.replace(/\+/g, '&');
};

/**
 * Enhanced version that reverses the sanitization performed by sanitizeParamValueEnhanced.
 * This attempts to restore the original string, but some transformations may not be reversible.
 *
 * @param paramValue - The sanitized parameter value to convert back
 * @param decodeSpaces - Whether to replace plus signs with spaces (default: true)
 * @returns The parameter value with transformations reversed where possible
 */
export const unSanitizeParamValueEnhanced = (
  paramValue: string | null | undefined,
  decodeSpaces = true
): string => {
  // Return empty string for null or undefined values
  if (paramValue === null || paramValue === undefined) return '';

  // Convert to string if not already a string
  const value = String(paramValue);

  // Start by replacing plus signs with ampersands to maintain backwards compatibility
  let unsanitized = value.replace(/\+/g, '&');

  // If spaces were encoded as plus signs, restore them
  // Note: This may conflict with the ampersand replacement above if both are used
  if (decodeSpaces) {
    // Since we've already replaced + with &, we need to use a different approach for spaces
    // This assumes any & that was meant to be a space would be followed by a non-query-string character
    // This is an imperfect solution for demonstration purposes
    unsanitized = unsanitized.replace(/&(?!\w+=)/g, ' ');
  }

  return unsanitized;
};
