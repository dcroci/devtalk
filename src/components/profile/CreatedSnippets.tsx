import { Snippet } from "@prisma/client";

function CreatedSnippets({ snippets }: any) {
  return (
    <div className="mb-2 border-b-2 border-darkGray">
      <h2 className="text-3xl font-medium text-almostWhite">Your Snippets</h2>
      <div className="flex gap-2">
        {snippets ? (
          snippets.map((snippet: Snippet) => (
            <section key={snippet.id}>
              <h3 className="text-almostWhite">{snippet.title}</h3>
            </section>
          ))
        ) : (
          <p className="text-medGray">
            You have not created any Snippets yet. Get started now!
          </p>
        )}
      </div>
    </div>
  );
}

export default CreatedSnippets;
