import { Request, Response, NextFunction } from "express";
import { Op } from "sequelize";
import Product from "../../models/product";
import Category from "../../models/category";
import Label from "../../models/label";

export const getProductHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { category, label, sortBy, isDisable } = req.query;

    // Definir las opciones de búsqueda y filtrado
    const whereConditions: any = {};

    if (isDisable !== undefined) {
      whereConditions.isDisable = isDisable === "true";
    }

    // Incluir categorías si se pasa como filtro
    const includeConditions: any = [];
    if (category) {
      includeConditions.push({
        model: Category,
        where: { name: { [Op.iLike]: `%${category}%` } },
        through: { attributes: [] },
      });
    }

    // Incluir labels si se pasa como filtro
    if (label) {
      includeConditions.push({
        model: Label,
        where: { name: { [Op.iLike]: `%${label}%` } },
        through: { attributes: [] },
      });
    }

    // Definir la opción de ordenamiento
    const orderOptions: any = [];
    if (sortBy) {
      const validSortFields = ["code", "name", "price"];
      if (validSortFields.includes(sortBy as string)) {
        orderOptions.push([sortBy as string, "ASC"]);
      }
    }

    // Realizar la consulta
    const products = await Product.findAll({
      where: whereConditions,
      include: includeConditions.length ? includeConditions : undefined,
      order: orderOptions.length ? orderOptions : undefined,
    });

    return res.status(200).json(products);
  } catch (error) {
    return next(error);
  }
};
