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

        const parsedTeamId = teamId
        ? parseInt(teamId)
        : null;

        if(!title) {
            return res.status(400).json({error:'タイトルを入力してください。'});
        }

        if (teamId) {
            const member = await prisma.teamMember.findFirst({
                where: {
                    userId: req.user.userId,
                    teamId: parsedTeamId
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
                teamId: parsedTeamId
            },
        });
        return res.status(201).json(newTodo);

       }catch(error){
        console.error(error);
        res.status(500).json({error:"作成に失敗しました。"});
       }
};

//Todo更新API
exports.updateTodo = async (req, res) =>{
    try{
        const { id } = req.params;
        const {title, completed } = req.body;

        const todo = await prisma.todo.findUnique({
            where:{
                id: Number(id)
            }
        });

        if (!todo) {
            return res.status(404).json({
                error: "Todoが存在しません。"
            });
        }
        if (todo.teamId) {
            const member = await prisma.teamMember.findFirst({
                where: {
                    userId: req.user.userId,
                    teamId: todo.teamId
                }
            });

            if (!member) {
            return res.status(403).json({error: 'このTodoを編集することはできません。'});
        }
        }

        const updatedTodo = await prisma.todo.update({
            where: {id: Number(id)},
            data: { title, completed },
        });
        return res.json(updatedTodo);
    } catch(error) {
        console.error(error);
        return res.status(500).json({error:"変更に失敗しました。"});
        }
};

//Todo削除 API
exports.deleteTodo = async (req, res) =>{
    try{

        const { id } =req.params;

        const todo = await prisma.todo.findUnique({
            where: {id: Number(id)}
        });

        if (!todo) {
            return res.status(404).json({
                error: 'Todoが存在しません。'
            });
        }

        if (todo.teamId) {
            const member = await prisma.teamMember.findFirst({
                where: {
                    userId: req.user.userId,
                    teamId: todo.teamId
                }
            });

            if (!member) {
                return res.status(403).json({error: '削除することができません。'});
            }
        }

        const deletedTodo = await prisma.todo.delete({
            where: {
                id: Number(id)
            }
        });

        return res.json(deletedTodo);

    } catch(error) {
        console.error(error);
        return res.status(500).json({error:"削除に失敗しました。"});
    }
};