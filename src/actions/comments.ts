"use server";

import { z } from "zod";

import { db } from "@/app/db";
import { revalidatePath } from "next/cache";
import getCurrentSession from "@/scripts/getCurrentSession";

//CREATE COMMENT
const createCommentSchema = z.object({
  content: z.string().min(3),
});
interface CreateCommentFormState {
  errors: {
    content?: string[];
    _form?: string[];
  };
  success?: boolean;
}
export async function createComment(
  { talkingPointId, parentId }: { talkingPointId: string; parentId?: string },
  formState: CreateCommentFormState,
  formData: FormData,
): Promise<CreateCommentFormState> {
  const result = createCommentSchema.safeParse({
    content: formData.get("content"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const session = await getCurrentSession();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You must sign in to do this."],
      },
    };
  }

  try {
    await db.comment.create({
      data: {
        content: result.data.content,
        talkingPointId: talkingPointId,
        parentId: parentId,
        userId: session.user.id,
      },
    });
    console.log(talkingPointId, parentId, session.user.id);
  } catch (err) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Something went wrong..."],
        },
      };
    }
  }

  const language = await db.language.findFirst({
    where: { TalkingPoint: { some: { id: talkingPointId } } },
  });

  if (!language) {
    return {
      errors: {
        _form: ["Failed to revalidate topic"],
      },
    };
  }

  revalidatePath(
    `/${language.name.toLowerCase()}/talkingpoints/${talkingPointId}`,
  );
  return {
    errors: {},
    success: true,
  };
}
export async function deleteComment(comment: any, languageName: string) {
  try {
    await db.comment.delete({
      where: { id: comment.id },
    });
    console.log("deleted");
  } catch (err) {
    console.error(err);
  }
  revalidatePath(
    `/${languageName.toLowerCase()}/talkingpoints/${comment.talkingPointId}`,
  );
}
