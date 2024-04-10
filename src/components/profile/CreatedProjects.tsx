"use client";
/* eslint-disable @next/next/no-img-element */
import { Project } from "@prisma/client";
import TimeAgo from "../common/TimeAgo";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@nextui-org/react";

interface CreatedProjectsProps {
  projects: Project[];
}

function CreatedProjects({ projects }: CreatedProjectsProps) {
  return (
    <div className="mb-2 border-b-2 border-darkGray">
      <h2 className="mb-2 text-3xl font-semibold text-almostWhite">
        Your Projects
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {projects ? (
          projects.map((project: any, i: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                ease: "linear",
                duration: 0.5,
                delay: 0.1 + i * 0.15,
              }}
            >
              <Link
                href={`/${project.language.name.toLowerCase()}/showcase/${project.id}`}
                key={project.id}
              >
                <Card className="relative min-h-[120px] rounded border-l-4 border-purple  bg-almostBlack px-6  py-6 transition-all duration-200 lg:hover:scale-[1.01] lg:hover:border-l-8 ">
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
                </Card>
              </Link>
            </motion.div>
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
