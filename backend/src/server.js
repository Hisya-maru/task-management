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