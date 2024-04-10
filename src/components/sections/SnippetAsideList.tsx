import { db } from "@/app/db";

import Link from "next/link";

interface SnippetAsideListProps {
  languageId: string;
  languageName: string;
}

async function SnippetAsideList({
  languageId,
  languageName,
}: SnippetAsideListProps) {
  const snippets = await db.snippet.findMany({
    where: { languageId: languageId },
    include: { user: true, likes: true },
    take: 5,
  });

  return (
    <div className="grid grid-cols-1 gap-4 ">
      {snippets.length > 0 ? (
        snippets.map((snippet) => (
          <Link
            key={snippet.id}
            href={`/${languageName.toLowerCase()}/snippets/${snippet.id}`}
          >
            <div>
              <div className="mr-auto flex   items-center gap-4 rounded  p-2">
                <img
                  src={snippet.user.image || ""}
                  alt=""
                  className="w-10 rounded-full border-2 border-purple"
                />
                <div>
                  <h3
                    className=" mb-2 text-[16px] font-medium leading-relaxed text-almostWhite hover:underline
                "
                  >
                    {snippet.title}
                  </h3>
                  <div>
                    <p className="text-[14px] text-medGray">
                      {snippet.likes.length}{" "}
                      {snippet.likes.length > 1 || snippet.likes.length == 0
                        ? "Likes"
                        : "Like"}{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p className="p-2 text-almostWhite">
          Be the first to{" "}
          <span className="hover:underline">
            <Link href={"/snippets/new"}>share a Snippet</Link>
          </span>
        </p>
      )}
    </div>
  );
}

export default SnippetAsideList;
