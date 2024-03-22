import Image from "next/image";
import { Button } from "@nextui-org/react";
import CommentCreateForm from "./CommentCreateForm";
import { db } from "@/app/db";

import { CommentWithAuthor } from "@/app/db/queries/comments";

interface ShowCommentProps {
  commentId: string;
  comments: CommentWithAuthor[];
}

export default function ShowComment({ commentId, comments }: ShowCommentProps) {
  const comment = comments.find((c) => c.id === commentId);

  if (!comment) {
    return null;
  }

  const children = comments.filter((c) => c.parentId === commentId);
  const renderedChildren = children.map((child) => {
    return (
      <ShowComment key={child.id} commentId={child.id} comments={comments} />
    );
  });

  return (
    <div className="mb-1 rounded  border-l-2 border-purple ">
      <div className="flex gap-3 border-b-2 border-b-darkGray bg-almostBlack p-2">
        <img
          src={comment.user.image || ""}
          alt="user image"
          width={40}
          height={40}
          className="h-10 w-10 rounded-full"
        />
        <div className="flex-1 space-y-3 ">
          <p className="text-sm font-medium  text-almostWhite">
            {comment.user.name}
          </p>
          <p className=" text-[14px] leading-relaxed text-almostWhite">
            {comment.content}
          </p>

          <CommentCreateForm
            talkingPointId={comment.talkingPointId}
            parentId={comment.id}
          />
        </div>
      </div>
      <div className="pl-4">{renderedChildren}</div>
    </div>
  );
}
