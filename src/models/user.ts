import {
  Model,
  Table,
  Column,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  IsEmail,
  Length,
  DataType,
  Default,
  IsUrl,
  IsDate,
  HasMany,
  HasOne,
  AutoIncrement,
} from "sequelize-typescript";
import Invoice from "./invoice";
import Review from "./review";
import Cart from "./cart";
import { UserRoles, UserTypes } from "../utils/enums";

@Table
class User extends Model<User> {
  @AutoIncrement
  @Column
  id?: number;

  @PrimaryKey
  @IsEmail
  @Column
  email!: string;

  @Length({ min: 8 })
  @Column
  password!: string;

  @Length({ min: 2, max: 30 })
  @Column
  name!: string;

  @IsUrl
  @Column
  logo?: string;

  @Column
  firstname?: string;

  @Column
  lastname?: string;

  @Column
  country?: string;

  @Column
  address?: string;

  @Column
  city?: string;

  @Column
  state?: string;

  @Column
  zipcode!: number;

  @Column
  phone!: number;

  @Default(UserRoles.CLIENT)
  @Column({
    type: DataType.ENUM(...Object.values(UserRoles)),
  })
  role!: string;

  @Default(UserTypes.WEB)
  @Column({
    type: DataType.ENUM(...Object.values(UserTypes)),
  })
  type!: string;

  @Default(false)
  @Column
  isDisabled!: boolean;

  @IsDate
  @CreatedAt
  @Column
  createdAt!: Date;

  @IsDate
  @UpdatedAt
  @Column
  updatedAt!: Date;

  @IsDate
  @DeletedAt
  @Column
  deletedAt?: Date;

  @HasMany(() => Invoice)
  invoices!: Invoice[];

  @HasMany(() => Review)
  reviews!: Review[];

  @HasMany(() => Cart)
  carts!: Cart[];
}

export default User;
