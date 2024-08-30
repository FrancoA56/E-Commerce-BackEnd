import { Product } from "../../db"; // Asegúrate de ajustar la ruta según tu estructura de proyecto

export const disableProductHandler = async (id: number) => {
  try {
    // Busca el producto por ID
    const product = await Product.findByPk(id);

    if (!product) {
      throw new Error("Product not found");
    }

    // Alterna el valor de isDisable
    product.dataValues.isDisable = !product.dataValues.isDisable;

    // Guarda el producto actualizado en la base de datos
    await product.save();

    return {
      message: `Product ${
        product.dataValues.isDisable ? "disabled" : "enabled"
      } successfully`,
      product,
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
};
