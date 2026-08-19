const express = require("express");
const app = express();
const reviewRoutes = require("./src/routes/review.route");

app.use(express.json());

app.use("/reviews", reviewRoutes);


const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Failed to start server:", error.message);
  }
};

startServer(); 

module.exports = app;