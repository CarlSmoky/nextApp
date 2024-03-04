import React from "react";
import "./globals.css";
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

const RootLayout: React.FC<childrenProps> = ({ children }: childrenProps) => {
  return (
    <html lang="en">
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
