const StaffModel = require("../models/staff.model");
const ApiError = require("../utils/ApiError");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "MY_SECRET_KEY";

// 1. Register Service
const registerStaffService = async ({ name, email, password, department }) => {
  const existingStaff = await StaffModel.findOne({ email });
  if (existingStaff) {
    throw new ApiError(409, "Email already registered");
  }

  const newStaff = await StaffModel.create({
    name,
    email,
    password,
    department,
  });

  return newStaff; // toJSON() password ko automatically strip kar dega
};

// 2. Login Service
const loginStaffService = async ({ email, password }) => {
  const staff = await StaffModel.findOne({ email });
  if (!staff) {
    throw new ApiError(401, "Invalid email or password");
  }

  const isPasswordValid = await staff.comparePassword(password);
  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid email or password");
  }

   const token = jwt.sign(
    { id: staff._id, department: staff.department },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  return { staff, token };
};

// 3. Get Me Service
const getMeService = async (staffUser) => {
  return staffUser;
};

module.exports = {
  registerStaffService,
  loginStaffService,
  getMeService,
};