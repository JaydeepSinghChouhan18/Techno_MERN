const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const staffSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minLength: 2,
      maxLength: 50,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],   
      minLength: 6,
    },
    department: {
      type: String,
      required: [true, "Department is required"],
      enum: {
        values: ["sales", "support", "warehouse"],
        message: "{VALUE} is not a valid department",
      },
    },
  },
  { timestamps: true }
);

// Pre save hook for hashing password
staffSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

staffSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Response me password remove karne liye
staffSchema.methods.toJSON = function () {
  const staffObject = this.toObject();
  delete staffObject.password;
  return staffObject;
};

module.exports = mongoose.model("Staff", staffSchema);