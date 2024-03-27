import { Button } from "@nextui-org/react";
import Link from "next/link";

function NotFoundPage() {
  return (
    <div>
      <p>Something went wrong</p>
      <Link href={"/"}>
        <Button className="bg-purple  font-bold text-almostWhite">
          Go Home
        </Button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
