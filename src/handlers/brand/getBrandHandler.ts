import { Brand } from "../../db";

export const getBrandHandler = async (
  brandId?: number
): Promise<
  InstanceType<typeof Brand> | InstanceType<typeof Brand>[] | null
> => {
  try {
    if (brandId) {
      // Obtener una etiqueta específica por ID
      const brand = await Brand.findByPk(brandId);
      return brand;
    } else {
      // Obtener todas las etiquetas
      const brands = await Brand.findAll();
      return brands;
    }
  } catch (error) {
    throw new Error(`Failed to retrieve brand: ${(error as Error).message}`);
  }
};
