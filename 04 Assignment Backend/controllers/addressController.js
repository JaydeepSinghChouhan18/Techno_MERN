const AddressModel = require("../models/AddressModel");

const registerAddress = async (req, res) => {
  try {
    const address = await AddressModel.create(req.body);
    res.status(200).json({
      success: true,
      message: "Address Created Successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
