import Header from "@/components/Header";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ weight: "300", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Britton Flynt",
  description: "Portfolio for Britton Flynt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full h-full">
      <body
        className={`${roboto.className} bg-black text-white w-full h-full flex flex-col`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
