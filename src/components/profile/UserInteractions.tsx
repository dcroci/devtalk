import { db } from "@/app/db";
import CreatedTalkingPoints from "./CreatedTalkingPoints";
import CreatedSnippets from "./CreatedSnippets";
import CreatedProjects from "./CreatedProjects";
import LikedContent from "./LikedContent";
import { notFound } from "next/navigation";
import getCurrentSession from "@/scripts/getCurrentSession";
import ProfileInfo from "./ProfileInfo";

interface UserInteractionsProps {
  id: string;
}

async function UserInteractions({ id }: UserInteractionsProps) {
  const user = await db.user.findFirst({
    where: { id },
    include: {
      TalkingPoint: {
        include: { language: { select: { name: true, logoUrl: true } } },
        orderBy: { createdAt: "desc" },
      },
      Snippet: {
        include: { language: { select: { name: true, logoUrl: true } } },
        orderBy: { createdAt: "desc" },
      },
      projects: {
        include: { language: { select: { name: true, logoUrl: true } } },
        orderBy: { createdAt: "desc" },
      },
      talkingPointLikes: {
        include: {
          talkingPoint: {
            include: {
              language: {
                select: { name: true, logoUrl: true },
              },
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });
  const currentSession = await getCurrentSession();
  if (currentSession?.user?.id !== user?.id || !user) {
    notFound();
  }
  return (
    <>
      <ProfileInfo user={user} />
      <CreatedTalkingPoints talkingPoints={user?.TalkingPoint} />
      <CreatedSnippets snippets={user?.Snippet} />
      <CreatedProjects projects={user.projects} />
      <LikedContent talkingPointLikes={user.talkingPointLikes} /> );
    </>
  );
}

export default UserInteractions;
