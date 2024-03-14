import { db } from "@/app/db";
import Link from "next/link";

interface SideNavProps {
  logoUrl: string;
  languageId: string;
}

async function TalkingPointsAside({ logoUrl, languageId }: SideNavProps) {
  const talkingPoints = await db.talkingPoint.findMany({
    where: { languageId: languageId },
    include: { user: true, language: true },
  });

  return (
    <aside className="flex h-fit w-full flex-col items-center rounded border-2 border-darkGray p-2">
      <div className="mb-2 flex items-center gap-2">
        <img className="w-[40px]" src={logoUrl} alt="" />
        <h2 className=" text-[16px] font-semibold text-almostWhite">
          Talking Points
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 ">
        {talkingPoints.map((talkingPoint) => (
          <Link
            key={talkingPoint.id}
            href={`${talkingPoint.language.name.toLowerCase()}/talkingpoints/${talkingPoint.id}`}
          >
            <div>
              <div className="mx-auto flex   items-center gap-4 rounded  p-2">
                {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="h-[40px] w-[40px] stroke-purple"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg> */}
                <img
                  src={talkingPoint.user.image}
                  alt=""
                  className="w-10 rounded-full border-2 border-purple"
                />
                <div>
                  <h3
                    className=" text-[16px] text-almostWhite
          "
                  >
                    {talkingPoint.title}
                  </h3>
                  <div>
                    <p className="text-[14px] text-medGray">
                      16 Comments · 12 Likes
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
