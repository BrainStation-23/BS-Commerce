import { Model } from 'sequelize-typescript';
import BrandModel from './brand.model';
export default class InfoModel extends Model {
    id: string;
    brandId: string;
    brand: BrandModel;
    name: string;
    description: string;
    allowToSelectPageSize: boolean;
    published: boolean;
    displayOrder: number;
    pageSizeOptions: string;
}
