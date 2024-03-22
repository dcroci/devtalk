/* eslint-disable @next/next/no-img-element */
import Filter from "@/components/common/Filter";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import fixWordLength from "@/scripts/fixWordLength";
import { db } from "@/app/db";
import Link from "next/link";
import CreateProjectForm from "@/components/showcase/CreateProjectForm";
import { notFound } from "next/navigation";
import { Project } from "@prisma/client";

async function ShowShowcasePage({ params, searchParams }: any) {
  const filter = searchParams.filter;
  const language = await db.language.findFirst({
    where: {
      name: {
        equals: params.language,
        mode: "insensitive",
      },
    },
  });
  const languages = await db.language.findMany({
    select: {
      name: true,
      logoUrl: true,
    },
  });
  if (!language) {
    notFound();
  }
  let projects: any;
  if (filter === "new" || !filter) {
    projects = await db.project.findMany({
      where: { languageId: language.id },
      orderBy: { createdAt: "desc" },
    });
  } else if (filter === "comments") {
    projects = await db.project.findMany({
      where: { languageId: language.id },
      include: {
        _count: { select: { comments: true } },
      },
      orderBy: {
        comments: {
          _count: "desc",
        },
      },
    });
  }
  //REWRITE ONCE LIKES ARE LINKED TO TALKING POINTS
  else if (filter == "likes") {
    projects = await db.project.findMany({
      where: { languageId: language.id },
      include: {
        _count: { select: { comments: true } },
      },
      orderBy: {
        comments: {
          _count: "asc",
        },
      },
    });
  } else if (filter == "oldest") {
    projects = await db.project.findMany({
      where: { languageId: language.id },
      include: {
        _count: { select: { comments: true } },
      },
      orderBy: {
        createdAt: "asc",
      },
    });
  } else {
    projects = await db.project.findMany({
      where: { languageId: language.id },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
  return (
    <main className=" col-start-1 col-end-6 px-2 lg:col-start-2 lg:col-end-5">
      <p className="text-small text-medGray ">
        <Link href="/">Home</Link> /{" "}
        <Link href={`/${""}`}>{language.name}</Link> /{" "}
        <span className="text-almostWhite">Showcase</span>
      </p>
      <Filter />
      <div className="mb-2 flex w-full items-center justify-between">
        <h1 className=" text-[36px] font-bold text-almostWhite">
          {language.name} Showcase
        </h1>
        <CreateProjectForm languageId={language.id} languages={languages} />
      </div>
      <div className="grid grid-cols-1 gap-4  sm:grid-cols-2">
        {projects.map((project: Project) => (
          <Card
            className="rounded-none border-l-2 border-purple bg-transparent py-4 "
            key={project.id}
          >
            <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
              <Link
                href={`/${language.name.toLowerCase()}/showcase/${project.id}`}
              >
                <h2 className="mb-2 w-full  text-xl font-semibold text-almostWhite">
                  {project.title}
                </h2>
              </Link>
              <p className=" z-40 mb-2  bg-gradient-to-b from-medGray from-55% to-transparent bg-clip-text text-sm font-normal text-transparent">
                {fixWordLength(project.desc, 300)}
              </p>
            </CardHeader>
            <CardBody className="mx-auto flex items-center justify-center overflow-visible py-2">
              <img
                alt="Card background"
                className="  mb-2 h-52 w-full  rounded-xl object-cover shadow-md shadow-purple"
                src={project.imgUrl}
              />
              <ul className="flex w-full flex-wrap items-center gap-2">
                {project.technologies.map((language: string, key: number) => (
                  <Link href={`/${language.toLowerCase()}`} key={key}>
                    <li className="w-fit cursor-pointer rounded px-1 py-1 text-tiny font-bold text-medGray">
                      <Button
                        className="border-2 border-purple bg-purple/25 "
                        size="sm"
                      >
                        {language}
                      </Button>
                    </li>
                  </Link>
                ))}
              </ul>
            </CardBody>
          </Card>
        ))}
      </div>
    </main>
  );
}

export default ShowShowcasePage;
