<<<<<<< HEAD
import { ErrorMessage } from "src/index";

export interface ErrorResponse {
    code?: number;
    error: string;
    errors: DescriptiveError | null;
}

export interface DescriptiveError {
    [key: string]: [string];
}


=======
export interface ErrorResponse {
    code?: number;
    error: string;
    errors: DescriptiveError;
}
export interface DescriptiveError {
    [key: string]: [string];
}
>>>>>>> 3b26fc08e1c48e95b76ae149f09e58f18639426e
