import { Snippet } from "@prisma/client";
import SnippetCard from "./SnippetCard";
import { db } from "@/app/db";
import { notFound } from "next/navigation";
interface SnippetList {
  languageName: string;
  filter: string;
}
async function SnippetList({ languageName, filter }: SnippetList) {
  let language: any;
  if (filter === "new" || !filter) {
    language = await db.language.findFirst({
      where: {
        name: {
          equals: languageName,
          mode: "insensitive",
        },
      },

      select: {
        name: true,
        logoUrl: true,
        id: true,
        Snippet: {
          include: { likes: true },
          orderBy: { createdAt: "desc" },
        },
      },
    });
  } else if (filter === "comments") {
    language = await db.language.findFirst({
      where: {
        name: {
          equals: languageName,
          mode: "insensitive",
        },
      },

      select: {
        name: true,
        logoUrl: true,
        id: true,
        Snippet: {
          include: { likes: true },
          orderBy: {
            //change to comments once snippets have comments
            likes: {
              _count: "desc",
            },
          },
        },
      },
    });
  } else if (filter == "likes") {
    language = await db.language.findFirst({
      where: {
        name: {
          equals: languageName,
          mode: "insensitive",
        },
      },

      select: {
        name: true,
        logoUrl: true,
        id: true,
        Snippet: {
          include: { likes: true },
          orderBy: {
            likes: {
              _count: "desc",
            },
          },
        },
      },
    });
  } else if (filter == "oldest") {
    language = await db.language.findFirst({
      where: {
        name: {
          equals: languageName,
          mode: "insensitive",
        },
      },

      select: {
        name: true,
        logoUrl: true,
        id: true,
        Snippet: {
          include: { likes: true },
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    });
  } else {
    language = await db.language.findMany({
      where: {
        name: {
          equals: languageName,
          mode: "insensitive",
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
  if (!language) {
    return notFound();
  }

  return (
    <div className="grid w-full grid-cols-1 gap-4 ">
      {language.Snippet.map((snippet: Snippet) => (
        <SnippetCard
          snippet={snippet}
          languageName={language.name}
          logoUrl={language.logoUrl}
          key={snippet.id}
        />
      ))}
    </div>
  );
}

export default SnippetList;
