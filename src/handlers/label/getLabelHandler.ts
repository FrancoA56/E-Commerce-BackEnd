import { Label } from "../../db";

export const getLabelHandler = async (
  labelId?: number
): Promise<
  InstanceType<typeof Label> | InstanceType<typeof Label>[] | null
> => {
  try {
    if (labelId) {
      // Obtener una etiqueta específica por ID
      const label = await Label.findByPk(labelId);
      return label;
    } else {
      // Obtener todas las etiquetas
      const labels = await Label.findAll();
      return labels;
    }
  } catch (error) {
    throw new Error(`Failed to retrieve labels: ${(error as Error).message}`);
  }
};
