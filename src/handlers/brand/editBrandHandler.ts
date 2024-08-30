import { Brand } from "../../db";
import { BrandInput } from "../../utils/interface";

export const editBrandHandler = async (
  brandId: number,
  brandData: BrandInput
): Promise<InstanceType<typeof Brand> | null> => {
  try {
    const brand = await Brand.findByPk(brandId);

    if (!brand) {
      throw new Error("Brand not found");
    }

    await brand.update(brandData);

    return brand;
  } catch (error) {
    throw new Error(`Failed to update brand: ${(error as Error).message}`);
  }
};
