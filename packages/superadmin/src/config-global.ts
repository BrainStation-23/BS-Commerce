import { paths } from 'src/routes/paths';

const { VITE_PROJECT_NAME, VITE_HOST_API } = import.meta.env;

export const HOST_API = VITE_HOST_API;
// Replace "Shanta AML Back Office" with "BS Ecommerce"
export const PROJECT_NAME = VITE_PROJECT_NAME?.replace(/Shanta AML Back Office/gi, 'BS Ecommerce')?.replace(/Shanta AML/gi, 'BS Ecommerce') || 'BS Ecommerce';

// ROOT PATH AFTER LOGIN SUCCESSFUL
export const PATH_AFTER_LOGIN = paths.dashboard.root; // as '/dashboard'

// Query Configuration
export const STALE_TIME = 30000; // 30 seconds
export const REFETCH_INTERVAL = 1000 * 60; // 1 minute
export const DEFAULT_QUERY_ENABLED = true; // Default query enabled state

// Pagination Configuration
export const DEFAULT_PAGE = 1; // 1-based index
export const DEFAULT_ROWS_PER_PAGE = 10; // Default number of rows per page
export const DEFAULT_PAGE_SIZE_OPTIONS = [5, 10, 25, 50]; // Options for rows per page

// Sorting Configuration
// Sort Order Enum
export enum SORT_ORDER {
  ASC = 'ASC',
  DESC = 'DESC',
}
export const DEFAULT_SORT_ORDER = 'DESC'; // Default sort order
export const DEFAULT_SORT_BY = 'created_at'; // Default sort by field

export const DEFAULT_NO_DATA_TEXT = '—';

// File Upload Configuration
export const MAX_FILE_SIZE_MB = 5; // Maximum file size in MB (for documents)
export const MAX_FILE_SIZE_KB = MAX_FILE_SIZE_MB * 1024; // Maximum file size in KB (for documents)
export const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_KB * 1024; // Maximum file size in Bytes (for documents)

// Image Upload Configuration (no size limit)
export const MAX_IMAGE_SIZE_MB = Infinity; // No limit for images
export const MAX_IMAGE_SIZE_KB = Infinity; // No limit for images
export const MAX_IMAGE_SIZE_BYTES = Infinity; // No limit for images
