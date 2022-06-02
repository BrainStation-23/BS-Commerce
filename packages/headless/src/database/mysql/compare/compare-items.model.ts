import { randomUUID } from 'crypto';
import { Default, Model, PrimaryKey, Unique } from 'sequelize-typescript';
import { Column } from 'sequelize-typescript';
import { Table } from 'sequelize-typescript';

@Table({
  tableName: 'compare-items',
})
export default class CompareItems extends Model {
  @PrimaryKey
  @Unique(true)
  @Default(() => randomUUID())
  @Column
  id: string;

  @Column
  compareId: string;

  @Column
  productId: string;
}
