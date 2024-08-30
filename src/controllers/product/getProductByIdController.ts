import { Request, Response } from "express";
import { getProductByIdHandler } from "../../handlers/products/getProductByIdHandler";

const getProductByIdController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    // Convert the id from string to number
    const productId = parseInt(id, 10);

    if (isNaN(productId)) {
      res.status(400).json({ error: "Invalid product ID" });
      return;
    }

    const product = await getProductByIdHandler(productId);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export default getProductByIdController;
