import { Injectable } from "@nestjs/common";
import { Brand } from "src/entity/brand";

@Injectable()
export abstract class IBrandDatabase{
    abstract findById: (productId: string) => Promise<Brand | null>;
    abstract findAll: (skip?: number, limit?: number) => Promise<Brand[]>;
    abstract save: (product: Brand) => Promise<Brand | null>;
}