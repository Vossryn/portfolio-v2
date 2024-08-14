import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import Header from "@/components/Header";
import "./globals.css";

const roboto = Roboto({ weight: "300", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Britton Flynt - Protfolio",
  description: "Portfolio for Britton Flynt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth w-full h-full scrollbar-thumb-yellow-300 scrollbar-track-black scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
    >
      <body
        className={`${roboto.className} bg-black bg-circuit-board text-white w-full h-full flex flex-col`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
