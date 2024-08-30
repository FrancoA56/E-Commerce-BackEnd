import { Request, Response } from "express";
import { deleteCategoryHandler } from "../../handlers/category/deleteCategoryHandler";

const deleteCategoryController = async (
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
    await deleteCategoryHandler(parseInt(id));

    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export default deleteCategoryController;
