import { Injectable } from '@nestjs/common';
import { Category, RequestCategory, responseCategory } from 'src/entity/category';

@Injectable()
export abstract class ICategoryDatabase {
    abstract getCategory:(categoryId: string) => Promise< Category | null>;
    abstract getCategoryList:() => Promise< responseCategory[] | null>;
    abstract getCategoryBySlug:(slug: string) => Promise< Category | null>;
    abstract createCategory:(category: RequestCategory) => Promise< Category | null>;
}