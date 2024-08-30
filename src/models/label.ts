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
import ProductLabel from "./labelProduct";

@Table
class Label extends Model<Label> {
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
  @BelongsToMany(() => Product, () => ProductLabel)
  products?: Product[];
}

export default Label;
