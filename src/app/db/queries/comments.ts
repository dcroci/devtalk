import type { Comment } from "@prisma/client";
import { db } from "..";

export type CommentWithAuthor = Comment & {
  user: { name: string | null; image: string | null };
};
export function fetchCommentsByPostId(
  talkingPointId: string,
): Promise<CommentWithAuthor[]> {
  return db.comment.findMany({
    where: { talkingPointId },
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });
}
