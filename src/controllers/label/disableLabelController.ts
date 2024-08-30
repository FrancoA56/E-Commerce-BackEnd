import { Request, Response } from "express";
import { disableLabelHandler } from "../../handlers/label/disableLabelHandler";

const disableLabelController = async (
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
    const label = await disableLabelHandler(parseInt(id));

    if (!label) {
      res.status(404).json({ error: "Label not found" });
      return;
    }

    res
      .status(200)
      .json({
        message: `Label ${
          label.dataValues.isDisable ? "disabled" : "enabled"
        } successfully`,
        label,
      });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export default disableLabelController;
