"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { auth } from "@/auth";
import { db } from "@/app/db";

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

  const session = await auth();
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

  //   revalidatePath(paths.postShow(topic.slug, postId));
  return {
    errors: {},
    success: true,
  };
}
