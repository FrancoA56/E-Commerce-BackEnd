import {
  Model,
  Table,
  Column,
  Validate,
  Length,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  IsEmail,
  BelongsTo,
} from "sequelize-typescript";
import User from "./user";
import Product from "./product";

@Table
class Review extends Model<Review> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Validate({
    min: 1,
    max: 5,
  })
  @Column
  rating!: number;

  @Length({ max: 400 })
  @Column
  ratingMessage!: string;

  @ForeignKey(() => User)
  @IsEmail
  @Column
  userEmail!: string;

  @ForeignKey(() => Product)
  @Column
  productId!: number;

  @BelongsTo(() => Product)
  product!: Product;

  @BelongsTo(() => User)
  user!: User;
}

export default Review;
