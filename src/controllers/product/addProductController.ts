import { Request, Response } from "express";
import { addProductHandler } from "../../handlers/products/addProductHandler";

const addProductController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    interface Product {
      name?: string;
      code?: string;
      price?: number;
      stock?: number;
      category?: number[]; // array of category IDs
      label?: number[]; // array of label IDs
      image?: string;
      brand?: number; // brand ID
      isDisable?: boolean;
      gallery?: string[];
      releasedAt?: string;
      shortDescription?: string; // Nueva propiedad
      longDescription?: string; // Nueva propiedad
      instructions?: string; // Nueva propiedad
    }

    const {
      name,
      code,
      price,
      stock,
      category,
      label,
      image,
      brand,
      isDisable,
      gallery,
      releasedAt,
      shortDescription,
      longDescription,
      instructions,
    }: Product = req.body;

    // Verificación de existencia de los campos obligatorios
    if (!name || !code || !price || !category || !image || !stock || !brand) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    // Verifica que 'category' sea un array
    if (!Array.isArray(category)) {
      res.status(400).json({ error: "Category must be an array of category IDs" });
      return;
    }

    // Verifica que 'label' sea un array si se proporciona
    if (label && !Array.isArray(label)) {
      res.status(400).json({ error: "Label must be an array of label IDs" });
      return;
    }

    const product = await addProductHandler({
      name,
      code,
      price,
      category,
      label,
      stock,
      brand,
      image,
      gallery,
      isDisable,
      releasedAt,
      shortDescription,
      longDescription,
      instructions,
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export default addProductController;
