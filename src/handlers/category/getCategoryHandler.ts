import { Category } from "../../db";

export const getCategoryHandler = async (
  categoryId?: number
): Promise<
  InstanceType<typeof Category> | InstanceType<typeof Category>[] | null
> => {
  try {
    if (categoryId) {
      // Obtener una etiqueta específica por ID
      const category = await Category.findByPk(categoryId);
      return category;
    } else {
      // Obtener todas las etiquetas
      const categorys = await Category.findAll();
      return categorys;
    }
  } catch (error) {
    throw new Error(`Failed to retrieve category: ${(error as Error).message}`);
  }
};
