-- AlterTable
ALTER TABLE "Todo" ADD COLUMN     "teamId" INTEGER;

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;
