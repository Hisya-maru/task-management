const express = require("express");

const app = express();
const PORT = 3000;

const prisma = require("./library/prisma")
app.get("/",(req,res) => {
    res.send("API is runnning");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

//Express本体を読み込み
const express = require("express");
//Expressアプリケーション作成。API本体。
const app = express();
//
app.use(express.json());
//ルートファインを読み込む
const todoRoutes = require("./routes/TodoRoutes");

app.use("/api/todos", todoRoutes);
//サーバーを起動、3000番ポートで待ち受ける。
app.listen(3000, () => {
    console.log("Server runnning on port 3000");
});