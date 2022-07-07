import { Column, Model, Table, Unique, Default,HasMany, Index, PrimaryKey, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { randomUUID } from 'crypto';

import BrandModel from './brand.model';

@Table({
    tableName: 'Infos'
})
export default class InfoModel extends Model{
    @Column({ 
        defaultValue: ()=> randomUUID(),
        primaryKey: true
    })
    id: string

    @ForeignKey(() => BrandModel)
    brandId: string

    @BelongsTo(() => BrandModel)
    brand: BrandModel

    @Column({ allowNull: false })
    name: string

    @Column({ defaultValue: null })
    description: string

    @Column({ defaultValue: false })
    allowToSelectPageSize: boolean

    @Column({ defaultValue: false })
    published: boolean

    @Column({ defaultValue: 0 })
    displayOrder: number

    @Column({
        allowNull: true,
        set(val: number[]) {
            const value = val.toString();
            this.setDataValue('pageSizeOptions',value);
         }
    })
    pageSizeOptions: string

}