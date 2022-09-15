import {
  Column,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { randomUUID } from 'crypto';
import BrandModel from './brand.model';

@Table({
  tableName: 'Metas',
})
export default class MetaModel extends Model {
  @Column({
    defaultValue: () => randomUUID(),
    primaryKey: true,
  })
  id: string;

  @ForeignKey(() => BrandModel)
  brandId: string;

  @BelongsTo(() => BrandModel)
  brand: BrandModel;

  @Column({ defaultValue: '' })
  keywords: string;

  @Column({ defaultValue: '' })
  description: string;

  @Column({ defaultValue: '' })
  title: string;

  @Column({ defaultValue: '' })
  SEFN: string;
}
