import {
    Model,
    Table,
    Column,
    BelongsTo,
    ForeignKey,
    PrimaryKey,
    AutoIncrement
  } from "sequelize-typescript";
  
  import Product from "./product";
  import Order from "./order";
  
  @Table
  class OrderItem extends Model<OrderItem> {
  
    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;
  
    @ForeignKey(() => Product)
    @Column
    presetId!: number;
  
    @ForeignKey(() => Order)
    @Column
    orderId!: number;
  
    @BelongsTo(() => Product)
    preset!: Product;
  
    @BelongsTo(() => Order)
    order!: Order;
  }
  
  export default OrderItem;