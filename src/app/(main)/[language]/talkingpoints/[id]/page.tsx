import CommentCreateForm from "@/components/talkingPoints/CommentCreateForm";
import ShowTalkingPoint from "@/components/talkingPoints/ShowTalkingPoint";
import { fetchCommentsByPostId } from "@/app/db/queries/comments";
import CommentList from "@/components/talkingPoints/CommentList";

function ShowTalkingPointPage({ params }: any) {
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
