// handlers/addBrandHandler.ts
import { Request, Response } from "express";
import { addBrandHandler } from "../../handlers/brand/addBrandHandler";

// Handler para agregar una nueva marca
const addBrandController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    interface Brand {
      name?: string;
      isDisable?: boolean;
    }
    // Desestructuración del cuerpo de la solicitud
    const { name, isDisable }: Brand = req.body;

    // Validar datos de entrada
    if (!name) {
      res.status(400).json({ error: "Missing required name" });
      return;
    }

    const brand = await addBrandHandler({
        name,
        isDisable
    });

    // Enviar respuesta
    res
      .status(201)
      .json({ message: "Brand succesfully created", brand: brand });
  } catch (error) {
    // Manejar errores
    throw new Error(`Failed to create brand: ${(error as Error).message}`);
  }
};

export default addBrandController;
