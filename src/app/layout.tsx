"use client";
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";

const inter = Lato({
  weight: ["900", "700", "400"],
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
