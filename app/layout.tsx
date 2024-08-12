import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/Header";
import Footer from "./component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meals on Wings",
  description: "A sample frontpage website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><Header/>{children}<Footer/></body>
    </html>
  );
}
