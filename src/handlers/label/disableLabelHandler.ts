import { Label } from "../../db";

export const disableLabelHandler = async (
  labelId: number
): Promise<InstanceType<typeof Label> | null> => {
  try {
    // Buscar la etiqueta por su ID
    const label = await Label.findByPk(labelId);

    if (!label) {
      throw new Error("Label not found");
    }

    // Alternar el valor de isDisable
    label.dataValues.isDisable = !label.dataValues.isDisable;

    // Guardar los cambios
    await label.save();

    return label;
  } catch (error) {
    throw new Error(
      `Failed to toggle label's isDisable status: ${(error as Error).message}`
    );
  }
};
