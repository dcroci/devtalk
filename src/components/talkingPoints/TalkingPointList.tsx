/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Button } from "@nextui-org/react";
import fixWordLength from "@/scripts/fixWordLength";
import TimeAgo from "../common/TimeAgo";
import ShareBtn from "../common/ShareBtn";
import {
  createTalkingPointLike,
  deleteTalkingPointLike,
} from "@/actions/likes";

import LikeBox from "./LikeBox";
import { db } from "@/app/db";
import { fetchPostsByTopicSlug } from "@/app/db/queries/posts";
// interface PostListProps {
//   fetchData: any;
//   filter: string;
// }
export default async function TalkingPointList({ name, page }: any) {
  const talkingPointLength = await db.talkingPoint.count({
    where: { language: { name } },
  });
  const totalPages = Math.ceil(talkingPointLength / 8);
  const links = [];
  for (let i = 1; i <= totalPages; i++) {
    links.push(
      <li
        key={i}
        className={` rounded border-2 border-purple bg-darkGray font-bold text-white hover:bg-purple/70 ${page == i ? "bg-purple" : ""}`}
      >
        <Link
          href={`?page=${i}`}
          className="flex h-8 w-8  items-center justify-center"
        >
          {i}
        </Link>
      </li>,
    );
  }

  console.log(talkingPointLength);
  const talkingPoints = await fetchPostsByTopicSlug(name, page);
  let renderedPosts: any[] = [];
  if (talkingPoints) {
    renderedPosts = talkingPoints.map((talkingPoint: any) => {
      const createLikeAction = createTalkingPointLike.bind(
        null,
        talkingPoint.id,
        talkingPoint.language.name,
      );
      const deleteLikeAction = deleteTalkingPointLike.bind(
        null,
        talkingPoint.id,
        talkingPoint.language.name,
      );

      return (
        <div
          key={talkingPoint.id}
          className="relative  rounded border-l-4  border-purple bg-almostBlack p-2 transition-all duration-200 lg:hover:scale-[1.01] lg:hover:border-l-8"
        >
          <div className="flex min-h-[120px] flex-row items-center gap-8 px-6 py-2  ">
            <div className="flex h-full w-full flex-col justify-between">
              <div>
                <div className="mb-2 flex items-center gap-3">
                  <img
                    src={talkingPoint.user.image || ""}
                    alt=""
                    className="h-10 min-h-10 w-10 min-w-10 rounded-full border-2 border-purple"
                  />

                  <span className="text-small text-medGray">
                    {talkingPoint.user.name + " • "}
                    <TimeAgo date={new Date(talkingPoint.createdAt)} />
                  </span>
                </div>
                <Link
                  href={`/${talkingPoint.language.name.toLowerCase()}/talkingpoints/${talkingPoint.id}`}
                >
                  <div>
                    <h3 className="mb-2 flex flex-col text-xl font-semibold text-white">
                      {fixWordLength(talkingPoint.title, 60)}{" "}
                    </h3>

                    <p className="  w-full break-words bg-gradient-to-b from-medGray from-55% to-transparent bg-clip-text font-normal leading-relaxed text-transparent">
                      {fixWordLength(talkingPoint.desc, 300)}
                    </p>
                  </div>
                </Link>
              </div>
              <div className="mt-2 flex items-center gap-4">
                <Button
                  size="sm"
                  className="flex items-center justify-center rounded border-2 border-purple bg-transparent text-small text-almostWhite"
                >
                  <Link
                    href={`/${talkingPoint.language.name.toLowerCase()}/talkingpoints/${talkingPoint.id}`}
                  >
                    Comment
                  </Link>
                </Button>
                <ShareBtn talkingPoint={talkingPoint} />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-2 top-0 flex flex-col justify-center gap-2">
            <form action={createLikeAction}>
              <button type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  className="h-6 w-6 stroke-purple drop-shadow-xl hover:shadow-purple"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                  />
                </svg>
              </button>
            </form>

            <LikeBox likes={talkingPoint._count.likes} />
            <form action={deleteLikeAction}>
              <button type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  className="h-6 w-6 stroke-purple"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      );
    });
  }

  return (
    <main className="space-y-6">
      {renderedPosts}
      <div>
        <ul className=" flex w-full justify-center gap-4">{links}</ul>
      </div>
    </main>
  );
}
