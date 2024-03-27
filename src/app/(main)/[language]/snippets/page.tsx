import { db } from "@/app/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import SnippetList from "@/components/snippets/SnippetList";
import { Button } from "@nextui-org/react";

async function ShowSnippetsPage({ params }: any) {
  const language = await db.language.findFirst({
    where: {
      name: {
        equals: params.language,
        mode: "insensitive",
      },
    },
    select: { name: true, logoUrl: true, id: true, Snippet: true },
  });

  if (!language) {
    notFound();
  }
  return (
    <>
      <main className="col-start-1 col-end-6 flex flex-col gap-4 px-2 lg:col-start-2 lg:col-end-5">
        <p className="text-small text-medGray">
          <Link href="/">Home</Link> /{" "}
          <Link href={`/${language.name.toLowerCase()}`}>{language.name}</Link>{" "}
          / <span className="text-almostWhite">Snippets</span>
        </p>
        <div className="mb-2 flex items-center justify-between border-b-2 border-darkGray pb-2">
          <h1 className=" w-full  text-[30px] font-bold text-almostWhite">
            {`${language.name} Snippets`}
          </h1>
          <Link href={`/${language.name.toLowerCase()}/snippets/new`}>
            <Button className=" fixed bottom-6  right-6 z-40 bg-purple text-2xl font-semibold text-almostWhite shadow-lg shadow-purple/50 md:static">
              +
            </Button>
          </Link>
        </div>

        <SnippetList language={language} snippets={language.Snippet} />
      </main>
    </>
  );
}

export default ShowSnippetsPage;
