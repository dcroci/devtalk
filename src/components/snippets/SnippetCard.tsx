/* eslint-disable @next/next/no-img-element */
"use client";
import { Skeleton, Button, Card } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import ShareBtn from "../common/ShareBtn";
import { createSnippetLike, deleteSnippetLike } from "@/actions/likes";
import LikeBox from "../talkingPoints/LikeBox";
import { motion } from "framer-motion";

interface SnippetCardProps {
  languageName: string;
  snippet: any;
  logoUrl: string;
}
function SnippetCard({ snippet, languageName, logoUrl }: SnippetCardProps) {
  const [isLoaded, setIsLoaded] = useState(() => {
    if (snippet) {
      return true;
    } else {
      return false;
    }
  });

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
    <Skeleton isLoaded={isLoaded} className="rounded">
      <Link
        href={`/${languageName.toLowerCase()}/snippets/${snippet.id}`}
        className="h-fit p-2"
      >
        <Card className="relative  rounded border-l-4  border-purple bg-almostBlack p-4 transition-all duration-200 lg:hover:scale-[1.01] lg:hover:border-l-8">
          <div className="flex gap-3  text-white">
            <img src={`${logoUrl}`} alt="" className="w-8" />

            <div className="flex flex-col">
              <h2 className="mb-2 flex flex-col text-xl font-semibold text-white">
                {snippet.title}
              </h2>
            </div>
          </div>

          <p className=" z-40  mb-2 bg-gradient-to-b from-medGray from-55% to-transparent bg-clip-text font-normal leading-relaxed text-transparent">
            This is a function that does this one thing
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
        <LikeBox likes={snippet.likes.length} />
        <motion.form action={DeleteLikeSnippetAction}>
          <motion.button
            type="submit"
            whileHover={{
              scale: 1.8,
              filter: "drop-shadow(20px 20px 20px #8900F2)",
              transition: { duration: 0.5 },
            }}
          >
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
          </motion.button>
        </motion.form>
      </div>
    </Skeleton>
  );
}

export default SnippetCard;
