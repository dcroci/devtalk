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
import { deleteTalkingPoint } from "@/actions/talkingpoints";
import LikeBox from "./LikeBox";
import {
  createTalkingPointLike,
  deleteTalkingPointLike,
} from "@/actions/likes";
interface ShowTalkingPointProps {
  talkingPointId: string;
}
async function ShowTalkingPoint({ talkingPointId }: ShowTalkingPointProps) {
  const talkingPoint = await db.talkingPoint.findFirst({
    where: { id: talkingPointId },
    include: {
      user: { select: { id: true, image: true, name: true } },
      language: { select: { name: true } },
      likes: true,
    },
  });
  if (!talkingPoint) {
    notFound();
  }
  const deleteTalkingPointAction = deleteTalkingPoint.bind(
    null,
    String(talkingPoint.id),
  );
  const createLikeAction = createTalkingPointLike.bind(
    null,
    talkingPoint.id,
    talkingPoint.language.name,
  );
  const deleteLikeAction = deleteTalkingPointLike.bind(
    null,
    talkingPoint.id,
    talkingPoint.language.name,
  );
  const currentUser = await auth();
  return (
    <>
      <div className="relative">
        <div className="absolute right-2 top-0 flex flex-col justify-center gap-2">
          <form action={createLikeAction}>
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={2}
                className="h-6 w-6 stroke-purple drop-shadow-xl hover:shadow-purple"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                />
              </svg>
            </button>
          </form>

          <LikeBox likes={String(talkingPoint.likes.length)} />
          <form action={deleteLikeAction} className="z-20">
            <button type="submit">
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
            </button>
          </form>
        </div>
        <p className="mr-4 text-small text-medGray">
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
          /{" "}
          <Link
            className="text-small text-medGray"
            href={`/${talkingPoint.language.name.toLowerCase()}/talkingpoints/popular`}
          >
            <span className="text-almostWhite">Talking Points</span>
          </Link>
        </p>

        <div className="relative my-4 rounded">
          <div className=" mb-2 flex-col justify-between gap-2 border-b-2 border-darkGray md:flex-row">
            <h1 className=" mr-4  py-2 text-2xl text-[24px]   font-semibold text-almostWhite">
              {talkingPoint.title}
            </h1>
            <div className=" mb-2  flex items-center gap-2">
              <Avatar
                src={talkingPoint?.user?.image || ""}
                className="min-h-[36px] min-w-[36px] border-2 border-purple"
                size="md"
              />
              <div className="flex flex-col items-start">
                <div className=" flex items-center gap-2">
                  <p className="flex flex-col gap-1 text-gray-400">
                    <p className="font-medium text-white">
                      {talkingPoint.user.name}
                    </p>
                    {<TimeAgo date={new Date(talkingPoint.createdAt)} />}
                  </p>
                </div>
              </div>
              {currentUser?.user &&
              currentUser?.user.id === talkingPoint?.user.id ? (
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
                      <>
                        <li className="= p-2">
                          <Link
                            className="flex items-center justify-between gap-2 text-sm text-almostWhite"
                            href={`/${talkingPoint.language.name.toLowerCase()}/talkingpoints/${talkingPoint.id}/edit`}
                          >
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
                          </Link>
                        </li>
                        <li>
                          <form action={deleteTalkingPointAction}>
                            <button
                              type="submit"
                              className="flex items-center justify-between gap-2 p-2 text-sm text-danger"
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
                    </ul>
                  </PopoverContent>
                </Popover>
              ) : null}
            </div>
          </div>

          <p className=" break-words rounded border-l-4 border-purple p-4 font-medium leading-relaxed text-medGray">
            {talkingPoint.desc}
          </p>
        </div>
      </div>
    </>
  );
}

export default ShowTalkingPoint;
