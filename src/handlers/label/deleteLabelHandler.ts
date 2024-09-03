import { Label } from "../../db";

export const deleteLabelHandler = async (id: number): Promise<void> => {
  try {
    // Buscar la etiqueta por su ID
    const label = await Label.findByPk(id);

    if (!label) {
      throw new Error("Label not found");
    }

    // Eliminar la etiqueta
    await Label.destroy({ where: { id } });
  } catch (error) {
    throw new Error(`Failed to delete label: ${(error as Error).message}`);
  }
};
