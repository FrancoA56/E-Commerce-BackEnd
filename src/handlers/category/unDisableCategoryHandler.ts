import { Category } from "../../db";

export const unDisableCategoryHandler = async (
  id: number
): Promise<InstanceType<typeof Category> | null> => {
  try {
    // Buscar la etiqueta por su ID
    const category = await Category.findByPk(id);

    if (!category) {
      throw new Error("Category not found");
    }

    // Guardar los cambios
    await Category.update({ isDisable: false }, { where: { id } });

    return await Category.findOne({ where: { id } });
  } catch (error) {
    throw new Error(
      `Failed to toggle category's isDisable status: ${
        (error as Error).message
      }`
    );
  }
};
