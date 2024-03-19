-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "imgUrl" TEXT NOT NULL DEFAULT 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg',
ALTER COLUMN "updatedAt" DROP NOT NULL;
