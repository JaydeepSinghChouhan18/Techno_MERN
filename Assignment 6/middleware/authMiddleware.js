const jwt = require("jsonwebtoken");
const StaffModel = require("../models/staff.model");
const ApiError = require("../utils/ApiError");

const authMiddleware = async (req, res, next) => {
  try {
     const token = req.cookies?.token;
    if (!token) {
      return next(new ApiError(401, "Authentication token missing"));
    }

     let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET || "MY_SECRET_KEY");
    } catch (err) {
      return next(new ApiError(401, "Invalid or expired token"));
    }

    const staff = await StaffModel.findById(decoded.id).select("-password");

    if (!staff) {
      return next(new ApiError(401, "Staff account no longer exists"));
    }

    req.user = staff;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authMiddleware;