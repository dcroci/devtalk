import Link from "next/link";
import { Card, CardBody, CardHeader, Button } from "@nextui-org/react";
import fixWordLength from "@/scripts/fixWordLength";
import { Project } from "@prisma/client";
import { db } from "@/app/db";
interface ShowcaseSectionProps {
  filter: string;
  languageId: string;
  languageName: string;
}

async function ShowcaseSection({
  filter,
  languageId,
  languageName,
}: ShowcaseSectionProps) {
  let projects: any;
  if (filter === "new" || !filter) {
    projects = await db.project.findMany({
      where: { languageId: languageId },
      orderBy: { createdAt: "desc" },
    });
  } else if (filter == "oldest") {
    projects = await db.project.findMany({
      where: { languageId: languageId },
      include: {
        _count: { select: { comments: true } },
      },
      orderBy: {
        createdAt: "asc",
      },
    });
  } else {
    projects = await db.project.findMany({
      where: { languageId: languageId },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
  return (
    <div className="grid grid-cols-1 gap-4  ">
      {projects.map((project: Project) => (
        <Card
          className="rounded-none border-l-2 border-purple bg-transparent py-4 "
          key={project.id}
        >
          <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
            <Link
              href={`/${languageName.toLowerCase()}/showcase/${project.id}`}
            >
              <h2 className="mb-2 w-full  text-xl font-semibold text-almostWhite">
                {project.title}
              </h2>
            </Link>
            <p className=" z-40 mb-2  bg-gradient-to-b from-medGray from-55% to-transparent bg-clip-text text-sm font-normal text-transparent">
              {fixWordLength(project.desc, 300)}
            </p>
          </CardHeader>
          <CardBody className="mx-auto flex overflow-visible py-2">
            <img
              alt="Card background"
              className="  mb-2  w-2/4  rounded-xl object-cover shadow-md shadow-purple"
              src={project.imgUrl}
            />
            {/* <ul className="flex w-full flex-wrap items-center gap-2">
              {project.technologies.map((language: string, key: number) => (
                <Link href={`/${languageName.toLowerCase()}`} key={key}>
                  <li className="w-fit cursor-pointer rounded px-1 py-1 text-tiny font-bold text-medGray">
                    <Button
                      className="border-2 border-purple bg-purple/25 "
                      size="sm"
                    >
                      {languageName}
                    </Button>
                  </li>
                </Link>
              ))}
            </ul> */}
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default ShowcaseSection;
