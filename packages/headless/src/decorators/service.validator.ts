import { HttpException, HttpStatus } from '@nestjs/common';
import * as Joi from 'joi';
import { ServiceErrorResponse } from 'src/helper/serviceResponse/service.response.interface';

interface Validators {
    schema: Joi.Schema,
    options?: Joi.ValidationOptions
}

/**
 * Factory decorator for validating service function arguments against a Joi Schema at run-time.
 * 
 * The function expects the validation schema and options to be passed as the same sequence of the actual
 * function arguments to be validated.
 * 
 * Example: ``` @validateParams({ schema: ProductCreateSchema })
 *   async createProduct(product: Product, extraParam: number) ```
 * 
 * The extraParam here will not be validated as no validator is passed for that.
 * 
 * If the validation fails then it throws ```HttpException``` error with ```BAD_REQUEST``` status.
 * 
 * The errors are formatted as the standard error response format used in our project ```ServiceErrorResponse```
 */

export function validateParams(...validators: Array<Validators>) {
    return function validateSchemas(
        target: any,
        propertyName: string,
        descriptor: TypedPropertyDescriptor<any>
    ) {
        const method = descriptor.value;
        descriptor.value = function (...args: any[]) {
            const response: ServiceErrorResponse = { error: '', errors: {} };

            for (let i = 0; i < validators.length; i++) {
                const { schema, options = { abortEarly: false, errors: { wrap: { label: '' } } } } = validators[i];
                const { error } = schema.validate(args[i], options);
                if (error) {
                    error.details.forEach((err) => {
                        response.error += err.message
                        err.path[0] && (response.errors[err.path[0]] = [err.message]);
                    })
                    throw new HttpException(response, HttpStatus.BAD_REQUEST);
                }
            }
            return method.apply(this, args);
        };
    }
}
