import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "../../globals.css";
import { Providers } from "../../providers";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import SideNav from "@/components/sections/SideNav";
import TalkingPointsAside from "@/components/sections/TalkingPointsAside";
import { db } from "../../db";
import { notFound } from "next/navigation";
import SnippetsAside from "@/components/sections/SnippetsAside";

export const metadata: Metadata = {
  title: "DevTalk",
  description: "Generated by create next app",
};

interface LanguageProps {
  children: any;
  // Readonly<{
  //   children: React.ReactNode;
  // }>;
  params: { language: string };
}
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    language: string;
  };
}) {
  const language = await db.language.findFirst({
    where: {
      name: {
        equals: params.language,
        mode: "insensitive",
      },
    },
  });
  if (!language) {
    notFound();
  }
  // console.log(language);

  return (
    <html lang="en" className={`${GeistSans.className} bg-almostBlack`}>
      <body className="dark xl:container">
        <Providers>
          <Navbar language={language} params={params} />
          <SideNav language={language} />
          {children}
          <div className="col-start-5 hidden gap-4 lg:flex lg:flex-col">
            <img
              src={`${language.logoUrl}`}
              alt=""
              className="mx-auto mb-2 w-40"
            />
            <TalkingPointsAside language={language} />
            <SnippetsAside language={language} />
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
