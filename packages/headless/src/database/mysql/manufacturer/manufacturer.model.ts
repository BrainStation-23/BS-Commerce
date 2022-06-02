import { randomUUID } from 'crypto';
import { Column, Model, Table, Unique, Default, HasOne, Index, PrimaryKey } from 'sequelize-typescript';
import { Manufacturer } from 'src/entity/manufacturer';
import ManufacturerSeoModel from './seo.model';

@Table({
  tableName: 'Manufacturers',
})
export default class ManufacturerModel extends Model<Manufacturer> {
  @PrimaryKey
  @Unique(true)
  @Default(() => randomUUID())
  @Column
  id: string;

  @Unique(true)
  @Column
  @Index
  name: string;

  @Column
  description: string;

  @Column
  picture: string;

  @Column
  isPublished: string;

  @Column
  displayOrder: string;

  @HasOne(() => ManufacturerSeoModel)
  seo: ManufacturerSeoModel;
}
