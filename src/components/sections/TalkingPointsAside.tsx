/* eslint-disable @next/next/no-img-element */
import { db } from "@/app/db";
import Link from "next/link";

interface SideNavProps {
  language: any;
}

async function TalkingPointsAside({ language }: SideNavProps) {
  const talkingPoints = await db.talkingPoint.findMany({
    where: { languageId: language.id },
    include: { user: true, language: true, comments: true },
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
            href={`/${talkingPoint.language.name.toLowerCase()}/talkingpoints/${talkingPoint.id}`}
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
                      {talkingPoint.comments.length} Comments · {0} Likes
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
