import { Snippet } from "@prisma/client";
import SnippetCard from "./SnippetCard";
interface SnippetList {
  snippets: any;
  language: { name: string; logoUrl: string };
}
function SnippetList({ snippets, language }: SnippetList) {
  return (
    <div className="grid w-full grid-cols-1 gap-4 ">
      {snippets.map((snippet: Snippet) => (
        <SnippetCard
          snippet={snippet}
          languageName={language.name}
          logoUrl={language.logoUrl}
          key={snippet.id}
        />
      ))}
    </div>
  );
}

export default SnippetList;
