import { db } from "@/app/db";
import SideNav from "@/components/sections/SideNav";
import CommentCreateForm from "@/components/talkingPoints/CommentCreateForm";
import ShowComment from "@/components/talkingPoints/ShowComment";
import ShowTalkingPoint from "@/components/talkingPoints/ShowTalkingPoint";
import { notFound } from "next/navigation";
import { fetchCommentsByPostId } from "@/app/db/queries/comments";
import CommentList from "@/components/talkingPoints/CommentList";

async function ShowTalkingPointPage({ params }: any) {
  // const talkingPoint = await db.talkingPoint.findFirst({
  //   where: { id: params.id },
  //   include: { user: true, language: { select: { name: true } } },
  // });

  // if (!talkingPoint) {
  //   notFound();
  // }
  return (
    <>
      <main className="col-start-1 col-end-6 px-2 lg:col-start-2 lg:col-end-5">
        <ShowTalkingPoint talkingPointId={params.id} />
        <CommentCreateForm talkingPointId={params.id} startOpen />
        <CommentList
          fetchData={() => fetchCommentsByPostId(params.id)}
          languageName={params.language}
        />
      </main>
    </>
  );
}

export default ShowTalkingPointPage;
