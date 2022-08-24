export class Tag {
    id: string;
    name: string;
    isHomePageProductsTags?:boolean;
}

export class HomePageProductsTagsRequest {
    name: string;
    isHomePageProductsTags?:boolean;
}

export class UpdateHomePageTagsRequest {
    name?: string;
    isHomePageProductsTags?:boolean;
}