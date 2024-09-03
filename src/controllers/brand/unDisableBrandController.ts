import { Request, Response } from "express";
import { unDisableBrandHandler } from "../../handlers/brand/unDisableBrandHandler";

const unDisableBrandController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ error: "Brand ID is required" });
      return;
    }

    // Convertir el id a número y llamar al handler
    const brand = await unDisableBrandHandler(parseInt(id));

    if (!brand) {
      res.status(404).json({ error: "Brand not found" });
      return;
    }

    res.status(200).json({
      message:"Brand succesfully unDisabled",
      brand,
    });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export default unDisableBrandController;
