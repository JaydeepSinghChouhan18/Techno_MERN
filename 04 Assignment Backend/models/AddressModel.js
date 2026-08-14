// const mongoose = require("mongoose");
// const addressSchema = new mongoose.Schema(
//   {
//     street: {
//       type: String,
//       maxLength: 50,
//       trim: true,
//       required: true,
//     },
//     city: {
//       type: String,
//       maxLength: 2,
//       trim: true,
//       required: true,
//     },
//     state: {
//       type: String,
//       maxLength: 1,
//       trim: true,
//       required: true,
//     },
//     country: {
//       type: String,
//       maxLenght: 1,
//       trim: true,
//     },
//     pincode: {
//       type: Number,
//       maxLength: 6,
//       trim: true,
//       required: true,
//     },
//     user: {
//       type: mongoose.Schema.Types.objectId,
//       ref: "address",
//       required: true,
//     },
//     longitude: {
//       type: Number,
//       required: true,
//     },
//     latitude: {
//       type: Number,
//       required: true,
//     },
//   },
//   { timestamps: true },
// );
// const AddressModel = mongoose.model("address", addressSchema);
// module.exports = AddressModel; 

 
const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    street: {
      type: String,
      maxlength: 50,
      trim: true,
      required: true,
    },

    city: {
      type: String,
      maxlength: 15,
      trim: true,
      required: true,
    },

    state: {
      type: String,
      maxlength: 15,
      trim: true,
      required: true,
    },

    country: {
      type: String,
      maxlength: 50,
      trim: true,
      required: true,
    },

    pincode: {
      type: String,
      required: true,
      trim: true,
      match: /^[0-9]{6}$/,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "auth",
      required: true,
    },

    location: {
      type: {
        type: String,
        enum: ["Point"],
        required: true,
      },

      coordinates: {
        type: [Number],
        required: true,
      },
    },
  },
  { timestamps: true }
);

addressSchema.index({ location: "2dsphere" });

const AddressModel = mongoose.model("Address", addressSchema);

module.exports = AddressModel;
 
