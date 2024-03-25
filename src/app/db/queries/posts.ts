import type { TalkingPoint } from "@prisma/client";
import { db } from "..";

export type PostWithData = TalkingPoint & {
  language: { name: string };
  user: { name: string | null; image: string | null };
  _count: { comments: number };
};

export async function fetchPostsByTopicSlug(name: string, filter: string) {
  if (filter == "new" || !filter) {
    return await db.talkingPoint.findMany({
      where: { language: { name } },
      include: {
        language: { select: { name: true } },
        user: { select: { name: true, image: true } },
        _count: { select: { comments: true } },
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    });
  } else if (filter == "comments") {
    return await db.talkingPoint.findMany({
      where: { language: { name } },
      include: {
        language: { select: { name: true } },
        user: { select: { name: true, image: true } },
        _count: { select: { comments: true } },
      },
      orderBy: {
        comments: {
          _count: "desc",
        },
      },
    });
  }
  //REWRITE ONCE LIKES ARE LINKED TO TALKING POINTS
  else if (filter == "likes") {
    return await db.talkingPoint.findMany({
      where: { language: { name } },
      include: {
        language: { select: { name: true } },
        user: { select: { name: true, image: true } },
        _count: { select: { comments: true } },
      },
      orderBy: {
        comments: {
          _count: "asc",
        },
      },
    });
  } else if (filter == "oldest") {
    return await db.talkingPoint.findMany({
      where: { language: { name } },
      include: {
        language: { select: { name: true } },
        user: { select: { name: true, image: true } },
        _count: { select: { comments: true } },
      },
      orderBy: {
        createdAt: "asc",
      },
    });
  } else {
    return [];
  }
}
