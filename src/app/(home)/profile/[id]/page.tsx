import { db } from "@/app/db";
import CreatedProjects from "@/components/profile/CreatedProjects";
import CreatedSnippets from "@/components/profile/CreatedSnippets";
import CreatedTalkingPoints from "@/components/profile/CreatedTalkingPoints";
import LikedContent from "@/components/profile/LikedContent";
import ProfileInfo from "@/components/profile/ProfileInfo";
import getCurrentSession from "@/scripts/getCurrentSession";
import { notFound } from "next/navigation";

async function ShowAccountPage({ params }: any) {
  const { id } = params;
  const user = await db.user.findFirst({
    where: { id },
    include: {
      TalkingPoint: {
        include: { language: true },
        orderBy: { createdAt: "desc" },
      },
      Snippet: {
        include: { language: true },
        orderBy: { createdAt: "desc" },
      },
      projects: {
        include: { language: true },
        orderBy: { createdAt: "desc" },
      },
    },
  });
  const currentSession = await getCurrentSession();

  if (currentSession?.user?.id !== user?.id || !user) {
    notFound();
  }
  return (
    <main className="col-span-full px-4">
      <h1 className="mb-10  flex items-center text-[36px] font-bold text-almostWhite">
        Profile
      </h1>
      <ProfileInfo user={user} />

      <CreatedTalkingPoints talkingPoints={user?.TalkingPoint} />
      <CreatedSnippets snippets={user?.Snippet} />
      <CreatedProjects projects={user.projects} />
      <LikedContent />
    </main>
  );
}

export default ShowAccountPage;
