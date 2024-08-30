import { Brand } from "../../db";

export const disableBrandHandler = async (
    brandId: number
): Promise<InstanceType<typeof Brand> | null> => {
  try {
    // Buscar la etiqueta por su ID
    const brand = await Brand.findByPk(brandId);

    if (!brand) {
      throw new Error("Brand not found");
    }

    // Alternar el valor de isDisable
    brand.dataValues.isDisable = !brand.dataValues.isDisable;

    // Guardar los cambios
    await brand.save();

    return brand;
  } catch (error) {
    throw new Error(
      `Failed to toggle brand's isDisable status: ${
        (error as Error).message
      }`
    );
  }
};
