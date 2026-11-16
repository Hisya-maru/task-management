const express = require("express");//Express本体を読み込み
const cors = require("cors")
const app = express();

const authRoutes = require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes");
const teamRoutes = require("./routes/teamRoutes");

app.use(cors());
app.use(express.json());
app.use("/api/todos", todoRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/teams",teamRoutes);



app.listen(3000, () => {
    console.log("Server runnning on port 3000");
});