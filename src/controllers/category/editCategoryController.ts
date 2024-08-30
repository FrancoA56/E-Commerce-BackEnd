import { Request, Response } from "express";
import { editCategoryHandler } from "../../handlers/category/editCategoryHandler";

const editCategoryController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!id) {
      res.status(400).json({ error: "Category ID is required" });
      return;
    }

    if (!name) {
      res.status(400).json({ error: "Nothing to update" });
      return;
    }

    const categoryData = { name };
    const updatedCategory = await editCategoryHandler(parseInt(id), categoryData);

    if (!updatedCategory) {
      res.status(404).json({ error: "Category not found" });
      return;
    }

    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export default editCategoryController;