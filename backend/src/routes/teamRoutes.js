const express = require("express");
const router = express.Router();

const {createTeam} = require("../controllers/teamControllers");
const authMiddleware = require("../Middleware/authMiddleware");

router.post("/createTeam",authMiddleware,createTeam);//Team作成API

module.exports = router;