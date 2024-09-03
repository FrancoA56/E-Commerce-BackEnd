import {
  Model,
  Table,
  Column,
  BelongsTo,
  ForeignKey,
  PrimaryKey,
  AutoIncrement
} from "sequelize-typescript";
import Product from "./product";
import Cart from "./cart";
import User from "./user";

@Table
class CartProduct extends Model<CartProduct> {

  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @ForeignKey(() => Product)
  @Column
  productId!: number;

  @ForeignKey(() => Cart)
  @Column
  cartId!: number;

  @ForeignKey(() => User)
  @Column
  userName!: string;

  @BelongsTo(() => User)
  user!: User;

  @BelongsTo(() => Product)
  product!: Product;

  @BelongsTo(() => Cart)
  cart!: Cart;
}

export default CartProduct;
