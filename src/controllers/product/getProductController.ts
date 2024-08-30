import { Request, Response, NextFunction } from "express";
import { getProductHandler } from "../../handlers/products/getProductHandler";

const getProductController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await getProductHandler(req, res, next);
  } catch (error) {
    return res
      .status(500)
      .json({ error: (error as Error).message });
  }
};

export default getProductController;