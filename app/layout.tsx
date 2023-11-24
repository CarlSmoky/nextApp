import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Fotter from "./components/Footer/Fotter";
import type { Metadata } from "next";
import { childrenProps } from "./types/Interfaces";
import { orbitron, raleway, sofiaSans, montserrat, nunito ,quicksand, oswald, paragraphFont, titleFont } from "./fonts";

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
        <main className={`${titleFont.variable} ${raleway.variable} ${sofiaSans.variable} ${paragraphFont.variable}`}>
          <Navbar />
          {children}
          <Fotter />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
