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

async function Navbar({ language }: any) {
  const languages = await db.language.findMany({
    orderBy: {
      name: "asc",
    },
  });
  if (!languages) {
    notFound();
  }

  const session = await auth();

  return (
    <NavMenu languages={languages} language={language} session={session} />
  );
}

export default Navbar;
