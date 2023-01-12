import { Model } from 'sequelize-typescript';
import ManufacturerModel from './manufacturer.model';
export default class ManufacturerSeoModel extends Model {
    metaKeyword: string;
    metaDescription: string;
    metaTitle: string;
    SEFN: string;
    manufacturerId: string;
    manufacturer: ManufacturerModel;
}
