import ShowComment from "./ShowComment";
import { CommentWithAuthor } from "@/app/db/queries/comments";

interface CommentListProps {
  fetchData: () => Promise<CommentWithAuthor[]>;
  languageName: string;
}

export default async function CommentList({
  fetchData,
  languageName,
}: CommentListProps) {
  const comments = await fetchData();
  const topLevelComments = comments.filter(
    (comment) => comment.parentId === null,
  );
  const renderedComments = topLevelComments.map((comment) => {
    return (
      <ShowComment
        key={comment.id}
        commentId={comment.id}
        comments={comments}
        languageName={languageName}
      />
    );
  });

  return (
    <div className="space-y-3 px-2">
      <h1 className="text-lg font-bold text-almostWhite">
        {comments.length > 0
          ? `All ${comments.length} comments`
          : "Be the first to comment!"}
      </h1>
      {renderedComments}
    </div>
  );
}
