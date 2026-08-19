const express = require("express");
const cookieParser = require("cookie-parser");
const staffRoutes = require("./routes/staff.routes");
const errorHandler = require("./middlewares/error.middleware");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/staff", staffRoutes);

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

 
