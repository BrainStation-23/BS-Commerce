export interface ErrorResponse {
    code?: number;
    error: string;
    errors: DescriptiveError | null;
}
export interface DescriptiveError {
    [key: string]: [string];
}
