import * as Joi from 'joi';

import { Brand } from './../../../entity/brand';

export const BrandCreateSchema = Joi.object<Brand>({
    id: Joi.string(),
    info:{
        name: Joi.string().required(),
        brandId: Joi.string(),
        description: Joi.string(),
        allowToSelectPageSize: Joi.boolean(),
        published: Joi.boolean(),
        displayOrder: Joi.number(),
        pageSizeOptions: Joi.array().items(Joi.number())
    },
    meta: {
        keywords: Joi.string(),
        description: Joi.string(),
        title: Joi.string(),
        SEFN: Joi.string()
    }
})