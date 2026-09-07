import type { Metadata } from "next";
import { Stack_Sans_Headline, Poppins } from 'next/font/google';
import Providers from './providers';
import "./globals.css";

import 'rc-slider/assets/index.css'

const stackSansHeadline = Stack_Sans_Headline({
  variable: "--font-stack-sans-headline",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WATCH-SHOP",
  description: "An e-commerce platform built with Next.js and TypeScript",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${stackSansHeadline.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

export default RootLayout
