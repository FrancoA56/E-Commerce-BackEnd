import { Request, Response } from "express";
import { getBrandHandler } from "../../handlers/brand/getBrandHandler";

const getBrandController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    let brand;

    if (id) {
      // Si se proporciona un ID, obtener la etiqueta específica
      brand = await getBrandHandler(parseInt(id));

      if (!brand) {
        res.status(404).json({ error: "Brand not found" });
        return;
      }
    } else {
      // Si no se proporciona un ID, obtener todas las etiquetas
      brand = await getBrandHandler();
    }

    res.status(200).json(brand);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export default getBrandController;
