export interface ErrorResponse {
    code?: number;
    error: string;
    errors: DescriptiveError;
}
export interface DescriptiveError {
    [key: string]: [string];
}