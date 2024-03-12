"use server";

import { db } from "@/app/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function editSnippet(id: number, code: string, language: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  revalidatePath(`/${language}/snippets/${id}`);
  redirect(`/${language}/snippets/${id}`);
}
