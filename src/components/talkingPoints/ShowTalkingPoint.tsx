import { auth } from "@/auth";
import { Link } from "@nextui-org/react";
import TimeAgo from "@/components/common/TimeAgo";
import { db } from "@/app/db";
import {
  Avatar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { notFound } from "next/navigation";
async function ShowTalkingPoint({ talkingPointId }: any) {
  const talkingPoint = await db.talkingPoint.findFirst({
    where: { id: talkingPointId },
    include: { user: true, language: { select: { name: true } } },
  });
  if (!talkingPoint) {
    notFound();
  }
  const currentUser = await auth();
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
      <main className="relative my-4 rounded">
        <div className="mb-2 flex items-center  justify-between border-b-2 border-darkGray">
          <h1 className="mb-2  py-2  text-2xl text-[36px] font-bold text-almostWhite ">
            {talkingPoint.title}
          </h1>
        </div>

        <div className="absolute right-0 top-0 flex items-center gap-2">
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
              <p className="text-gray-400">
                {<TimeAgo date={new Date(talkingPoint.createdAt)} />}
              </p>
            </div>
            <p className="text-white">Dominik Croci</p>
          </div>
          <Popover>
            <PopoverTrigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="h-6 w-6 cursor-pointer stroke-almostWhite"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                />
              </svg>
            </PopoverTrigger>
            <PopoverContent>
              <ul className="text-almostWhite">
                {currentUser?.user &&
                currentUser?.user.id === talkingPoint?.user.id ? (
                  <>
                    <li className="flex items-center justify-between gap-2 p-2">
                      Edit{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    </li>
                    <li>
                      <form
                      // action={deleteProjectAction}
                      >
                        <button
                          type="submit"
                          className="flex items-center justify-between gap-2 p-2 text-danger"
                        >
                          Delete{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18 18 6M6 6l12 12"
                            />
                          </svg>{" "}
                        </button>
                      </form>
                    </li>
                  </>
                ) : (
                  ""
                )}
              </ul>
            </PopoverContent>
          </Popover>
        </div>

        <p className=" rounded border-l-4 border-purple p-4 leading-relaxed text-medGray ">
          {talkingPoint.desc}
        </p>
      </main>
    </>
  );
}

export default ShowTalkingPoint;
