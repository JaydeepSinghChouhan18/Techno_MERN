const express = require("express");
const AddressModel = require("../models/AddressModel");
// const addressValidation = require("../validations/addressValidation");
const validate = require("../middleware/validateSchema");
const addressSchema = require("../validations/addressValidation");
const authMiddleware = require("../middleware/authenticationMiddleware");
const router = express.Router();
// const ApiError = require("../utils/ApiError")

router.post(
  "/register",
  validate(addressSchema),
  authMiddleware,
  async (req, res) => {
    try {
      const {
        type,
        street,
        city,
        state,
        country,
        pincode,
        location,
        latitude,
        longitude,
      } = req.body;

      let addressData = {
        user: req.user._id,
        type,
        street,
        city,
        state,
        country,
        pincode,
        location: {
          type: "Point",
          coordinates: [longitude, latitude],
        },
      };

      const address = await AddressModel.create(addressData);
      res.json({
        message: "Address created successfully ",
        data: address ,
      });
    } catch (err) {
      res.send(err.message);
    }
  },
);

module.exports = router;
