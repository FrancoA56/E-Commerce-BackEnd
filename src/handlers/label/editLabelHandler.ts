import { Label } from "../../db";
import { LabelInput } from "../../utils/interface";

export const editLabelHandler = async (
  labelId: number,
  labelData: LabelInput
): Promise<InstanceType<typeof Label> | null> => {
  try {
    const label = await Label.findByPk(labelId);

    if (!label) {
      throw new Error("Label not found");
    }

    await label.update(labelData);

    return label;
  } catch (error) {
    throw new Error(`Failed to update label: ${(error as Error).message}`);
  }
};
