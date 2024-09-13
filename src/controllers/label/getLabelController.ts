import { Request, Response } from "express";
import { getLabelHandler } from "../../handlers/label/getLabelHandler";

const getLabelController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    if (id) {
      // Si se proporciona un ID, obtener la etiqueta específica
      const label = await getLabelHandler({ start: 0, end: 1 });

      if (!label) {
        res.status(404).json({ error: "Label not found" });
        return;
      }

      res.status(200).json(label);
    } else {
      // Obtener los parámetros de consulta para la paginación y el orden
      const { _start, _end, _sort, _order } = req.query;

      const start = _start ? parseInt(_start as string, 10) : 0;
      const end = _end ? parseInt(_end as string, 10) : 10;
      const sort = (_sort as string) || 'id';
      const order = (_order as string)?.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

      // Obtener las etiquetas que no están deshabilitadas
      const { labels, totalCount } = await getLabelHandler({
        start,
        end,
        sort,
        order
      });

      // Incluir el encabezado `X-Total-Count` para la paginación
      res.set('X-Total-Count', totalCount.toString());
      res.set('Access-Control-Expose-Headers', 'X-Total-Count');

      // Enviar la respuesta con las etiquetas
      res.status(200).json(labels);
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export default getLabelController;
