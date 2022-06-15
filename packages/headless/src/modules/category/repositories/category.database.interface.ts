import { Injectable } from '@nestjs/common';
import { Category, responseCategory } from 'src/entity/category';

@Injectable()
export abstract class ICategoryDatabase {
    abstract getCategory:(categoryId: string) => Promise< Category | null>;
    abstract getCategoryList:() => Promise< responseCategory[] | null>;
}