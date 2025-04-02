import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

import BottomNav from "@/components/bottomnav";
import Sidebar from "@/components/sidebar";
import { Toaster } from "sonner";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yoliday ",
  description: "An app for yoliday full stack developer assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${roboto.variable} antialiased`}>
        <div className="flex h-screen">
          {" "}
          {/* Wrapper with flexbox */}
          <Sidebar />
          <div className="flex-1 flex flex-col">
            {" "}
            {/* Main content area with flexbox */}
            <Navbar />
            <div className="flex-1 overflow-y-auto lg:px-8">
              {" "}
              {/* Children content area, scrollable */}
              {children}
            </div>
            <BottomNav />
            <Toaster richColors />
          </div>
        </div>
      </body>
    </html>
  );
}
