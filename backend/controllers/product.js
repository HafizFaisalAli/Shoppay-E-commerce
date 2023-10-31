import asyncHandler from "express-async-handler";
import Product from "../models/product.js";

// PATH     :   /api/products
// METHOD   :   GET
// ACCESS   :   Public
// Desc     :   Get all products in application
export const getAll = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  // res.appendHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  // throw new Error("Any error on backend side");
  res.json(products);
});

// PATH     :   /api/products/:id
// METHOD   :   GET
// ACCESS   :   Public
// Desc     :   Get product by productId
export const getById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (!product) {
    res.status(404);
    throw new Error("Product not found.");
  }
  res.json(product);
});
