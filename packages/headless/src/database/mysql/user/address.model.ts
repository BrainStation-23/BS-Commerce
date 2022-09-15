import { randomUUID } from 'crypto';
import { PrimaryKey } from 'sequelize-typescript';
import { Unique } from 'sequelize-typescript';
import { Default } from 'sequelize-typescript';
import {
  Model,
  Table,
  Column,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import UserModel from './user.model';

@Table({
  tableName: 'Address',
})
export default class AddressModel extends Model {
  @PrimaryKey
  @Unique(true)
  @Default(() => randomUUID())
  @Column
  id: string;

  @Column
  addressLine1: string;

  @Column
  addressLine2: string;

  @Column
  city: string;

  @Column
  country: string;

  @Column
  postCode: string;

  @ForeignKey(() => UserModel)
  userId: number;

  @BelongsTo(() => UserModel)
  user: UserModel;
}
