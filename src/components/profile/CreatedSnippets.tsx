/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import TimeAgo from "../common/TimeAgo";
function CreatedSnippets({ snippets }: any) {
  return (
    <div className="mb-2 border-b-2 border-darkGray">
      <h2 className="mb-2 text-3xl font-semibold text-almostWhite">
        Your Snippets
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {snippets ? (
          snippets.map((snippet: any) => (
            <Link
              href={`/${snippet.language.name.toLowerCase()}/snippets/${snippet.id}`}
              key={snippet.id}
            >
              <section className="flex w-full gap-2 border-l-2 border-purple p-4 transition-all duration-1000 sm:hover:border-l-4">
                <img src={snippet.language.logoUrl} alt="" className="w-20" />
                <div className="flex flex-col gap-2">
                  <h3 className="leading-relaxed text-almostWhite">
                    {snippet.title}
                  </h3>
                  <p className="text-medGray">
                    <TimeAgo date={snippet.createdAt} />
                  </p>
                </div>
              </section>
            </Link>
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
