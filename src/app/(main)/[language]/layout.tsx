import type { Metadata } from "next";
import localFont from "next/font/local";
import "../../globals.css";
import { Providers } from "../../providers";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";
import SideNav from "@/components/sections/SideNav";
import TalkingPointsAside from "@/components/sections/TalkingPointsAside";
import { db } from "../../db";
import { notFound } from "next/navigation";
import SnippetsAside from "@/components/sections/SnippetsAside";

const geistFont = localFont({
  src: "../../fonts/GeistVariableVF.ttf",
  display: "swap",
});

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
  console.log("PARAMS:", params);
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

  return (
    <html lang="en" className={`${geistFont.className} bg-almostBlack`}>
      <body className="px-2 dark xl:container">
        <Providers>
          <Navbar />
          <SideNav language={language} />
          {children}
          <div className="col-start-5 gap-4">
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
