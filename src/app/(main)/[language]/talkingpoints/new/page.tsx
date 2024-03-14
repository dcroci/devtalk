import { db } from "@/app/db";
import CreateTalkingPointForm from "@/components/talkingPoints/CreateTalkingPointForm";

async function PostCreatePage({ params }: any) {
  const languageId = await db.language.findFirst({
    where: {
      id: params.id,
    },
    select: {
      id: true,
    },
  });
  if (languageId) {
    return <CreateTalkingPointForm languageId={languageId.id} />;
  }
}

export default PostCreatePage;
