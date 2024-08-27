import { 
    Model, 
    Table, 
    Column, 
    BelongsTo, 
    ForeignKey,
    AutoIncrement,
    PrimaryKey
  } from "sequelize-typescript";
  import Product from "./product";
  import Invoice from "./invoice";
  
  @Table
  class InvoiceItem extends Model<InvoiceItem> {
  
    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;
  
    @Column
    price!: number;
  
    @ForeignKey(() => Product)
    @Column
    presetId!: number;
  
    @ForeignKey(() => Invoice)
    @Column
    invoiceId!: number;
  
    @BelongsTo(() => Product)
    preset!: Product;
  
    @BelongsTo(() => Invoice)
    invoice!: Invoice;
  
  }
  
  export default InvoiceItem;
  