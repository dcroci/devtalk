import LoadingSuspense from "@/components/common/LoadingSuspense";
import UserInteractions from "@/components/profile/UserInteractions";
import { Suspense } from "react";

function ShowAccountPage({ params }: any) {
  const { id } = params;

  return (
    <main className="col-span-full px-4">
      <h1 className="mb-10  flex items-center text-[36px] font-bold text-almostWhite">
        Profile
      </h1>
      <Suspense fallback={<LoadingSuspense />}>
        <UserInteractions id={id} />
      </Suspense>
    </main>
  );
}

export default ShowAccountPage;
