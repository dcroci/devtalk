import type { TalkingPoint } from "@prisma/client";
import { db } from "..";

export type PostWithData = TalkingPoint & {
  language: { name: string };
  user: { name: string | null; image: string | null };
  _count: { comments: number };
};

export function fetchPostsByTopicSlug(name: string): Promise<PostWithData[]> {
  return db.talkingPoint.findMany({
    where: { language: { name } },
    include: {
      language: { select: { name: true } },
      user: { select: { name: true, image: true } },
      _count: { select: { comments: true } },
    },
  });
}
