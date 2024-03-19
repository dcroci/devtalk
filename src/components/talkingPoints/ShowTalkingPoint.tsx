import { auth } from "@/auth";
import { Avatar, Link } from "@nextui-org/react";
import TimeAgo from "@/components/common/TimeAgo";
import { db } from "@/app/db";
import { notFound } from "next/navigation";
async function ShowTalkingPoint({ talkingPointId }: any) {
  const talkingPoint = await db.talkingPoint.findFirst({
    where: { id: talkingPointId },
    include: { user: true, language: { select: { name: true } } },
  });
  if (!talkingPoint) {
    notFound();
  }
  return (
    <>
      <p className="text-small text-medGray">
        <Link className="text-small text-medGray" href="/">
          Home
        </Link>{" "}
        /{" "}
        <Link
          className="text-small text-medGray"
          href={`/${talkingPoint.language.name.toLowerCase()}`}
        >
          {talkingPoint.language.name}
        </Link>{" "}
        / <span className="text-almostWhite">Talkings Points</span>
      </p>
      <main className="my-4 rounded  p-4">
        <div className="flex items-center justify-between  border-b-2 border-darkGray">
          <h1 className="mb-2  py-2  text-2xl text-[36px] font-bold text-almostWhite ">
            {talkingPoint.title}
          </h1>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={2}
              className="h-6 w-6 stroke-purple"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
              />
            </svg>

            <p className="mr-4 text-almostWhite">{talkingPoint.likes}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={2}
              className="h-6 w-6 stroke-purple"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Avatar
            src={talkingPoint?.user?.image || ""}
            className="border-2 border-purple"
          />
          <div>
            <div className=" flex items-center gap-2">
              <Link
                className="text-white underline decoration-solid"
                href="/"
              ></Link>
              <p className="text-white">
                {talkingPoint.user.name}
                {" • "}
                <span className="text-medGray">
                  {<TimeAgo date={new Date(talkingPoint.createdAt)} />}
                </span>
              </p>
            </div>
          </div>
        </div>

        <p className=" rounded border-l-4 border-purple p-4 leading-relaxed text-white ">
          {talkingPoint.desc}
        </p>
      </main>
    </>
  );
}

export default ShowTalkingPoint;
