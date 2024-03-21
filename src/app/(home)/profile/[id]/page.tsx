import { db } from "@/app/db";
import CreatedProjects from "@/components/profile/CreatedProjects";
import CreatedSnippets from "@/components/profile/CreatedSnippets";
import CreatedTalkingPoints from "@/components/profile/CreatedTalkingPoints";
import LikedContent from "@/components/profile/LikedContent";
import ProfileInfo from "@/components/profile/ProfileInfo";
import getCurrentSession from "@/scripts/getCurrentSession";
import { notFound } from "next/navigation";

async function ShowAccountPage({ params }) {
  const { id } = params;
  const user = await db.user.findFirst({
    where: { id },
    include: { TalkingPoint: true, Snippet: true, projects: true },
  });
  const currentSession = await getCurrentSession();

  if (currentSession?.user?.id !== user?.id || !user) {
    notFound();
  }
  return (
    <main className="col-span-full px-4">
      <h1 className="mb-2  flex items-center text-[36px] font-bold text-almostWhite">
        Profile
      </h1>
      <ProfileInfo user={user} />
      <LikedContent />
      <CreatedTalkingPoints talkingPoints={user?.TalkingPoint} />
      <CreatedSnippets snippets={user?.Snippet} />
      <CreatedProjects projects={user.projects} />
    </main>
  );
}

export default ShowAccountPage;
