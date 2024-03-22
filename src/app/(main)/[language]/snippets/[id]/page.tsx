import { db } from "@/app/db";

import getCurrentSession from "@/scripts/getCurrentSession";

import { notFound } from "next/navigation";
import { deleteSnippet } from "@/actions/snippets";

import {
  Avatar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import Link from "next/link";

async function ShowSnippetPage({ params }: any) {
  //get the user's current session
  const currentSession = await getCurrentSession();
  //get the snippet that matches the id of the one passed into the url
  const snippet = await db.snippet.findFirst({
    where: { id: Number(params.id) },
    include: { user: true, language: true },
  });
  //get the user object of who created the snippet being shown
  const snippetCreator = await db.account.findFirst({
    where: { id: snippet?.accountId },
  });
  //get the language associated with the snippet

  //if there is no snippet with that ID, return not found
  if (!snippet) {
    return notFound();
  }
  const deleteSnippetAction = deleteSnippet.bind(
    null,
    snippet.id,
    snippet.language.name,
  );

  const { title, code } = snippet;
  return (
    <>
      <div className="col-span-5 px-2 lg:col-span-3">
        <div className=" flex items-center justify-between">
          <h1 className="flex h-14 items-center text-[36px] font-bold text-almostWhite">
            {title}
          </h1>
          {currentSession?.user?.id === snippetCreator?.userId ? (
            // <div className="flex gap-4">
            //   <Link
            //     href={`/${language.name.toLowerCase()}/snippets/${params.id}/edit`}
            //     className="rounded border p-2 text-[14px] font-bold text-white"
            //   >
            //     Edit
            //   </Link>
            //   <form action={deleteSnippetAction}>
            //     <button className="rounded border p-2 text-[14px] font-bold text-white">
            //       Delete
            //     </button>
            //   </form>
            // </div>
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
                  {currentSession?.user &&
                  currentSession?.user.id === snippet?.user.id ? (
                    <>
                      <li>
                        <Link
                          className="flex items-center justify-between gap-2 p-2"
                          href={`/${snippet.language.name.toLowerCase()}/snippets/${snippet.id}/edit`}
                        >
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
                        </Link>
                      </li>
                      <li>
                        <form action={deleteSnippetAction}>
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
          ) : (
            ""
          )}
        </div>
        <pre className="rounded border border-gray-200 bg-gray-200 p-3">
          <code>{code}</code>
        </pre>
      </div>
    </>
  );
}

export default ShowSnippetPage;
