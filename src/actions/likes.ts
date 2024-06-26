"use server";
import { db } from "@/app/db";
import getCurrentSession from "@/scripts/getCurrentSession";
import { revalidatePath } from "next/cache";

export async function createTalkingPointLike(
  talkingPointId: string,
  langname: string,
) {
  try {
    const currentSession = await getCurrentSession();

    if (currentSession?.user?.id) {
      await db.talkingPointLike.create({
        data: {
          userId: currentSession?.user?.id,
          talkingPointId,
        },
      });
    } else {
      throw new Error("Must be signed in to like");
    }
  } catch (err) {
    console.error(err);
  }
  revalidatePath(`/${langname.toLowerCase()}/talkingpoints/popular`);
}
export async function deleteTalkingPointLike(
  talkingPointId: string,
  langname: string,
) {
  try {
    const currentSession = await getCurrentSession();
    if (currentSession?.user?.id) {
      const likeId = await db.talkingPointLike.findFirst({
        where: {
          userId: currentSession?.user.id,
          talkingPointId: talkingPointId,
        },
        select: { id: true },
      });
      if (likeId) {
        await db.talkingPointLike.delete({
          where: { id: likeId.id },
        });
      } else {
        throw new Error("Could not find like to delete");
      }
    } else {
      throw new Error("Could not find current session");
    }
  } catch (err) {
    console.error(err);
  }
  revalidatePath(`/${langname.toLowerCase()}/talkingpoints/popular`);
}

export async function createSnippetLike(snippetId: string, langname: string) {
  try {
    const currentSession = await getCurrentSession();

    if (currentSession?.user?.id) {
      await db.snippetLike.create({
        data: {
          userId: currentSession?.user?.id,
          snippetId,
        },
      });
    } else {
      throw new Error("Must be signed in to like");
    }
  } catch (err) {
    console.error(err);
  }
  revalidatePath(`/${langname.toLowerCase()}/snippets`);
}
export async function deleteSnippetLike(snippetId: string, langname: string) {
  try {
    const currentSession = await getCurrentSession();
    if (currentSession?.user?.id) {
      const likeId = await db.snippetLike.findFirst({
        where: {
          userId: currentSession?.user.id,
          snippetId: snippetId,
        },
        select: { id: true },
      });
      if (likeId) {
        await db.snippetLike.delete({
          where: { id: likeId.id },
        });
      } else {
        throw new Error("Could not find like to delete");
      }
    } else {
      throw new Error("Must be signed in to like");
    }
  } catch (err) {
    console.error(err);
  }
  revalidatePath(`/${langname.toLowerCase()}/snippets`);
}
