import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { router as UserRouter } from "./routes/user";
import { router as authRouter } from "./routes/auth";
import { router as productRouter } from "./routes/product";
import { router as cartRouter } from "./routes/cart";
import { router as orderRouter } from "./routes/order";

dotenv.config();
const app = express();

const MongooseConection = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URL || '')
    .then(() => console.log("DBConnection Successfull!!")).catch((err) => {
      console.log(err);
    });

  return connection;
}

MongooseConection()

app.use(express.json());

app.use("/api/auth", authRouter)
app.use("/api/users", UserRouter)
app.use("/api/products", productRouter)
app.use("/api/carts", cartRouter)
app.use("/api/orders", orderRouter)

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is runnig!")
})