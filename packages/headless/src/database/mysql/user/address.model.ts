import { Model, Table, Column, ForeignKey, BelongsTo } from "sequelize-typescript"
import { Address } from "src/entity/user"
import UserModel from "./user.model"

@Table({
    tableName: 'Address',
    timestamps: false,
    version: false
})
export default class AddressModel extends Model<Address> {
    @Column
    addressLine1: String

    @Column
    addressLine2: String

    @Column
    city: String

    @Column
    country: String

    @Column
    postCode: String

    @ForeignKey(() => UserModel)
    @Column
    userId: number

    @BelongsTo(() => UserModel)
    user: UserModel
}

