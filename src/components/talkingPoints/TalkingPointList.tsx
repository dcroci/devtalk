/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { db } from "@/app/db";
import { fetchPostsByTopicSlug } from "@/app/db/queries/posts";
import TalkingPointCard from "./TalkingPointCard";

import getCurrentSession from "@/scripts/getCurrentSession";

interface TalkingPointList {
  name: string;
  page: number;
  filter: string;
}
export default async function TalkingPointList({
  name,
  page,
  filter,
}: TalkingPointList) {
  const talkingPointLength = await db.talkingPoint.count({
    where: { language: { name } },
  });
  const session = await getCurrentSession();
  const totalPages = Math.ceil(talkingPointLength / 8);
  const links = [];
  for (let i = 1; i <= totalPages; i++) {
    links.push(
      <li
        key={i}
        className={` rounded border-2 border-purple bg-darkGray font-bold text-white transition-all duration-500 hover:bg-purple/70 ${page == i ? "bg-purple" : ""}`}
      >
        <Link
          href={`?filter=${filter}&page=${i}`}
          className="flex h-8 w-8  items-center justify-center"
        >
          {i}
        </Link>
      </li>,
    );
  }

  const talkingPoints = await fetchPostsByTopicSlug(name, page, filter);

  let renderedPosts: any[] = [];
  if (talkingPoints) {
    renderedPosts = talkingPoints.map((talkingPoint: any, i) => {
      return (
        <TalkingPointCard
          talkingPoint={talkingPoint}
          key={talkingPoint.id}
          i={i}
          session={session}
        />
      );
    });
  }

  return (
    <main className="space-y-6 pb-10">
      {renderedPosts}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center gap-2 font-medium ">
        <ul className=" flex w-full items-center justify-center gap-4">
          {links}
        </ul>
        <li className="list-none text-almostWhite">
          Showing {renderedPosts.length} results
        </li>
      </div>
    </main>
  );
}
