import React from "react";
import useLanguageAndTheme from "../hooks/useLanguageAndTheme";

const DarkModeToggle = () => {
  const { darkMode, handleToggleDarkMode } = useLanguageAndTheme();

  return (
    <div className="absolute top-2 -translate-y-[635px] md:translate-y-[0px] mr-[10rem] md:mr-[16rem] p-4">
      <label className="flex items-center ml-4 relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={darkMode}
          onChange={handleToggleDarkMode}
        />
        <div
          className={`w-14 h-8 rounded-full relative flex-shrink-0 cursor-pointer ${
            darkMode ? "bg-[#3A3A3A]" : "bg-[#8F88FF]"
          }`}
        >
          <div
            className={`w-6 h-6 mt-1 bg-[#FFE86E] rounded-full shadow-md transform duration-300 ease-in-out ${
              darkMode ? "translate-x-6" : "translate-x-1"
            }`}
          ></div>
          {darkMode && (
            <div
              className="absolute w-5 h-6 rounded-full transform translate-x-5 -translate-y-6"
              style={{
                clipPath: "circle(50% at 39% 39%)",
                backgroundColor: "#3A3A3A",
              }}
            ></div>
          )}
        </div>
        <span
          className={`ml-3 font-bold ${
            darkMode ? "text-gray-200" : "text-gray-800"
          }`}
        >
          {darkMode ? "LIGHT MODE" : "DARK MODE"}
        </span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
