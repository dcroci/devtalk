"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from "next/link";

export default function SideNav() {
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
    >
      <AccordionItem key="1" aria-label="On This Page" title="On This Page">
        <ul className="ml-4 flex flex-col gap-2 font-normal text-medGray">
          <li>
            <Link href="#useCase">Use Case</Link>
          </li>
          <Link href="#history">History</Link>
          <li>
            <Link href="#documentation">Documentation</Link>
          </li>
          <li>
            {" "}
            <Link href="#latestRelease">Latest Release</Link>
          </li>
        </ul>
      </AccordionItem>
      <AccordionItem key="2" aria-label="Resources" title="Resources">
        <ul className="ml-4 flex flex-col gap-2 font-normal text-medGray">
          <li>Content Creators</li>
          <li>Courses</li>
          <li>Books</li>
          <li>Videos</li>
          <li>Interview Prep</li>
          <li>Job Board</li>
        </ul>
      </AccordionItem>
      <AccordionItem key="4" aria-label="Talking Points" title="Talking Points">
        <ul className="ml-4 flex flex-col gap-2 font-normal text-medGray">
          <li>New</li>
          <li>Popular</li>
          <li>Create</li>
        </ul>
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Snippets">
        <ul className="ml-4 flex flex-col gap-2 font-normal text-medGray">
          <li>New</li>
          <li>Popular</li>
          <li>Create</li>
        </ul>
      </AccordionItem>

      <AccordionItem key="5" aria-label="Accordion 3" title="Project Showcase">
        <ul className="ml-4 flex flex-col gap-2 font-normal text-medGray">
          <li>View Projects</li>
          <li>Showcase Your Project</li>
        </ul>
      </AccordionItem>
    </Accordion>
  );
}
