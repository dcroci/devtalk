import { db } from "@/app/db";
import SnippetEditForm from "@/components/snippets/SnippetEditForm";
import getCurrentSession from "@/scripts/getCurrentSession";
import { notFound } from "next/navigation";

// import { editSnippet } from "@/actions";

async function SnippetEditPage({ params }: any) {
  const id = params.id;
  const language = params.language;
  console.log(params);
  const snippet = await db.snippet.findFirst({
    where: { id: params.id },
    include: {
      user: { select: { id: true } },
      language: { select: { name: true, logoUrl: true } },
    },
  });
  if (!snippet) {
    notFound();
  }
  const session = await getCurrentSession();
  if (session?.user) {
    if (session?.user.id !== snippet.user.id) {
      notFound();
    }
  }

  //   const editSnippetAction = editSnippet.bind(null, snippet.id, code);

  return <SnippetEditForm snippet={snippet} language={language} />;
}

export default SnippetEditPage;
