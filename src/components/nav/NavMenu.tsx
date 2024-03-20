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
import SideNav from "../sections/SideNav";
import MobileNav from "../sections/MobileNav";
import Image from "next/image";

export default function NavMenu({ languages, language, session }: any) {
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
      className="col-span-full border-b-2 border-darkGray bg-almostBlack/80"
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
            <Link className="text-[14px] font-normal text-medGray" href="#">
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className=" hidden text-almostWhite sm:flex">
          <Link href="https://twitter.com/ " target="_blank">
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
            language={language}
            languages={languages}
            closeMenu={closeMenu}
          />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
