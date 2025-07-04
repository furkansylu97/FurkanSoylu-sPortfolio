import React from "react";
import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";
import KnowledgeAndExperiences from "./KnowledgeAndExperiences";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import SocialContact from "./SocialContact";

function Home() {
  return (
    <div>
      <Header />
      <div className="bg-gradient-to-r from-primary to-white gap-5">
        <Intro />
        <div className="w-full pl-5 lg:pl-20">
          <About />
          <KnowledgeAndExperiences />
          <Projects />
          <Contact />
          <Footer />
          <SocialContact />
        </div>
      </div>
    </div>
  );
}

export default Home;
