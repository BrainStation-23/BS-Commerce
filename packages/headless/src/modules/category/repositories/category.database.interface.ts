import { Injectable } from '@nestjs/common';
import { responseCategory } from 'src/entity/category';

@Injectable()
export abstract class ICategoryDatabase {
    abstract getCategoryList:() => Promise< responseCategory[] | null>;
}