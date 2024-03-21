import { TalkingPoint } from "@prisma/client";

function CreatedTalkingPoints({ talkingPoints }: any) {
  return (
    <div className="mb-2 border-b-2 border-darkGray">
      <h2 className="text-3xl font-medium text-almostWhite">
        Your Talking Points
      </h2>
      <div className="flex gap-2">
        {talkingPoints ? (
          talkingPoints.map((talkingPoint: TalkingPoint) => (
            <section key={talkingPoint.id}>
              <h3 className="text-almostWhite">{talkingPoint.title}</h3>
            </section>
          ))
        ) : (
          <p className="text-medGray">
            You have not created any Talking Points yet. Get started now!
          </p>
        )}
      </div>
    </div>
  );
}

export default CreatedTalkingPoints;
