export interface IServiceSuccessResponse<T> {
  /** Response object from service layer */
  data: T;
  /** Http code, but has no relation or dependency with http requests.
   * The code here is used as a standard for communicating with the
   * outer layer of service.
   */
  code?: number;
}

export interface DescriptiveError {
  /** Key: value pair, where key is the property name
   * and value is an array of errors of that property
   */
  [key: string]: [string];
}

export interface IServiceErrorResponse {
  /** Descriptive error from a service layer */
  errors: DescriptiveError;
  /**Single string as summary of descriptive errors */
  error: string;
  /** Http code, but has no relation or dependency with http requests.
   * The code here is used as a standard for communicating with the
   * outer layer of service.
   */
  code?: number;
}
