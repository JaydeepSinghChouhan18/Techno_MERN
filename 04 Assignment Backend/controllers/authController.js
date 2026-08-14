const { registerService, loginService } = require("../services/authService");
const asyncHandler = require("../utils/asyncHandler");


// Register API
const registerUser = asyncHandler(async (req, res) => {
  const user = await registerService({...req.body}); // req.body directly 
  // const existingUser = await Auth.findOne({ email });
  // if (existingUser) {
  //   return res.status(409).json({
  //     success: false,
  //     message: "User already exists",
  //   });
  // }
  // const hashedPassword = await bcrypt.hash(password, 10);
  // const user = await Auth.create({
  //   name,
  //   email,
  //   password: hashedPassword,
  // });

  res.status(201).json({
    success: true,
    message: "User registered successfully" ,
    data: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  });
}); 

//Login API
const loginUser = asyncHandler(async (req, res) => {
  const { user, token } = await loginService(req.body);
  // const user = await Auth.findOne({ email });

  // if (!user) {
  //   return res.status(404).json({
  //     success: false,
  //     message: "User not found",
  //   });
  // }

  // const isPasswordMatched = await bcrypt.compare(password, user.password);

  // if (!isPasswordMatched) {
  //   return res.status(401).json({
  //     success: false,
  //     message: "Invalid Credentials",
  //   });
  // }

  // const token = jwt.sign(
  //   {
  //     id: user._id,
  //     email: user.email,
  //   },
  //   process.env.JWT_SECRET,
  //   {
  //     expiresIn: "1d",
  //   },
  // );

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // 1 day
    secure: false, // true in production with HTTPS
  });

  res.status(200).json({
    success: true,
    message: "Login Successful",
    // token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  });
});

// Logout API
const logoutUser = asyncHandler(async (req, res) => {
  res.clearCookie("token");

  res.status(200).json({
    success: true,
    message: "Logout Successful",
  });
});

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
};
