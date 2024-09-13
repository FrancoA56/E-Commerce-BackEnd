import { Brand } from "../../db";

export const getBrandHandler = async (
  brandId?: number,
  paginationOptions?: { limit?: number; offset?: number }
): Promise<{rows: InstanceType<typeof Brand>[]; count: number }> => {
  try {
    if (brandId) {
      // Obtener una etiqueta específica por ID
      const brand = await Brand.findByPk(brandId);
      return { rows: brand ? [brand] : [], count: brand ? 1 : 0 };
    } else {
      // Obtener todas las marcas
      const { limit, offset } = paginationOptions || {};
      const brands = await Brand.findAndCountAll({
        limit,
        offset
      });
      return brands;
    }
  } catch (error) {
    throw new Error(`Failed to retrieve brand: ${(error as Error).message}`);
  }
};
