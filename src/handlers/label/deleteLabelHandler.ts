import { Label } from "../../db";

export const deleteLabelHandler = async (labelId: number): Promise<void> => {
  try {
    // Buscar la etiqueta por su ID
    const label = await Label.findByPk(labelId);

    if (!label) {
      throw new Error("Label not found");
    }

    // Eliminar la etiqueta
    await label.destroy();
  } catch (error) {
    throw new Error(`Failed to delete label: ${(error as Error).message}`);
  }
};
