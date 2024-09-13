import { Request, Response } from "express";
import { getBrandHandler } from "../../handlers/brand/getBrandHandler";
import { Category } from "../../db";
import { parse } from "path";

const getBrandController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    let brand;
    let totalCount;

    if (id) {
      // Si se proporciona un ID, obtener la etiqueta específica
      brand = await getBrandHandler(parseInt(id));

      if (!brand.rows.length) {
        res.status(404).json({ error: "Brand not found" });
        return;
      }
      totalCount = brand.count;
    } else {
      // Si no se proporciona un ID, obtener todas las etiquetas
      const limit = req.query._end
        ? parseInt(req.query._end as string) -
          parseInt(req.query._start as string)
        : undefined;
      const offset = req.query._start
        ? parseInt(req.query._start as string)
        : undefined;
      brand = await getBrandHandler(undefined, { limit, offset });
      totalCount = brand.count;
    }

    // Establecer el encabezado x-total-count con el total de categorías
    res.setHeader("x-total-count", totalCount);
    res.status(200).json(brand.rows);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export default getBrandController;
