import { db } from "@/app/db";
import TalkingPointEditForm from "@/components/talkingPoints/TalkingPointEditForm";

import { notFound } from "next/navigation";
interface EditTalkingPointParams {
  params: { language: string; id: string };
}
async function EditTalkingPointPage({ params }: EditTalkingPointParams) {
  const { id } = params;
  const talkingPoint = await db.talkingPoint.findFirst({
    where: { id },
    include: { language: true },
  });
  if (!talkingPoint) {
    notFound();
  }
  return (
    <main className="col-start-1 col-end-6 md:col-start-2 md:col-end-5">
      <TalkingPointEditForm talkingPoint={talkingPoint} />
    </main>
  );
}

export default EditTalkingPointPage;
