import { Product } from "../../db"; // Asegúrate de ajustar la ruta según tu estructura de proyecto

export const deleteProductHandler = async (id: number) => {
  try {
    // Busca el producto por ID
    const product = await Product.findByPk(id);

    if (!product) {
      throw new Error("Product not found");
    }

    // Elimina el producto
    await product.destroy();

    return {
      message: "Product deleted successfully",
      productId: id,
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
};
