import { Request, Response } from "express";
import { disableProductHandler } from "../../handlers/products/disableProductHandler";

const disableProductController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Llama al handler para deshabilitar/habilitar el producto
    const result = await disableProductHandler(Number(id));

    // Envía la respuesta al cliente
    return res.status(200).json(result);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export default disableProductController;
