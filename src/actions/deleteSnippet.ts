"use server";

import { db } from "@/app/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteSnippet(id: number, language: string) {
  await db.snippet.delete({
    where: { id },
  });
  revalidatePath(`/${language.toLowerCase()}/snippets`);
  redirect(`/${language.toLowerCase()}/snippets`);
}
