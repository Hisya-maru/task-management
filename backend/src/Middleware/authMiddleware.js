const jwt = require("jsonwebtoken");

function authMiddleware(req,res,next) {
    const header = req.headers.authorization || "";
    const token = header.startsWith("Bearer ") ? header.slice(7) : null;

    if (!token) {
        return res.status(401).json({error : '認証トークンが必要です。'});
    }
    try{
        const payload = jwt.verify(token,process.env.JWT_SECRET);
        req.user = {
            userId:payload.userId,
            email :payload.email
        };

        next();
    } catch (e) {
        return res.status(401).json({
            error :"認証に失敗しました。"
        });
    }
}

module.exports = authMiddleware;