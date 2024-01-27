import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./font.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Industrial Iot",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full h-full">
        <div className="w-full h-full fixed left-0  flex items-start justify-start" >
          <section className="h-full" >
            <Sidebar/>
          </section>
          <section className="h-full pb-5" >
        {children}
          </section>
        </div>
      </body>
    </html>
  );
}
