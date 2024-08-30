import { Request, Response } from "express";
import { addCategoryHandler } from "../../handlers/category/addCategoryHandler";

const addCategoryController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    interface Category {
      name?: string;
      isDisable?: boolean;
    }
    
    const { name, isDisable }: Category = req.body;

    // Verificación de existencia del campo obligatorio 'name'
    if (!name) {
      res.status(400).json({ error: "Name is required to create the category" });
      return;
    }

    const category = await addCategoryHandler({
      name,
      isDisable,
    });

    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export default addCategoryController;
