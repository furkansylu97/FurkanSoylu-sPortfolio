import React from "react";
import { useState, useEffect } from "react";
import logo from "../../images/logo.svg";
import user from "../../images/user.png";

function Intro() {
  const titles = ["Front-End Developer", "Web Developer"];
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const pauseTime = 2000;

  useEffect(() => {
    const currentIndex = loopIndex % titles.length;
    const fullText = titles[currentIndex];

    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText((prev) => prev.substring(0, prev.length - 1));
        setTypingSpeed(75);
      }, typingSpeed);
    } else {
      timeout = setTimeout(() => {
        setText((prev) => fullText.substring(0, prev.length + 1));
        setTypingSpeed(150);
      }, typingSpeed);
    }

    if (!isDeleting && text === fullText) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopIndex(loopIndex + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, loopIndex]);
  return (
    <section className="h-screen">
      <div className="h-full lg:h-[85vh] block lg:flex columns-1 lg:columns-2">
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex flex-col gap-2 lg:gap-5 justify-center items-start mx-5 lg:mx-20">
          <h1 className="text-white text-2xl lg:text-6xl font-serif">
            Hi, I am <span>Furkan Soylu</span>
          </h1>
          <h3 className="text-secondary text-transparent text-xl lg:text-5xl italic transition-all duration-500 ease-in-out min-h-[2.5rem] lg:min-h-[4rem] careerTitle">
            {text}
          </h3>
          <h1 className="text-tertiary text-xs lg:text-2xl font-bold lg:font-normal">
            "I Transform your imagination into functional code"
          </h1>
          <p className="text-white text-xs lg:text-xl w-2/3 lg:w-10/12 font-normal">
            I craft responsive, accessible, and high-performing web applications
            tailored to user needs. With a passion for clean code and
            cutting-edge technologies, I deliver solutions that are both
            innovative and dependable.
          </p>
          <button className="border lg:border-2 border-secondary text-secondary text-xs lg:text-2xl font-normal lg:font-medium mt-5 lg:mt-10 px-5 lg:px-10 py-2 lg:py-5 rounded">Get Started</button>
        </div>
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex relative justify-center items-center select-none">
          <div className="lg:h-2/3 lg:w-2/3 inline-block z-0 animate-spin-slow"> 
            <img src={logo} alt="logo" className="h-64 lg:h-full w-64 lg:w-full object-contain origin-center" />
          </div>
          <div className="absolute z-10">
            <img src={user} alt="user" className=" w-48 lg:w-96 h-48 lg:h-96" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
