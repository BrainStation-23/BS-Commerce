/**
 * Utility to extract validation errors for hidden/conditionally visible fields
 * This allows forms to display validation errors even when fields are not visible in the UI
 */

export type FieldVisibilityRule = (formValues: Record<string, any>) => boolean;

export type FieldVisibilityConfig = {
  [fieldPath: string]: FieldVisibilityRule | boolean;
};

/**
 * Extracts validation errors for fields that are currently hidden based on visibility rules
 *
 * @param errors - React Hook Form errors object
 * @param visibilityConfig - Configuration object mapping field paths to visibility rules
 * @param formValues - Current form values to evaluate visibility rules
 * @returns Array of error messages for hidden fields
 */
export function extractHiddenFieldErrors(
  errors: any,
  visibilityConfig: FieldVisibilityConfig,
  formValues: Record<string, any>
): string[] {
  if (!errors || Object.keys(errors).length === 0) return [];

  const hiddenErrors: string[] = [];
  const visibleFields = new Set<string>();
  const hiddenFields = new Set<string>(); // Track explicitly hidden fields

  // Debug logging (can be removed later)
  //   if (process.env.NODE_ENV === 'development') {
  //     console.log('🔍 extractHiddenFieldErrors - errors:', errors);
  //     console.log('🔍 extractHiddenFieldErrors - formValues:', formValues);
  //   }

  // Determine which fields are currently visible/hidden based on visibility rules
  Object.entries(visibilityConfig).forEach(([fieldPath, rule]) => {
    let isVisible = false;

    if (typeof rule === 'boolean') {
      isVisible = rule;
    } else if (typeof rule === 'function') {
      try {
        isVisible = rule(formValues);
      } catch (error) {
        // Silently handle errors in visibility rules
        console.warn(`Error evaluating visibility rule for ${fieldPath}:`, error);
        isVisible = false; // Default to hidden if rule evaluation fails
      }
    }

    if (isVisible) {
      visibleFields.add(fieldPath);
      // Also add parent paths for nested fields
      const parts = fieldPath.split('.');
      for (let i = 1; i < parts.length; i += 1) {
        visibleFields.add(parts.slice(0, i).join('.'));
      }
    } else {
      // Field is hidden in UI - mark it and its children as hidden
      hiddenFields.add(fieldPath);
      // Also add parent paths for nested fields
      const parts = fieldPath.split('.');
      for (let i = 1; i < parts.length; i += 1) {
        hiddenFields.add(parts.slice(0, i).join('.'));
      }
    }
  });

  // Helper function to check if a field path is hidden (not visible in UI)
  const isFieldHidden = (fieldPath: string): boolean => {
    // Check if explicitly marked as hidden
    if (hiddenFields.has(fieldPath)) return true;

    // Check if any parent path is hidden (if parent is hidden, child is also hidden)
    const pathParts = fieldPath.split('.');
    for (let i = pathParts.length - 1; i >= 1; i -= 1) {
      const parentPath = pathParts.slice(0, i).join('.');
      if (parentPath && hiddenFields.has(parentPath)) {
        return true;
      }
    }

    // Check if explicitly marked as visible
    if (visibleFields.has(fieldPath)) return false;

    // Check if any parent path is visible (if parent is visible, child is also visible)
    for (let i = pathParts.length - 1; i >= 1; i -= 1) {
      const parentPath = pathParts.slice(0, i).join('.');
      if (parentPath && visibleFields.has(parentPath)) {
        return false;
      }
    }

    // Check if the base key (last part) is visible/hidden (for top-level fields)
    if (pathParts.length === 1) {
      const baseKey = pathParts[0];
      if (hiddenFields.has(baseKey)) return true;
      if (visibleFields.has(baseKey)) return false;
    }

    // If field is not in config at all, consider it visible (not hidden)
    // We only show errors for fields that are explicitly configured as hidden
    return false;
  };

  // Extract errors for fields that are not visible
  const extractNestedErrors = (errorObj: any, prefix = ''): void => {
    if (!errorObj || typeof errorObj !== 'object') return;

    // Handle arrays (e.g., nominees array)
    if (Array.isArray(errorObj)) {
      errorObj.forEach((item, index) => {
        if (item && typeof item === 'object') {
          extractNestedErrors(item, `${prefix}[${index}]`);
        }
      });
      return;
    }

    Object.keys(errorObj).forEach((key) => {
      const fieldPath = prefix ? `${prefix}.${key}` : key;
      const error = errorObj[key];

      if (error?.message && typeof error.message === 'string') {
        // Check if this field is hidden (not visible in UI)
        if (isFieldHidden(fieldPath)) {
          hiddenErrors.push(error.message);
        }
      } else if (error && typeof error === 'object') {
        // Recursively check nested errors (including arrays)
        extractNestedErrors(error, fieldPath);
      }
    });
  };

  extractNestedErrors(errors);

  // Debug logging (can be removed later)
  //   if (process.env.NODE_ENV === 'development') {
  //     console.log('🔍 extractHiddenFieldErrors - visibleFields:', Array.from(visibleFields));
  //     console.log('🔍 extractHiddenFieldErrors - hiddenFields:', Array.from(hiddenFields));
  //     console.log('🔍 extractHiddenFieldErrors - hiddenErrors:', hiddenErrors);
  //   }

  return hiddenErrors;
}
