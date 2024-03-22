"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from "next/link";
import LanguageDropdown from "../nav/LanguageDropdown";

export default function MobileNav({ language, languages, closeMenu }: any) {
  const itemClasses = {
    base: "py-0 w-full col-start-1 col-end-2",
    title: "font-normal text-[14px] text-almostWhite",
    trigger:
      " py-0 data-[hover=true]:bg-almostBlack/50 rounded-lg h-14 flex items-center ",
    indicator: "text-medium",
    content: "text-small",
  };

  return (
    <>
      <ul className="  flex w-full items-center justify-around gap-4 border-b-2 border-darkGray pb-2">
        <LanguageDropdown languages={languages} />
        <li>
          <Link href="/" className="text-[14px] font-normal text-medGray">
            Blog
          </Link>
        </li>
        <li>
          <Link className="text-[14px] font-normal text-medGray" href="#">
            Contact
          </Link>
        </li>
      </ul>
      {language && (
        <Accordion
          defaultExpandedKeys={["1", "2", "3", "4", "5"]}
          itemClasses={itemClasses}
          selectionMode="multiple"
          className=" md:flex md:flex-col"
        >
          <AccordionItem
            key="1"
            aria-label={`${language.name} Home`}
            title={`${language.name} Home`}
          >
            <ul className="ml-4 flex flex-col gap-2 font-normal text-medGray">
              <li className="hover:underline" onClick={closeMenu}>
                <Link href={`/${language.name.toLowerCase()}/#useCase`}>
                  Use Case
                </Link>
              </li>
              <li onClick={closeMenu}>
                <Link href={`/${language.name.toLowerCase()}/#history`}>
                  History
                </Link>
              </li>
              <li onClick={closeMenu}>
                <Link href={`/${language.name.toLowerCase()}/#documentation`}>
                  Documentation
                </Link>
              </li>
              <li onClick={closeMenu}>
                {" "}
                <Link href={`/${language.name.toLowerCase()}/#latestRelease`}>
                  Latest Release
                </Link>
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem key="2" aria-label="Resources" title="Resources">
            <ul className="ml-4 flex flex-col gap-2 font-normal text-medGray">
              <li onClick={closeMenu}>
                <Link href={`/${language.name.toLowerCase()}/#contentCreators`}>
                  Content Creators
                </Link>
              </li>
              <li onClick={closeMenu}>
                <Link href={`/${language.name.toLowerCase()}/#courses`}>
                  Courses
                </Link>
              </li>
              <li onClick={closeMenu}>
                <Link href={`/${language.name.toLowerCase()}/#books`}>
                  Books
                </Link>
              </li>
              <li onClick={closeMenu}>
                <Link href={`/${language.name.toLowerCase()}/#videos`}>
                  Videos
                </Link>
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
          <AccordionItem
            key="4"
            aria-label="Talking Points"
            title="Talking Points"
          >
            <ul className="ml-4 flex flex-col gap-2 font-normal text-medGray">
              <Link
                onClick={closeMenu}
                href={`/${language.name.toLowerCase()}/talkingpoints/popular`}
              >
                Popular
              </Link>
              {/* <li>Create</li> */}
            </ul>
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Snippets">
            <ul className="ml-4 flex flex-col gap-2 font-normal text-medGray">
              <li onClick={closeMenu}>
                <Link href={`/${language.name.toLowerCase()}/snippets/new`}>
                  Create
                </Link>
              </li>
              <li onClick={closeMenu}>
                <Link href={`/${language.name.toLowerCase()}/snippets`}>
                  Popular
                </Link>
              </li>
              {/* <li>New</li> */}
            </ul>
          </AccordionItem>

          <AccordionItem
            key="5"
            aria-label="Accordion 3"
            title="Project Showcase"
            className="mb-10"
          >
            <ul className="ml-4 flex flex-col gap-2 font-normal text-medGray">
              <li onClick={closeMenu}>
                {" "}
                <Link href={`/${language.name.toLowerCase()}/showcase`}>
                  View Projects
                </Link>
              </li>
              <li onClick={closeMenu}>
                <Link href={`/${language.name.toLowerCase()}/showcase/new`}>
                  Showcase Your Project
                </Link>
              </li>
            </ul>
          </AccordionItem>
        </Accordion>
      )}
    </>
  );
}
