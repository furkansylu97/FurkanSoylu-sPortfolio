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
    <section>
      <div className="h-[85vh] flex columns-2">
        <div className="w-1/2 h-full flex flex-col gap-5 justify-center items-start mx-20">
          <h1 className="text-white text-6xl font-serif">
            Hi, I am <span>Furkan Soylu</span>
          </h1>
          <h3 className="text-secondary text-transparent text-5xl italic transition-all duration-500 ease-in-out min-h-[4rem] careerTitle">
            {text}
          </h3>
          <h1 className="text-tertiary text-2xl font-normal">
            "I Transform your imagination into functional code"
          </h1>
          <p className="text-white text-xl w-10/12 font-normal">
            I craft responsive, accessible, and high-performing web applications
            tailored to user needs. With a passion for clean code and
            cutting-edge technologies, I deliver solutions that are both
            innovative and dependable.
          </p>
          <button className="border-2 border-secondary text-secondary text-2xl font-medium mt-10 px-10 py-5 rounded">Get Started</button>
        </div>
        <div className="w-1/2 h-full flex relative justify-center items-center select-none">
          <div className="h-2/3 w-2/3 inline-block z-0 animate-spin-slow"> 
            <img src={logo} alt="logo" className="h-full w-full object-contain origin-center" />
          </div>
          <div className="absolute z-10">
            <img src={user} alt="user" className=" w-96 h-96" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
