import { db } from "@/app/db";
import SnippetCard from "@/components/snippets/SnippetCard";
import SideNav from "@/components/sections/SideNav";
import TalkingPointsAside from "@/components/sections/TalkingPointsAside";
import { notFound } from "next/navigation";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import Link from "next/link";

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
      <main className="col-start-2 col-end-5 flex flex-col gap-4">
        <p className="text-small text-medGray">
          <Link href="/">Home</Link> /{" "}
          <Link href={`/${language.name.toLowerCase()}`}>{language.name}</Link>{" "}
          / <span className="text-almostWhite">Snippets</span>
        </p>
        <h1 className="col-span-full h-fit text-[36px] font-bold text-almostWhite">
          {`${language.name} Snippets`}
        </h1>

        <div className="grid w-full grid-cols-2 gap-4">
          {snippets.map((snippet) => (
            <SnippetCard
              snippet={snippet}
              languageName={language.name}
              logoUrl={language.logoUrl}
              key={snippet.id}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default ShowSnippetsPage;
