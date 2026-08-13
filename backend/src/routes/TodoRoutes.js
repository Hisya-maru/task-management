//GET TASKS
//Express本体を読み込む
const express = require("express");
//Expressのルーター機能を使うためのオブジェクト作成。server.jsとルート定義を分けられる。
const router = express.Router();
//処理情報を読み込む。
const { grtTodes } = require("../controllers/TodoControllers");
//api/todos/にGETリクエストが来た場合getTodosを実行する
router.get("/",getTodos);
//このルーターをserver.jsから使えるようにする。
module.exports = router;
