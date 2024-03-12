import { db } from "@/app/db";
import SnippetCreateForm from "@/components/snippets/snippetCreateForm";
import SideNav from "@/components/sections/SideNav";
import TalkingPointsAside from "@/components/sections/TalkingPointsAside";
import { notFound } from "next/navigation";
async function NewSnippetPage({ params }: any) {
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
      <SnippetCreateForm />
      <TalkingPointsAside logoUrl={language.logoUrl} />
    </>
  );
}

export default NewSnippetPage;
