const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema(
  {
    street: {
      type: String,
      maxLenght: 50,
      trim: true,
      required: true,
    },
    city: {
      type: String,
      maxLenght: 2,
      trim: true,
      required: true,
    },
    state: {
      type: String,
      maxLenght: 1,
      trim: true,
      required: true,
    },
    country: {
      type: String,
      maxLenght: 1,
      trim: true,
    },
    pincode: {
      type: Number,
      maxLenght: 6,
      trim: true,
      required: true,
    },
    address: {
      type: mongoose.Schema.Types.objectId,
      ref: "address",
    },
  },
  { timestamps: true },
);


module.exports = AddressModel ;