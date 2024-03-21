import type { Metadata } from "next";

import "../globals.css";
import { Providers } from "../providers";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "DevTalk",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` bg-almostBlack`}>
      <body className="dark xl:container">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
