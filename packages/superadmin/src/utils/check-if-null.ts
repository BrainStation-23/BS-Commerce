/* eslint-disable no-else-return */
/**
 * Checks if a value is empty and returns a fallback value if it is.
 *
 * Handles null, undefined, empty strings, empty arrays, empty objects.
 *
 * @param data - The value to check
 * @param fallback - Optional fallback value to return if data is empty (default: '')
 * @returns The original data if not empty, otherwise the fallback value
 */
export const checkIfNull = <T, F = string>(data: T, fallback: F = '' as unknown as F): T | F => {
  // Check for null or undefined
  if (data === null || data === undefined) {
    return fallback;
  }

  // Handle arrays
  if (Array.isArray(data) && data.length === 0) {
    return fallback;
  }

  // Handle strings
  if (typeof data === 'string' && data.trim() === '') {
    return fallback;
  }

  // Handle objects
  if (
    data !== null &&
    typeof data === 'object' &&
    !Array.isArray(data) &&
    Object.keys(data).length === 0
  ) {
    return fallback;
  }

  // Handle other cases with length property
  if (
    data !== null &&
    typeof data === 'object' &&
    'length' in data &&
    typeof data.length === 'number' &&
    data.length === 0
  ) {
    return fallback;
  }

  return data;
};

/**
 * Alias function that explicitly states the intent to handle empty values
 * @see checkIfNull
 */
export const getValueOrDefault = checkIfNull;
