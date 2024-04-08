import { Skeleton, Spacer } from "@nextui-org/react";

function LoadingSuspense() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton>
        <div className="flex min-h-[120px] flex-row items-center gap-8 rounded px-6  py-2">
          <div className="flex h-full w-full flex-col justify-between">
            <div>
              <div className="mb-2 flex items-center gap-3">
                <span className="text-small text-medGray"></span>
              </div>

              <div>
                <h3 className="mb-2 flex flex-col text-xl font-semibold text-white"></h3>

                <p className="  w-full break-words bg-gradient-to-b from-medGray from-55% to-transparent bg-clip-text font-normal leading-relaxed text-transparent"></p>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-4">Comment</div>
          </div>
        </div>
        <Spacer y={10} />
      </Skeleton>
      <Skeleton>
        <div className="flex min-h-[120px] flex-row items-center gap-8 rounded px-6  py-2">
          <div className="flex h-full w-full flex-col justify-between">
            <div>
              <div className="mb-2 flex items-center gap-3">
                <span className="text-small text-medGray"></span>
              </div>

              <div>
                <h3 className="mb-2 flex flex-col text-xl font-semibold text-white"></h3>

                <p className="  w-full break-words bg-gradient-to-b from-medGray from-55% to-transparent bg-clip-text font-normal leading-relaxed text-transparent"></p>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-4">Comment</div>
          </div>
        </div>
        <Spacer y={10} />
      </Skeleton>
      <Skeleton>
        <div className="flex min-h-[120px] flex-row items-center gap-8 rounded px-6  py-2">
          <div className="flex h-full w-full flex-col justify-between">
            <div>
              <div className="mb-2 flex items-center gap-3">
                <span className="text-small text-medGray"></span>
              </div>

              <div>
                <h3 className="mb-2 flex flex-col text-xl font-semibold text-white"></h3>

                <p className="  w-full break-words bg-gradient-to-b from-medGray from-55% to-transparent bg-clip-text font-normal leading-relaxed text-transparent"></p>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-4">Comment</div>
          </div>
        </div>
        <Spacer y={10} />
      </Skeleton>
    </div>
  );
}

export default LoadingSuspense;
