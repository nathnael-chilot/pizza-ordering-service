const express = require("express");
const authRoutes = express.Router();
const { login, register } = require("../controllers/authController");

authRoutes.post("/register", register);
authRoutes.post("/login", login);

module.exports = authRoutes;
