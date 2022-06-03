// post: /api/compare
// args: body
export interface AddCompareItem {
    productId: string;
}

export interface CompareResponse {
    id: string;
    userId: string;
    items: CompareItems[];
}

export interface CompareItems {
    productId: string;
    products: any;
}
