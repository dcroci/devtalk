/* eslint-disable @next/next/no-img-element */
"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Link from "next/link";

export default function LanguageDropdown({ languages }: any) {
  return (
    <Dropdown className="bg-almostBlack text-medGray">
      <DropdownTrigger className="cursor-pointer">
        <p className="flex items-center">
          Languages
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </p>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions">
        {languages.map((language: any) => (
          <DropdownItem className="p-0 hover:bg-darkGray" key={language.id}>
            <Link
              href={`/${language.name.split(" ").join("").toLowerCase()}`}
              className="flex items-center gap-2 p-2"
            >
              <img src={language.logoUrl} alt="" className="h-6 w-6" />
              {language.name}
            </Link>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
