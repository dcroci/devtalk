import CommentCreateForm from "@/components/talkingPoints/CommentCreateForm";
import ShowTalkingPoint from "@/components/talkingPoints/ShowTalkingPoint";
import { fetchCommentsByPostId } from "@/app/db/queries/comments";
import CommentList from "@/components/talkingPoints/CommentList";
import { Suspense } from "react";
import LoadingSuspense from "@/components/common/LoadingSuspense";
import { Skeleton, Spacer } from "@nextui-org/react";

async function ShowTalkingPointPage({ params }: any) {
  const { id } = params;
  return (
    <>
      <main className="col-start-1 col-end-6 px-2 lg:col-start-2 lg:col-end-5">
        <Suspense
          fallback={
            <Skeleton>
              <div className="flex min-h-[120px] flex-row items-center gap-8 rounded px-6  py-2">
                <div className="flex h-full w-full flex-col justify-between">
                  <div>
                    <div className="mb-2 flex items-center gap-3">
                      <span className="text-small text-medGray"></span>
                    </div>

                    <div>
                      <h3 className="mb-2 flex flex-col text-xl font-semibold text-white"></h3>

                      <p className="  w-full break-words bg-gradient-to-b from-medGray from-55% to-transparent bg-clip-text font-normal leading-relaxed text-transparent"></p>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-4">Comment</div>
                </div>
              </div>
              <Spacer y={10} />
            </Skeleton>
          }
        >
          <ShowTalkingPoint talkingPointId={id} />
        </Suspense>
        <Suspense
          fallback={
            <Skeleton>
              <div className="flex min-h-[120px] flex-row items-center gap-8 rounded px-6  py-2">
                <div className="flex h-full w-full flex-col justify-between">
                  <div>
                    <div className="mb-2 flex items-center gap-3">
                      <span className="text-small text-medGray"></span>
                    </div>

                    <div>
                      <h3 className="mb-2 flex flex-col text-xl font-semibold text-white"></h3>

                      <p className="  w-full break-words bg-gradient-to-b from-medGray from-55% to-transparent bg-clip-text font-normal leading-relaxed text-transparent"></p>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-4">Comment</div>
                </div>
              </div>
              <Spacer y={10} />
            </Skeleton>
          }
        >
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
