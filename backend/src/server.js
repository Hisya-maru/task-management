const express = require("express");//Express本体を読み込み
const cors = require("cors")
const cors = require("./routes/todoRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/todos", todoRoutes);

app.listen(3000, () => {
    console.log("Server runnning on port 3000");
});