const prisma = require("../library/prisma.js");

//チーム作成API
exports.createTeam = async(req,res) => {
    try{
        const{name} =req.body;

        if(!name) {
            return res.status(400).json({error: 'チーム名を入力してください。'});
        }

        const team = await prisma.team.create({
            data: {
                name
            }
        });

        await prisma.teamMember.create({
            data: {
                userId: req.user.userId,
                teamId: team.id
            }
        })
        return res.status(201).json({message: 'チーム作成が完了しました。'});

    }catch (error) {
        console.error(error);
        
        return res.status(500).json({error: 'チーム作成に失敗しました。'});
    }

}

//所属チーム一覧取得API
exports.getTeams = async(req,res) => {
    try{
        const teams = await prisma.teamMember.findMany({
            where:{
                userId: req.user.userId
            },
            include:{
                team: true
            }
        });
        return res.status(200).json(teams);
    }catch (error) {
        console.error(error);
        return res.status(500).json({error: 'チーム取得に失敗しました。'});
    }
};

//チーム参加用API
exports.joinTeam = async(req,res) => {
    try{
        const teamId = parseInt(req.params.id);

        await prisma.teamMember.create({
            data:
            {
                userId: req.user.userId,
                teamId
            }
        });

        return res.status(201).json({
            message: 'チームに参加しました。'
        });

    }catch (error) {
        console.error(error);
        return res.status(500).json({error: 'チーム参加に失敗しました。'});
    }
};
