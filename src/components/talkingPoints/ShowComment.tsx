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
    <div className="mb-1 mt-2 rounded border border-gray-700 bg-darkGray  p-4">
      <div className="flex gap-3">
        <Image
          src={comment.user.image || ""}
          alt="user image"
          width={40}
          height={40}
          className="h-10 w-10 rounded-full"
        />
        <div className="flex-1 space-y-3 bg-almostBlack">
          <p className="text-sm font-medium  text-purple">
            {comment.user.name}
          </p>
          <p className=" text-white">{comment.content}</p>

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
