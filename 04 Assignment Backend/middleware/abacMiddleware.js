// const policies = require("../config/policies");
// const { ProductModel } = require("../model");

// const loadProductData = async (req, res, next) => {
//   const productData = await ProductModel.findById(req.params.id);

//   if (!productData) {
//     return res.send("Product not found");
  
// };

// const abacMiddleware = (action) => (req, res, next){

// const rules = policies[actions]; 

// if (!rules) { 
//   return res.status(400).json({
//     message: "Action policies not found",
//   });
// }
// const attributesObject = {
//   user: req.user,
//   product: req.product,
// };

// const isAllowed = rules.some((rule) => rule(attributesObject));

// if (!isAllowed) {
//   return res.status(403).json({
//     message: " You are not authorized ",
//   });
// }
// }
// next();


