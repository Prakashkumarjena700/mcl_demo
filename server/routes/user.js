const express = require("express");
const { GetUsers, Register, Login } = require("../controllers/user.control");

const userRoute = express.Router();

userRoute.post("/register", Register);

userRoute.post("/login", Login);

userRoute.get("/get-users", GetUsers);

module.exports = userRoute;
