import { Router } from "express";
import productRouter from "./product";
import shopRouter from "./shop";
import userRouter from "./user";
import reviewRouter from "./review";
import labelRouter from "./label";
import categoryRouter from "./category";
import brandRouter from "./brand";

const router = Router();

router.use("/product", productRouter);
router.use("/shop", shopRouter);
router.use("/user", userRouter);
router.use("/review", reviewRouter);
router.use("/label", labelRouter);
router.use("/category", categoryRouter);
router.use("/brand", brandRouter);

export default router;
