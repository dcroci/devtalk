import LanguageMain from "@/components/sections/LanguageMain";

import { db } from "../../db";
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
    include: { Snippet: false, TalkingPoint: false, Project: false },
  });

  if (!language) {
    notFound();
  }

  return <LanguageMain language={language} />;
}

export default ShowLanguagePage;
