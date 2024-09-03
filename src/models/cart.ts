import {
  Model,
  Table,
  Column,
  BelongsTo,
  HasMany,
  ForeignKey,
  IsDate,
  CreatedAt,
  PrimaryKey,
  AutoIncrement
} from "sequelize-typescript";
import User from "./user";
import CartProduct from "./cartProduct";

@Table
class Cart extends Model<Cart> {

  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @IsDate
  @CreatedAt
  @Column
  createdAt!: Date;

  @ForeignKey(() => User)
  @Column
  userEmail!: string;

  @BelongsTo(() => User)
  user!: User;

  @HasMany(() => CartProduct)
  cartProducts!: CartProduct[];
}

export default Cart;
