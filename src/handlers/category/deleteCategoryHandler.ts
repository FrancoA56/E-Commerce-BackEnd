import { Category } from "../../db";

export const deleteCategoryHandler = async (
  id: number
): Promise<void> => {
  try {
    // Buscar la etiqueta por su ID
    const category = await Category.findByPk(id);

    if (!category) {
      throw new Error("Category not found");
    }

    // Eliminar la etiqueta
    await Category.destroy({where: {id}});
  } catch (error) {
    throw new Error(`Failed to delete category: ${(error as Error).message}`);
  }
};
