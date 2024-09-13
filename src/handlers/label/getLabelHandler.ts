import { Label } from "../../db";
import { Op } from "sequelize";

export const getLabelHandler = async (
  options?: {
    start?: number;
    end?: number;
    sort?: string;
    order?: 'ASC' | 'DESC';
  }
): Promise<{ labels: InstanceType<typeof Label>[]; totalCount: number }> => {
  try {
    const { start = 0, end = 10, sort = 'id', order = 'ASC' } = options || {};

    // Filtrar solo las etiquetas que no están deshabilitadas (isDisable: false)
    const whereCondition = { isDisable: false };

    // Obtener el número total de etiquetas no deshabilitadas
    const totalCount = await Label.count({ where: whereCondition });

    // Obtener etiquetas con paginación, orden, y filtro de isDisable
    const labels = await Label.findAll({
      where: whereCondition,
      order: [[sort, order]],
      offset: start,
      limit: end - start
    });

    return { labels, totalCount };
  } catch (error) {
    throw new Error(`Failed to retrieve labels: ${(error as Error).message}`);
  }
};
