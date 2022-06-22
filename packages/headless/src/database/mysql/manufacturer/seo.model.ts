import {
    Model,
    Table,
    Column,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';
import ManufacturerModel from './manufacturer.model';

@Table({
    tableName: 'ManufacturerSeo',
    version: false,
})
export default class ManufacturerSeoModel extends Model {
    @Column
    metaKeyword: string;

    @Column
    metaDescription: string;

    @Column
    metaTitle: string;

    @Column
    SEFN: string;

    @ForeignKey(() => ManufacturerModel)
    manufacturerId: string;

    @BelongsTo(() => ManufacturerModel)
    manufacturer: ManufacturerModel;
}
