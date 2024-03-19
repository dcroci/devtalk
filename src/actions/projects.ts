"use server";
import type { Project } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { auth } from "@/auth";
import { db } from "@/app/db";

//CREATE A PROJECT
const createProjectSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
  imgUrl: z.string(),
  githubLink: z.string().url(),
  liveSiteLink: z.string().url(),
  //   languages: z.any(),
});
interface CreateProjectFormState {
  errors: {
    title?: string[];
    content?: string[];
    imgUrl?: string[];
    githubLink?: string[];
    liveSiteLink?: string[];
    // languages?: any;
    _form?: string[];
  };
}
export async function createProject(
  languageId: string,
  formState: CreateProjectFormState,
  formData: FormData,
): Promise<CreateProjectFormState> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const result = createProjectSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
    imgUrl: formData.get("imgUrl"),
    githubLink: formData.get("githubLink"),
    liveSiteLink: formData.get("liveSiteLink"),
    // languages: formData.get("languages"),
  });
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  //   console.log("FORM----------", formData.get("languages"));
  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You must be signed in to create a project"],
      },
    };
  }

  const language = await db.language.findFirst({
    where: {
      id: languageId,
    },
  });

  if (!language) {
    return {
      errors: {
        _form: ["Could not find language"],
      },
    };
  }

  let project: Project;
  try {
    project = await db.project.create({
      data: {
        title: result.data.title,
        desc: result.data.content,
        imgUrl: result.data.imgUrl,
        userId: session.user.id,
        languageId: language.id,
        likes: 0,
        githubLink: result.data.githubLink,
        liveSiteLink: result.data.liveSiteLink,
        // technologies: result.data.languages,
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
  revalidatePath(`/${language?.name.toLowerCase()}/showcase`);
  redirect(`/${language?.name.toLowerCase()}/showcase/${project.id}`);
}
export async function deleteProject(id: string, language: string) {
  await db.project.delete({
    where: { id: id },
  });
  revalidatePath(`/${language.toLowerCase()}/showcase`);
  redirect(`/${language.toLowerCase()}/showcase`);
}
