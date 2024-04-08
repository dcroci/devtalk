/* eslint-disable @next/next/no-img-element */
import TalkingPointAsideList from "../talkingPoints/TalkingPointAsideList";
import { Suspense } from "react";
import AsideLoading from "../common/AsideLoading";

interface SideNavProps {
  languageName: string;
  languageId: string;
}

async function TalkingPointsAside({ languageName, languageId }: SideNavProps) {
  return (
    <aside className="mb-2 flex h-fit w-full flex-col items-center rounded border-2 border-darkGray p-2">
      <div className="mb-2 flex w-full items-center gap-2">
        <h2 className=" w-full border-b-2 border-purple p-2 text-center text-[20px] font-semibold text-almostWhite">
          Talking Points
        </h2>
      </div>
      <Suspense fallback={<AsideLoading />}>
        <TalkingPointAsideList
          languageName={languageName}
          languageId={languageId}
        />
      </Suspense>
    </aside>
  );
}

export default TalkingPointsAside;
