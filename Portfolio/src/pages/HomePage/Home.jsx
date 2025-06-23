import React from "react";
import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";

function Home() {
  return (
    <div>
      <Header />
      <div>
        <Intro />
        <div className=" w-full bg-gradient-to-r from-primary to-white pl-20">
          <About />
        </div>
      </div>
    </div>
  );
}

export default Home;
