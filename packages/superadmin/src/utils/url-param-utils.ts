/**
 * Utility functions for handling URL parameters.
 * This file provides comprehensive tools for encoding, decoding, sanitizing,
 * and manipulating URL parameters safely.
 */

/**
 * Safely encodes a parameter value for use in URLs.
 * Uses encodeURIComponent but with a few adjustments:
 * - Replaces spaces with + (optional)
 * - Handles null/undefined values
 *
 * @param value - The value to encode
 * @param encodeSpacesAsPlus - Whether to encode spaces as + instead of %20 (default: false)
 * @returns The encoded string
 */
export const encodeParam = (
  value: string | number | boolean | null | undefined,
  encodeSpacesAsPlus = false
): string => {
  if (value === null || value === undefined) return '';

  const encoded = encodeURIComponent(String(value));

  return encodeSpacesAsPlus ? encoded.replace(/%20/g, '+') : encoded;
};

/**
 * Decodes a URL parameter value.
 *
 * @param value - The encoded value to decode
 * @param convertPlusToSpace - Whether to convert + to spaces before decoding (default: true)
 * @returns The decoded string
 */
export const decodeParam = (
  value: string | null | undefined,
  convertPlusToSpace = true
): string => {
  if (value === null || value === undefined) return '';

  // Convert + to space if needed (URLSearchParams does this automatically)
  const prepared = convertPlusToSpace ? value.replace(/\+/g, ' ') : value;

  return decodeURIComponent(prepared);
};

/**
 * Legacy sanitization function - converts ampersands to plus signs.
 * Maintained for backwards compatibility.
 *
 * @param paramValue - The parameter value to sanitize
 * @returns The sanitized parameter value
 * @deprecated Use encodeParam instead for new code
 */
export const sanitizeParamValue = (paramValue: string | null | undefined): string => {
  if (paramValue === null || paramValue === undefined) return '';
  return String(paramValue).replace(/&/g, '+');
};

/**
 * Legacy unsanitization function - converts plus signs back to ampersands.
 * Maintained for backwards compatibility.
 *
 * @param paramValue - The sanitized parameter value
 * @returns The original parameter value
 * @deprecated Use decodeParam instead for new code
 */
export const unSanitizeParamValue = (paramValue: string | null | undefined): string => {
  if (paramValue === null || paramValue === undefined) return '';
  return String(paramValue).replace(/\+/g, '&');
};

/**
 * Creates URL search parameters (query string) from an object.
 * Handles null and undefined values properly by excluding them.
 *
 * @param params - Object with parameter keys and values
 * @returns A properly formatted query string (including the ? prefix)
 */
export const createQueryString = (params: Record<string, any>): string => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    // Skip null, undefined and empty strings
    if (value !== null && value !== undefined && value !== '') {
      searchParams.append(key, String(value));
    }
  });

  const queryString = searchParams.toString();
  return queryString ? `?${queryString}` : '';
};

/**
 * Parses a URL query string into an object.
 *
 * @param queryString - The query string to parse (can include the ? prefix)
 * @returns An object with the parsed parameters
 */
export const parseQueryString = (queryString: string): Record<string, string> => {
  // Remove leading ? if present
  const normalizedQuery = queryString.startsWith('?') ? queryString.substring(1) : queryString;

  const params: Record<string, string> = {};
  const searchParams = new URLSearchParams(normalizedQuery);

  searchParams.forEach((value, key) => {
    params[key] = value;
  });

  return params;
};
