import {
    Model,
    Table,
    Column,
    PrimaryKey,
    CreatedAt,
    UpdatedAt,
    DeletedAt,
    IsEmail,
    Length,
    Default,
    IsUrl,
    IsDate,
    HasMany,
    HasOne,
    AutoIncrement,
  } from "sequelize-typescript";
  
  import Invoice from "./invoice";
  import Order from "./order";
  import Review from "./review";
  import Cart from "./cartDetail";
  
  @Table
  class User extends Model<User> {
    
    @AutoIncrement
    @Column
    id?:number;
  
    @IsEmail
    @PrimaryKey
    @Column
    email!: string;
  
    @Length({ min: 8 })
    @Column
    password!: string;
  
    @Length({ min: 2, max: 30 })
    @Column
    name!: string;
  
    @IsUrl
    @Column
    logo!: string;
  
    @Column
    firstname!: string;
  
    @Column
    lastname!: string;
  
    @Column
    country!: string;
  
    @Column
    city!: string;
  
    @Column
    zipcode!: number;
  
    @Default(false)
    @Column
    isDisabled!: boolean;
  
    @IsDate
    @CreatedAt
    @Column
    createdAt!: Date;
  
    @IsDate
    @UpdatedAt
    @Column
    updatedAt!: Date;
  
    @IsDate
    @DeletedAt
    @Column
    deletedAt?: Date;
  
    @HasMany(() => Invoice)
    invoices!: Invoice[];
  
    @HasOne(() => Order)
    order!: Order;
  
    @HasMany(() => Review)
    reviews!: Review[];
  
    @HasMany(() => Cart)
    cart!: Cart[];
  }
  
  export default User;
  