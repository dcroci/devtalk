import { Avatar, Link } from "@nextui-org/react";
function ShowTalkingPoint({ talkingPoint }: any) {
  return (
    <div className="my-4 rounded bg-darkGray p-4">
      <div className="flex items-center gap-2">
        <Avatar src="" />
        <div>
          <div className=" flex items-center gap-2">
            <Link
              className="text-white underline decoration-solid"
              href="/"
            ></Link>
            <p className="text-gray-400">
              {String(
                new Date().getMilliseconds() -
                  talkingPoint.createdAt.getMilliseconds(),
              )}
            </p>
          </div>
          <p className="text-white">Dominik Croci</p>
        </div>
      </div>
      <h1 className="my-2 text-2xl font-bold text-white">
        {talkingPoint.title}
      </h1>
      <p className="rounded border border-gray-700 p-4 text-white">
        {talkingPoint.desc}
      </p>
    </div>
  );
}

export default ShowTalkingPoint;
