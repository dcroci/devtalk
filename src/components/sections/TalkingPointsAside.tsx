/* eslint-disable @next/next/no-img-element */
import { db } from "@/app/db";
import Link from "next/link";

interface SideNavProps {
  languageName: string;
  languageId: string;
}

async function TalkingPointsAside({ languageName, languageId }: SideNavProps) {
  const talkingPoints = await db.talkingPoint.findMany({
    where: { languageId: languageId },
    include: {
      user: true,
      comments: true,
      likes: true,
    },
    orderBy: {
      likes: {
        _count: "desc",
      },
    },
    take: 6,
  });

  return (
    <aside className="mb-2 flex h-fit w-full flex-col items-center rounded border-2 border-darkGray p-2">
      <div className="mb-2 flex w-full items-center gap-2">
        <h2 className=" w-full border-b-2 border-purple p-2 text-center text-[20px] font-semibold text-almostWhite">
          Talking Points
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 ">
        {talkingPoints.map((talkingPoint) => (
          <Link
            key={talkingPoint.id}
            href={`/${languageName.toLowerCase()}/talkingpoints/${talkingPoint.id}`}
          >
            <div>
              <div className="mx-auto flex   items-center gap-4 rounded  p-2">
                <img
                  src={talkingPoint.user.image || ""}
                  alt=""
                  className="w-10 rounded-full border-2 border-purple"
                />
                <div>
                  <h3
                    className=" mb-2 text-[16px] font-medium leading-relaxed text-almostWhite
          "
                  >
                    {talkingPoint.title}
                  </h3>
                  <div>
                    <p className="text-[14px] text-medGray">
                      {talkingPoint.comments.length}{" "}
                      {talkingPoint.comments.length > 1 ||
                      talkingPoint.comments.length == 0
                        ? "Comments"
                        : "Comment"}{" "}
                      · {talkingPoint.likes.length}{" "}
                      {talkingPoint.likes.length > 1 ||
                      talkingPoint.likes.length == 0
                        ? "Likes"
                        : "Like"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}

export default TalkingPointsAside;
