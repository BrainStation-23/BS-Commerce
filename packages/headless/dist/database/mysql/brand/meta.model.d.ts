import { Model } from 'sequelize-typescript';
import BrandModel from './brand.model';
export default class MetaModel extends Model {
    id: string;
    brandId: string;
    brand: BrandModel;
    keywords: string;
    description: string;
    title: string;
    SEFN: string;
}
