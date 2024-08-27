import {
    Model,
    Table,
    Column,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
  } from "sequelize-typescript";
  import Product from "./product";
  
  @Table
  class ProductGallery extends Model<ProductGallery> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;
  
    @Column
    url: string;
  
    @ForeignKey(() => Product)
    productId: number;
  }
  
  export default ProductGallery;