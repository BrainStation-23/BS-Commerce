/* 
	this dto is used to show the example body data in swagger
*/

import { ApiProperty } from '@nestjs/swagger';
import mongoose from 'mongoose';

class IProductInfo {
	@ApiProperty({ example: 'sample product' })
	name: string;

	@ApiProperty({ example: 'description' })
	shortDescription: string;

	@ApiProperty({ example: 'description' })
	fullDescription: string;

	@ApiProperty({ example: 'sku-000-111' })
	sku: string;

	@ApiProperty({ example: 100 })
	price: Number;

	@ApiProperty({ example: 100 })
	oldPrice: Number;

	@ApiProperty({ example: 100 })
	cost: Number;

	@ApiProperty({ example: false })
	showOnHomePage: Boolean;

	@ApiProperty({ example: false })
	includeInTopMenu: Boolean;

	@ApiProperty({ example: false })
	allowToSelectPageSize: Boolean;

	@ApiProperty({ example: false })
	published: Boolean;

	@ApiProperty({ example: 1 })
	displayOrder: Number;

	@ApiProperty({ example: false })
	isFeatured: Boolean;

	@ApiProperty({ example: new Date() })
	publishDate: Date;
}

class IProductMeta {
	@ApiProperty({ example: ['key1', 'key2'] })
	keywords: string[];
	@ApiProperty({ example: 'Meta title' })
	title: string;
	@ApiProperty({ example: 'description' })
	description: string;
	@ApiProperty({ example: 'friendly Page Name' })
	friendlyPageName: string;
}

class IProductPhoto {
	@ApiProperty()
	id: mongoose.Types.ObjectId;
	@ApiProperty()
	title: string;
	@ApiProperty()
	alt: string;
	@ApiProperty()
	displayOrder: Number;
}

class IProductCategory {
	@ApiProperty({ example: '' })
	categoryId: mongoose.Types.ObjectId;
	@ApiProperty({ example: false })
	isFeatured: Boolean;
	@ApiProperty({ example: 1 })
	displayOrder: Number;
}

export class CreateProductDto {
	id?: string;
	@ApiProperty()
	info: IProductInfo;
	@ApiProperty()
	meta: IProductMeta;
	@ApiProperty({ example: [new mongoose.Types.ObjectId('6206298fd6852422d87aea52')] })
	tags?: mongoose.Types.ObjectId[];
	@ApiProperty({ example: [new mongoose.Types.ObjectId('6206298fd6852422d87aea52')] })
	brands: mongoose.Types.ObjectId[];
	@ApiProperty({
		example: [
			{
				categoryId: new mongoose.Types.ObjectId('6206298fd6852422d87aea52'),
				isFeatured: false,
				displayOrder: 1,
			},
		],
	})
	categories: IProductCategory[];
}
