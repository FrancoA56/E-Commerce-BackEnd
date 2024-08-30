import { Request, Response } from "express";
import { editLabelHandler } from "../../handlers/label/editLabelHandler";

const editLabelController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!id) {
      res.status(400).json({ error: "Label ID is required" });
      return;
    }

    if (!name) {
      res.status(400).json({ error: "Nothing to update" });
      return;
    }

    const labelData = { name };
    const updatedLabel = await editLabelHandler(parseInt(id), labelData);

    if (!updatedLabel) {
      res.status(404).json({ error: "Label not found" });
      return;
    }

    res.status(200).json(updatedLabel);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export default editLabelController;
