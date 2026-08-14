const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "auth",
      required: true,
    }, 

    name: {
      type: String,
      required: true,
      trim: true,
    }, 

    SKU: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    }, 

    description: {
      type: String,
      required: true,
    }, 
     
    price: {
      type: Number,
      required: true,
      min: 0,
    }, 
    
    category: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const ProductModel = mongoose.model("Product", productSchema);
module.exports = ProductModel;
