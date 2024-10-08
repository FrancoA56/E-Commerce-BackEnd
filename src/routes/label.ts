import { Router } from "express";
import addLabelController from "../controllers/label/addLabelController";
import editLabelController from "../controllers/label/editLabelController";
import getLabelController from "../controllers/label/getLabelController";
import disableLabelController from "../controllers/label/disableLabelController";
import deleteLabelController from "../controllers/label/deleteLabelController";
import unDisableLabelController from "../controllers/label/unDisableLabelController";

const labelRouter = Router();

labelRouter.post("/", addLabelController);
labelRouter.put("/:id", editLabelController);
labelRouter.get("/:id?", getLabelController);
labelRouter.put("/disable/:id", disableLabelController);
labelRouter.put("/undisable/:id", unDisableLabelController);
labelRouter.delete("/:id", deleteLabelController);

export default labelRouter;
