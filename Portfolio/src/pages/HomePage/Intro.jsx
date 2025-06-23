import React from "react";
import logo from "../../images/logo.svg";
import user from "../../images/user.png";

function Intro() {
  return (
    <>
      <div className="h-[85vh] bg-gradient-to-r from-primary to-white flex columns-2">
        <div className="w-1/2 h-full flex flex-col gap-5 justify-center items-start mx-20">
          <h1 className="text-white text-7xl font-serif">
            Hi, I am <span>Furkan Soylu</span>
          </h1>
          <h3 className="text-secondary text-6xl italic">
            Front-End Developer
          </h3>
          <h1 className="text-white text-3xl font-normal">
            "I Transform your imagination into functional code"
          </h1>
          <p className="text-white text-2xl w-10/12 font-normal">
            I craft responsive, accessible, and high-performing web applications
            tailored to user needs. With a passion for clean code and
            cutting-edge technologies, I deliver solutions that are both
            innovative and dependable.
          </p>
        </div>
        <div>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div>
            <img src={user} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
