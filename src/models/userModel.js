const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSechema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    DOB: {
      type: Date,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSechema);

module.exports = User;
