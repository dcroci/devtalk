-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_id_fkey";

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_talkingPointId_fkey" FOREIGN KEY ("talkingPointId") REFERENCES "TalkingPoint"("id") ON DELETE CASCADE ON UPDATE CASCADE;
