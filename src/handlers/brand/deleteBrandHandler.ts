import { Brand } from "../../db";

export const deleteBrandHandler = async (id: number): Promise<void> => {
  try {
    // Buscar la etiqueta por su ID
    const brand = await Brand.findByPk(id);

    if (!brand) {
      throw new Error("Brand not found");
    }

    // Eliminar la etiqueta
    await Brand.destroy({ where: { id } });
  } catch (error) {
    throw new Error(`Failed to delete brand: ${(error as Error).message}`);
  }
};
