import { Model, Table, Column, ForeignKey } from "sequelize-typescript";
import Product from "./product";
import Category from "./category";

@Table
class ProductCategory extends Model<ProductCategory> {
  @ForeignKey(() => Product)
  @Column
  productId!: number;

  @ForeignKey(() => Category)
  @Column
  categoryId!: number;
}

export default ProductCategory;
