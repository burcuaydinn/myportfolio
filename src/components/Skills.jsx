import React from "react";
import useLanguageAndTheme from "../hooks/useLanguageAndTheme"; // Hook dosyasını import edin
import JS from "../assets/js.svg";
import react from "../assets/ReactLogo.svg";
import nodejs from "../assets/nodejs.svg";
import vs from "../assets/Vscode.svg";
import redux from "../assets/Redux.svg";
import figma from "../assets/figma.svg";

const skillsData = [
  { name: "JAVASCRIPT", image: JS },
  { name: "REACT", image: react },
  { name: "REDUX", image: redux },
  { name: "NODE", image: nodejs },
  { name: "VS CODE", image: vs },
  { name: "FIGMA", image: figma },
];

function Skills() {
  const { darkMode, text } = useLanguageAndTheme(); // Hook'u kullanarak state'leri alın

  return (
    <div
      className={`border-none w-full h-auto flex flex-col lg:flex-row gap-4 ${
        darkMode
          ? "bg-custom-darksf text-custom-bestwhite"
          : "bg-custom-bestwhite text-custom-darksf"
      }`}
    >
      <h2
        className={`border-none font-bold text-5xl translate-y-[50px] md:translate-y-[70px] ml-[2rem] md:ml-[300px] ${
          darkMode ? "text-custom-yellow" : "text-custom-skills"
        }`}
      >
        {text.skills}
      </h2>
      <div className="grid grid-cols-2 ml-5 md:ml-24 md:p-9">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="text-center grid grid-cols-2  sm:grid-cols-2 lg:grid-cols-2 gap-[4rem] mt-3 md:-translate-x-[20px]"
          >
            <img
              src={skill.image}
              className="w-[100px] h-[100px] translate-x-3 md:translate-x-[90px] mr-4 mt-12"
              alt={skill.name}
            />
            <p
              className={`text-m font-medium md:px-4 -translate-x-9 md:translate-x-[1rem] translate-y-[90px]`}
            >
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
