// handlers/addBrandHandler.ts
import { Brand } from "../../db";
import { BrandInput } from "../../utils/interface";

// Handler para agregar una nueva marca
export const addBrandHandler = async (
  productData: BrandInput
): Promise<InstanceType<typeof Brand>> => {
  const { name, isDisable } = productData;

  if (!name) {
    throw new Error("Missing required name to create the brand");
  }

  // Crear una nueva marca en la base de datos
  const newBrand = await Brand.create({ name, isDisable });

  return newBrand;
};
