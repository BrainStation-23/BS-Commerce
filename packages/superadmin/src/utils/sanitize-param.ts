/**
 * Sanitizes a URL parameter value by replacing characters that could cause issues
 * when used in URLs or query strings. Primarily converts ampersands (&) to plus signs (+)
 * to prevent query string parsing issues.
 *
 * @param paramValue - The parameter value to sanitize
 * @returns The sanitized parameter value
 */
export const sanitizeParamValue = (paramValue: string | null | undefined): string => {
  // Return empty string for null or undefined values
  if (paramValue === null || paramValue === undefined) return '';

  // Convert to string if not already a string
  const value = String(paramValue);

  // Replace ampersands with plus signs
  return value.replace(/&/g, '+');
};

/**
 * Enhanced version of sanitizeParamValue that handles a wider range of special characters
 * that may cause issues in URL parameters. This can be useful for complex parameter values.
 *
 * @param paramValue - The parameter value to sanitize
 * @param encodeSpaces - Whether to replace spaces with plus signs (default: true)
 * @returns The sanitized parameter value
 */
export const sanitizeParamValueEnhanced = (
  paramValue: string | null | undefined,
  encodeSpaces = true
): string => {
  // Return empty string for null or undefined values
  if (paramValue === null || paramValue === undefined) return '';

  // Convert to string if not already a string
  const value = String(paramValue);

  // First replace ampersands for consistency with the simple version
  let sanitized = value.replace(/&/g, '+');

  // Replace spaces if requested
  if (encodeSpaces) {
    sanitized = sanitized.replace(/\s/g, '+');
  }

  // Optional: Replace other potentially problematic characters
  sanitized = sanitized
    .replace(/[#%{}|\\^~[\]`<>]/g, '') // Remove characters that might break URLs
    .replace(/[?=]/g, '-'); // Replace query string control characters

  return sanitized;
};
