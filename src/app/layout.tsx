"use client";
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";
import type { Metadata } from "next";
import { Lato, Anton, Space_Grotesk } from "next/font/google";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

const inter = Lato({
  weight: ["900", "700", "400"],
  subsets: ["latin"],
});

const anton = Anton({
  weight: ["400"],
  subsets: ["latin"],
});

const grotesk = Space_Grotesk({
  weight: ["400", "700"],
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${anton.className} ${grotesk.className}`}>
        <NextUIProvider>
          <NavBar />
          {children}
          <Footer/>
        </NextUIProvider>
      </body>
    </html>
  );
}
