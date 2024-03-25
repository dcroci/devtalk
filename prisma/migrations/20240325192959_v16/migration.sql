/*
  Warnings:

  - You are about to drop the column `likes` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `likes` on the `TalkingPoint` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "likes";

-- AlterTable
ALTER TABLE "TalkingPoint" DROP COLUMN "likes";

-- CreateTable
CREATE TABLE "ProjectLike" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProjectLike_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SnippetLike" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "snippetId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SnippetLike_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TalkingPointLike" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "talkingPointId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TalkingPointLike_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProjectLike_userId_projectId_key" ON "ProjectLike"("userId", "projectId");

-- CreateIndex
CREATE UNIQUE INDEX "SnippetLike_userId_snippetId_key" ON "SnippetLike"("userId", "snippetId");

-- CreateIndex
CREATE UNIQUE INDEX "TalkingPointLike_userId_talkingPointId_key" ON "TalkingPointLike"("userId", "talkingPointId");

-- AddForeignKey
ALTER TABLE "ProjectLike" ADD CONSTRAINT "ProjectLike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectLike" ADD CONSTRAINT "ProjectLike_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SnippetLike" ADD CONSTRAINT "SnippetLike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SnippetLike" ADD CONSTRAINT "SnippetLike_snippetId_fkey" FOREIGN KEY ("snippetId") REFERENCES "Snippet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TalkingPointLike" ADD CONSTRAINT "TalkingPointLike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TalkingPointLike" ADD CONSTRAINT "TalkingPointLike_talkingPointId_fkey" FOREIGN KEY ("talkingPointId") REFERENCES "TalkingPoint"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
