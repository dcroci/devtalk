import Link from "next/link";
import TimeAgo from "../common/TimeAgo";
function LikedContent({ talkingPointLikes }: any) {
  return (
    <div className="mb-2 border-b-2 border-darkGray">
      <h2 className="mb-2 text-3xl font-semibold text-almostWhite">
        Your Likes
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {talkingPointLikes ? (
          talkingPointLikes.map((talkingPointLike: any) => (
            <Link
              href={`/${talkingPointLike.talkingPoint.language.name.toLowerCase()}/talkingpoints/${talkingPointLike.talkingPoint.id}`}
              key={talkingPointLike.id}
            >
              <section className="flex w-full gap-2 border-l-2 border-purple p-4 transition-all duration-1000 sm:hover:border-l-4">
                <img
                  src={talkingPointLike.talkingPoint.language.logoUrl}
                  alt=""
                  className="h-20 w-20"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="leading-relaxed text-almostWhite">
                    {talkingPointLike.talkingPoint.title}
                  </h3>
                  <p className="text-medGray">
                    <TimeAgo date={talkingPointLike.createdAt} />
                  </p>
                  {/* <img src={project.imgUrl} alt="" className="w-fit" /> */}
                </div>
              </section>
            </Link>
          ))
        ) : (
          <p className="text-medGray">
            You have not created any Projects yet. Get started now!
          </p>
        )}
      </div>
    </div>
  );
}

export default LikedContent;
