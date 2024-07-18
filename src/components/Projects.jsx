import React from "react";
import useLanguageAndTheme from "../hooks/useLanguageAndTheme";
import pizza from "../assets/pızza.png";
import twitter from "../assets/twitter.webp";
import watch from "../assets/watchlist.jpg";

const Projects = () => {
  const { darkMode, text } = useLanguageAndTheme();

  // Verilerin yüklendiğini kontrol ediyorum
  if (!text || !text.projectsList) {
    return <div>Loading...</div>;
  }

  const projects = [
    {
      id: "project1",
      image: pizza,
      siteLink: "https://pizzapizza-three.vercel.app",
      githubLink: "https://github.com/burcuaydinn/fsweb-s7-challenge-pizza",
    },
    {
      id: "project2",
      image: twitter,
      siteLink: "https://react-twitter-clone-iota.vercel.app",
      githubLink: "https://github.com/burcuaydinn/react-twitter-clone",
    },
    {
      id: "project3",
      image: watch,
      siteLink:
        "https://fsweb-s10g3-redux-watchlist-solution-kpce.onrender.com",
      githubLink:
        "https://github.com/burcuaydinn/fsweb-s10g3-redux-watchlist-solution",
    },
  ];

  return (
    <div
      className={`${
        darkMode ? "bg-custom-yellow-dark" : "bg-custom-yellow"
      } min-h-screen p-10`}
    >
      <h1
        className={`border-none font-bold translate-y-[20px] lg:translate-y-[50px] text-5xl ml-[4px] lg:ml-[280px]  ${
          darkMode ? "text-custom-yellow" : "text-custom-skills"
        }`}
      >
        {text.projects}
      </h1>
      <div className="space-y-6 mt-20 flex flex-col items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-lg flex flex-col lg:flex-row p-0 ${
              darkMode ? "bg-custom-darkp" : "bg-custom-white"
            }`}
            style={{ width: "100%", maxWidth: "870px", height: "auto" }}
          >
            <img
              src={project.image}
              alt={text.projectsList[project.id].title}
              className="w-full lg:w-1/3 h-64 lg:h-auto object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-t-none"
            />
            <div className="w-full lg:w-2/3 p-4 ">
              <h2
                className={`text-xl font-bold mt-2 mb-1 ${
                  darkMode ? "text-[#C1BAED]" : "text-[#4338CA]"
                }`}
              >
                {text.projectsList[project.id].title}
              </h2>
              <p
                className={`mb-3 text-sm ${
                  darkMode ? "text-white" : "text-[#383838]"
                }`}
              >
                {text.projectsList[project.id].description}
              </p>
              <div className="flex flex-wrap space-x-2 mb-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    darkMode ? "bg-[#8173DA]" : "bg-[#4731D3]"
                  } text-white`}
                >
                  react
                </span>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    darkMode ? "bg-[#8173DA]" : "bg-[#4731D3]"
                  } text-white`}
                >
                  redux
                </span>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    darkMode ? "bg-[#8173DA]" : "bg-[#4731D3]"
                  } text-white`}
                >
                  vercel
                </span>
              </div>
              <div className="flex space-x-3">
                <a
                  href={project.siteLink}
                  className={`underline ${
                    darkMode ? "text-[#CBF281]" : "text-[#120B39]"
                  }`}
                >
                  {text.site}
                </a>
                <a
                  href={project.githubLink}
                  className={`underline ${
                    darkMode ? "text-[#CBF281]" : "text-[#120B39]"
                  }`}
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
