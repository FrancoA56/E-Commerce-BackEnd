import { Brand } from "../../db";

export const deleteBrandHandler = async (brandId: number): Promise<void> => {
  try {
    // Buscar la etiqueta por su ID
    const brand = await Brand.findByPk(brandId);

    if (!brand) {
      throw new Error("Brand not found");
    }

    // Eliminar la etiqueta
    await brand.destroy();
  } catch (error) {
    throw new Error(`Failed to delete brand: ${(error as Error).message}`);
  }
};
