import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import User from "./models/user.js";
import Product from "./models/product.js";
import ConnectDb from "./config/db.js";
import users from "./data/users.js";
import products from "./data/products.js";

dotenv.config();

ConnectDb();

const SeedData = async () => {
  try {
    const savedUsers = await User.insertMany(users);
    const adminUserId = savedUsers[0]._id;
    const updatedProducts = products.map((product) => {
      return {
        ...product,
        user: adminUserId.toString(),
      };
    });

    await Product.insertMany(updatedProducts);
    console.log(`Data added.`.bgGreen);
    process.exit(0);
  } catch (error) {
    console.error(`Unable to delete data : ${error.message}`.bgRed);
    process.exit(1);
  }
};

const DeleteData = async () => {
  try {
    await User.deleteMany({});
    await Product.deleteMany({});
    console.log(`Data deleted.`.bgGreen);
    process.exit(0);
  } catch (error) {
    console.error(`Unable to delete data : ${error.message}`.bgRed);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  DeleteData();
} else {
  SeedData();
}
