import { Request, Response } from "express";
import { unDisableCategoryHandler } from "../../handlers/category/unDisableCategoryHandler";

const unDisableCategoryController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ error: "Category ID is required" });
      return;
    }

    // Convertir el id a número y llamar al handler
    const category = await unDisableCategoryHandler(parseInt(id));

    if (!category) {
      res.status(404).json({ error: "Category not found" });
      return;
    }

    res
      .status(200)
      .json({
        message: `Category succesfully abled`,
        category,
      });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export default unDisableCategoryController;
