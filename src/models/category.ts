import {
  Model,
  Table,
  Column,
  PrimaryKey,
  AutoIncrement,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  IsDate,
  Default,
  BelongsToMany,
} from "sequelize-typescript";
import Product from "./product";
import ProductCategory from "./categoryProduct";

@Table
class Category extends Model<Category> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column
  name!: string;

  @Default(false)
  @Column
  isDisable!: boolean;

  @IsDate
  @CreatedAt
  @Column
  createdAt!: Date;

  @IsDate
  @UpdatedAt
  @Column
  updatedAt?: Date;

  @IsDate
  @DeletedAt
  @Column
  deletedAt?: Date;

  // Relación muchos a muchos con Product
  @BelongsToMany(() => Product, () => ProductCategory)
  products?: Product[];
}

export default Category;
