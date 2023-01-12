import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
export declare function ApiFile(fieldName?: string, required?: boolean, localOptions?: MulterOptions): <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
