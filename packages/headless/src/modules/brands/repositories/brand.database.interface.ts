import { Injectable } from "@nestjs/common";
import { Brand } from "src/entity/brand";

@Injectable()
export abstract class IBrandDatabase{
    abstract findById: (brandId: string) => Promise<Brand | null>;
    abstract findAll: (skip?: number, limit?: number) => Promise<Brand[]>;
    abstract save: (brand: Brand) => Promise<Brand | null>;
    abstract update: (brandId: string, brand: Brand) => Promise<Brand | null>;
    abstract delete: (brandId: string) => Promise<Brand | null>;
}