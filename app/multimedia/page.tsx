import type { Metadata } from "next";
import fs from "node:fs/promises";
import Link from "next/link";
import SectionwithTitle from "../components/SectionwithTitle";
import { MultimediaSource } from "../types/Interfaces";
import { toTitleCase } from "../utils/textFormat";

export const metadata: Metadata = {
  title: "Multimedia",
};

const MultimediaPage: React.FC = async () => {
  const file = await fs.readFile(
    process.cwd() + "/app/data/multimedia.json",
    "utf8"
  );
  const data = JSON.parse(file);
  const displayOrder = ["essay", "poem", "radio"];
  return (
    <SectionwithTitle title="Multimedia">
      <div className="flex-wrapper">
        <ul className="text-base lg:text-lg font-paragraph m-auto">
          {displayOrder.map((el) => (
            <div key={el} className="lg:w-[600px]">
              <h3 className="text-2xl font-title m-2"  id={el}>
                {toTitleCase(el)}
              </h3>
              {data.multimedia[el].map((item: MultimediaSource, i: number) =>
                el !== "radio" ? (
                  <li key={i} className="pl-4">
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      locale={false}
                    >
                      {item.title}
                    </Link>
                  </li>
                ) : (
                  <li key={i} className="pl-4">
                    {item.title}
                    <audio controls>
                      <source src={item.href} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </li>
                )
              )}
            </div>
          ))}
        </ul>
      </div>
    </SectionwithTitle>
  );
};

export default MultimediaPage;
