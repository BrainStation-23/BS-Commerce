/**
 * Combines first name and last name into a full name string
 * @param firstName - Optional first name of the user
 * @param lastName - Optional last name of the user
 * @param defaultText - Optional default text to return if both names are undefined
 * @returns Full name string if either name is provided, default text if both are undefined
 */
export const getFullName = (firstName?: string, lastName?: string, defaultText?: string) => {
  if (!firstName && !lastName) return defaultText;
  if (!firstName) return lastName;
  if (!lastName) return firstName;
  return `${firstName} ${lastName}`;
};

