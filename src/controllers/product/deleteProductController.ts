import { Request, Response } from "express";
import { deleteProductHandler } from "../../handlers/products/deleteProductHandler";

const deleteProductController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Llama al handler para eliminar el producto
    const result = await deleteProductHandler(Number(id));

    // Envía la respuesta al cliente
    return res.status(200).json(result);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export default deleteProductController;
