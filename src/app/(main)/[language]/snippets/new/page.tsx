import { db } from "@/app/db";
import SnippetCreateForm from "@/components/snippets/SnippetCreateForm";
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
      <SnippetCreateForm language={language} />
    </>
  );
}

export default NewSnippetPage;
