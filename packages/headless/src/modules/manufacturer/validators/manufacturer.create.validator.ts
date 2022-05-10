import * as Joi from 'joi';
import { Manufacturer } from 'src/entity/manufacturer';

export const ManufacturerCreateSchema = Joi.object<Manufacturer, true>({
    id: Joi.string(),
    name: Joi.string().required(),
    description: Joi.string(),
    picture: Joi.string(),
    isPublished: Joi.boolean(),
    displayOrder: Joi.number(),
    seo: Joi.object().keys({
        metaKeyword: Joi.string(),
        metaDescription: Joi.string(),
        metaTitle: Joi.string(),
        SEFN: Joi.string(),
    })
})