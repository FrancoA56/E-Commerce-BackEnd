import { Router } from "express";
import addCategoryController from "../controllers/category/addCategoryController";

const categoryRouter = Router();

categoryRouter.post("/", addCategoryController);

export default categoryRouter;
