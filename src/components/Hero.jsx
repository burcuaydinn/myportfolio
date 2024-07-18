import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import useLanguageAndTheme from "../hooks/useLanguageAndTheme";
import DarkModeToggle from "./DarkModeToggle";

function Hero() {
  const { darkMode, language, text, handleLanguageChange } =
    useLanguageAndTheme();

  return (
    <div
      className={`flex flex-col lg:flex-row w-full min-h-screen ${
        darkMode ? "bg-custom-blue-dark" : "bg-custom-blue"
      }`}
    >
      {/* Mavi Bölüm */}
      <div className="relative flex flex-col justify-center items-start w-full lg:w-2/3 p-8 lg:p-12">
        <button
          onClick={handleLanguageChange}
          className="absolute top-6 right-6 lg:top-8 lg:right-12 font-bold"
        >
          <span
            className={`${darkMode ? "text-[#8F88FF]" : "text-custom-yellow"}`}
          >
            {language === "english" ? "TÜRKÇE" : "SWITCH "}
          </span>
          <span
            className={`${
              darkMode ? "text-gray-500" : "text-custom-bestwhite"
            }`}
          >
            {language === "english" ? "'YE GEÇ" : "TO ENGLISH"}
          </span>
        </button>
        <div className="ml-4 md:ml-60">
          <h2 className="text-3xl font-bold mb-28 translate-y-16 md:-translate-y-[16px] text-custom-yellow">
            {text.name}
          </h2>
          <h1 className="text-5xl font-bold mb-8 text-custom-yellow">
            {text.title} <br />
            {text.title1}
          </h1>
          <p
            className={`text-2xl ${
              darkMode ? "text-gray-300" : "text-white"
            } mb-8`}
          >
            {text.description1}
            <br /> {text.description2} <br /> {text.description3}
          </p>
          {
            <div className="flex space-x-3 md:mt-[50px] ml-[2px] md:ml-[4px] mr-[70px]">
              <div className="space-x-[12px] mt-9 flex">
                <a
                  href="https://github.com/burcuaydinn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className={`w-[110px] md:w-[127px] h-[40px] md:h-[52px] rounded-[6px] border  p-[12px 20px 12px 12px] gap-[10px] text-center items-center flex border-customButton text-xs md:text-lg leading-7 font-medium ${
                      darkMode
                        ? "bg-custom-darksf text-custom-bestwhite border border-white"
                        : "bg-custom-bestwhite text-custom-darksf"
                    }`}
                  >
                    <FaGithub className="w-5 h- ml-3" />
                    Github
                  </button>
                </a>
                <a
                  href="https://www.linkedin.com/in/burcu-ayd%C4%B1n-44a8b0204"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className={`w-[110px] md:w-[127px] h-[40px] md:h-[52px] rounded-[6px] border  p-[12px 20px 12px 12px] gap-[10px] text-center items-center flex border-customButton text-xs md:text-lg leading-7 font-medium ${
                      darkMode
                        ? "bg-custom-darksf text-custom-bestwhite border border-white"
                        : "bg-custom-bestwhite text-custom-darksf"
                    }`}
                  >
                    <FaLinkedinIn className="w-5 h-5 ml-3" />
                    Linkedin
                  </button>
                </a>
              </div>
            </div>
          }
        </div>
      </div>
      {/* Sarı Bölüm */}
      <div
        className={`relative flex-1 flex justify-center items-center ${
          darkMode ? "bg-custom-yellow-dark" : "bg-custom-yellow"
        } p-8 lg:p-12`}
      >
        <DarkModeToggle />
        <img
          src="https://pbs.twimg.com/profile_images/1677790589096525825/ibmbT9Wf_400x400.jpg"
          alt="Profile"
          className="h-4/5 lg:w-[350px] lg:h-[350px] md:-translate-x-[220px] md:translate-y-[60px]  object-cover rounded-lg"
        />
      </div>
    </div>
  );
}

export default Hero;
