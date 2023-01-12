import { CreateTagRequestBody, Tag, UpdateTagRequest } from '@bs-commerce/models';
export declare class TagType implements Tag {
    id: string;
    name: string;
}
export declare class CreateTagInput implements CreateTagRequestBody {
    name: string;
    isHomePageProductsTag?: boolean;
}
export declare class UpdateTagInput implements UpdateTagRequest {
    name?: string;
    isHomePageProductsTag?: boolean;
}
export declare class TagResponse {
    code: number;
    data?: TagType;
}
export declare class TagsResponse {
    code: number;
    data?: TagType[];
}
