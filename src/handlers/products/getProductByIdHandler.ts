import { Product } from "../../db";

export const getProductByIdHandler = async (id: number) => {
  const product = await Product.findByPk(id, {
    include: [
      { association: "gallery" },
      { association: "invoiceDetails" },
      { association: "cart" },
      { association: "reviews" },
      { association: "categories" },
      { association: "labels" },
      { association: "brand" },
    ],
  });

  if (!product) {
    throw new Error(`Product with ID ${id} not found`);
  }

  return product;
};
