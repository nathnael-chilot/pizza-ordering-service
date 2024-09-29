const express = require("express");
const sequelize = require("./config/db");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
// const bodyParser = require("body-parser");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);

// Example route to test the server
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Sync all models with the database and then start the server
sequelize
  .sync({ force: false }) // force: true drops and recreates tables on every sync; false keeps existing tables
  .then(() => {
    console.log("Database synced successfully");
    // Start the server only after successful database sync
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error syncing the database:", error);
  });
