import TimeAgo from "../common/TimeAgo";
import Link from "next/link";

function CreatedTalkingPoints({ talkingPoints }: any) {
  return (
    <div className="mb-2 border-b-2 border-darkGray">
      <h2 className="mb-2 text-3xl font-semibold text-almostWhite">
        Your Talking Points
      </h2>

      <div className="mb-2 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {talkingPoints ? (
          talkingPoints.map((talkingPoint: any) => (
            <Link
              href={`/${talkingPoint.language.name.toLowerCase()}/talkingpoints/${talkingPoint.id}`}
              key={talkingPoint.id}
              target="_blank"
            >
              <section className="flex w-full gap-2 border-l-2 border-purple p-4 transition-all duration-1000 sm:hover:border-l-4">
                <img
                  src={talkingPoint.language.logoUrl}
                  alt=""
                  className="w-20"
                />
                <div className="flex flex-col gap-2">
                  <h3 className=" font-medium leading-relaxed text-almostWhite">
                    {talkingPoint.title}
                  </h3>
                  <p className="text-medGray">
                    <TimeAgo date={talkingPoint.createdAt} />
                  </p>
                </div>
              </section>
            </Link>
          ))
        ) : (
          <p className="text-medGray">
            You have not created any Talking Points yet. Get started now!
          </p>
        )}
      </div>
    </div>
  );
}

export default CreatedTalkingPoints;
