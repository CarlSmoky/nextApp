import React from "react";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import type { Metadata } from "next";
import { childrenProps } from "./types/Interfaces";
import { paragraphFont, titleFont } from "./fonts";

export const metadata: Metadata = {
  title: {
    default: "Momo gallery - Noriko Yamamoto",
    template: "%s | Momo gallery",
  },
  description: "Visual Artist and Performer Noriko Yamamoto's site",
};

const {GTM_ID} = process.env
if (!GTM_ID) {
  throw new Error("Google Tag Manager ID is not defined");
}

const RootLayout: React.FC<childrenProps> = ({ children }: childrenProps) => {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={GTM_ID} />
      <body className="bg-prime-100">
        <main className={`${titleFont.variable} ${paragraphFont.variable}`}>
            <Navbar />
            {children}
            <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
