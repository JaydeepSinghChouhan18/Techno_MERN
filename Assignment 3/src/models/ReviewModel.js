const { boolean } = require("joi");
const mongoose = require("mongoose");
const ReviewSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title required"],
      minLength: 3,
      maxLength: 80,
      trim: true,
    },
    comment: {
      type: String,
      required: [true, "Review is necessary "],
      minLength: 10,
      maxLength: 500,
      trim: true,
    },
    rating: {
      type: Number,
      required: [true, "Rating is necessary"],
      min: 1,
      max: 5,
      validate: {
        validator: Number.isInteger,
        message: "{VALUE} is not an integer value",
      },
    },
    reviewerName: {
      type: String,
      required: [true, "Name is necessary"],
      minLength: 2,
      maxLength: 50,
      trim: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    isVerifiedPurchase: {
      type: Boolean,
      default: "false",
    },
  },
  { timestamps: true },
);

const ReviewModel = mongoose.model("review", ReviewSchema);
module.exports = ReviewModel;
