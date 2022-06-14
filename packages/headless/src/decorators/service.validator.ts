import { Injectable, HttpStatus, HttpException, Type } from '@nestjs/common';
import {
    validate,
    ValidationOptions,
    registerDecorator,
    ValidationArguments,
    validateSync,
} from 'class-validator';
import { plainToClass } from 'class-transformer';
import { ServiceErrorResponse } from 'src/helper/serviceResponse/service.response.interface';

export interface PipeTransform<T = any, R = any> {
    /**
     * Method to implement a custom pipe.  Called with two parameters
     *
     * @param value argument before it is received by route handler method
     * @param metadata contains metadata about the value
     */
    transform(value: T, metadata: ArgumentMetadata): R;
}

export interface ArgumentMetadata {
    /**
     * Underlying base type (e.g., `String`) of the parameter, based on the type
     * definition in the route handler.
     */
    metatype?: Type<any> | undefined;
}

export declare class ValidationError {
    /**
     * Object's property that haven't pass validation.
     */
    property: string;
    /**
     * Constraints that failed validation with error messages.
     */
    constraints?: {
        [type: string]: string;
    };
}

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
    async transform(value: any, { metatype }: ArgumentMetadata) {
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }

        // Converts plain (literal) object to class (constructor) object.
        const object = plainToClass(metatype, value);
        const errors: ValidationError[] = await validate(object, {
            validationError: {
                target: false, value: false,
            }
        });

        const errorsResponse: ServiceErrorResponse = { error: '', errors: {} };

        if (errors.length > 0) {
            errors.map((err: ValidationError) => {
                let errorArray = [];
                Object.values(err.constraints).forEach(constraint => {
                    errorsResponse.error += constraint as string + ',';
                    err.property && (errorArray.push(constraint as string));
                })
                err.property && (errorsResponse.errors[err.property] = errorArray as any);
            })
            throw new HttpException(errorsResponse, HttpStatus.UNPROCESSABLE_ENTITY);
        }
        return value;
    }

    private toValidate(metatype: Function): boolean {
        const types: Function[] = [String, Boolean, Number, Array, Object];
        return !types.includes(metatype);
    }
}


/**
 * @decorator
 * @description A custom decorator to validate a validation-schema within a validation schema upload N levels
 * @param schema The validation Class
 */
export function ValidateNested(
    schema: new () => any,
    validationOptions?: ValidationOptions
) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'ValidateNested',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    args.value;
                    if (Array.isArray(value)) {
                        for (let i = 0; i < (<Array<any>>value).length; i++) {
                            if (value && validateSync(plainToClass(schema, value[i])).length) {
                                return false;
                            }
                        }
                        return true;
                    } else {
                        if (value && validateSync(plainToClass(schema, value))?.length) {
                            return false;
                        } else return true;
                    }
                },
                defaultMessage(args) {
                    if (Array.isArray(args.value)) {
                        for (let i = 0; i < (<Array<any>>args.value).length; i++) {
                            return (
                                args.value && validateSync(plainToClass(schema, args.value[i]))
                                    .map((e) => e.constraints)
                                    .reduce((acc, next) => acc.concat(Object.values(next)), [])
                            ).toString();
                        }
                    } else {
                        return (
                            args.value && validateSync(plainToClass(schema, args.value))
                                .map((e) => e.constraints)
                                .reduce((acc, next) => acc.concat(Object.values(next)), [])
                        ).toString();
                    }
                },
            },
        });
    };
}