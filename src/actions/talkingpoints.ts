"use server";
import type { TalkingPoint } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { auth } from "@/auth";
import { db } from "@/app/db";

//CREATE A TALKING POINT
const createTalkingPointSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
});
interface CreateTalkingPointFormState {
  errors: {
    title?: string[];
    content?: string[];
    _form?: string[];
  };
}
export async function createTalkingPoint(
  languageId: string,
  formState: CreateTalkingPointFormState,
  formData: FormData,
): Promise<CreateTalkingPointFormState> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const result = createTalkingPointSchema.safeParse({
    title: formData.get("title"),
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
        _form: ["You must be signed in to create a Talking Point"],
      },
    };
  }

  const language = await db.language.findFirst({
    where: {
      id: languageId,
    },
  });
  console.log(language);
  if (!language) {
    return {
      errors: {
        _form: ["Could not find language"],
      },
    };
  }

  let talkingPoint: TalkingPoint;
  try {
    talkingPoint = await db.talkingPoint.create({
      data: {
        title: result.data.title,
        desc: result.data.content,
        userId: session.user.id,
        languageId: language.id,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Failed to create talking point"],
        },
      };
    }
  }
  redirect(`/${language?.name.toLowerCase()}/talkingpoints/${talkingPoint.id}`);

  // revalidatePath(paths.topicShow(language));
}
//LIKE A TALKING POINT
// export async function likeTalkingPoint(talkingPointId: string) {
//   const talkingPoint = await db.talkingPoint.update({
//     where: { id: talkingPointId },
//     include: { language: true },
//     data: { likes: { increment: 1 } },
//   });
//   revalidatePath(
//     `/${talkingPoint.language.name.toLowerCase()}/talkingpoints/popular`,
//   );
// }
export async function editTalkingPoint(
  talkingPoint: any,
  title: string,
  desc: string,
) {
  await db.talkingPoint.update({
    where: { id: talkingPoint.id },
    data: {
      title,
      desc,
    },
  });
  redirect(
    `/${talkingPoint.language.name.toLowerCase()}/talkingpoints/${talkingPoint.id}`,
  );
}
export async function deleteTalkingPoint(talkingPoint: any) {
  await db.talkingPoint.delete({
    where: { id: talkingPoint.id },
  });

  redirect(
    `/${talkingPoint.language.name.toLowerCase()}/talkingpoints/popular`,
  );
}
