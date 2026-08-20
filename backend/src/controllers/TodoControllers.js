//TodoControllerにAPI本体が格納されている。
const prisma = require("../library/prisma");  //Prisma Clientを読み込む。

//GET API
exports.getTodos = async (req, res) =>{
    try{
        const todos = await prisma.todo.findMany(); //DBから全権取得
        res.json(todos); //クライアントに返す
    }catch(error) {
        console.error(error);
        res.status(500).json({error: "Failed to fetch todos"});
    }
};

//POST API
exports.createTodo = async (req, res) =>{
    try{
        const newTodo = await prisma.todo.create({
            data: {title},
        });
        res.json(newTodo);
       }catch(error){
        console.error(error);
        res.status(500).json({error:"Failed to create todo"});
       }
};

//PUT API
exports.updateTodo = async (req, res) =>{
    try{
        const { id } = req.params;//URLからid取得
        const {title, completed } = req.body;//更新内容をbodyから取得
//prismaのupdate()を使用して更新
        const updatedTodo = await prisma.todo.update({
            where: {id: Number(id)},
            data: { title, completed },
        });
        res.json(updatedTodo);//更新結果を返す
    }catch(error){
        console.error(error);
        res.status(500).json({error:"Failed to update todo"});
        }
};

//DELETE API
exports.deleteTodo = async (req, res) =>{
    try{
        const { id } =req.params;

        const deletedTodo =await prisma.todo.delete({
            where: {id: Number(id)},
        });
        res.json(deletedTodo);
    }catch(error){
        console.error(error);
        res.status(500).json({error:"Failed to delete todo"});
    }
};