import { Type } from '@nestjs/common';
import { ValidationOptions } from 'class-validator';
export interface PipeTransform<T = any, R = any> {
    transform(value: T, metadata: ArgumentMetadata): R;
}
export interface ArgumentMetadata {
    metatype?: Type<any> | undefined;
}
export declare class ValidationError {
    property: string;
    constraints?: {
        [type: string]: string;
    };
}
export declare class ValidationPipe implements PipeTransform<any> {
    transform(value: any, { metatype }: ArgumentMetadata): Promise<any>;
    private toValidate;
}
export declare function ValidateNested(schema: new () => any, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
