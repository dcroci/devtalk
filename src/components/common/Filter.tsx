"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface FilterProps {
  filters?: string[] | undefined;
}
function Filter({ filters }: FilterProps) {
  const searchParams = useSearchParams();
  const selectedFilter = searchParams.get("filter") || "new";
  let filterOptions = filters || ["new", "likes", "comments", "oldest"];

  return (
    <div className="mb-4 mt-2 w-full rounded bg-darkGray">
      <ul className="flex w-full items-center  text-medium text-almostWhite">
        {filterOptions.map((filter, i) => (
          <li
            className={`block h-full w-full ${filter == selectedFilter ? "border-b-2 border-purple" : ""} border-purple text-center text-[14px] hover:border-b-2`}
            key={i}
          >
            <Link href={`?filter=${filter}`}>
              <Button
                className="h-full w-full bg-darkGray px-2  py-4"
                radius="none"
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;
