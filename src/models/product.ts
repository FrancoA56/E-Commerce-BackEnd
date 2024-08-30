import {
  Model,
  Table,
  Column,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  Length,
  IsDate,
  AutoIncrement,
  HasMany,
  DataType,
  Default,
  BelongsToMany,
} from "sequelize-typescript";
import ProductGallery from "./productGallery";
import InvoiceDetail from "./invoiceItems";
import CartDetail from "./cartDetail";
import Review from "./review";
import OrderDetail from "./orderItems";
import Category from "./category";
import Label from "./label";
import ProductCategory from "./categoryProduct";
import ProductLabel from "./labelProduct";
import { NonAttribute } from "sequelize";

@Table
class Product extends Model<Product> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Length({ min: 2, max: 30 })
  @Column
  name!: string;

  @Length({ min: 2, max: 10 })
  @Column
  code!: string;

  @Column
  price!: number;

  @Column
  image!: string;

  @Length({ max: 350 }) // Descripción corta con máximo 350 caracteres
  @Column
  shortDescription?: string;

  @Column(DataType.TEXT) // Descripción larga sin límite
  longDescription?: string;

  @Column(DataType.TEXT) // Instrucciones sin límite
  instructions?: string;

  @Default(false)
  @Column
  isDisable!: boolean;

  @IsDate
  @Column
  releasedAt!: Date;

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

  // Relación muchos a muchos con Category
  @BelongsToMany(() => Category, () => ProductCategory)
  categories?: NonAttribute<Category[]>;

  // Relación muchos a muchos con Label
  @BelongsToMany(() => Label, () => ProductLabel)
  labels?: NonAttribute<Label[]>;

  @HasMany(() => InvoiceDetail, { as: 'invoiceDetails' })
  invoiceDetails?: NonAttribute<InvoiceDetail[]>;

  @HasMany(() => OrderDetail, { as: 'orderDetails' })
  orderDetails?: NonAttribute<OrderDetail[]>;

  @HasMany(() => CartDetail, { as: 'cartDetails' })
  cartDetails?: NonAttribute<CartDetail[]>;

  @HasMany(() => ProductGallery, { as: 'gallery' })
  gallery?: NonAttribute<ProductGallery[]>;

  @HasMany(() => Review, { as: 'reviews' })
  reviews?: NonAttribute<Review[]>;
}

export default Product;
