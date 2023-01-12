import { ValueNode } from 'graphql';
export declare class Upload {
    parseLiteral(file: ValueNode): Promise<any>;
    parseValue(value: any): Promise<any>;
    serialize(value: any): any;
}
