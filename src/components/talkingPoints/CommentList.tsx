import ShowComment from "./ShowComment";
import { CommentWithAuthor } from "@/app/db/queries/comments";

interface CommentListProps {
  fetchData: () => Promise<CommentWithAuthor[]>;
}

export default async function CommentList({ fetchData }: CommentListProps) {
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
      />
    );
  });

  return (
    <div className="space-y-3">
      <h1 className="text-lg font-bold text-almostWhite">
        {comments.length > 0
          ? `All ${comments.length} comments`
          : "Be the first comment!"}
      </h1>
      {renderedComments}
    </div>
  );
}
