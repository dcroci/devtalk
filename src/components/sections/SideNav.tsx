"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from "next/link";

export default function SideNav({ language }: any) {
  const itemClasses = {
    base: "py-0 w-full col-start-1 col-end-2",
    title: "font-normal text-[14px] text-almostWhite",
    trigger:
      " py-0 data-[hover=true]:bg-almostBlack/50 rounded-lg h-14 flex items-center ",
    indicator: "text-medium",
    content: "text-small",
  };

  return (
    <Accordion
      defaultExpandedKeys={["1", "2", "3", "4", "5"]}
      itemClasses={itemClasses}
      selectionMode="multiple"
      className="hidden  lg:flex lg:flex-col"
    >
      <AccordionItem
        key="1"
        aria-label={`${language.name} Home`}
        title={`${language.name} Home`}
      >
        <ul className="ml-4 flex flex-col gap-2 font-normal text-medGray">
          <li className="hover:underline">
            <Link href={`/${language.name.toLowerCase()}/#useCase`}>
              Use Case
            </Link>
          </li>
          <Link href={`/${language.name.toLowerCase()}/#history`}>History</Link>
          <li>
            <Link href={`/${language.name.toLowerCase()}/#documentation`}>
              Documentation
            </Link>
          </li>
          <li>
            {" "}
            <Link href={`/${language.name.toLowerCase()}/#latestRelease`}>
              Latest Release
            </Link>
          </li>
        </ul>
      </AccordionItem>
      <AccordionItem key="2" aria-label="Resources" title="Resources">
        <ul className="ml-4 flex flex-col gap-2 font-normal text-medGray">
          <li>
            <Link href={`/${language.name.toLowerCase()}/#contentCreators`}>
              Content Creators
            </Link>
          </li>
          <li>
            <Link href={`/${language.name.toLowerCase()}/#courses`}>
              Courses
            </Link>
          </li>
          <li>
            <Link href={`/${language.name.toLowerCase()}/#books`}>Books</Link>
          </li>
          <li>
            <Link href={`/${language.name.toLowerCase()}/#videos`}>Videos</Link>
          </li>
          <li className="flex w-fit items-center gap-2 ">
            Interview Prep
            <p className=" rounded border-2 border-purple bg-purple/25 px-1 text-[10px]">
              Soon
            </p>
          </li>
          <li className="flex w-fit items-center gap-2 ">
            Job Board
            <p className=" rounded border-2 border-purple bg-purple/25 px-1 text-[10px]">
              Soon
            </p>
          </li>
        </ul>
      </AccordionItem>
      <AccordionItem key="4" aria-label="Talking Points" title="Talking Points">
        <ul className="ml-4 flex flex-col gap-2 font-normal text-medGray">
          <Link href={`/${language.name.toLowerCase()}/talkingpoints/popular`}>
            Popular
          </Link>
          {/* <li>Create</li> */}
        </ul>
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Snippets">
        <ul className="ml-4 flex flex-col gap-2 font-normal text-medGray">
          <li>
            <Link href={`/${language.name.toLowerCase()}/snippets/new`}>
              Create
            </Link>
          </li>
          <li>
            <Link href={`/${language.name.toLowerCase()}/snippets`}>
              Popular
            </Link>
          </li>
          {/* <li>New</li> */}
        </ul>
      </AccordionItem>

      <AccordionItem key="5" aria-label="Accordion 3" title="Project Showcase">
        <ul className="ml-4 flex flex-col gap-2 font-normal text-medGray">
          <li>
            {" "}
            <Link href={`/${language.name.toLowerCase()}/showcase`}>
              View Projects
            </Link>
          </li>
          <li>
            <Link href={`/${language.name.toLowerCase()}/showcase/new`}>
              Showcase Your Project
            </Link>
          </li>
        </ul>
      </AccordionItem>
    </Accordion>
  );
}
