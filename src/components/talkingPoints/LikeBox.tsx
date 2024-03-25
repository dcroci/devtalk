import { db } from "@/app/db";

interface LikeBoxProps {
  talkingPointId: string;
}
async function LikeBox({ talkingPointId }: LikeBoxProps) {
  const likes = await db.talkingPointLike.findMany({
    where: { talkingPointId: talkingPointId },
  });
  return (
    <p className="mb-10 text-center text-small font-bold text-almostWhite">
      {likes.length}
    </p>
  );
}

export default LikeBox;
