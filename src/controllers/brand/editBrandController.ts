import { Request, Response } from "express";
import { editBrandHandler } from "../../handlers/brand/editBrandHandler";

const editBrandController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!id) {
      res.status(400).json({ error: "Brand ID is required" });
      return;
    }

    if (!name) {
      res.status(400).json({ error: "Nothing to update" });
      return;
    }

    const brandData = { name };
    const updatedBrand = await editBrandHandler(parseInt(id), brandData);

    if (!updatedBrand) {
      res.status(404).json({ error: "Brand not found" });
      return;
    }

    res.status(200).json(updatedBrand);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export default editBrandController;
