import {
  Model,
  Table,
  Column,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  AutoIncrement,
  HasMany,
  Default,
} from "sequelize-typescript";
import Product from "./product"; // Importa el modelo de Product

@Table
class Brand extends Model<Brand> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column
  name!: string;

  @Default(false) // Valor por defecto false
  @Column
  isDisable!: boolean;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt?: Date;

  @DeletedAt
  @Column
  deletedAt?: Date;

  // Relación uno a muchos con Product
  @HasMany(() => Product)
  products?: Product[];
}

export default Brand;
