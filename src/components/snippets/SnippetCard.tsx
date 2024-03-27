"use client";
import { Skeleton, Button } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import ShareBtn from "../common/ShareBtn";
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
  return (
    <Skeleton isLoaded={isLoaded} className="rounded">
      <Link
        href={`/${languageName.toLowerCase()}/snippets/${snippet.id}`}
        className="h-fit"
      >
        <div className="relative  rounded border-l-4  border-purple bg-almostBlack p-2 transition-all duration-200 lg:hover:scale-[1.01] lg:hover:border-l-8">
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
        </div>
      </Link>
    </Skeleton>
  );
}

export default SnippetCard;
