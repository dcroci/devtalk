"use server";

import { db } from "@/app/db";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

//CREATE A SNIPPET
export async function createSnippet(
  formState: { message: string },
  formData: FormData,
) {
  const session = await auth();
  if (!session || !session.user) {
    return { message: "You must be signed in to create a snippet." };
  }

  // Retrieve accountId from session, assuming it's stored there or related user info
  const user = await db.user.findUnique({
    where: { email: session.user.email || "" },
  });
  if (!user) {
    return { message: "User account not found." };
  }
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;
  const id = formData.get("id") as string;
  const desc = "Test desc";

  const languageQ = await db.language.findFirst({
    where: {
      id: id,
    },
    select: { id: true, name: true },
  });
  if (!languageQ) {
    return { message: "Language not found." };
  }

  if (typeof title !== "string" || title.length < 3) {
    return { message: "Title must be longer." };
  }
  if (typeof code !== "string" || code.length < 10) {
    return { message: "Code must be longer." };
  }
  const existingAccount = await db.account.findFirst({
    where: {
      userId: user.id,
    },
  });
  await db.snippet.create({
    data: {
      title,
      code,
      account: {
        connect: { id: existingAccount?.id }, // Connect the snippet to the user's account
      },
      user: {
        connect: { id: existingAccount?.userId },
      },
      language: {
        connect: { id: languageQ.id }, // Connect the snippet to the selected language
      },
    },
  });

  redirect(`/${languageQ.name.toLowerCase()}/snippets`);
}
//EDIT SNIPPET
export async function editSnippet(id: number, code: string, language: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  revalidatePath(`/${language}/snippets/${id}`);
  redirect(`/${language}/snippets/${id}`);
}
//DELETE A SNIPPET
export async function deleteSnippet(id: number, language: string) {
  await db.snippet.delete({
    where: { id },
  });
  revalidatePath(`/${language.toLowerCase()}/snippets`);
  redirect(`/${language.toLowerCase()}/snippets`);
}
