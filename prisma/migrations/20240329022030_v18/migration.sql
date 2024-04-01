/*
  Warnings:

  - The primary key for the `Snippet` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "SnippetLike" DROP CONSTRAINT "SnippetLike_snippetId_fkey";

-- AlterTable
ALTER TABLE "Snippet" DROP CONSTRAINT "Snippet_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Snippet_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Snippet_id_seq";

-- AlterTable
ALTER TABLE "SnippetLike" ALTER COLUMN "snippetId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "SnippetLike" ADD CONSTRAINT "SnippetLike_snippetId_fkey" FOREIGN KEY ("snippetId") REFERENCES "Snippet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
