import { Product } from "../../db"; // Asegúrate de ajustar la ruta según tu estructura de proyecto

export const disableProductHandler = async (id: number) => {
  try {
    // Busca el producto por ID
    const product = await Product.findByPk(id);

    if (!product) {
      throw new Error("Product not found");
    }

    await Product.update({ isDisable: true }, { where: { id } });

    return {
      message: `Product succesfully disabled`,
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
};
