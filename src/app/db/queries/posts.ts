import type { TalkingPoint } from "@prisma/client";
import { db } from "..";

export type PostWithData = TalkingPoint & {
  language: { name: string };
  user: { name: string | null; image: string | null };
  _count: { comments: number };
};

export async function fetchPostsByTopicSlug(name: string, page: number) {
  return await db.talkingPoint.findMany({
    where: { language: { name } },
    include: {
      language: { select: { name: true } },
      user: { select: { name: true, image: true } },
      _count: { select: { comments: true, likes: true } },
    },
    orderBy: {
      createdAt: "desc",
    },
    skip: (page - 1) * 8,
    take: page * 8,
  });
  // if (filter == "new" || !filter) {
  //   return await db.talkingPoint.findMany({
  //     where: { language: { name } },
  //     include: {
  //       language: { select: { name: true } },
  //       user: { select: { name: true, image: true } },
  //       _count: { select: { comments: true } },
  //     },
  //     orderBy: {
  //       createdAt: "desc",
  //     },
  //     skip: (page - 1) * 10,
  //     take: page * 10,
  //   });
  // } else if (filter == "comments") {
  //   return await db.talkingPoint.findMany({
  //     where: { language: { name } },
  //     include: {
  //       language: { select: { name: true } },
  //       user: { select: { name: true, image: true } },
  //       _count: { select: { comments: true } },
  //     },
  //     orderBy: {
  //       comments: {
  //         _count: "desc",
  //       },
  //     },
  //     skip: (page - 1) * 10,
  //     take: page * 10,
  //   });
  // } else if (filter == "likes") {
  //   return await db.talkingPoint.findMany({
  //     where: { language: { name } },
  //     include: {
  //       language: { select: { name: true } },
  //       user: { select: { name: true, image: true } },
  //       _count: { select: { comments: true } },
  //     },
  //     orderBy: {
  //       likes: {
  //         _count: "desc",
  //       },
  //     },
  //     skip: (page - 1) * 10,
  //     take: page * 10,
  //   });
  // } else if (filter == "oldest") {
  //   return await db.talkingPoint.findMany({
  //     where: { language: { name } },
  //     include: {
  //       language: { select: { name: true } },
  //       user: { select: { name: true, image: true } },
  //       _count: { select: { comments: true } },
  //     },
  //     orderBy: {
  //       createdAt: "asc",
  //     },
  //     skip: (page - 1) * 10,
  //     take: page * 10,
  //   });
  // } else {
  //   return await db.talkingPoint.findMany({
  //     where: { language: { name } },
  //     include: {
  //       language: { select: { name: true } },
  //       user: { select: { name: true, image: true } },
  //       _count: { select: { comments: true } },
  //     },
  //     orderBy: {
  //       createdAt: "desc",
  //     },
  //     skip: (page - 1) * 10,
  //     take: page * 10,
  //   });
  // }
}
