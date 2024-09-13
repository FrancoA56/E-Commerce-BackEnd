import { Request, Response } from "express";
import { getCategoryHandler } from "../../handlers/category/getCategoryHandler";

const getCategoryController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    let category;
    let totalCount;

    if (id) {
      // Si se proporciona un ID, obtener la categoría específica
      category = await getCategoryHandler(parseInt(id));

      if (!category.rows.length) {
        res.status(404).json({ error: "Category not found" });
        return;
      }

      totalCount = category.count;
    } else {
      // Obtener parámetros de paginación desde la query (admin panel request)
      const limit = req.query._end
        ? parseInt(req.query._end as string) -
          parseInt(req.query._start as string)
        : undefined;
      const offset = req.query._start
        ? parseInt(req.query._start as string)
        : undefined;

      // Si no se proporciona un ID, obtener todas las categorías
      category = await getCategoryHandler(undefined, { limit, offset });

      totalCount = category.count;
    }

    // Establecer el encabezado x-total-count con el total de categorías
    res.setHeader("x-total-count", totalCount);
    res.status(200).json(category.rows);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export default getCategoryController;
