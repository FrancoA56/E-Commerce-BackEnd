import { Model, Table, Column, ForeignKey } from "sequelize-typescript";
import Product from "./product";
import Label from "./label";

@Table
class ProductLabel extends Model<ProductLabel> {
  @ForeignKey(() => Product)
  @Column
  productId!: number;

  @ForeignKey(() => Label)
  @Column
  labelId!: number;
}

export default ProductLabel;
