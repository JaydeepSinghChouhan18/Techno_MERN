const mongoose = require("mongoose");
const refreshTokenSchema = mongoose.Schema(
  {
    refreshToken: {
      type: String(),
      required: true,
      unique: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "auth",
      required: true,
    },
    expiresAt: {
      type: Date,
      required: true,
    }, 
  },
  {
    timestamps: true,
  },
);

const refreshModel = mongoose.model("refreshToken" , refreshTokenSchema); 
module.exports = refreshModel ; 