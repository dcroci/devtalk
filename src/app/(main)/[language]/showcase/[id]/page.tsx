import { db } from "@/app/db";
import Link from "next/link";
import {
  Avatar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import TimeAgo from "@/components/common/TimeAgo";
import { auth } from "@/auth";
import { deleteProject } from "@/actions/projects";
import { notFound } from "next/navigation";
interface ShowProductPageParams {
  params: {
    language: string;
    id: string;
  };
}

async function ShowProductPage({ params }: ShowProductPageParams) {
  const product = await db.project.findFirst({
    where: { id: params.id },
    include: { user: true, language: true },
  });
  const currentUser = await auth();
  if (!product) {
    notFound();
  }
  const deleteProjectAction = deleteProject.bind(
    null,
    product.id,
    product.language.name,
  );

  return (
    <main className="relative col-span-3">
      <p className="text-small text-medGray ">
        <Link href="/">Home</Link> / <Link href={`/${""}`}>{"JavaScript"}</Link>{" "}
        / <span className="text-almostWhite">Showcase</span>
      </p>

      <section className="flex w-full flex-col ">
        <h1 className=" text-[36px] font-bold text-almostWhite">
          {product.title}
        </h1>
        <div className="absolute right-0 top-0 flex items-center gap-2">
          <Avatar
            src={product?.user?.image || ""}
            className="border-2 border-purple"
          />
          <div>
            <div className=" flex items-center gap-2">
              <Link
                className="text-white underline decoration-solid"
                href="/"
              ></Link>
              <p className="text-gray-400">
                {<TimeAgo date={new Date(product.createdAt)} />}
              </p>
            </div>
            <p className="text-white">Dominik Croci</p>
          </div>
          <Popover>
            <PopoverTrigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="h-6 w-6 cursor-pointer stroke-almostWhite"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                />
              </svg>
            </PopoverTrigger>
            <PopoverContent>
              <ul className="text-almostWhite">
                {currentUser?.user.id === product?.user.id ? (
                  <>
                    <li className="flex items-center justify-between gap-2 p-2">
                      Edit{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    </li>
                    <li>
                      <form action={deleteProjectAction}>
                        <button
                          type="submit"
                          className="flex items-center justify-between gap-2 p-2 text-danger"
                        >
                          Delete{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18 18 6M6 6l12 12"
                            />
                          </svg>{" "}
                        </button>
                      </form>
                    </li>
                  </>
                ) : (
                  ""
                )}
              </ul>
            </PopoverContent>
          </Popover>
        </div>
        <img src={product?.imgUrl} alt="" className="rounded" />
        <p className="text-medGray">{product.desc}</p>
      </section>
    </main>
  );
}

export default ShowProductPage;
