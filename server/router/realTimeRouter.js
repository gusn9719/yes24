import express from "express";
import * as controller from "../controller/bestSellerController.js";
const router = express.Router();

router.get("/", controller.getRealTime);

export default router;
