import React from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import useLanguageAndTheme from "./hooks/useLanguageAndTheme";

export default function App() {
  const { loading } = useLanguageAndTheme();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div >
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}
