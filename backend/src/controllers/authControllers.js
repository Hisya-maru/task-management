
const prisma = require("../library/prisma.js");
const bcrypt = require("bcrypt");

//ユーザー登録API
exports.register = async (req,res) => {
    try {
        const { name, email, password } = req.body;

       //入力不足チェック
        if (!name || !email ||!password) {
            return res.status(400).json({ error:'すべての項目を入力してください。'

            });
        }
       //メール重複チェック
        const existingUser = await prisma.user.findUnique({
        where: {
            email: email
        }
    });

    if (existingUser) {
        return res.status(409).json({error:'このメールアドレスは既に登録されています。'});
    }
       //パスワードハッシュ化
       const hashedPassword = await bcrypt.hash(password, 10);

       //ユーザーデータの保存
       const user = await prisma.user.create({
        data: {
            name,
            email,
            passwordHash: hashedPassword
        }
    });


    return res.status(201).json({
        message: "ユーザー登録が完了しました。"
    });


    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error:"サーバーエラー"
        });
    }

    
}