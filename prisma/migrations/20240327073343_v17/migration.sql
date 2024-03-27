-- DropForeignKey
ALTER TABLE "TalkingPointLike" DROP CONSTRAINT "TalkingPointLike_talkingPointId_fkey";

-- AddForeignKey
ALTER TABLE "TalkingPointLike" ADD CONSTRAINT "TalkingPointLike_talkingPointId_fkey" FOREIGN KEY ("talkingPointId") REFERENCES "TalkingPoint"("id") ON DELETE CASCADE ON UPDATE CASCADE;
