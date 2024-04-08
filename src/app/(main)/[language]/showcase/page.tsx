/* eslint-disable @next/next/no-img-element */
import Filter from "@/components/common/Filter";
import { db } from "@/app/db";
import Link from "next/link";
import CreateProjectForm from "@/components/showcase/CreateProjectForm";
import { notFound } from "next/navigation";

import ShowcaseSection from "@/components/showcase/ShowcaseSection";
import { Suspense } from "react";
import LoadingSuspense from "@/components/common/LoadingSuspense";

async function ShowShowcasePage({ params, searchParams }: any) {
  const filter = searchParams.filter;
  const language = await db.language.findFirst({
    where: {
      name: {
        equals: params.language,
        mode: "insensitive",
      },
    },
    select: {
      name: true,
      id: true,
    },
  });
  const languages = await db.language.findMany({
    select: {
      name: true,
      logoUrl: true,
    },
  });
  if (!language) {
    notFound();
  }

  return (
    <main className=" col-start-1 col-end-6 px-2 lg:col-start-2 lg:col-end-5">
      <p className="text-small text-medGray ">
        <Link href="/">Home</Link> /{" "}
        <Link href={`/${""}`}>{language.name}</Link> /{" "}
        <span className="text-almostWhite">Showcase</span>
      </p>

      <div className="mb-2 flex w-full items-center justify-between">
        <h1 className=" text-[36px] font-bold text-almostWhite">
          {language.name} Showcase
        </h1>
        <CreateProjectForm languageId={language.id} languages={languages} />
      </div>
      <Filter />
      <Suspense fallback={<LoadingSuspense />}>
        <ShowcaseSection
          filter={filter}
          languageId={language.id}
          languageName={language.name}
        />
      </Suspense>
    </main>
  );
}

export default ShowShowcasePage;
