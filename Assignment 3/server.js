const express = require("express");
const reviewRoutes = require("./src/routes/review.route");

const app = express();
app.use(express.json());

app.use("/reviews", reviewRoutes);

module.exports = app;