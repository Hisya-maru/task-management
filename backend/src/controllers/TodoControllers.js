//Prisma Clientを読み込む。DBにアクセスする窓口。Prisma Clientは型月ORMなためprisma.find.Many()が使える。
const prisma = require("../library/prisma");
//getTodosという関数を外部から使用可能にする。asyncを付けることでawait.todo.findMany()が使える。
exports.getTodos = async (req, res) =>{
    //todoテーブルから全権取得する。
    const todos = await prisma.todo.findMany();
    //取得データをJSONとしてクライアントに返す。
    res.json(todos);
};