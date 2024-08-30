import { Category } from "../../db";
import { CategoryInput } from "../../utils/interface";

export const addCategoryHandler = async (
  categoryData: CategoryInput
): Promise<InstanceType<typeof Category>> => {
  const { name, isDisable } = categoryData;

  // Validación de los datos requeridos
  if (!name) {
    throw new Error("Name is required to create the category");
  }

  try {
    // Crear la nueva etiqueta en la base de datos
    const newCategory = await Category.create({
      name,
      isDisable,
    });

    return newCategory;
  } catch (error) {
    throw new Error(`Failed to create category: ${(error as Error).message}`);
  }
};
