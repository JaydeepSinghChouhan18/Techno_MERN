const ApiError = require("../utils/ApiError");
const Product = require("../models/ProductModel");

const registerProductService = async ({
  name,
  SKU,
  description,
  price,
  category,
}) => {
  const existingProduct = await Product.findOne({ SKU });

  if (existingProduct) {
    throw new ApiError(409, "Product Already Exists");
  }

  const product = await Product.create({
    name,
    SKU,
    description,
    price,
    category,
  });

  return product;
};

const getAllProductService = async (req) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 5;

  const products = await Product.find()
    .select("-__v")
    .sort({ name:1})
    .skip((page - 1) * limit)
    .limit(limit);

  return products;
};

const getProductByIdService = async (req) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
   throw new ApiError(404,"Product not found");
  }
  return product;
};

const updateProductService = async (req) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
       throw new ApiError(404,"Product not found");
  }
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    },
  );

  return updatedProduct;
};

const deleteProductService = async (req) => {
  const updatedProduct = await Product.findByIdAndDelete(req.params.id);

  if (!updatedProduct) {
      throw new ApiError(404,"Product not found");

  }

  return updatedProduct;
};

module.exports = {
  registerProductService,
  getAllProductService,
  getProductByIdService,
  updateProductService,
  deleteProductService,
};
