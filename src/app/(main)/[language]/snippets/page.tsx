import { db } from "@/app/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import SnippetList from "@/components/snippets/SnippetList";

async function ShowSnippetsPage({ params }: any) {
  const language = await db.language.findFirst({
    where: {
      name: {
        equals: params.language,
        mode: "insensitive",
      },
    },
  });
  const snippets = await db.snippet.findMany({
    where: { languageId: language?.id },
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
        <h1 className="col-span-full h-fit text-[36px] font-bold text-almostWhite">
          {`${language.name} Snippets`}
        </h1>

        <SnippetList language={language} snippets={snippets} />
      </main>
    </>
  );
}

export default ShowSnippetsPage;
