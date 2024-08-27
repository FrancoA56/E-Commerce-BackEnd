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
  } from "sequelize-typescript";
  import ProductGallery from "./productGallery";
  import InvoiceDetail from "./invoiceItems";
  import CartDetail from "./cartDetail";
  import Review from "./review";
  import OrderDetail from "./orderItems";
  import { HasManySetAssociationsMixin, NonAttribute } from "sequelize";
  
  enum ProductCategories {
    BRAND = "brand",
    // Puedes agregar más categorías según sea necesario
  }
  
  enum ProductLabel {
    BLACKFRIDAY = "blackFriday",
    DISCOUNT5 = "discount5",
    DISCOUNT10 = "discount10",
    DISCOUNT15 = "discount15",
    DISCOUNT20 = "discount20", // Cambiado para tener un valor único
    DISCOUNT30 = "discount30", // Cambiado para tener un valor único
    NEW = "new",
  }
  
  const productCategories = Object.values(ProductCategories);
  const productLabel = Object.values(ProductLabel);
  
  @Table
  class Product extends Model<Product> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;
  
    @Length({ min: 2, max: 20 })
    @Column
    name!: string;
  
    @Column
    price!: number;
  
    @Column({
      type: DataType.ENUM(...productCategories),
      allowNull: false,
    })
    category!: ProductCategories;
  
    @Column({
      type: DataType.ENUM(...productLabel),
      allowNull: false,
    })
    label!: ProductLabel;
  
    @Column
    image!: string;
  
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
  