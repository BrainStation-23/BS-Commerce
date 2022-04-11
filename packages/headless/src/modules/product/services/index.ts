import { Injectable } from '@nestjs/common';
import { Product } from '../../../entity/product';
import { CreateProductDto } from '../dto/product.dto';
import { ProductRepository } from '../repositories';

@Injectable()
export class ProductService {
	constructor(private productRepo: ProductRepository) {}

	async createProduct(product: CreateProductDto): Promise<Product | null> {
		const isProductExist = await this.productRepo.findProduct(product.id);
		if (isProductExist) {
			return null;
		} else {
			const newProduct = await this.productRepo.createProduct(product);
			return newProduct;
		}
	}
	async getProduct(productId: string): Promise<Product | null> {
		const foundProduct = await this.productRepo.findProduct(productId);
		return foundProduct || null;
	}
	async getAllProducts(skip?: number, limit?: number): Promise<Product[]> {
		const foundProduct = await this.productRepo.findAllProduct(skip, limit);
		return foundProduct;
	}
}
