const jwt = require("jsonwebtoken");
const Auth = require("../models/AuthModel")
const authMiddleware = async(req, res, next) => {
  try {
     const token = req.cookies.token;
    
     if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized Access.Please login first ",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await Auth.findById(decoded.id);

    req.user = user;  
    next();

  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or Expired Token",
    });
  }
};

module.exports = authMiddleware; 
 
// const jwt = require("jsonwebtoken");
// const Auth = require("../models/AuthModel");

// const authMiddleware = async (req, res, next) => {
//   try {
//     console.log("1. Cookies:", req.cookies);

//     const token = req.cookies.token;

//     if (!token) {
//       return res.status(401).json({
//         success: false,
//         message: "Token not found in cookies",
//       });
//     }

//     console.log("2. Token received:", token);

//     console.log("3. JWT Secret exists:", !!process.env.JWT_SECRET);

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     console.log("4. Decoded token:", decoded);

//     const user = await Auth.findById(decoded.id);

//     console.log("5. User:", user);

//     if (!user) {
//       return res.status(401).json({
//         success: false,
//         message: "User not found",
//       });
//     }

//     req.user = user;

//     console.log("6. req.user:", req.user);

//     next();

//   } catch (error) {
//     console.log("AUTH ERROR:", error);

//     return res.status(401).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// module.exports = authMiddleware;
