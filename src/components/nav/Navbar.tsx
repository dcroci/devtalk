import { db } from "@/app/db";
import LanguageDropdown from "@/components/nav/LanguageDropdown";
import Link from "next/link";
import * as actions from "@/actions";
import { auth } from "@/auth";
import {
  Avatar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu";

async function Navbar() {
  const languages = await db.language.findMany({
    orderBy: {
      name: "asc",
    },
  });

  const session = await auth();

  return (
    <nav className="sticky top-0 z-50 col-span-full flex h-[70px] justify-between border-b-1 border-darkGray bg-almostBlack/95">
      <ul className="flex items-center gap-4">
        <li className="md:hidden">
          <HamburgerMenu />
        </li>
        <li className="text-[16px] font-bold text-almostWhite">
          <Link href="/">DevTalk</Link>
        </li>
        <ul className="flex items-center gap-2 text-[14px] font-normal text-medGray">
          <li className="cursor-pointer">
            <LanguageDropdown languages={languages} />
          </li>
          <li>Blog</li>
          <li>About</li>
        </ul>
      </ul>
      <ul className="flex items-center gap-4 text-almostWhite">
        <li>
          <Link href="/search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="h-[35px] w-[35px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/ " target="_blank">
            <Image
              src="/assets/x-logo.webp"
              alt=""
              width={35}
              height={35}
              className="h-[35px] w-[35px]"
            />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/dcroci/devtalk" target="_blank">
            <Image
              src="/assets/github-logo.svg"
              alt=""
              width={35}
              height={35}
              className="h-[35px] w-[35px]"
            />
          </Link>
        </li>

        {session?.user ? (
          <Popover>
            <PopoverTrigger className="transition-all duration-1000 hover:cursor-pointer hover:shadow-lg hover:shadow-purple">
              <Avatar
                src={session.user.image || ""}
                className="border-2 border-purple"
              />
            </PopoverTrigger>
            <PopoverContent>
              <form
                action={actions.signOut}
                className="text-almostWhite hover:cursor-pointer"
              >
                <button type="submit" className="flex items-center gap-2">
                  Sign Out{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    className="h-6 w-6 stroke-almostWhite"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                    />
                  </svg>
                </button>
              </form>
            </PopoverContent>
          </Popover>
        ) : (
          <>
            <form action={actions.signIn}>
              <button type="submit" className="cursor-pointer">
                Sign In
              </button>
            </form>
            <li className="cursor-pointer rounded border-2 border-purple bg-purple/25 p-1">
              Create Account
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
