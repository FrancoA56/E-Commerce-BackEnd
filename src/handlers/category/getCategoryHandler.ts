import { Category } from "../../db";

export const getCategoryHandler = async (
  categoryId?: number,
  paginationOptions?: { limit?: number; offset?: number }
): Promise<{ rows: InstanceType<typeof Category>[]; count: number }> => {
  try {
    if (categoryId) {
      // Obtener una categoría específica por ID
      const category = await Category.findByPk(categoryId);
      return { rows: category ? [category] : [], count: category ? 1 : 0 };
    } else {
      // Obtener todas las categorías con opciones de paginación
      const { limit, offset } = paginationOptions || {};
      const categorys = await Category.findAndCountAll({
        limit,
        offset,
      });
      return categorys; // { rows: [...], count: total }
    }
  } catch (error) {
    throw new Error(`Failed to retrieve category: ${(error as Error).message}`);
  }
};
