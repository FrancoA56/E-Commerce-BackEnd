import {
  Model,
  Table,
  Column,
  PrimaryKey,
  ForeignKey,
  CreatedAt,
  AutoIncrement,
  UpdatedAt,
} from "sequelize-typescript";
import Product from "./product";

@Table
class ProductGallery extends Model<ProductGallery> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @ForeignKey(() => Product)
  @Column
  productId!: number;

  @Column
  url!: string;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}

export default ProductGallery;
