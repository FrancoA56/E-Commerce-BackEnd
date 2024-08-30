import { Category } from "../../db";

export const disableCategoryHandler = async (
  categoryId: number
): Promise<InstanceType<typeof Category> | null> => {
  try {
    // Buscar la etiqueta por su ID
    const category = await Category.findByPk(categoryId);

    if (!category) {
      throw new Error("Category not found");
    }

    // Alternar el valor de isDisable
    category.dataValues.isDisable = !category.dataValues.isDisable;

    // Guardar los cambios
    await category.save();

    return category;
  } catch (error) {
    throw new Error(
      `Failed to toggle category's isDisable status: ${
        (error as Error).message
      }`
    );
  }
};
