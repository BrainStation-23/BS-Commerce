/* eslint-disable no-continue */

/**
 * Deep object comparison utility with empty-to-null conversion support
 *
 * @example
 * // Basic usage
 * const obj1 = { name: 'John', age: 30, comment: '' };
 * const obj2 = { name: 'John', age: 31, comment: '   ' };
 * const changes = compareObjects(obj1, obj2);
 * // Result: { age: 31, comment: '   ' }
 *
 * @example
 * // With empty-to-null conversion
 * const obj1 = { name: 'John', age: 30, comment: 'old comment' };
 * const obj2 = { name: 'John', age: 31, comment: '' };
 * const emptyFields = ['comment', 'notes', 'description'];
 * const changes = compareObjects(obj1, obj2, new Set(), emptyFields);
 * // Result: { age: 31, comment: null }
 *
 * @example
 * // Processing an object to convert empty values to null
 * const data = { name: 'John', comment: '', notes: '   ', description: [] };
 * const emptyFields = ['comment', 'notes', 'description'];
 * const processed = processEmptyToNull(data, emptyFields);
 * // Result: { name: 'John', comment: null, notes: null, description: null }
 */
type Mismatches = Record<string, any>;

/**
 * Compare two objects and return the differences
 * @param obj1 - Original object
 * @param obj2 - New object to compare against
 * @param visited - Set to prevent circular references
 * @param emptyToNullProperties - Array of property names that should be set to null if they are empty
 * @returns Object containing only the changed properties
 */
export function compareObjects(
  obj1: any,
  obj2: any,
  visited: Set<any> = new Set(),
  emptyToNullProperties: string[] = []
): Mismatches {
  const mismatches: Mismatches = {};

  // Prevent circular references
  if (visited.has(obj1) || visited.has(obj2)) {
    return {};
  }

  visited.add(obj1);
  visited.add(obj2);

  Object.keys(obj2).forEach((key) => {
    if (Object.hasOwn(obj2, key)) {
      const val1 = obj1[key];
      let val2 = obj2[key];

      // Check if this property should be nullified when empty
      if (emptyToNullProperties.includes(key) && isEmpty(val2)) {
        val2 = null;
      }

      if (Array.isArray(val1) && Array.isArray(val2)) {
        const arrayMismatches = compareArrays(val1, val2, visited, emptyToNullProperties);
        if (Array.isArray(arrayMismatches) || Object.keys(arrayMismatches).length > 0) {
          mismatches[key] = arrayMismatches;
        }
      } else if (isObject(val1) && isObject(val2)) {
        const nestedMismatches = compareObjects(val1, val2, visited, emptyToNullProperties);
        if (Object.keys(nestedMismatches).length > 0) {
          mismatches[key] = nestedMismatches;
        }
      } else if (val1 !== val2) {
        if (Number.isNaN(val1) && Number.isNaN(val2)) {
          // Treat NaN as equal
        } else if (val1 instanceof Date && val2 instanceof Date) {
          if (val1.getTime() !== val2.getTime()) {
            mismatches[key] = val2;
          }
        } else if (val1 instanceof RegExp && val2 instanceof RegExp) {
          if (val1.toString() !== val2.toString()) {
            mismatches[key] = val2;
          }
        } else if (
          typeof val1 !== 'function' ||
          typeof val2 !== 'function' ||
          val1.toString() !== val2.toString()
        ) {
          mismatches[key] = val2;
        }
      }
    } else {
      let newValue = obj2[key];
      // Check if this property should be nullified when empty
      if (emptyToNullProperties.includes(key) && isEmpty(newValue)) {
        newValue = null;
      }
      mismatches[key] = newValue; // New key in obj2
    }
  });

  Object.keys(obj1).forEach((key) => {
    if (Object.hasOwn(obj1, key) && !Object.hasOwn(obj2, key)) {
      mismatches[key] = undefined; // Key removed in obj2
    }
  });

  return mismatches;
}

export function compareArrays(
  arr1: any[],
  arr2: any[],
  visited: Set<any>,
  emptyToNullProperties: string[] = []
): Mismatches | any[] {
  const maxLength = Math.max(arr1.length, arr2.length);

  let hasMismatch = false;

  for (let i = 0; i < maxLength; i += 1) {
    const val1 = arr1[i];
    const val2 = arr2[i];

    if (Array.isArray(val1) && Array.isArray(val2)) {
      const arrayMismatches = compareArrays(val1, val2, visited, emptyToNullProperties);
      if (Array.isArray(arrayMismatches) || Object.keys(arrayMismatches).length > 0) {
        hasMismatch = true;
        break;
      }
    } else if (isObject(val1) && isObject(val2)) {
      const nestedMismatches = compareObjects(val1, val2, visited, emptyToNullProperties);
      if (Object.keys(nestedMismatches).length > 0) {
        hasMismatch = true;
        break;
      }
    } else if (val1 !== val2 && !(Number.isNaN(val1) && Number.isNaN(val2))) {
      hasMismatch = true;
      break;
    }
  }

  // If any mismatch found in array of objects or values
  if (hasMismatch || arr1.length !== arr2.length) {
    return arr2;
  }

  return {};
}

export function isObject(value: any): value is { [key: string]: any } {
  return value !== null && typeof value === 'object';
}

/**
 * Check if a value is considered empty based on our implementation rules
 * @param value - Value to check
 * @returns true if the value is considered empty
 */
export function isEmpty(value: any): boolean {
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === 'string') {
    return value.trim() === '';
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  if (isObject(value)) {
    return Object.keys(value).length === 0;
  }

  // For numbers, consider 0 as not empty (only NaN might be considered empty)
  if (typeof value === 'number') {
    return Number.isNaN(value);
  }

  return false;
}

/**
 * Process an object and convert specified empty properties to null
 * @param obj - Object to process
 * @param emptyToNullProperties - Array of property names that should be set to null if they are empty
 * @returns Processed object with empty properties converted to null
 */
export function processEmptyToNull(obj: any, emptyToNullProperties: string[] = []): any {
  if (!obj || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => processEmptyToNull(item, emptyToNullProperties));
  }

  const processed: any = {};

  Object.keys(obj).forEach((key) => {
    const value = obj[key];

    if (emptyToNullProperties.includes(key) && isEmpty(value)) {
      processed[key] = null;
    } else if (isObject(value)) {
      processed[key] = processEmptyToNull(value, emptyToNullProperties);
    } else if (Array.isArray(value)) {
      processed[key] = value.map((item) => processEmptyToNull(item, emptyToNullProperties));
    } else {
      processed[key] = value;
    }
  });

  return processed;
}
