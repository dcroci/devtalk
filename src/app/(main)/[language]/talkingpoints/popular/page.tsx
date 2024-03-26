export const maxDuration = 5;
import CreateTalkingPointForm from "@/components/talkingPoints/CreateTalkingPointForm";
import TalkingPointList from "@/components/talkingPoints/TalkingPointList";

import { db } from "@/app/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import Filter from "@/components/common/Filter";

interface TopicShowPageProps {
  params: {
    language: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

async function TopicShowPage({ params, searchParams }: TopicShowPageProps) {
  const filter = String(searchParams.filter) || "new";
  const page = searchParams.page ?? "1";

  let language: any;

  language = await db.language.findFirst({
    where: {
      name: {
        equals: params.language,
        mode: "insensitive",
      },
    },
  });

  if (!language) {
    notFound();
  }

  return (
    <>
      <div className="col-start-1 col-end-6 gap-4 px-2  lg:col-start-2 lg:col-end-5">
        <p className="text-small text-medGray">
          <Link href="/">Home</Link> /{" "}
          <Link href={`/${language.name.toLowerCase()}`}>{language.name}</Link>{" "}
          / <span className="text-almostWhite">Talking Points</span>
        </p>
        <div className="col-span-3 flex-col ">
          <Filter />
          <div className="flex items-center justify-between">
            <h1 className=" text-[36px] font-bold text-almostWhite">
              {language.name} Talking Points
            </h1>
            <div>
              <CreateTalkingPointForm languageId={language.id} />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <TalkingPointList name={language.name} filter={filter} page={page} />
        </div>
      </div>
    </>
  );
}

export default TopicShowPage;
