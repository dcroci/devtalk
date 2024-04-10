"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from "next/link";

export default function SideNav({ languageName }: any) {
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
      className="hidden  px-2 lg:flex lg:flex-col"
      id="sideNav"
    >
      <AccordionItem
        key="1"
        aria-label={`${languageName} Home`}
        title={`${languageName} Home`}
      >
        <ul className="ml-4 flex flex-col gap-2 font-normal text-medGray">
          <li className=" hover:underline ">
            <Link
              href={`/${languageName.toLowerCase()}/#useCase`}
              className="focus:border-2 focus:border-purple"
            >
              Use Case
            </Link>
          </li>
          <li className="hover:underline">
            <Link href={`/${languageName.toLowerCase()}/#history`}>
              History
            </Link>
          </li>
          <li className="hover:underline">
            <Link href={`/${languageName.toLowerCase()}/#documentation`}>
              Documentation
            </Link>
          </li>
          <li className="hover:underline">
            {" "}
            <Link href={`/${languageName.toLowerCase()}/#latestRelease`}>
              Latest Release
            </Link>
          </li>
        </ul>
      </AccordionItem>
      <AccordionItem key="2" aria-label="Resources" title="Resources">
        <ul className="ml-4 flex flex-col gap-2 font-normal text-medGray">
          <li className="hover:underline">
            <Link href={`/${languageName.toLowerCase()}/#contentCreators`}>
              Content Creators
            </Link>
          </li>
          <li className="hover:underline">
            <Link href={`/${languageName.toLowerCase()}/#courses`}>
              Courses
            </Link>
          </li>
          <li className="hover:underline">
            <Link href={`/${languageName.toLowerCase()}/#books`}>Books</Link>
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
          <li className="hover:underline">
            <Link
              href={`/${languageName.toLowerCase()}/talkingpoints/popular/?filter=new`}
            >
              Newest
            </Link>
          </li>
          <li className="hover:underline">
            <Link
              href={`/${languageName.toLowerCase()}/talkingpoints/popular/?filter=likes`}
            >
              Most Liked
            </Link>
          </li>
          <li className="hover:underline">
            <Link
              href={`/${languageName.toLowerCase()}/talkingpoints/popular/?filter=comments`}
            >
              Most Commented
            </Link>
          </li>
          <li className="hover:underline">
            <Link
              href={`/${languageName.toLowerCase()}/talkingpoints/popular/?filter=oldest`}
            >
              Oldest
            </Link>
          </li>
        </ul>
      </AccordionItem>
      <AccordionItem key="3" aria-label="Snippets Accordion" title="Snippets">
        <ul className="ml-4 flex flex-col gap-2 font-normal text-medGray">
          <li className="hover:underline">
            <Link href={`/${languageName.toLowerCase()}/snippets/new`}>
              Create a Snippet
            </Link>
          </li>
          <li className="hover:underline">
            <Link href={`/${languageName.toLowerCase()}/snippets/?filter=new`}>
              Newest
            </Link>
          </li>
          <li className="hover:underline">
            <Link
              href={`/${languageName.toLowerCase()}/snippets/?filter=likes`}
            >
              Most Liked
            </Link>
          </li>
          <li className="hover:underline">
            <Link
              href={`/${languageName.toLowerCase()}/snippets/?filter=comments`}
            >
              Most Commented
            </Link>
          </li>
          <li className="hover:underline">
            <Link
              href={`/${languageName.toLowerCase()}/snippets/?filter=oldest`}
            >
              Oldest
            </Link>
          </li>
          {/* <li className="hover:underline">New</li> */}
        </ul>
      </AccordionItem>

      <AccordionItem
        key="5"
        aria-label="Project Showcase Accordion"
        title="Project Showcase"
      >
        <ul className="ml-4 flex flex-col gap-2 font-normal text-medGray">
          <li className="hover:underline">
            {" "}
            <Link href={`/${languageName.toLowerCase()}/showcase/?filter=new`}>
              View Projects
            </Link>
          </li>
          <li className="hover:underline">
            <Link
              href={`/${languageName.toLowerCase()}/showcase/?filter=likes`}
            >
              Most Liked
            </Link>
          </li>
          <li className="hover:underline">
            <Link
              href={`/${languageName.toLowerCase()}/showcase/?filter=comments`}
            >
              Most Commented
            </Link>
          </li>
          <li className="hover:underline">
            <Link
              href={`/${languageName.toLowerCase()}/showcase/?filter=oldest`}
            >
              Oldest
            </Link>
          </li>
        </ul>
      </AccordionItem>
    </Accordion>
  );
}
