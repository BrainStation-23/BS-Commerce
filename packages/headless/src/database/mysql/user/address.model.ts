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
    version: false,
})
export default class AddressModel extends Model {
    @PrimaryKey
    @Unique(true)
    @Default(() => randomUUID())
    @Column
    id: String;

    @Column
    addressLine1: String;

    @Column
    addressLine2: String;

    @Column
    city: String;

    @Column
    country: String;

    @Column
    postCode: String;

    @ForeignKey(() => UserModel)
    userId: number;

    @BelongsTo(() => UserModel)
    user: UserModel;
}
