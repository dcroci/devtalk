import { db } from "..";

async function getSnippetsWithPagination(
  languageName: string,
  page: number,
  filter: string,
) {
  if (filter === "new" || !filter) {
    return await db.snippet.findMany({
      where: {
        language: {
          name: { equals: languageName, mode: "insensitive" },
        },
      },

      include: {
        language: {
          select: { name: true, logoUrl: true, id: true },
        },
        likes: true,
      },
      skip: (page - 1) * 8,
      take: 8,
      orderBy: {
        createdAt: "desc",
      },
    });
  } else if (filter == "likes") {
    return await db.snippet.findMany({
      where: {
        language: {
          name: { equals: languageName, mode: "insensitive" },
        },
      },

      include: {
        language: {
          select: { name: true, logoUrl: true, id: true },
        },
        likes: true,
      },
      skip: (page - 1) * 8,
      take: 8,
      orderBy: {
        likes: {
          _count: "desc",
        },
      },
    });
  } else if (filter == "oldest") {
    return await db.snippet.findMany({
      where: {
        language: {
          name: { equals: languageName, mode: "insensitive" },
        },
      },

      include: {
        language: {
          select: { name: true, logoUrl: true, id: true },
        },
        likes: true,
      },
      skip: (page - 1) * 8,
      take: 8,
      orderBy: {
        createdAt: "asc",
      },
    });
  } else {
    return await db.snippet.findMany({
      where: {
        language: {
          name: { equals: languageName, mode: "insensitive" },
        },
      },

      include: {
        language: {
          select: { name: true, logoUrl: true, id: true },
        },
        likes: true,
      },
      skip: (page - 1) * 8,
      take: 8,
      orderBy: {
        createdAt: "desc",
      },
    });
  }
}

export default getSnippetsWithPagination;
