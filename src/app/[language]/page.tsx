import LanguageMain from "@/components/sections/LanguageMain";
import SideNav from "@/components/sections/SideNav";
import TalkingPointsAside from "@/components/sections/TalkingPointsAside";
import { db } from "../db";
import { notFound } from "next/navigation";
interface ShowLanguageProps {
  params: {
    language: string;
  };
}

async function ShowLanguagePage({ params }: ShowLanguageProps) {
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
      <SideNav language={language} />
      <LanguageMain language={language} />
      <TalkingPointsAside logoUrl={language.logoUrl} languageId={language.id} />
    </>
  );
}

export default ShowLanguagePage;
