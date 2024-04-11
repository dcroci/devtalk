import { Project } from "@prisma/client";
import { db } from "@/app/db";
import ProjectCard from "./ProjectCard";
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
      {projects.map((project: Project, i: number) => (
        <ProjectCard
          languageName={languageName}
          project={project}
          key={project.id}
          i={i}
        />
      ))}
    </div>
  );
}

export default ShowcaseSection;
