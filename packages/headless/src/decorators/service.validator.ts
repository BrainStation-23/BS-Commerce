import { HttpException, HttpStatus } from '@nestjs/common';
import * as Joi from 'joi';
import { ServiceErrorResponse } from 'src/helper/serviceResponse/service.response.interface';

/**
 * Factory decorator for validating service function arguments against a Joi Schema at run-time.
 * 
 * Only the first argument is validated.
 * 
 * If the validation fails then it throws ```HttpException``` error with ```BAD_REQUEST``` status.
 * 
 * Otherwise the execution passed to the actual function
 * 
 * The errors are formatted as the standard error response format used in our project ```ServiceErrorResponse```
 */

export function validateParam(schema: Joi.Schema, options: Joi.ValidationOptions = { abortEarly: false, allowUnknown: false }) {
    return function validateSchema(
        target: any,
        propertyName: string,
        descriptor: TypedPropertyDescriptor<any>
    ) {
        const method = descriptor.value;
        descriptor.value = function (...args) {
            const { error } = schema.validate(args[0], options);
            if (error) {
                const response: ServiceErrorResponse = { error: '', errors: {} };
                error.details.forEach((err) => {
                    response.error += err.message;
                    response.errors[err.path[0]] = [err.message];
                })
                throw new HttpException(response, HttpStatus.BAD_REQUEST);
            }
            else {
                return method.apply(this, args);
            }
        };
    }
}
