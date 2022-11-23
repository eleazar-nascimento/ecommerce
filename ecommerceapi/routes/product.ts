import express, { Response, Request } from 'express';
import Product from '../models/Products';

import { verifyTokenAndAdmin, verifyTokenAndAuthorization } from "./verifyToken";

const router = express();

// Create
router.post("/", verifyTokenAndAdmin, async (request, response) => {
  const newProduct = new Product(request.body);

  try {
    const savedProduct = await newProduct.save();
    response.status(200).json(savedProduct);
  } catch (error) {
    response.status(500).json(error);
  }

});

// Update
router.put("/:id", verifyTokenAndAdmin, async (request: Request, response: Response) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(request.params.id, {
      $set: request.body
    }, { new: true })
    response.status(200).json(updatedProduct);
  } catch (error) {
    response.status(500).json(error);
  }
})

// Delete
router.delete("/:id", verifyTokenAndAdmin, async (request, response) => {
  try {
    await Product.findByIdAndDelete(request.params.id);

    response.status(200).json("Product has benn deleted.");
  } catch (error) {
    response.status(500).json(error)
  }
})

// Get Product
router.get("/find/:id", async (request, response) => {
  try {
    const product: any = await Product.findById(request.params.id);

    response.status(200).json(product);
  } catch (error) {
    response.status(500).json(error)
  }
})

// Get all Products
router.get("/", async (request, response) => {
  const queryNew = request.query.new;
  const queryCategory = request.query.category;
  try {
    let products;

    if (queryNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if (queryCategory) {
      products = await Product.find({
        categories: {
          $in: [queryCategory],
        }
      })
    } else {
      products = await Product.find();
    }

    response.status(200).json(products);
  } catch (error) {
    response.status(500).json(error)
  }
})

export { router };