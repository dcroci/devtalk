/* eslint-disable @next/next/no-img-element */
import CommentCreateForm from "./CommentCreateForm";

import { CommentWithAuthor } from "@/app/db/queries/comments";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import getCurrentSession from "@/scripts/getCurrentSession";
import { deleteComment } from "@/actions/comments";

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
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium  text-almostWhite">
              {comment.user.name}
            </p>
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
                  {currentUser?.user &&
                  currentUser?.user.id === comment?.userId ? (
                    <>
                      <li className="flex items-center justify-between gap-2 p-2">
                        Edit{" "}
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
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                          />
                        </svg>
                      </li>
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
                  ) : (
                    ""
                  )}
                </ul>
              </PopoverContent>
            </Popover>
          </div>
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
