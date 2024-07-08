import React from "react";
import type { Metadata } from "next";
import fs from "node:fs/promises";
import Link from "next/link";
import Image from "next/image";
import SectionwithTitle from "../components/SectionwithTitle";
import { MultimediaSource } from "../types/Interfaces";
import { toTitleCase } from "../utils/textFormat";
import { FaBookOpen } from "react-icons/fa";
import { FaRadio, FaPenFancy } from "react-icons/fa6";

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
        <ul className="m-auto lg:w-[750px] text-grey-100">
          {displayOrder.map((el) => (
            <React.Fragment key={el}>
              <li className="list-none">
                <h2 className="font-title font-bold text-lg md:text-xl lg:text-2xl my-4" id={el}>
                  {toTitleCase(el)}
                </h2>
                <ul className="font-paragraph text-base xl:text-lg">
                  {data.multimedia[el].map(
                    (item: MultimediaSource, i: number) => {
                      if (el === "essay") {
                        return (
                          <li
                            key={i}
                            className="my-2 group"
                          >
                            <Link
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              locale={false}
                              className="flex flex-col md:flex-row justify-between group-hover:opacity-60 transition-all duration-600 ease-in-out"
                            >
                              <div className="flex flex-row md:w-1/2 pl-6 ">
                                <FaBookOpen className="my-auto" />
                                <h3 className="text-center md:text-left  md:my-auto ml-4">
                                  {item.title}
                                </h3>
                              </div>

                              {item.cover ? (
                                <Image
                                  className="object-obtain m-auto md:m-0 p-1"
                                  src={item.cover}
                                  alt={item.title}
                                  width={200}
                                  height={100}
                                  sizes="(max-width: 480px) 66vw, (max-width: 768px) 50vw, 33vw"
                                />
                              ) : (
                                <span>No Image Available</span>
                              )}
                            </Link>
                          </li>
                        );
                      }

                      if (el === "radio") {
                        return (
                          <li
                            key={i}
                            className="flex flex-col md:flex-row my-4 justify-between"
                          >
                            <div className="flex flex-row md:w-1/2 pl-6">
                              <FaRadio className="my-auto"/>
                              <h3 className="text-center md:text-left md:my-auto ml-4">
                                {item.title}
                              </h3>
                            </div>
                            <audio controls className="p-1">
                              <source src={item.href} type="audio/mpeg" />
                              Your browser does not support the audio element.
                            </audio>
                          </li>
                        );
                      } else {
                        return (
                          <li key={i} className="my-4 group">
                            <Link
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              locale={false}
                              className="group-hover:opacity-60 transition-all duration-600 ease-in-out"
                            >
                              <div className="flex flex-row md:w-1/2 pl-6 py-4">
                              <FaPenFancy className="my-auto"/>
                              <h3 className="text-center md:text-left md:my-auto ml-4">
                                {item.title}
                              </h3>
                              </div>
                            </Link>
                          </li>
                        );
                      }
                    }
                  )}
                </ul>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </SectionwithTitle>
  );
};

export default MultimediaPage;
