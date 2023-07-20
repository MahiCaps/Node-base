const express = require("express");
const userController = require("../controller/user.controller");

const router = express.Router();

router.get("/getUser", userController.getUsers);

module.exports = router;
