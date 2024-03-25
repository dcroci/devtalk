/* eslint-disable @next/next/no-img-element */
import { Project } from "@prisma/client";
import TimeAgo from "../common/TimeAgo";
import Link from "next/link";

function CreatedProjects({ projects }: any) {
  return (
    <div className="mb-2 border-b-2 border-darkGray">
      <h2 className="text-3xl font-medium text-almostWhite">Your Projects</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {projects ? (
          projects.map((project: any) => (
            <Link
              href={`/${project.language.name.toLowerCase()}/projects/${project.id}`}
              key={project.id}
              target="_blank"
            >
              <section className="flex w-full gap-2 border-l-2 border-purple p-4 transition-all duration-1000 sm:hover:border-l-4">
                <img
                  src={project.language.logoUrl}
                  alt=""
                  className="h-20 w-20"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="leading-relaxed text-almostWhite">
                    {project.title}
                  </h3>
                  <p className="text-medGray">
                    <TimeAgo date={project.createdAt} />
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

export default CreatedProjects;
