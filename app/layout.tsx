import React from "react";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import type { Metadata } from "next";
import { childrenProps } from "./types/Interfaces";
import { DisplayNavProvider } from "./provider/DisplayNavProvider";
import { paragraphFont, titleFont } from "./fonts";

export const metadata: Metadata = {
  title: {
    default: "Momo gallery",
    template: "%s | Momo gallery",
  },
  description: "Artist & Dancer Noriko Yamamoto sites",
};

const RootLayout: React.FC<childrenProps> = ({ children }: childrenProps) => {
  return (
    <html lang="en">
      <body className="bg-prime-100">
        <main className={`${titleFont.variable} ${paragraphFont.variable}`}>
          <DisplayNavProvider>
            <Navbar />
            {children}
            <Footer />
          </DisplayNavProvider>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
