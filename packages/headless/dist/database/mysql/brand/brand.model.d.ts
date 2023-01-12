import { Model } from 'sequelize-typescript';
import { Brand } from '../../../entity/brand';
import InfoModel from './info.model';
import MetaModel from './meta.model';
export default class BrandModel extends Model<Brand> {
    id: string;
    info: InfoModel;
    meta: MetaModel;
}
