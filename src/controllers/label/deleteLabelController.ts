import { Request, Response } from "express";
import { deleteLabelHandler } from "../../handlers/label/deleteLabelHandler";

const deleteLabelController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ error: "Label ID is required" });
      return;
    }

    // Convertir el id a número y llamar al handler
    await deleteLabelHandler(parseInt(id));

    res.status(200).json({ message: "Label deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export default deleteLabelController;
