import { Category } from "../../db";
import { CategoryInput } from "../../utils/interface";

export const editCategoryHandler = async (
  categoryId: number,
  categoryData: CategoryInput
): Promise<InstanceType<typeof Category> | null> => {
  try {
    const category = await Category.findByPk(categoryId);

    if (!category) {
      throw new Error("Category not found");
    }

    await category.update(categoryData);

    return category;
  } catch (error) {
    throw new Error(`Failed to update category: ${(error as Error).message}`);
  }
};
