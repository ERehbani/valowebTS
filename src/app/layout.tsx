"use client";
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import NavBar from "@/components/NavBar/NavBar";

const inter = Lato({
  weight: ["900", "700", "400"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <NavBar />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
