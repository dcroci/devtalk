import Link from "next/link";
import SnippetList from "@/components/snippets/SnippetList";
import { Button } from "@nextui-org/react";
import { Suspense } from "react";
import LoadingSuspense from "@/components/common/LoadingSuspense";
import Filter from "@/components/common/Filter";

function ShowSnippetsPage({ params, searchParams }: any) {
  console.log(searchParams);
  return (
    <>
      <main className="col-start-1 col-end-6 flex flex-col gap-4 px-2 lg:col-start-2 lg:col-end-5">
        <p className="text-small text-medGray">
          <Link href="/">Home</Link> /{" "}
          <Link href={`/${params.language}`}>{params.language}</Link> /{" "}
          <span className="text-almostWhite">Snippets</span>
        </p>
        <div className=" flex items-center justify-between border-b-2 border-darkGray pb-2">
          <h1 className=" w-full  text-[30px] font-bold text-almostWhite">
            {`${params.language} Snippets`}
          </h1>
          <Link href={`/${params.language.toLowerCase()}/snippets/new`}>
            <Button className=" fixed bottom-6  right-6 z-40 bg-purple text-2xl font-semibold text-almostWhite shadow-lg shadow-purple/50 md:static">
              +
            </Button>
          </Link>
        </div>
        <Filter />
        <Suspense fallback={<LoadingSuspense />}>
          <SnippetList
            languageName={params.language}
            filter={searchParams.filter}
          />
        </Suspense>
      </main>
    </>
  );
}

export default ShowSnippetsPage;
