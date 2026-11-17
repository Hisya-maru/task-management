//TodoControllerにAPI本体が格納されている。
const prisma = require("../library/prisma");  //Prisma Clientを読み込む。

//Todo取得 API
exports.getTodos = async (req, res) =>{
    try{
        const memberships = await prisma.teamMember.findMany({
            where: {
                userId: req.user.userId
            }
        });

        const teamIds = memberships.map(
            member => member.teamId
        );

        const todos = await prisma.todo.findMany({
            where:{
                OR: [
                    {userId: req.user.userId},
                    {teamId: {in: teamIds}
                }
                ]
            }
        }); 
        return res.json(todos); 
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "取得に失敗しました。"});
    }
};

//Todo作成API
exports.createTodo = async (req, res) =>{
    try{
        const{ title,teamId } = req.body;

        if(!title) {
            return res.status(400).json({error:'タイトルを入力してください。'});
        }

        if (teamId) {
            const member = await prisma.teamMember.findFirst({
                where: {
                    userId: req.user.userId,
                    teamId
                }
            });
            
            if (!member) {
            return res.status(403).json({error:'このチームにアクセスすることができません。'});
        }
        }
        
        const newTodo = await prisma.todo.create({
            data: {
                title,
                userId: req.user.userId,
                teamId
            },
        });
        return res.status(201).json(newTodo);

       }catch(error){
        console.error(error);
        res.status(500).json({error:"作成に失敗しました。"});
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