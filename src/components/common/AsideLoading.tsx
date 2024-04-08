import { Skeleton } from "@nextui-org/react";

function AsideLoading() {
  return (
    <div className="grid grid-cols-1 gap-4 ">
      <Skeleton className="w-full">
        <div className="mx-auto flex flex-col items-center gap-4 rounded p-2  lg:flex-row">
          <div className="w-10"></div>
          <div>
            <h3
              className=" mb-2 text-[16px] font-medium leading-relaxed text-almostWhite hover:underline 
          "
            >
              Loading Title
            </h3>
            <div>
              <p className="text-[14px] leading-relaxed text-medGray">
                Loading description of Snippet
              </p>
            </div>
          </div>
        </div>
      </Skeleton>
      <Skeleton className="w-full">
        <div className="mx-auto flex flex-col items-center gap-4 rounded p-2  lg:flex-row">
          <div className="w-10"></div>
          <div>
            <h3
              className=" mb-2 text-[16px] font-medium leading-relaxed text-almostWhite hover:underline 
          "
            >
              Loading Title
            </h3>
            <div>
              <p className="text-[14px] leading-relaxed text-medGray">
                Loading description of Snippet
              </p>
            </div>
          </div>
        </div>
      </Skeleton>
      <Skeleton className="w-full">
        <div className="mx-auto flex flex-col items-center gap-4 rounded p-2  lg:flex-row">
          <div className="w-10"></div>
          <div>
            <h3
              className=" mb-2 text-[16px] font-medium leading-relaxed text-almostWhite hover:underline 
          "
            >
              Loading Title
            </h3>
            <div>
              <p className="text-[14px] leading-relaxed text-medGray">
                Loading description of Snippet
              </p>
            </div>
          </div>
        </div>
      </Skeleton>
      <Skeleton className="w-full">
        <div className="mx-auto flex flex-col items-center gap-4 rounded p-2  lg:flex-row">
          <div className="w-10"></div>
          <div>
            <h3
              className=" mb-2 text-[16px] font-medium leading-relaxed text-almostWhite hover:underline 
          "
            >
              Loading Title
            </h3>
            <div>
              <p className="text-[14px] leading-relaxed text-medGray">
                Loading description of Snippet
              </p>
            </div>
          </div>
        </div>
      </Skeleton>
    </div>
  );
}

export default AsideLoading;
