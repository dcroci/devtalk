import { db } from "@/app/db";
import SideNav from "@/components/sections/SideNav";
import TalkingPointsAside from "@/components/sections/TalkingPointsAside";
import getCurrentSession from "@/scripts/getCurrentSession";
import Link from "next/link";
import { notFound } from "next/navigation";

async function ShowSnippetPage({ params }: any) {
  //get the user's current session
  const currentSession = await getCurrentSession();
  //get the snippet that matches the id of the one passed into the url
  const snippet = await db.snippet.findFirst({
    where: { id: Number(params.id) },
  });
  //get the user object of who created the snippet being shown
  const snippetCreator = await db.account.findFirst({
    where: { id: snippet?.accountId },
  });
  //get the language associated with the snippet
  const language = await db.language.findFirst({
    where: {
      name: {
        equals: params.language,
        mode: "insensitive",
      },
    },
  });
  console.log(language);
  //if there is no snippet with that ID, return not found
  if (!snippet || !language) {
    return notFound();
  }

  const { title, code } = snippet;
  return (
    <>
      <SideNav language={language} />
      <div className="col-span-3">
        <div className=" flex items-center justify-between">
          <h1 className="flex h-14 items-center text-[36px] font-bold text-almostWhite">
            {title}
          </h1>
          {currentSession?.user?.id === snippetCreator?.userId ? (
            <div className="flex gap-4">
              <Link
                href={`/${language.name.toLowerCase()}/snippets/${params.id}/edit`}
                className="rounded border p-2 text-[14px] font-bold text-white"
              >
                Edit
              </Link>
              <form>
                <button className="rounded border p-2 text-[14px] font-bold text-white">
                  Delete
                </button>
              </form>
            </div>
          ) : (
            ""
          )}
        </div>
        <pre className="rounded border border-gray-200 bg-gray-200 p-3">
          <code>{code}</code>
        </pre>
      </div>
      <TalkingPointsAside logoUrl={language.logoUrl} />
    </>
  );
}

export default ShowSnippetPage;
