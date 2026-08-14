const asyncHandler = require("../utils/asyncHandler");
const {
  registerProductService,
  getAllProductService,
  getProductByIdService,
  updateProductService,
  deleteProductService,
} = require("../services/productService");

const registerProduct = asyncHandler(async (req, res) => {
  // const { name, SKU, description, price, category } = req.body;
  console.log(req.method)
  const product = await registerProductService(req.body);

  // const existingProduct = await Product.findOne({ SKU });
  //   if (existingProduct) {
  //     throw new ApiError(409, "User Already Exists");
  //   }
  // };

  // const product = await Product.create({
  //   name,
  //   SKU,
  //   description,
  //   price,
  //   category,
  // });

  res.status(201).json({
    success: true,
    message: "Product created successfully",
    data: product,
  });
});

const getAllProduct = asyncHandler(async (req, res) => {
  // const page = Number(req.query.page) || 1;
  // const limit = Number(req.query.limit) || 5;
  // const products = await Product.find()
  //   .select("-__v")
  //   .sort({ name: 1 })
  //   .skip((page - 1) * limit)
  //   .limit(limit);
  const products = await getAllProductService(req);

  res.status(200).json({
    success: true,
    data: products,
  });
});

const getProductByID = asyncHandler(async (req, res) => {
  //const product = await Product.findById(req.params.id);
  // if(!product) {
  //   return res.status(404).json({
  //     success: false,
  //     message: "Product not found",
  //   });
  // }

  const product = await getProductByIdService(req);
  res.status(200).json({
    success: true,
    data: product,
  });
});

const updateProduct = asyncHandler(async (req, res) => {
  const product = await updateProductService(req);
  // const product = await Product.findById(req.params.id);

  // if (!product) {
  //   return res.status(404).json({
  //     success: false,
  //     message: "Product not found",
  //   });
  // }

  // const updatedProduct = await Product.findByIdAndUpdate(
  //   req.params.id,
  //   req.body,
  //   {
  //     new: true,
  //     runValidators: true,
  //   },
  // );

  res.status(200).json({
    success: true,
    message: "Product updated successfully",
    data: updateProduct,
  });
});

const deleteProduct = asyncHandler(async (req, res) => {
  const updatedProduct = await deleteProductService(req);
  // const updatedProduct = await Product.findByIdAndDelete(req.params.id);

  // if(!updatedProduct) {
  //   return res.status(404).json({
  //     success: false,
  //     message: "Product not found",
  //   });
  // }

  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
});

module.exports = {
  registerProduct,
  getAllProduct,
  getProductByID,
  updateProduct,
  deleteProduct,
};