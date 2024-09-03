import { Brand } from "../../db";

export const unDisableBrandHandler = async (
  id: number
): Promise<InstanceType<typeof Brand> | null> => {
  try {
    // Buscar la etiqueta por su ID
    const brand = await Brand.findByPk(id);

    if (!brand) {
      throw new Error("Brand not found");
    }

    // Guardar los cambios
    await Brand.update({ isDisable: false }, { where: { id } });

    return await Brand.findOne({ where: { id } });
  } catch (error) {
    throw new Error(
      `Failed to toggle brand's isDisable status: ${(error as Error).message}`
    );
  }
};
