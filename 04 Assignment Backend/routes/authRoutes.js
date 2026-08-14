const express = require("express");
const router = express.Router();

const validate = require("../middleware/validateSchema");
const asyncHandler = require("../utils/asyncHandler");

const {
  registerSchema,
  loginSchema,
} = require("../validations/authvalidation");

// import { registerUser } from "../controllers/authController";
const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/authController");

// register API
router.post("/register", validate(registerSchema), registerUser);
// async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     // if (!name || !email || !password) {
//     //   return res.status(400).json({
//     //     success: false,
//     //     message: "All fields are required",
//     //   });
//     // }

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
// }); // *

// Login API

router.post("/login", validate(loginSchema), loginUser);
//  async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // if (!email || !password) {
//     //   return res.status(400).json({
//     //     success: false,
//     //     message: "Email and Password are required",
//     //   });
//     // }

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
//       // secure: false,                    // true in production with HTTPS
//     });

//     res.status(200).json({
//       success: true,
//       message: "Login Successful",
//       // token,
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

//  Logout

router.post("/logout", logoutUser);
// async (req, res) => {
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
//   }};

module.exports = router;
