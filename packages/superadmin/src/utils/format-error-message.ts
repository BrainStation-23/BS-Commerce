/**
 * Checks if a value is a plain object (not an array, date, etc.)
 */
const isPlainObject = (value: any): boolean =>
  Object.prototype.toString.call(value) === '[object Object]';

/**
 * Extracts error messages from API response objects
 */
const extractApiErrorMessages = (error: any): string[] => {
  const messages: string[] = [];

  // Handle common API response patterns
  if (error?.response?.data) {
    const { data } = error.response;

    // Pattern 1: { message: "Error message" } - string message
    if (data.message && typeof data.message === 'string') {
      messages.push(data.message);
    }

    // Pattern 2: { message: { field: "Error message" } } - validation errors under message
    if (data.message && isPlainObject(data.message)) {
      Object.values(data.message).forEach((fieldError) => {
        if (typeof fieldError === 'string') {
          messages.push(fieldError);
        } else if (Array.isArray(fieldError)) {
          fieldError.forEach((msg) => {
            if (typeof msg === 'string') {
              messages.push(msg);
            }
          });
        }
      });
    }

    // Pattern 3: { error: "Error message" }
    if (data.error && typeof data.error === 'string') {
      messages.push(data.error);
    }

    // Pattern 4: { errors: { field: "Error message" } } - validation errors
    if (data.errors && isPlainObject(data.errors)) {
      Object.values(data.errors).forEach((fieldError) => {
        if (typeof fieldError === 'string') {
          messages.push(fieldError);
        } else if (Array.isArray(fieldError)) {
          fieldError.forEach((msg) => {
            if (typeof msg === 'string') {
              messages.push(msg);
            }
          });
        }
      });
    }

    // Pattern 5: { errors: ["Error 1", "Error 2"] } - array of errors
    if (data.errors && Array.isArray(data.errors)) {
      data.errors.forEach((errorMsg: any) => {
        if (typeof errorMsg === 'string') {
          messages.push(errorMsg);
        } else if (errorMsg?.message) {
          messages.push(errorMsg.message);
        }
      });
    }

    // Pattern 6: { non_field_errors: ["Error"] } - Django validation
    if (data.non_field_errors && Array.isArray(data.non_field_errors)) {
      data.non_field_errors.forEach((msg: any) => {
        if (typeof msg === 'string') {
          messages.push(msg);
        }
      });
    }
  }

  // Handle direct error message
  if (error?.message && typeof error.message === 'string') {
    messages.push(error.message);
  }

  return messages;
};

/**
 * Formats a mixed error message.
 *
 * @param error - The error which can be a string, plain object, API response, or nullish.
 * @param options - Options to customize output format.
 * @returns Formatted string or array of strings.
 */
export const formatErrorMessage = (
  error: any,
  options: {
    asArray?: boolean; // true => return array of strings
    separator?: string; // e.g., ', ' | '\n' | '; '
    fallbackMessage?: string; // fallback message if no errors found
  } = {}
): string | string[] => {
  const {
    asArray = false,
    separator = ', ',
    fallbackMessage = 'Something went wrong while processing your request',
  } = options;

  if (error === null || error === undefined) {
    return asArray ? [] : '';
  }

  if (typeof error === 'string') {
    return asArray ? [error.trim()] : error.trim();
  }

  // Handle API response objects (axios errors)
  if (error?.response || error?.message) {
    const apiMessages = extractApiErrorMessages(error);
    if (apiMessages.length > 0) {
      return asArray ? apiMessages : apiMessages.join(separator);
    }
  }

  // Handle plain objects (validation errors, etc.)
  if (isPlainObject(error)) {
    const messages: string[] = [];
    Object.entries(error).forEach(([key, value]) => {
      if (typeof value === 'string' && value.trim() !== '') {
        messages.push(`${key}: ${value.trim()}`);
      } else if (Array.isArray(value)) {
        value.forEach((item) => {
          if (typeof item === 'string' && item.trim() !== '') {
            messages.push(`${key}: ${item.trim()}`);
          }
        });
      }
    });

    if (messages.length > 0) {
      return asArray ? messages : messages.join(separator);
    }
  }

  // Handle arrays of error messages
  if (Array.isArray(error)) {
    const messages: string[] = [];

    error.forEach((item) => {
      if (typeof item === 'string' && item.trim() !== '') {
        messages.push(item.trim());
      } else if (item?.message) {
        messages.push(item.message);
      }
    });

    if (messages.length > 0) {
      return asArray ? messages : messages.join(separator);
    }
  }

  // Fallback: return stringified version or fallback message
  const fallback = error?.toString?.() || fallbackMessage;
  return asArray ? [fallback] : fallback;
};
