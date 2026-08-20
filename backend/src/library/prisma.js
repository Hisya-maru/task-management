//PlismaClientを読み込む
const { PrismaClient } = require("../../generated/client");
const { PrismaPg} = require("@prisma/adapter-pg");
//PrismaClientのインスタンスを作成（DBに接続する準備）
const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({adapter});
//他のファイルから使えるように export
module.exports = prisma;
