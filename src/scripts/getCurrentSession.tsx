import { auth } from "@/auth";
async function getCurrentSession() {
  const session = await auth();
  return session;
}

export default getCurrentSession;
