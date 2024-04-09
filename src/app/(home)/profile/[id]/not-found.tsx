import { Button } from "@nextui-org/react";
import Link from "next/link";

function notFound() {
  return (
    <div className="col-span-full h-[80vh] w-full">
      <p className=" p-10 text-center text-lg font-bold text-almostWhite">
        You do not have access to view this account
      </p>
      <Link href={"/"} className="w-full text-center text-purple">
        <Button className="mx-auto flex justify-center bg-purple font-medium">
          Go Home
        </Button>
      </Link>
    </div>
  );
}

export default notFound;
