require("dotenv").config();
const connectDB = require("./db/connect");
const productJson = require("./product.json");
const productModel = require("./Models/product");

const start = async () => {
  try {
    await connectDB();
    await productModel.deleteMany();
    await productModel.create(productJson);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

start();
