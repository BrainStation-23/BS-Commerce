import { Injectable } from '@nestjs/common';
import { Category } from 'src/entity/category';

@Injectable()
export abstract class ICategoryDatabase {
    abstract getCategory:(categoryId: string) => Promise< Category | null>;
}