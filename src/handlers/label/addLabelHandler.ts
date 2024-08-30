import { Label } from "../../db";
import { LabelInput } from "../../utils/interface";

export const addLabelHandler = async (
  labelData: LabelInput
): Promise<InstanceType<typeof Label>> => {
  const { name, isDisable } = labelData;

  // Validación de los datos requeridos
  if (!name) {
    throw new Error("Name is required to create the label");
  }

  try {
    // Crear la nueva etiqueta en la base de datos
    const newLabel = await Label.create({
      name,
      isDisable,
    });

    return newLabel;
  } catch (error) {
    throw new Error(`Failed to create label: ${(error as Error).message}`);
  }
};
