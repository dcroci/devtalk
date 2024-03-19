import { db } from "@/app/db";
import Link from "next/link";

async function SnippetsAside({ language }: any) {
  const snippets = await db.snippet.findMany({
    where: { languageId: language.id },
    include: { user: true, language: true },
  });

  return (
    <aside className="col-start-5 flex h-fit w-full flex-col items-center rounded border-2 border-darkGray p-2">
      <div className="mb-2 flex w-full items-center gap-2 ">
        <h2 className=" w-full border-b-2 border-purple text-center text-[16px] font-semibold text-almostWhite">
          Snippets
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 ">
        {snippets.map((snippet) => (
          <Link
            key={snippet.id}
            href={`/${snippet.language.name.toLowerCase()}/snippets/${snippet.id}`}
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
                    className=" text-[16px] text-almostWhite
        "
                  >
                    {snippet.title}
                  </h3>
                  {/* <div>
                    <p className="text-[14px] text-medGray">
                      {snippet.comments.length} Comments · {snippet.likes} Likes
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}

export default SnippetsAside;
