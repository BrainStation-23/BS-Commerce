export type AnyObject = { [key: string | symbol]: any };

export interface RemoveEmptyValuesOptions {
  keysToRemove?: string[];
  keysToPreserveEmpty?: string[];
  preserveEmptyArrays?: boolean;
  preserveEmptyObjects?: boolean;
  seen?: WeakSet<object>;
  depthLimit?: number;
}

/**
 * Check if a value is "empty"
 */
const isEmpty = (value: any): boolean => {
  if (value === null || value === undefined) return true;

  if (typeof value === 'string' && value.trim() === '') return true;

  if (typeof value === 'number' && Number.isNaN(value)) return true;

  if (Array.isArray(value)) return value.length === 0;

  if (isPlainObject(value)) return Object.keys(value).length === 0;

  return false;
};

/**
 * Is plain object
 */
const isPlainObject = (value: any): boolean =>
  Object.prototype.toString.call(value) === '[object Object]';

/**
 * Remove empty values, loop-free version with support for preserving specific keys
 */
export const removeEmptyValues = (obj: any, options: RemoveEmptyValuesOptions = {}): any => {
  const {
    keysToRemove = [],
    keysToPreserveEmpty = [],
    preserveEmptyArrays = false,
    preserveEmptyObjects = false,
    seen = new WeakSet<object>(),
    depthLimit = 100,
  } = options;

  if (depthLimit <= 0) {
    console.warn('Depth limit reached');
    return obj;
  }

  if (obj === null || typeof obj !== 'object') {
    return isEmpty(obj) ? undefined : obj;
  }

  if (seen.has(obj)) {
    return obj; // circular ref detected
  }
  seen.add(obj);

  if (obj instanceof Date) {
    return Number.isNaN(obj.getTime()) ? undefined : obj;
  }

  if (obj instanceof RegExp || obj instanceof Error) {
    return obj;
  }

  if (obj instanceof Map) {
    const cleanedMap = new Map();
    Array.from(obj.entries()).forEach(([key, value]) => {
      const cleanedValue = removeEmptyValues(value, {
        keysToRemove,
        keysToPreserveEmpty,
        preserveEmptyArrays,
        preserveEmptyObjects,
        seen,
        depthLimit: depthLimit - 1,
      });

      if (cleanedValue !== undefined) {
        cleanedMap.set(key, cleanedValue);
      } else if (keysToPreserveEmpty.includes(String(key))) {
        cleanedMap.set(key, value); // preserve as-is
      }
    });
    return cleanedMap.size === 0 && !preserveEmptyObjects ? undefined : cleanedMap;
  }

  if (obj instanceof Set) {
    const cleanedSet = new Set();
    Array.from(obj).forEach((value) => {
      const cleanedValue = removeEmptyValues(value, {
        keysToRemove,
        keysToPreserveEmpty,
        preserveEmptyArrays,
        preserveEmptyObjects,
        seen,
        depthLimit: depthLimit - 1,
      });
      if (cleanedValue !== undefined) {
        cleanedSet.add(cleanedValue);
      }
    });
    return cleanedSet.size === 0 && !preserveEmptyArrays ? undefined : cleanedSet;
  }

  if (Array.isArray(obj)) {
    const cleanedArray = obj
      .map((item) =>
        removeEmptyValues(item, {
          keysToRemove,
          keysToPreserveEmpty,
          preserveEmptyArrays,
          preserveEmptyObjects,
          seen,
          depthLimit: depthLimit - 1,
        })
      )
      .filter((item) => item !== undefined);
    return cleanedArray.length === 0 && !preserveEmptyArrays ? undefined : cleanedArray;
  }

  // Handle plain object with string + symbol keys
  const cleanedObj: AnyObject = {};

  [...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)].forEach((key) => {
    if (typeof key === 'string' && keysToRemove.includes(key)) return;

    const originalValue = obj[key];

    // 🔑 Preserve specific keys even if empty
    if (typeof key === 'string' && keysToPreserveEmpty.includes(key)) {
      cleanedObj[key] = originalValue;
      return;
    }

    const cleanedValue = removeEmptyValues(originalValue, {
      keysToRemove,
      keysToPreserveEmpty,
      preserveEmptyArrays,
      preserveEmptyObjects,
      seen,
      depthLimit: depthLimit - 1,
    });

    if (cleanedValue !== undefined) {
      cleanedObj[key] = cleanedValue;
    }
  });

  return Object.keys(cleanedObj).length === 0 &&
    Object.getOwnPropertySymbols(cleanedObj).length === 0 &&
    !preserveEmptyObjects
    ? undefined
    : cleanedObj;
};

/**
 * Removes empty values from an object while preserving the root object structure
 */
export const removeEmptyValuesFromObject = (
  obj: AnyObject,
  options: RemoveEmptyValuesOptions = {}
): AnyObject => {
  if (!isPlainObject(obj)) {
    return {};
  }

  const result = removeEmptyValues(obj, options);
  return isPlainObject(result) ? result : {};
};
