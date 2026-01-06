const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");        // ✅ ADD THIS
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(cors());                     // ✅ NOW cors is defined
app.use(express.json());

app.use("/api/employees", require("./routes/empRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});
