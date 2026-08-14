const ApiError = require("../utils/ApiError");
const Auth = require("../models/AuthModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerService = async ({ name, email, password }) => {
  const existingUser = await Auth.findOne({ email });

  if (existingUser) {
    throw new ApiError(409, "User already exists");
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await Auth.create({
    name,
    email,
    password: hashedPassword,
    /// here no role is injected because role is manually created by developer or in the code so that someother cant do it from external sources or postman .
  });

  return user;
};

const loginService = async ({ email, password }) => {
  const user = await Auth.findOne({ email });

  if (!user) {
    throw new ApiError(404, "User not found");
  }
  const isPasswordMatched = await bcrypt.compare(password, user.password);

  if (!isPasswordMatched) {
    throw new ApiError(401, "Invalid Credentials");
  }

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    },
  );

  // const accessToken = jwt.sign(
  //   {
  //     id: user._id,
  //   },
  //   process.env.JWT_SECRET,
  //   { expiresIn: "1d" },
  // );
  // const refereshToken = jwt.sign(
  //   {
  //     id: user._id,
  //   },
  //   process.env.refreshKey,
  //   { expiresIn: "7d" },
  // ); 
  
  return {
    user,
    token,
  };
};

module.exports = {
  registerService,
  loginService,
};
