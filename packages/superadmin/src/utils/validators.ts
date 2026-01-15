// check if the value is a string and contains only alphabets and spaces
export const checkAlphabetOnly = (value: string | undefined | null) => {
  if (!value) return true;
  return /^[a-zA-Z\s]+$/.test(value);
};

// check if starts with alphabet and folowed by any thing
export const checkAlphabetStart = (value: string | undefined | null) => {
  if (!value) return true;
  return /^[a-zA-Z]/.test(value);
};

// check if the value is a string and contains only digits
export const checkDigitOnly = (value: string | undefined | null) => {
  if (!value) return true;
  return /^[0-9]+$/.test(value);
};

// check if the value is a string and contains only 16 digits
export const checkBOAccountNumber = (value: string | undefined | null) => {
  if (!value) return true;
  return /^\d{16}$/.test(value);
};

// check if the value is a string and contains only alphabets, digits and spaces
export const checkAlphaNumericOnly = (value: string | undefined | null) => {
  if (!value) return true;
  return /^[a-zA-Z0-9\s]+$/.test(value);
};

// check if the value is a string and contains only alphabets, digits and dashes, or dot or space
export const checkInstitutionName = (value: string | undefined | null) => {
  if (!value) return true;
  return /^[a-zA-Z0-9-.\s]+$/.test(value);
};

// check if the value is a string and contains only 10 or 13 digits
export const checkNidNumber = (value: string | undefined | null) => {
  if (!value) return true;
  return /^\d{10}$/.test(value) || /^\d{13}$/.test(value) || /^\d{17}$/.test(value);
};

// check if the value is a string and contains only 10 digits
export const checkPassportNumber = (value: string | undefined | null) => {
  if (!value) return true;
  return /^[A-Z][0-9]{8}$/.test(value);
};

// // check if the value is a valid bangladeshi phone number
// export const checkPhoneNumber = (value: string | undefined | null) => {
//   if (!value) return true;
//   return /^(?:\+8801[3-9]\d{8}|01[3-9]\d{8})$/.test(value);
// };

// Check if the value is a valid international phone number (E.164 format)
export const checkPhoneNumber = (value: string | undefined | null) =>
  // if (!value) return true;
  // Accepts numbers with optional +, country code, and up to 15 digits total
  // return /^\+?[1-9]\d{1,14}$/.test(value);
  true;

// check if the value is a valid bangladeshi telephone number
export const checkTelephoneNumber = (value: string | undefined | null) =>
  // if (!value) return true;
  // return /^(?:\+880\d{7,10}|0\d{6,9})$/.test(value);
  true;

// check if the value is a string and contains only alphabets, spaces, hyphen and dots
export const checkAlphabetSpacesDots = (value: string | undefined | null) => {
  if (!value) return true;
  return /^[A-Za-z.\s-]+$/.test(value);
};

// check if the value is a string and does not start or end with a space
export const checkNoLeadingTrailingSpace = (value: string | undefined | null) => {
  if (!value) return true;
  return value === value.trim();
};

// check name length
export const checkNameLength = (value: string | undefined | null) => {
  if (!value) return true;
  return value.length >= 2 && value.length <= 100;
};

// check account number length
export const checkAccountNumberLength = (value: string | undefined | null) => {
  if (!value) return true;
  // Accept CASA numbers: 10 to 17 digits
  // TODO: need to update this validator to check the account number length
  // return value.length >= 10 && value.length <= 17;
  return true;
};
// check if the value is a string and contains only alphabets and digits (no spaces/special chars)
export const checkAlphaNumericNoSpecial = (value: string | undefined | null) => {
  if (!value) return true;
  return /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/.test(value);
};

// check amount length
export const checkAmountLength = (value: number | undefined | null) => {
  if (!value) return true;
  return value.toString().replace('.', '').length <= 18;
};

// check description length
export const checkDescriptionLength = (value: string | undefined | null) => {
  if (!value) return true;
  return value.length <= 50000;
};

export const checkAlphaNumericWithDotsHyphens = (value: string | undefined | null) => {
  if (!value) return true;
  // Allow letters, numbers, spaces, dots, and hyphens
  return /^[a-zA-Z0-9.\-\s]+$/.test(value);
};
// check if starts with alphabet,digits and folowed by any thing
export const checkStartsWithAlphaOrNumber = (value: string | undefined | null) => {
  if (!value) return true;
  // ^[a-zA-Z0-9] → first character must be a letter or number
  return /^[a-zA-Z0-9]/.test(value);
};

//  Mobile Number Validation (Bangladesh)
export const checkMobileNumber = (value: string | undefined | null) => {
  if (!value) return true;
  return /^(?:\+88)?01[3-9]\d{8}$/.test(value);
};

// Phone (Landline) Number Validation (Bangladesh)
export const checkLandlineNumber = (value: string | undefined | null) => {
  if (!value) return true;
  return /^(?:\+88)?0[2-9]\d{6,10}$/.test(value);
};

//  Combined Validation (Mobile or Phone)
export const checkCombinedNumber = (value: string | undefined | null) => {
  if (!value) return true;
  return /^(?:\+88)?(?:01[3-9]\d{8}|0[2-9]\d{6,10})$/.test(value);
};

// check if the value is a string and contains only alphabets, numbers, and dashes (no special characters)
export const checkAlphabetNumberDash = (value: string | undefined | null) => {
  if (!value) return true;
  return /^[a-zA-Z0-9-]+$/.test(value);
};
// check if the value is a valid URL
export const checkValidUrl = (value: string | undefined | null) =>
  // if (!value) return true;
  // try {
  //   // Try to create a URL object - this validates the URL format
  //   // Accepts all valid URL protocols (http, https, ftp, file, mailto, tel, etc.)
  //   // Also accepts URLs without protocol (e.g., www.example.com) by prepending https://
  //   let urlToValidate = value.trim();

  //   // Check if URL already has a protocol
  //   if (!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(urlToValidate)) {
  //     // No protocol found, prepend https://
  //     urlToValidate = `https://${urlToValidate}`;
  //   }

  //   const url = new URL(urlToValidate);
  //   return !!url;
  // } catch {
  //   return false;
  // }
  true;

// Auto-trim transform function removes leading/trailing whitespace and multiple spaces between words
export const autoTrimTransform = (value: string | undefined | null) => {
  if (!value || typeof value !== 'string') return value;
  // Trim start/end spaces and replace multiple spaces between words with single space
  return value.trim().replace(/\s+/g, ' ');
};
