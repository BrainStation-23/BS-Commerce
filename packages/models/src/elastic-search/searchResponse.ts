export interface ISearchProductInfo {
	productId: string;
	name: string;
	shortDescription: string;
	fullDescription: string;
	sku: string;
	price: number;
}

export interface ISearchProductMeta {
	keywords: string[];
	title: string;
	description: string;
}

export interface ISearchProductCategory {
	id: string;
	name: string;
}

export interface ISearchProductManufacturer {
	id: string;
	name: string;
}

export interface IProductSearchSchema {
	info: ISearchProductInfo;
	meta: ISearchProductMeta;
	brands: string[];
	categories: ISearchProductCategory[];
	manufacturer: ISearchProductManufacturer;
	photos: string[];
	tags: string[];
}

export interface IProductSearchResponse {
	resultsCount: number;
	values: IProductSearchSchema[];
	suggestion: string[];
}
