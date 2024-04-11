import { Snippet } from "@prisma/client";
import SnippetCard from "./SnippetCard";
import { db } from "@/app/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import getSnippetsWithPagination from "@/app/db/queries/snippets";

interface SnippetList {
  languageName: string;
  filter: string;
  page: number;
}
async function SnippetList({ languageName, filter, page }: SnippetList) {
  console.log(page);
  console.log(languageName);

  const snippetsLength = await db.snippet.count({
    where: {
      language: {
        name: {
          equals: languageName,
          mode: "insensitive",
        },
      },
    },
  });
  console.log(snippetsLength);
  const totalPages = Math.ceil(snippetsLength / 8);
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
  const snippets = await getSnippetsWithPagination(languageName, page, filter);
  if (!snippets) {
    return notFound();
  }
  console.log("SNIPPETS", snippets);
  let renderedPosts: any[] = [];
  {
    renderedPosts = snippets.map((snippet: any, i: number) => (
      <SnippetCard
        snippet={snippet}
        languageName={snippet.language.name}
        logoUrl={snippet.language.logoUrl}
        key={snippet.id}
        i={Number(i)}
      />
    ));
  }
  return (
    <div className="grid w-full grid-cols-1 gap-4 pb-10">
      {renderedPosts}
      <div className="absolute bottom-0 left-0 right-0 z-50 flex flex-col items-center gap-2  font-medium">
        <ul className=" flex w-full items-center justify-center gap-4">
          {links}
        </ul>
        <li className="list-none text-almostWhite">
          {`Showing ${renderedPosts.length} result${renderedPosts.length > 1 || renderedPosts.length === 0 ? "s" : ""}`}
        </li>
      </div>
    </div>
  );
}

export default SnippetList;
