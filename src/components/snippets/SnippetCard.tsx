/* eslint-disable @next/next/no-img-element */
"use client";
import { Button, Card } from "@nextui-org/react";
import Link from "next/link";
import ShareBtn from "../common/ShareBtn";
import { createSnippetLike, deleteSnippetLike } from "@/actions/likes";
import LikeBox from "../talkingPoints/LikeBox";
import { animate, motion } from "framer-motion";
import { Snippet } from "@prisma/client";
import { SnippetLike } from "@prisma/client";

interface SnippetCardProps {
  languageName: string;
  snippet: Snippet & {
    likes: SnippetLike[];
  };
  logoUrl: string;
  i: number;
}
function SnippetCard({ snippet, languageName, logoUrl, i }: SnippetCardProps) {
  const LikeSnippetAction = createSnippetLike.bind(
    null,
    snippet.id,
    languageName,
  );
  const DeleteLikeSnippetAction = deleteSnippetLike.bind(
    null,
    snippet.id,
    languageName,
  );

  return (
    <motion.div
      className="relative  rounded "
      key={snippet.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "linear",
        duration: 0.5,
        delay: 0.1 + i * 0.15,
      }}
    >
      <Link
        href={`/${languageName.toLowerCase()}/snippets/${snippet.id}`}
        className="h-fit p-2"
      >
        <Card className="relative min-h-[120px] rounded border-l-4 border-purple  bg-almostBlack px-6  py-6 transition-all duration-200 lg:hover:scale-[1.01] lg:hover:border-l-8 ">
          <div className="flex gap-3   text-white">
            <img
              src={`${logoUrl}`}
              alt=""
              className="aspect-square h-10 w-10"
            />
          </div>
          <div className="mt-2 flex flex-col pr-10">
            <h2 className="mb-2 flex flex-col text-xl font-semibold text-white">
              {snippet.title}
            </h2>
          </div>

          <p className=" z-40  mb-2 bg-gradient-to-b from-medGray from-55% to-transparent bg-clip-text pr-10 font-normal leading-relaxed text-transparent">
            {snippet.desc}
          </p>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              className="flex items-center justify-center rounded border-2 border-purple bg-transparent text-small text-almostWhite"
            >
              <p>Comment</p>
            </Button>
            <ShareBtn talkingPoint={snippet} />
          </div>
        </Card>
      </Link>
      <div className="absolute bottom-0 right-2 top-0 flex flex-col justify-center gap-2">
        <form action={LikeSnippetAction}>
          <div>
            <Button type="submit" className="w-fit bg-transparent" size="sm">
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
            </Button>
          </div>
        </form>
        <LikeBox likes={snippet.likes.length} />
        <form action={DeleteLikeSnippetAction}>
          <Button type="submit" className="w-fit bg-transparent" size="sm">
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
          </Button>
        </form>
      </div>
    </motion.div>
  );
}

export default SnippetCard;
