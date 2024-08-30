import { Category } from "../../db";

export const deleteCategoryHandler = async (
  categoryId: number
): Promise<void> => {
  try {
    // Buscar la etiqueta por su ID
    const category = await Category.findByPk(categoryId);

    if (!category) {
      throw new Error("Category not found");
    }

    // Eliminar la etiqueta
    await category.destroy();
  } catch (error) {
    throw new Error(`Failed to delete category: ${(error as Error).message}`);
  }
};
