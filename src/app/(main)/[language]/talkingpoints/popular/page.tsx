import CreateTalkingPointForm from "@/components/talkingPoints/CreateTalkingPointForm";
import TalkingPointList from "@/components/talkingPoints/TalkingPointList";
import { fetchPostsByTopicSlug } from "@/app/db/queries/posts";
import { db } from "@/app/db";
import SideNav from "@/components/sections/SideNav";
import TalkingPointsAside from "@/components/sections/TalkingPointsAside";
import { notFound } from "next/navigation";

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
      <div className="col-start-2 col-end-5  gap-4 p-4">
        <div className="col-span-3 flex items-center justify-between">
          <h1 className=" text-[36px] font-bold text-almostWhite">
            {language.name} Talking Points
          </h1>
          <div>
            <CreateTalkingPointForm languageId={language.id} />
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
