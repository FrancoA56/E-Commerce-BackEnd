import { Request, Response } from "express";
import { getLabelHandler } from "../../handlers/label/getLabelHandler";

const getLabelController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    let label;

    if (id) {
      // Si se proporciona un ID, obtener la etiqueta específica
      label = await getLabelHandler(parseInt(id));

      if (!label) {
        res.status(404).json({ error: "Label not found" });
        return;
      }
    } else {
      // Si no se proporciona un ID, obtener todas las etiquetas
      label = await getLabelHandler();
    }

    res.status(200).json(label);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export default getLabelController;
