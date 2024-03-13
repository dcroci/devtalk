"use server";

import { db } from "@/app/db";
import { revalidatePath } from "next/cache";

async function likeTalkingPoint(talkingPointId: string) {
  const talkingPoint = await db.talkingPoint.update({
    where: { id: talkingPointId },
    include: { language: true },
    data: { likes: { increment: 1 } },
  });
  revalidatePath(
    `/${talkingPoint.language.name.toLowerCase()}/talkingpoints/popular`,
  );
}

export default likeTalkingPoint;
