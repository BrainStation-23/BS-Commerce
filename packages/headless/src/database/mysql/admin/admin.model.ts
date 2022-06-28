import { randomUUID } from 'crypto';
import { Column, Model, Table, Unique, Default,HasMany, Index, PrimaryKey } from 'sequelize-typescript';
import { Admin } from 'src/entity/admin';
import AddressModel from './address.model';

@Table({
  tableName: 'Admins',
})
export default class AdminModel extends Model<Admin> {
  @PrimaryKey
  @Unique(true)
  @Default(() => randomUUID())
  @Column
  id: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  displayName: string;

  @Unique(true)
  @Column
  username: string;

  @Column
  @Index
  phone: string;

  @Column
  @Index
  email: string;

  @Column
  password: string;

  @Column
  provider: string;

  @Column
  resetPasswordToken: string;

  @Column
  resetPasswordExpires: number;

  @Column
  gender: string;

  @HasMany(() => AddressModel)
  addresses: AddressModel[]

  @Column
  status: string;
}
