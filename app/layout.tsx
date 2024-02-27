import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Modal from "./Modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nakanoista",
  description: "Front page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}<Modal/></body>
    </html>
  );
}
