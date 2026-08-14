const express = require("express");
const app = express();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const addressRoutes = require("./routes/addressRoutes")
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/errorMiddleware");
require("dotenv").config();

const PORT = process.env.PORT || 3000 ; 

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


app.use("/auth",authRoutes);
app.use("/product", productRoutes);
app.use("/address" ,addressRoutes); 

const startServer = async () => {
  try{
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Failed to start server:", error.message);
  }
};

startServer();
 
app.use(errorMiddleware)    // this is always at last !!
// ////  AUTH ROUTES
// // Register ====================
// app.post("/register", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     if (!name || !email || !password) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields are required",
//       });
//     }

//     const existingUser = await Auth.findOne({ email });

//     if (existingUser) {
//       return res.status(409).json({
//         success: false,
//         message: "User already exists",
//       });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = await Auth.create({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     res.status(201).json({
//       success: true,
//       message: "User registered successfully",
//       data: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// // Login ===================

// app.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({
//         success: false,
//         message: "Email and Password are required",
//       });
//     }

//     const user = await Auth.findOne({ email });

//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found",
//       });
//     }

//     const isPasswordMatched = await bcrypt.compare(password, user.password);

//     if (!isPasswordMatched) {
//       return res.status(401).json({
//         success: false,
//         message: "Invalid Credentials",
//       });
//     }

//     const token = jwt.sign(
//       {
//         id: user._id,
//         email: user.email,
//       },
//       process.env.JWT_SECRET,
//       {
//         expiresIn: "1d",
//       },
//     );

//     res.cookie("token", token, {
//       httpOnly: true,
//       // maxAge: 24 * 60 * 60 * 1000,      // 1 day
//       // secure: false,                       // true in production with HTTPS
//     });

//     res.status(200).json({
//       success: true,
//       message: "Login Successful",
//       token,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// //   Logout
// app.post("/logout", async (req, res) => {
//   try {
//     res.clearCookie("token");
//     res.status(200).json({
//       success: true,
//       message: "Logout Successful",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });
// //// PRODUCT Routes =======
// /// Create Product  ====

// app.post("/products", authMiddleware, async (req, res) => {
//   try {
//     const { name, SKU, description, price, category } = req.body;

//     if (!name || !SKU || !description || !price || !category) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields are required",
//       });
//     }

//     const existingProduct = await Product.findOne({ SKU });

//     if (existingProduct) {
//       return res.status(409).json({
//         success: false,
//         message: "Product already exists",
//       });
//     }

//     const product = await Product.create({
//       name,
//       SKU,
//       description,
//       price,
//       category,
//     });

//     res.status(201).json({
//       success: true,
//       message: "Product created successfully",
//       data: product,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// /// get all product
// app.get("/products", authMiddleware, async (req, res) => {
//   try {
//     const page = Number(req.query.page) || 1;
//     const limit = Number(req.query.limit) || 5;

//     const products = await Product.find()
//       .select("-__v")
//       .sort({ name: 1 })
//       .skip((page - 1) * limit)
//       .limit(limit);

//     res.status(200).json({
//       success: true,
//       data: products,
//     });
//   } catch(error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// // get by id
// app.get("/products/:id", authMiddleware, async (req, res) => {
//   try {
//     const product = await Product.findById(mongoose.Types.ObjectId.isValid(req.params.id));

//     if(!product) {
//       return res.status(404).json({
//         success: false,
//         message: "Product not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: product,
//     });
//   }
//    catch(error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// // update product
// app.patch("/products/:id", authMiddleware, async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);

//     if (!product) {
//       return res.status(404).json({
//         success: false,
//         message: "Product not found",
//       });
//     }

//     const updatedProduct = await Product.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       {
//         new: true,
//         runValidators: true,
//       },
//     );

//     res.status(200).json({
//       success: true,
//       message: "Product updated successfully",
//       data: updatedProduct,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// // delete
// app.delete("/products/:id", authMiddleware, async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);

//     if (!product) {
//       return res.status(404).json({
//         success: false,
//         message: "Product not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Product deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });
