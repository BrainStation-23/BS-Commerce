import { Injectable } from "@nestjs/common";
import { Product } from "src/entity/product";
import { ProductModel } from "../product/product.model";

@Injectable()
export class ProductSrarchDatabase {
    async findAllProducts(): Promise<Product[]> {
        return await ProductModel.find({}).lean();
    }
}
