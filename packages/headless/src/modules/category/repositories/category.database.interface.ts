import { Injectable } from '@nestjs/common';
import { Category, RequestCategory } from 'src/entity/category';

@Injectable()
export abstract class ICategoryDatabase {
    abstract addCategory:(category: RequestCategory) => Promise< Category | null>;
}