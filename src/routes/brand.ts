import { Router } from "express";
import addBrandController from "../controllers/brand/addBrandController";
import editBrandController from "../controllers/brand/editBrandController";
import getBrandController from "../controllers/brand/getBrandController";
import disableBrandController from "../controllers/brand/disableBrandController";
import deleteBrandController from "../controllers/brand/deleteBrandController";
import unDisableBrandController from "../controllers/brand/unDisableBrandController";

const brandRouter = Router();

brandRouter.post("/", addBrandController);
brandRouter.put("/:id", editBrandController );
brandRouter.get("/:id?", getBrandController);
brandRouter.put("/disable/:id", disableBrandController);
brandRouter.put("/undisable/:id", unDisableBrandController);
brandRouter.delete("/:id", deleteBrandController);

export default brandRouter;
