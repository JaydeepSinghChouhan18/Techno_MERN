const asyncHandler = require("../utils/asyncHandler");
const {
  registerStaffService,
  loginStaffService,
  getMeService,
} = require("../services/staff.service");

const registerStaff = asyncHandler(async (req, res) => {
  const staff = await registerStaffService(req.body);
  return res.status(201).json({
    success: true,
    data: staff,
  });
});

const loginStaff = asyncHandler(async (req, res) => {
  const { staff, token } = await loginStaffService(req.body);

   res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    // sameSite: "strict",
    maxAge: 60 * 60 * 1000, // 1 hr
  });

  return res.status(200).json({
    success: true,
    message: "Logged in successfully",
    data: staff,
  });
});

const getMe = asyncHandler(async (req, res) => {
  const staff = await getMeService(req.user);
  return res.status(200).json({
    success: true,
    data: staff,
  });
});

module.exports = {
  registerStaff,
  loginStaff,
  getMe,
};