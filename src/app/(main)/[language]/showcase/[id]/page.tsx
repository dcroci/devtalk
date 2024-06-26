/* eslint-disable @next/next/no-img-element */
import { db } from "@/app/db";
import Link from "next/link";
import {
  Avatar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import TimeAgo from "@/components/common/TimeAgo";
import { auth } from "@/auth";
import { deleteProject } from "@/actions/projects";
import { notFound } from "next/navigation";
interface ShowProjectPageParams {
  params: {
    language: string;
    id: string;
  };
}

async function ShowProjectPage({ params }: ShowProjectPageParams) {
  const project = await db.project.findFirst({
    where: { id: params.id },
    include: {
      user: { select: { image: true, name: true, id: true } },
      language: {
        select: { name: true },
      },
    },
  });
  const currentUser = await auth();
  if (!project) {
    notFound();
  }
  const deleteProjectAction = deleteProject.bind(
    null,
    project.id,
    project.language.name,
  );

  return (
    <div className="col-start-1 col-end-6 px-2 lg:col-start-2 lg:col-end-5">
      <p className=" mb-2 text-small text-medGray">
        <Link href="/">Home</Link> /{" "}
        <Link href={`/${project.language.name.toLowerCase()}`}>
          {project.language.name}
        </Link>{" "}
        /{" "}
        <Link href={`/${project.language.name.toLowerCase()}/showcase`}>
          <span>Showcase</span>
        </Link>{" "}
        /{" "}
        <Link href={`/${project.language.name.toLowerCase()}/showcase`}>
          <span className="text-almostWhite">{project.title}</span>
        </Link>
      </p>
      <main className="relative ">
        <section className="flex w-full flex-col ">
          <div className="mb-2 flex flex-col border-b-2 border-darkGray">
            <h1 className=" mb-2 text-[36px] font-bold text-almostWhite">
              {project.title}
            </h1>
            <div className="mb-2 flex items-center gap-2">
              <Avatar
                src={project?.user?.image || ""}
                className="border-2 border-purple"
              />
              <div>
                <div className=" flex items-center gap-2">
                  <p className="mb-1 text-gray-400">
                    {<TimeAgo date={new Date(project.createdAt)} />}
                  </p>
                </div>
                <p className="text-white">{project.user.name}</p>
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
                    currentUser?.user.id === project?.user.id ? (
                      <>
                        <li className="flex items-center justify-between gap-2 p-2">
                          <Link
                            className="flex items-center justify-between gap-2"
                            href={`/${project.language.name.toLowerCase()}/showcase/${project.id}/edit`}
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
                          <form action={deleteProjectAction}>
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
          </div>

          <img src={project?.imgUrl} alt="" className="mb-2 rounded" />
          <section className="mt-2">
            <h2 className="mb-2 text-[24px] font-semibold text-almostWhite">
              Project Description
            </h2>
            <p className="leading-relaxed text-medGray">{project.desc}</p>
          </section>
          <section className="mt-2">
            <h2 className="mb-2 text-[24px] font-semibold text-almostWhite">
              View my Project
            </h2>
            <div className="flex items-center gap-2 ">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  className="h-30 w-30 flex flex-col items-center justify-center gap-2 border-b-2 border-purple p-2 text-medGray transition-all duration-1000 hover:shadow-md hover:shadow-purple"
                  target="_blank"
                >
                  <img src="/assets/github-logo.png" className="w-12" />
                  <small className="text-small">Source code on GitHub</small>
                </a>
              )}
              {project.liveSiteLink && (
                <a
                  href={project.liveSiteLink}
                  className="flex h-24 w-24 flex-col items-center justify-center gap-2 border-b-2 border-purple p-2 text-medGray transition-all duration-1000 hover:shadow-md hover:shadow-purple"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    className="h-12 w-12 stroke-almostWhite"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                    />
                  </svg>
                  <small className="text-small">Live Site</small>
                </a>
              )}
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default ShowProjectPage;
