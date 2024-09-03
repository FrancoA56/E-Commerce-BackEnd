import { Label } from "../../db";

export const unDisableLabelHandler = async (
  id: number
): Promise<InstanceType<typeof Label> | null> => {
  try {
    // Buscar la etiqueta por su ID
    const label = await Label.findByPk(id);

    if (!label) {
      throw new Error("Label not found");
    }

    // Guardar los cambios
    await Label.update({ isDisable: false }, { where: { id } });

    return await Label.findOne({ where: { id } });
  } catch (error) {
    throw new Error(
      `Failed to toggle label's isDisable status: ${(error as Error).message}`
    );
  }
};
