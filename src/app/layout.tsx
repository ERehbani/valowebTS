"use client"
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Arimo } from "next/font/google";

const inter = Arimo({
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
        {children}
        </NextUIProvider>
        </body>
    </html>
  );
}
