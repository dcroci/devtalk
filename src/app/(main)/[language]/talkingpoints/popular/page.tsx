import CreateTalkingPointForm from "@/components/talkingPoints/CreateTalkingPointForm";
import TalkingPointList from "@/components/talkingPoints/TalkingPointList";
import { db } from "@/app/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import LoadingSuspense from "@/components/common/LoadingSuspense";

interface TopicShowPageProps {
  params: {
    language: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

async function TopicShowPage({ params, searchParams }: TopicShowPageProps) {
  // const filter = String(searchParams.filter) || "new";
  const page = searchParams.page ?? 1;

  let language = await db.language.findFirst({
    where: {
      name: {
        equals: params.language,
        mode: "insensitive",
      },
    },
    select: { name: true, id: true },
  });

  if (!language) {
    notFound();
  }

  return (
    <>
      <div className="col-start-1 col-end-6 gap-4 px-2  lg:col-start-2 lg:col-end-5">
        <div className="flex flex-col justify-center">
          <p className="mb-2 text-small text-medGray">
            <Link href="/">Home</Link> /{" "}
            <Link href={`/${language.name.toLowerCase()}`}>
              {language.name}
            </Link>{" "}
            / <span className="text-almostWhite">Talking Points</span>
          </p>
          <div className="col-span-3 mb-2 flex flex-row-reverse items-center border-b-2 border-darkGray pb-2">
            {/* <Filter /> */}
            <div className=" flex flex-col justify-between md:flex-row-reverse md:items-center">
              <div className="fixed bottom-6 right-6 z-40 md:static">
                <CreateTalkingPointForm languageId={language.id} />
              </div>
            </div>
            <h1 className="  w-full  text-[30px] font-bold text-almostWhite">
              {language.name} Talking Points
            </h1>
          </div>
        </div>
        <div className="mb-4">
          <Suspense fallback={<LoadingSuspense />}>
            <TalkingPointList name={language.name} page={page} />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default TopicShowPage;
