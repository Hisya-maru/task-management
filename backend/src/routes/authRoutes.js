
const express = require("express");
const router  = express.Router();

const{register} = require("../controllers/authControllers");

router.post("/register",register);//ユーザー登録用API

module.exports = router;

