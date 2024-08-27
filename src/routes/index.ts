import { Router } from "express";
import productRouter from "./product";
import shopRouter from "./shop";
import userRouter from "./user";
import reviewRouter from "./review";

const router = Router();

router.use("/product", productRouter)
router.use("/shop", shopRouter)
router.use("/user", userRouter)
router.use("/review", reviewRouter)

export default router;
