import { db } from "@/app/db";
import fixWordLength from "@/scripts/fixWordLength";
import Link from "next/link";
interface TalkingPointAsideListProps {
  languageName: string;
  languageId: string;
}

async function TalkingPointAsideList({
  languageId,
  languageName,
}: TalkingPointAsideListProps) {
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
    <div className="grid grid-cols-1 gap-4 ">
      {talkingPoints.map((talkingPoint) => (
        <Link
          key={talkingPoint.id}
          href={`/${languageName.toLowerCase()}/talkingpoints/${talkingPoint.id}`}
        >
          <div>
            <div className="mx-auto flex flex-col items-center gap-4 rounded p-2  lg:flex-row">
              <img
                src={talkingPoint.user.image || ""}
                alt=""
                className="w-10 rounded-full border-2 border-purple"
              />
              <div>
                <h3
                  className=" mb-2 text-[16px] font-medium leading-relaxed text-almostWhite hover:underline 
      "
                >
                  {fixWordLength(talkingPoint.title, 40)}
                </h3>
                <div>
                  <p className="text-[14px] leading-relaxed text-medGray">
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
  );
}

export default TalkingPointAsideList;
