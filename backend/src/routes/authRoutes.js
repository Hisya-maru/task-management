
const express = require("express");
const router  = express.Router();

const{register,login} = require("../controllers/authControllers");

router.post("/register",register);//ユーザー登録用API
router.post("/login",login);//ログイン用API

module.exports = router;

