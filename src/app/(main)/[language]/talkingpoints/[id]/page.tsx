import { db } from "@/app/db";
import SideNav from "@/components/sections/SideNav";
import CommentCreateForm from "@/components/talkingPoints/CommentCreateForm";
import ShowComment from "@/components/talkingPoints/ShowComment";
import ShowTalkingPoint from "@/components/talkingPoints/ShowTalkingPoint";
import { notFound } from "next/navigation";
import { fetchCommentsByPostId } from "@/app/db/queries/comments";
import CommentList from "@/components/talkingPoints/CommentList";

async function ShowTalkingPointPage({ params }: any) {
  const talkingPoint = await db.talkingPoint.findFirst({
    where: { id: params.id },
  });
  const language = await db.language.findFirst({
    where: {
      name: {
        equals: params.language,
        mode: "insensitive",
      },
    },
  });
  if (!talkingPoint) {
    notFound();
  }
  return (
    <>
      <main className="col-start-2 col-end-5">
        <ShowTalkingPoint talkingPoint={talkingPoint} />
        <CommentCreateForm talkingPointId={talkingPoint.id} startOpen />
        <CommentList fetchData={() => fetchCommentsByPostId(talkingPoint.id)} />
      </main>
    </>
  );
}

export default ShowTalkingPointPage;
