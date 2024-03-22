"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const selectedFilter = searchParams.get("filter") || "new";

  const filters = ["new", "likes", "comments", "oldest"];
  return (
    <div className="mb-4 mt-2 w-full rounded bg-darkGray">
      <ul className="grid w-full grid-cols-4 place-items-center  text-medium text-almostWhite">
        {filters.map((filter, i) => (
          <li
            className={`block h-full w-full ${filter == selectedFilter ? "border-b-2 border-purple" : ""} text-center text-[14px]`}
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
