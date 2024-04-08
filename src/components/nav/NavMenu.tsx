"use client";
import { useState } from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Avatar,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import LanguageDropdown from "./LanguageDropdown";
import * as actions from "@/actions";
import MobileNav from "../sections/MobileNav";
import Image from "next/image";

export default function NavMenu({ languages, languageName, session }: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function closeMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      className="z-50 col-span-full border-b-2 border-darkGray bg-almostBlack/80"
      maxWidth="full"
    >
      <NavbarContent className="flex">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="stroke-white lg:hidden"
          icon={
            isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#ffffff"
                className="h-6 w-6 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#ffffff"
                className="h-6 w-6 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )
          }
        />
        <NavbarItem>
          <Link href="/" className="text-[16px] font-bold text-almostWhite">
            DevTalk
          </Link>
        </NavbarItem>
        <NavbarContent className=" hidden items-center gap-4 lg:flex">
          <LanguageDropdown languages={languages} />
          <NavbarItem>
            <Link href="/" className="text-[14px] font-normal text-medGray">
              Blog
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="text-[14px] font-normal text-medGray"
              href="/contact"
            >
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className=" hidden text-almostWhite sm:flex">
          <Link href="https://x.com/devtalktech?s=20 " target="_blank">
            <Image
              src="/assets/x-logo.webp"
              alt=""
              width={35}
              height={35}
              className="min-h-[35px] min-w-[35px]"
            />
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden text-almostWhite sm:flex">
          <Link href="https://github.com/dcroci/devtalk" target="_blank">
            <Image
              src="/assets/github-logo.svg"
              alt=""
              width={35}
              height={35}
              className="min-h-[35px] min-w-[35px]"
            />
          </Link>
        </NavbarItem>
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
                <button
                  type="submit"
                  className="flex w-full items-center justify-between gap-2 border-b-2 border-darkGray px-1 py-3 text-sm"
                >
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
                <Link
                  href={`/profile/${session.user.id}`}
                  className="flex w-full items-center justify-between gap-2 px-1 py-3 text-sm text-almostWhite hover:cursor-pointer"
                >
                  View Profile
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    className="h-6 w-6 stroke-almostWhite"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </Link>
              </form>
            </PopoverContent>
          </Popover>
        ) : (
          <>
            <NavbarItem className="flex text-almostWhite">
              <form action={actions.signIn}>
                <Button
                  type="submit"
                  className="cursor-pointer rounded bg-transparent"
                >
                  Sign In
                </Button>
              </form>
            </NavbarItem>
            <NavbarItem className="text-almostWhite">
              <form action={actions.signIn}>
                <Button
                  className="cursor-pointer rounded border-2 border-purple bg-purple/25"
                  type="submit"
                >
                  Create Account
                </Button>
              </form>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <MobileNav
            languageName={languageName}
            languages={languages}
            closeMenu={closeMenu}
          />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
