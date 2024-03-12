import { db } from "@/app/db";
import SnippetEditForm from "@/components/snippets/SnippetEditForm";

// import { editSnippet } from "@/actions";

async function SnippetEditPage({ params }: any) {
  const id = Number(params.id);
  const language = params.language;
  console.log(params);
  const snippet = await db.snippet.findMany({
    where: { id },
  });

  //   const editSnippetAction = editSnippet.bind(null, snippet.id, code);

  return <SnippetEditForm snippet={snippet} language={language} />;
}

export default SnippetEditPage;
