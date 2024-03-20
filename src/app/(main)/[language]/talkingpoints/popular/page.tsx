import CreateTalkingPointForm from "@/components/talkingPoints/CreateTalkingPointForm";
import TalkingPointList from "@/components/talkingPoints/TalkingPointList";
import { fetchPostsByTopicSlug } from "@/app/db/queries/posts";
import { db } from "@/app/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import Filter from "@/components/common/Filter";

interface TopicShowPageProps {
  params: {
    language: string;
  };
}

async function TopicShowPage({ params }: TopicShowPageProps) {
  const language = await db.language.findFirst({
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
        <div>
          <TalkingPointList
            fetchData={() => fetchPostsByTopicSlug(language.name)}
          />
        </div>
      </div>
    </>
  );
}

export default TopicShowPage;
