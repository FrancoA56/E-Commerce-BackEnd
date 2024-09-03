import { Request, Response } from "express";
import { unDisableProductHandler } from "../../handlers/products/unDisableProductHandler";

const unDisableProductController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Llama al handler para deshabilitar/habilitar el producto
    const result = await unDisableProductHandler(Number(id));

    // Envía la respuesta al cliente
    return res.status(200).json(result);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export default unDisableProductController;
