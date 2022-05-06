import * as Joi from 'joi';
import { min } from 'rxjs';
import { Product } from 'src/entity/product';

export const ProductSchema = Joi.object<Product, true>({
    id: Joi.string(),
    info: Joi.object().keys({
        name: Joi.string().required(),
        shortDescription: Joi.string(),
        fullDescription: Joi.string(),
        sku: Joi.string().required(),
        price: Joi.number().required(),
        oldPrice: Joi.number().required(),
        cost: Joi.number().required(),
        showOnHomePage: Joi.boolean(),
        includeInTopMenu: Joi.boolean(),
        allowToSelectPageSize: Joi.boolean(),
        published: Joi.boolean(),
        displayOrder: Joi.number(),
        isFeatured: Joi.boolean(),
        publishDate: Joi.date()
    }).required(),
    meta: Joi.object().keys({
        keywords: Joi.array().items(Joi.string()),
        title: Joi.string(),
        description: Joi.string(),
        friendlyPageName: Joi.string().required()
    }).required(),
    tags: Joi.array().items(Joi.string()),
    photos: Joi.array().items(Joi.object().keys({
        id: Joi.string(),
        title: Joi.string(),
        alt: Joi.string(),
        displayOrder: Joi.number()
    })),
    brands: Joi.array().items(Joi.string()),
    categories: Joi.array().items(Joi.object().keys({
        categoryId: Joi.string().required(),
        isFeatured: Joi.boolean(),
        displayOrder: Joi.number()
    })).min(1).required()
})

export const ProductSearchSchema = Joi.object({
    skip: Joi.number(),
    limit: Joi.number(),
    brandId: Joi.string(),
    categoryId: Joi.string(),
    productName: Joi.string(),
    isFeatured: Joi.boolean()
})