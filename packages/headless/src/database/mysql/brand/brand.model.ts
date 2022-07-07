import { randomUUID } from 'crypto';
import { Column, Model, Table, Unique, Default,HasMany, Index, PrimaryKey, DataType, HasOne } from 'sequelize-typescript';

import { Brand } from 'src/entity/brand';
import InfoModel from './info.model';
import MetaModel from './meta.model';

@Table({
    tableName: 'Brands',
})

export default class BrandModel extends Model<Brand>{
    @Column({
        primaryKey: true,
        defaultValue: ()=> randomUUID()
    })
    id: string

    @HasOne(() => InfoModel)
    info: InfoModel
   
    @HasOne(() => MetaModel)
    meta: MetaModel
}
