import { Request, Response } from "express";
import { editProductHandler } from "../../handlers/products/editProductHandler";

const editProductController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const productData = req.body;

  try {
    const updatedProduct = await editProductHandler(
      parseInt(id, 10),
      productData
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json(updatedProduct);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export default editProductController;
