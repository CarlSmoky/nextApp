import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import type { Metadata } from "next";
import { childrenProps } from "./types/Interfaces";
import { DisplayNavProvider } from "./provider/DisplayNavProvider";
import {
  orbitron,
  raleway,
  sofiaSans,
  montserrat,
  nunito,
  quicksand,
  oswald,
  paragraphFont,
  titleFont,
} from "./fonts";
import React, { useContext, createContext, useState } from "react";

// go into the types:
enum NavState {
  home,
  visualArt,
  peformance,
  nia,
  about,
  contact
}

export const metadata: Metadata = {
  title: {
    default: "Momo gallary",
    template: "%s | Momo gallary",
  },
  description: "Artist & Dancer Noriko Yamamoto sites",
};


const RootLayout: React.FC<childrenProps> = ({ children }: childrenProps) => {

  return (
    <html lang="en">
      <body className="bg-prime-100">
        <main
          className={`${titleFont.variable} ${raleway.variable} ${sofiaSans.variable} ${paragraphFont.variable}`}
        >
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
