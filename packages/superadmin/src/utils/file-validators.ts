import * as Yup from 'yup';
import { MAX_FILE_SIZE_BYTES, MAX_FILE_SIZE_MB } from 'src/config-global';

/**
 * Common file size validation test for Yup schemas
 * @param value - The file value to validate
 * @returns boolean - Whether the file size is valid
 */
export const validateFileSize = (value: unknown): boolean => {
  if (!value || !(value instanceof File)) return false;
  return value.size <= MAX_FILE_SIZE_BYTES;
};

/**
 * File size validation message
 */
export const getFileSizeErrorMessage = (): string =>
  `File size must be less than ${MAX_FILE_SIZE_MB}MB`;

/**
 * Common Yup file size validation test
 * Use this in your Yup schemas for consistent file size validation
 */
export const fileSizeValidation = () =>
  Yup.mixed().test('fileSize', getFileSizeErrorMessage(), validateFileSize);

/**
 * Common Yup file validation with both type and size checks
 * @param allowedTypes - Array of allowed MIME types
 * @param typeErrorMessage - Error message for invalid file type
 * @returns Yup mixed schema with validation
 */
export const fileValidation = (
  allowedTypes: string[],
  typeErrorMessage: string = 'Invalid file type'
) =>
  Yup.mixed()
    .test('fileType', typeErrorMessage, (value) => {
      if (!value || !(value instanceof File)) return false;
      return allowedTypes.includes(value.type);
    })
    .test('fileSize', getFileSizeErrorMessage(), validateFileSize);

/**
 * Excel file validation (for bulk uploads)
 */
export const excelFileValidation = (isRequired: boolean = true) => {
  const schema = Yup.mixed()
    .test('fileType', 'Only Excel files are allowed', (value) => {
      if (!value || !(value instanceof File)) return false;
      const allowedTypes = [
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
        'application/vnd.ms-excel', // .xls
      ];
      return allowedTypes.includes(value.type);
    })
    .test('fileSize', getFileSizeErrorMessage(), validateFileSize);

  return isRequired ? schema.required('Excel file is required') : schema.optional();
};

/**
 * XML file validation
 */
export const xmlFileValidation = (isRequired: boolean = true) => {
  const schema = Yup.mixed()
    .test('fileType', 'Only XML files are allowed', (value) => {
      if (!value || !(value instanceof File)) return false;
      const allowedTypes = ['text/xml', 'application/xml'];
      return allowedTypes.includes(value.type);
    })
    .test('fileSize', getFileSizeErrorMessage(), validateFileSize);

  return isRequired ? schema.required('XML file is required') : schema.optional();
};

/**
 * Image file validation
 */
export const imageFileValidation = (isRequired: boolean = true) => {
  const schema = Yup.mixed()
    .test('fileType', 'Only image files are allowed', (value) => {
      if (!value || !(value instanceof File)) return false;
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
      return allowedTypes.includes(value.type);
    })
    .test('fileSize', getFileSizeErrorMessage(), validateFileSize);

  return isRequired ? schema.required('Image file is required') : schema.optional();
};

/**
 * PDF file validation
 */
export const pdfFileValidation = (isRequired: boolean = true) => {
  const schema = Yup.mixed()
    .test('fileType', 'Only PDF files are allowed', (value) => {
      if (!value || !(value instanceof File)) return false;
      return value.type === 'application/pdf';
    })
    .test('fileSize', getFileSizeErrorMessage(), validateFileSize);

  return isRequired ? schema.required('PDF file is required') : schema.optional();
};

/**
 * String-based file path validation (for OCR/AWS uploaded files that return keys/URLs)
 * @param fieldName - Name of the field for error messages
 * @param isRequired - Whether the field is required
 */
export const filePathValidation = (
  fieldName: string,
  isRequired: boolean = true
) => {
  const schema = Yup.string();

  return isRequired ? schema.required(`${fieldName} is required`) : schema.optional().nullable();
};

