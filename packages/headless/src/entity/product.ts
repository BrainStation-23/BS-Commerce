import mongoose from 'mongoose';

interface IProductInfo {
	name: string;
	shortDescription: string;
	fullDescription: string;
	sku: string;
	price: Number;
	oldPrice: Number;
	cost: Number;
	showOnHomePage: Boolean;
	includeInTopMenu: Boolean;
	allowToSelectPageSize: Boolean;
	published: Boolean;
	displayOrder: Number;
	isFeatured: Boolean;
	publishDate: Date;
}

interface IProductMeta {
	keywords: string[];
	title: string;
	description: string;
	friendlyPageName: string;
}

interface IProductPhoto {
	id: mongoose.Types.ObjectId;
	title: string;
	alt: string;
	displayOrder: Number;
}

interface IProductCategory {
	categoryId: mongoose.Types.ObjectId;
	isFeatured: Boolean;
	displayOrder: Number;
}

export class Product {
	id?: string;
	info: IProductInfo;
	meta: IProductMeta;
	tags?: mongoose.Types.ObjectId[];
	photos?: IProductPhoto[];
	brands?: mongoose.Types.ObjectId[];
	categories: IProductCategory[];
}
