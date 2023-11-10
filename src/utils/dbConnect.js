const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const result = await mongoose.connect("mongodb://127.0.0.1:27017/new-app");

    if (result) {
      return console.log("database connection is ready");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
