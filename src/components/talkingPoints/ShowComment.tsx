/* eslint-disable @next/next/no-img-element */
import CommentCreateForm from "./CommentCreateForm";

import { CommentWithAuthor } from "@/app/db/queries/comments";
import {
  Card,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import getCurrentSession from "@/scripts/getCurrentSession";
import { deleteComment } from "@/actions/comments";
import TimeAgo from "../common/TimeAgo";

interface ShowCommentProps {
  commentId: string;
  comments: CommentWithAuthor[];
  languageName: string;
}

export default async function ShowComment({
  commentId,
  comments,
  languageName,
}: ShowCommentProps) {
  const comment = comments.find((c) => c.id === commentId);
  console.log(comment);
  if (!comment) {
    return null;
  }
  const currentUser = await getCurrentSession();
  const children = comments.filter((c) => c.parentId === commentId);
  const renderedChildren = children.map((child) => {
    return (
      <ShowComment
        key={child.id}
        commentId={child.id}
        comments={comments}
        languageName={languageName}
      />
    );
  });
  const deleteCommentAction = deleteComment.bind(null, comment, languageName);

  return (
    <Card className="mb-1 rounded  border-l-2 border-purple ">
      <div className="flex gap-3 border-b-2 border-b-darkGray bg-almostBlack p-2">
        <img
          src={comment.user.image || ""}
          alt="user image"
          width={40}
          height={40}
          className="h-10 w-10 rounded-full border-2 border-purple"
        />

        <div className="flex-1 space-y-3 ">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center">
              <h3 className="text-[16px] font-semibold  text-almostWhite">
                {comment.user.name}
              </h3>
              {currentUser?.user && currentUser?.user.id === comment?.userId ? (
                <Popover>
                  <PopoverTrigger>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      className="h-6 w-6 cursor-pointer stroke-almostWhite"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                      />
                    </svg>
                  </PopoverTrigger>
                  <PopoverContent>
                    <ul className="text-almostWhite">
                      <>
                        <li>
                          <form action={deleteCommentAction}>
                            <button
                              type="submit"
                              className="flex items-center justify-between gap-2 p-2 text-danger"
                            >
                              Delete{" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18 18 6M6 6l12 12"
                                />
                              </svg>{" "}
                            </button>
                          </form>
                        </li>
                      </>
                    </ul>
                  </PopoverContent>
                </Popover>
              ) : (
                ""
              )}
            </div>
            <div className="text-medGray">
              <TimeAgo date={new Date(comment.createdAt)} />
            </div>
          </div>
          <p className=" text-[14px] font-medium leading-relaxed text-almostWhite">
            {comment.content}
          </p>

          <CommentCreateForm
            talkingPointId={comment.talkingPointId}
            parentId={comment.id}
          />
        </div>
      </div>
      <div className="pl-4">{renderedChildren}</div>
    </Card>
  );
}
