/* eslint-disable @next/next/no-img-element */
import type { TalkingPoint, User, Language } from "@prisma/client";
import Link from "next/link";

import type { PostWithData } from "@/app/db/queries/posts";
import { likeTalkingPoint } from "@/actions/talkingpoints";
import { Button } from "@nextui-org/react";
import fixWordLength from "@/scripts/fixWordLength";
import TimeAgo from "../common/TimeAgo";
import ShareBtn from "../common/ShareBtn";
interface PostListProps {
  fetchData: () => Promise<PostWithData[]>;
}
export default async function TalkingPointList({ fetchData }: PostListProps) {
  const talkingPoints = await fetchData();
  const renderedPosts = talkingPoints.map((talkingPoint) => {
    const topicSlug = talkingPoint.language.name;

    if (!topicSlug) {
      throw new Error("Need a slug to link to a post");
    }
    const like = likeTalkingPoint.bind(null, talkingPoint.id);

    return (
      <div
        key={talkingPoint.id}
        className="relative  rounded border-l-4  border-purple bg-almostBlack p-2 transition-all duration-100 hover:border-l-8"
      >
        <div className="flex min-h-[120px] flex-row items-center gap-8 px-6 py-2  ">
          <div className="flex h-full flex-col justify-between">
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
              <div>
                <Link
                  href={`/${talkingPoint.language.name.toLowerCase()}/talkingpoints/${talkingPoint.id}`}
                >
                  <h3 className="mb-2 flex flex-col text-xl font-semibold text-white">
                    {talkingPoint.title}{" "}
                  </h3>
                </Link>
                <p className=" z-40  bg-gradient-to-b from-medGray from-55% to-transparent bg-clip-text font-normal leading-relaxed text-transparent">
                  {fixWordLength(talkingPoint.desc, 600)}
                </p>
              </div>
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
          <form action={like}>
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
          <p className="mb-10 text-center text-small font-bold text-almostWhite">
            {talkingPoint.likes}
          </p>
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
        </div>
      </div>
    );
  });

  return <div className="space-y-6">{renderedPosts}</div>;
}
