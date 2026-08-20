//TodoRutesはcontrollerに格納される各APIに取りつなぐ


const express = require("express");
const router = express.Router();

const { getTodos,createTodo,updateTodo,deleteTodo } = require("../controllers/TodoControllers"); //コントローラーからGET処理を読み込む。

router.get("/",getTodos); //GET /api/todos
router.post("/",createTodo);//POST /api/todos
router.put("/:id",updateTodo);//PUT /api/todos
router.delete("/:id",deleteTodo);//DELETE /api/todos

module.exports = router;