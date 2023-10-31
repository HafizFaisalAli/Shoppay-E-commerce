import express from "express";
import colors from "colors";
import morgan from "morgan";
import dotenv from "dotenv";
// import cors from "cors";
import productRoutes from "./routes/product.js";
import authRoutes from "./routes/auth.js";
import orderRoutes from "./routes/order.js";
import ConnectDb from "./config/db.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();

ConnectDb();

const app = express();
app.use(morgan("common"));
app.use(express.json());

// app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Api is running..." });
});

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);

app.use(errorHandler);

const port = process.env.NODE_PORT | 5000;
app.listen(port, () => {
  console.log(
    `Server is running in ${process.env.NODE_MODE} mode at port ${port}.`
      .bgGreen
  );
});
