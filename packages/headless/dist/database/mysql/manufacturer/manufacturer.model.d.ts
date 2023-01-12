import { Model } from 'sequelize-typescript';
import { Manufacturer } from '../../../entity/manufacturer';
import ManufacturerSeoModel from './seo.model';
export default class ManufacturerModel extends Model<Manufacturer> {
    id: string;
    name: string;
    description: string;
    picture: string;
    isPublished: boolean;
    displayOrder: string;
    seo: ManufacturerSeoModel;
}
