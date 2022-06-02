import { randomUUID } from 'crypto';
import { Model } from 'sequelize-typescript';
import { Unique } from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript';
import { HasMany } from 'sequelize-typescript';
import { Column } from 'sequelize-typescript';
import { Default } from 'sequelize-typescript';
import { PrimaryKey } from 'sequelize-typescript';
import { Table } from 'sequelize-typescript';
import { Compare } from 'src/entity/compare';
import CompareItems from './compare-items.model';

@Table({
  tableName: 'compare',
})
export default class CompareModel extends Model<Compare> {
  @PrimaryKey
  @Unique(true)
  @Default(randomUUID())
  @Column
  id: string;

  @Unique(true)
  @Column
  userId: string;

  @HasMany(() => CompareItems)
  items: CompareItems[];
}
