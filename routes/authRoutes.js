const express = require("express");
const { register, login } = require("../controller/authController");
const {
  validatePassword,
} = require("../middleware/passwordValidateMiddleware");

const router = express.Router();

router.post("/register", validatePassword, register);
router.post("/login", login);

module.exports = router;
