/*
  Warnings:

  - You are about to drop the `Books` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Courses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Creators` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Videos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Books" DROP CONSTRAINT "Books_languageId_fkey";

-- DropForeignKey
ALTER TABLE "Courses" DROP CONSTRAINT "Courses_languageId_fkey";

-- DropForeignKey
ALTER TABLE "Creators" DROP CONSTRAINT "Creators_languageId_fkey";

-- DropForeignKey
ALTER TABLE "Videos" DROP CONSTRAINT "Videos_languageId_fkey";

-- AlterTable
ALTER TABLE "Language" ADD COLUMN     "book1Author" TEXT,
ADD COLUMN     "book1Desc" TEXT,
ADD COLUMN     "book1Image" TEXT,
ADD COLUMN     "book1Link" TEXT,
ADD COLUMN     "book1Name" TEXT,
ADD COLUMN     "book2Author" TEXT,
ADD COLUMN     "book2Desc" TEXT,
ADD COLUMN     "book2Image" TEXT,
ADD COLUMN     "book2Link" TEXT,
ADD COLUMN     "book2Name" TEXT,
ADD COLUMN     "book3Author" TEXT,
ADD COLUMN     "book3Desc" TEXT,
ADD COLUMN     "book3Image" TEXT,
ADD COLUMN     "book3Link" TEXT,
ADD COLUMN     "book3Name" TEXT,
ADD COLUMN     "course1Author" TEXT,
ADD COLUMN     "course1Desc" TEXT,
ADD COLUMN     "course1Image" TEXT,
ADD COLUMN     "course1Link" TEXT,
ADD COLUMN     "course1Name" TEXT,
ADD COLUMN     "course2Author" TEXT,
ADD COLUMN     "course2Desc" TEXT,
ADD COLUMN     "course2Image" TEXT,
ADD COLUMN     "course2Link" TEXT,
ADD COLUMN     "course2Name" TEXT,
ADD COLUMN     "course3Author" TEXT,
ADD COLUMN     "course3Desc" TEXT,
ADD COLUMN     "course3Image" TEXT,
ADD COLUMN     "course3Link" TEXT,
ADD COLUMN     "course3Name" TEXT,
ADD COLUMN     "creator1Desc" TEXT,
ADD COLUMN     "creator1Image" TEXT,
ADD COLUMN     "creator1Link" TEXT,
ADD COLUMN     "creator1Name" TEXT,
ADD COLUMN     "creator2Desc" TEXT,
ADD COLUMN     "creator2Image" TEXT,
ADD COLUMN     "creator2Link" TEXT,
ADD COLUMN     "creator2Name" TEXT,
ADD COLUMN     "creator3Desc" TEXT,
ADD COLUMN     "creator3Image" TEXT,
ADD COLUMN     "creator3Link" TEXT,
ADD COLUMN     "creator3Name" TEXT;

-- DropTable
DROP TABLE "Books";

-- DropTable
DROP TABLE "Courses";

-- DropTable
DROP TABLE "Creators";

-- DropTable
DROP TABLE "Videos";
