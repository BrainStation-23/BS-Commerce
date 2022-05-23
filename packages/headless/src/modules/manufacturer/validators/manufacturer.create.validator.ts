import * as Joi from 'joi';
import { Manufacturer } from 'src/entity/manufacturer';

export const ManufacturerCreateSchema = Joi.object<Manufacturer, false>({
    name: Joi.string().required().messages({
        'string.base': 'Name should be type of String',
        'string.empty': 'Name cannot be an empty field',
        'string.min': 'Name must be in at least 3 characters',
        'string.max': 'Name must be in 30 Characters at maximum',
        'any.required': 'Name is required'
    }).min(3).max(30),
    description: Joi.string().messages({
        'string.min': 'Name must be in at least 10 characters',
        'string.max': 'Name must be in 100 Characters at maximum'
    }).min(10).max(100),
    picture: Joi.string(),
    isPublished: Joi.boolean(),
    displayOrder: Joi.number(),
    seo: Joi.object().keys({
        metaKeyword: Joi.string().messages({
            'string.min': 'Meta Keyword must be in at least 1 characters',
            'string.max': 'Meta Keyword must be in 75 Characters at maximum'
        }).min(1).max(75),
        metaDescription: Joi.string().messages({
            'string.min': 'Meta Description must be in at least 10 characters',
            'string.max': 'Meta Description must be in 160 Characters at maximum'
        }).min(10).max(160),
        metaTitle: Joi.string().messages({
            'string.min': 'Meta Title must be in at least 3 characters',
            'string.max': 'Meta Title must be in 60 Characters at maximum'
        }).min(3).max(60),
        SEFN: Joi.string(),
    })
})