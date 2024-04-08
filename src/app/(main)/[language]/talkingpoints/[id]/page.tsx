import CommentCreateForm from "@/components/talkingPoints/CommentCreateForm";
import ShowTalkingPoint from "@/components/talkingPoints/ShowTalkingPoint";
import { fetchCommentsByPostId } from "@/app/db/queries/comments";
import CommentList from "@/components/talkingPoints/CommentList";
import { Suspense } from "react";
import LoadingSuspense from "@/components/common/LoadingSuspense";

function ShowTalkingPointPage({ params }: any) {
  const { id } = params;
  return (
    <>
      <main className="col-start-1 col-end-6 px-2 lg:col-start-2 lg:col-end-5">
        <Suspense fallback={<LoadingSuspense />}>
          <ShowTalkingPoint talkingPointId={id} />
        </Suspense>
        <Suspense fallback={<LoadingSuspense />}>
          <CommentCreateForm talkingPointId={params.id} startOpen />
        </Suspense>
        <Suspense fallback={<LoadingSuspense />}>
          <CommentList
            fetchData={() => fetchCommentsByPostId(params.id)}
            languageName={params.language}
          />
        </Suspense>
      </main>
    </>
  );
}

export default ShowTalkingPointPage;
