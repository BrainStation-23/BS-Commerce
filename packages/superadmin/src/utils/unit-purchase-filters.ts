// import { UnitPurchaseListParams } from 'src/types/unit-purchase';
// import { removeEmptyValues } from './remove-empty-values';

/**
 * Clean unit purchase filters while preserving empty statuses array
 * This ensures that the API receives the statuses field even when empty
 */
// export const cleanUnitPurchaseFilters = (filters: UnitPurchaseListParams): UnitPurchaseListParams => {
//   // First, remove empty values but preserve empty arrays
//   const cleaned = removeEmptyValues(filters, [], true);
  
//   // Only include statuses if it's not an empty array
//   // if (cleaned.statuses && Array.isArray(cleaned.statuses) && cleaned.statuses.length === 0) {
//   //   delete cleaned.statuses;
//   // }
  
//   return cleaned;
// };
