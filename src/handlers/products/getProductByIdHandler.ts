import { Product } from "../../db";

export const getProductByIdHandler = async (id: number) => {
  const product = await Product.findByPk(id, {
    include: [
      { association: "gallery" },
      { association: "invoiceDetails" },
      { association: "orderDetails" },
      { association: "cartDetails" },
      { association: "reviews" },
    ],
  });

  if (!product) {
    throw new Error(`Product with ID ${id} not found`);
  }

  return product;
};
