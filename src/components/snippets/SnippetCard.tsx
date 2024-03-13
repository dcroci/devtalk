"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import Link from "next/link";
interface SnippetCardProps {
  languageName: string;
  snippet: any;
  logoUrl: string;
}
function SnippetCard({ snippet, languageName, logoUrl }: SnippetCardProps) {
  return (
    <Link
      href={`/${languageName.toLowerCase()}/snippets/${snippet.id}`}
      className="h-fit"
    >
      <Card className="max-w-[400px] bg-almostBlack">
        <CardHeader className="flex gap-3 bg-[#18181b] text-white">
          <img src={`${logoUrl}`} alt="" className="w-8" />

          <div className="flex flex-col">
            <p className="font-medium">{snippet.title}</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="bg-[#18181b] text-white">
          <p>This is a function that does this one thing</p>
        </CardBody>
        <Divider />
        <CardFooter className="bg-[#18181b] text-white">
          <Link href={`snippets/${snippet.id}`}>View Code Snippet</Link>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default SnippetCard;
