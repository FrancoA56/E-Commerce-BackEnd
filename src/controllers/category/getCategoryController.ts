import { Request, Response } from "express";
import { getCategoryHandler } from "../../handlers/category/getCategoryHandler";

const getCategoryController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    let category;

    if (id) {
      // Si se proporciona un ID, obtener la etiqueta específica
      category = await getCategoryHandler(parseInt(id));

      if (!category) {
        res.status(404).json({ error: "Category not found" });
        return;
      }
    } else {
      // Si no se proporciona un ID, obtener todas las etiquetas
      category = await getCategoryHandler();
    }

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export default getCategoryController;
