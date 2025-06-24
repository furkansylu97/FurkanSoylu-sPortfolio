import React from "react";
import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";

function Home() {
  return (
    <div>
      <Header />
      <div className="bg-gradient-to-r from-primary to-white gap-5 lg:gap-10">
        <Intro />
        <div className="w-full pl-5 lg:pl-20">
          <About />
        </div>
      </div>
    </div>
  );
}

export default Home;
