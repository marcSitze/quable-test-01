import * as express from "express";
const router = express.Router();

import { getProducts, createProduct, deleteProduct } from "../controllers";

router.get("/products", getProducts);
router.post("/products", createProduct);
router.delete("/products/:id", deleteProduct);

export default router