const mongoose = require("mongoose");

const connectDb = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Conneted with db");
};

module.exports = connectDb;
