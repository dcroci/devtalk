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
  const desc = formData.get("desc") as string;

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
  if (typeof code !== "string" || code.length < 5) {
    return { message: "Description must be longer." };
  }
  const existingAccount = await db.account.findFirst({
    where: {
      userId: user.id,
    },
    select: { id: true, userId: true },
  });
  const snippet = await db.snippet.create({
    data: {
      title,
      code,
      desc,
      account: {
        connect: { id: existingAccount?.id },
      },
      user: {
        connect: { id: existingAccount?.userId },
      },
      language: {
        connect: { id: languageQ.id },
      },
    },
  });

  redirect(`/${languageQ.name.toLowerCase()}/snippets/${snippet.id}`);
}
//EDIT SNIPPET
export async function editSnippet(
  id: string,
  title: string,
  desc: string,
  code: string,
  language: string,
) {
  await db.snippet.update({
    where: { id },
    data: { code, desc, title },
  });

  revalidatePath(`/${language}/snippets/${id}`);
  redirect(`/${language}/snippets/${id}`);
}
//DELETE A SNIPPET
export async function deleteSnippet(id: string, language: string) {
  await db.snippet.delete({
    where: { id },
  });
  revalidatePath(`/${language.toLowerCase()}/snippets`);
  redirect(`/${language.toLowerCase()}/snippets`);
}
