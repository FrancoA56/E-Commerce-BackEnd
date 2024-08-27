import {
  Model,
  Table,
  Column,
  IsEmail,
  BelongsTo,
  HasMany,
  ForeignKey,
  IsDate,
  CreatedAt,
  PrimaryKey,
  AutoIncrement,
} from "sequelize-typescript";
import User from "./user";
import Product from "./product";

@Table
class CartDetail extends Model<CartDetail> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @IsDate
  @CreatedAt
  @Column
  createdAt!: Date;

  @IsEmail
  @Column
  @ForeignKey(() => User)
  userEmail!: string;

  @BelongsTo(() => User)
  user!: User;

  @ForeignKey(() => Product)
  @Column
  productId!: number;

  @BelongsTo(() => Product)
  product!: Product;
}

export default CartDetail;
