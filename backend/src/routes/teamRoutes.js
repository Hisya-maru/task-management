const express = require("express");
const router = express.Router();

const {createTeam,getTeams,joinTeam} = require("../controllers/teamControllers");
const authMiddleware = require("../Middleware/authMiddleware");

router.post("/createTeam",authMiddleware,createTeam);//Team作成API
router.get("/getTeams",authMiddleware,getTeams);//所属Team一覧取得API
router.post("/:id/join",authMiddleware,joinTeam);//チーム参加API

module.exports = router;