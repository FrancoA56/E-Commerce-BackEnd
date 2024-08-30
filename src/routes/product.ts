import { Router } from "express";
import addProductController from "../controllers/product/addProductController";
import getProductByIdController from "../controllers/product/getProductByIdController";
import editProductController from "../controllers/product/editProductController";

const productRouter = Router();

productRouter.post("/", addProductController)
productRouter.get("/:id", getProductByIdController);
productRouter.put("/:id", editProductController);

export default productRouter;
