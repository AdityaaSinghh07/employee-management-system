require("dotenv").config();

const express = require("express");
const cors = require("cors");

const sequelize = require("./config/database");

const authRoutes = require("./routes/authRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const departmentRoutes = require("./routes/departmentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/departments", departmentRoutes);

app.get("/health", (req, res) => {
  res.json({
    status: "UP",
  });
});

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(
      `Server running on port ${process.env.PORT}`
    );
  });
});
