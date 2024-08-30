import { Request, Response } from "express";
import { addLabelHandler } from "../../handlers/label/addLabelHandler";

const addLabelController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    interface Label {
      name?: string;
      isDisable?: boolean;
    }

    const { name, isDisable }: Label = req.body;

    // Verificación de existencia del campo obligatorio 'name'
    if (!name) {
      res.status(400).json({ error: "Name is required to create the label" });
      return;
    }

    const label = await addLabelHandler({
      name,
      isDisable,
    });

    res.status(201).json(label);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export default addLabelController;
