import {
    Model,
    Table,
    Column,
    IsEmail,
    BelongsTo,
    HasMany,
    ForeignKey,
    IsDate,
    CreatedAt,
    PrimaryKey,
    AutoIncrement,
    DataType
  } from "sequelize-typescript";
  import User from "./user";
  import InvoiceItem from "./invoiceItems";
  import { PaymentMethod } from "../utils/enums";
  
  const paymentMethod = Object.values(PaymentMethod);
  
  @Table
  class Invoice extends Model<Invoice> {
  
    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;
  
    @Column
    totalAmount!: number;
  
    @Column({
      type: DataType.ENUM(...paymentMethod),
    })
    paymentMethod!: PaymentMethod;
  
    @Column
    isPaid!: boolean;
  
    @Column
    paymentId!: string;
  
    @IsDate
    @CreatedAt
    @Column
    createdAt!: Date;
  
    @IsEmail
    @Column
    @ForeignKey(() => User)
    userEmail!: string;
  
    @BelongsTo(() => User)
    user!: User;
  
    @HasMany(() => InvoiceItem)
    invoiceItems!: InvoiceItem[];
  
  }
  
  export default Invoice;
  