import { Request, Response } from "express";
import { deleteBrandHandler } from "../../handlers/brand/deleteBrandHandler";

const deleteBrandController = async (
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
    await deleteBrandHandler(parseInt(id));

    res.status(200).json({ message: "Brand deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export default deleteBrandController;
