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
import { notFound } from "next/navigation";
import NavMenu from "./NavMenu";

async function Navbar({ languageName }: any) {
  const languages = await db.language.findMany({
    orderBy: {
      name: "asc",
    },
    select: { id: true, name: true, logoUrl: true },
  });
  if (!languages) {
    notFound();
  }

  const session = await auth();

  return (
    <NavMenu
      languages={languages}
      languageName={languageName}
      session={session}
    />
  );
}

export default Navbar;
