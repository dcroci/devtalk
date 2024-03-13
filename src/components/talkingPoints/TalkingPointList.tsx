/* eslint-disable @next/next/no-img-element */
import type { TalkingPoint, User, Language } from "@prisma/client";
import Link from "next/link";

import type { PostWithData } from "@/app/db/queries/posts";
import likeTalkingPoint from "@/actions/likeTalkingPoint";
import { Button } from "@nextui-org/react";
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
        className="relative rounded border-2 border-darkGray  bg-almostBlack p-2"
      >
        {/* <Link href={paths.postShow(topicSlug, post.id)}> */}

        <div className="flex min-h-[120px] flex-row items-center gap-8">
          <div className="flex">
            <img
              src={talkingPoint.user.image || ""}
              alt=""
              className="h-14 w-14 rounded-full border-2 border-purple"
            />
          </div>
          <div className="flex h-full flex-col justify-between">
            <div>
              <Link
                href={`/${talkingPoint.language.name.toLowerCase()}/talkingpoints/${talkingPoint.id}`}
              >
                <h3 className="text-xl font-semibold text-white">
                  {talkingPoint.title}
                </h3>
              </Link>
              <p className=" font-normal text-medGray">{talkingPoint.desc}</p>
            </div>
            <div className="mt-2 flex gap-4">
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
              <Button
                size="sm"
                className="flex items-center justify-center rounded bg-purple  text-small text-white"
              >
                Share
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-2 top-0 flex flex-col justify-center gap-2">
          <form action={like}>
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
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
            strokeWidth={1.5}
            className="h-6 w-6 stroke-purple"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
        </div>
        {/* </Link> */}
      </div>
    );
  });

  return <div className="space-y-2">{renderedPosts}</div>;
}
