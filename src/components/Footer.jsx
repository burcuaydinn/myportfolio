import React from "react";
import { FaTwitter, FaCodepen, FaAt, FaInstagram } from "react-icons/fa";
import useLanguageAndTheme from "../hooks/useLanguageAndTheme";

const Footer = () => {
  const { darkMode, text } = useLanguageAndTheme();
  return (
    <div
      className={`flex items-center justify-center h-[470px] ${
        darkMode ? "bg-custom-darksf" : "bg-custom-white"
      }`}
    >
      <div className="text-center">
        <h1
          className={`text-5xl font-bold mb-12 ${
            darkMode ? "text-[#8F88FF]" : "text-custom-blue"
          }`}
        >
          {text.send}
        </h1>
        <p
          className={`mt-2 ${
            darkMode ? "text-custom-bestwhite" : "text-[#120B39]"
          }`}
        >
          {text.message1} <br /> {text.message2}
        </p>
        <p
          className={`mt-6 ${darkMode ? "text-[#8F88FF]" : "text-custom-blue"}`}
        >
          <a
            href="mailto:burcuaydin2417@gmail.com"
            className={`${
              darkMode ? "text-[#8F88FF]" : "text-custom-blue"
            } underline`}
          >
            burcuaydin2417@gmail.com
          </a>
        </p>
        <div className="mt-6 flex justify-center space-x-4 text-2xl">
          <a
            href="https://x.com/BrcuAydinn"
            target="_blank"
            rel="noopener noreferrer"
            className={`${darkMode ? "text-[#8F88FF]" : "text-custom-blue"}`}
          >
            <FaTwitter />
          </a>
          <a
            href="https://codepen.io"
            target="_blank"
            rel="noopener noreferrer"
            className={`${darkMode ? "text-[#8F88FF]" : "text-custom-blue"}`}
          >
            <FaCodepen />
          </a>
          <a
            href="mailto:burcuaydin2417@gmail.com"
            className={`${darkMode ? "text-[#8F88FF]" : "text-custom-blue"}`}
          >
            <FaAt />
          </a>
          <a
            href="https://www.instagram.com/aydn_burcu"
            target="_blank"
            rel="noopener noreferrer"
            className={`${darkMode ? "text-[#8F88FF]" : "text-custom-blue"}`}
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
