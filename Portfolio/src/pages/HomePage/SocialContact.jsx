import React from "react";
import { LuMails } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaMediumM } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function SocialContact() {
  return (
    <div className="fixed left-[2px] lg:left-0 bottom-44 lg:bottom-0 lg:px-5">
      <div className="flex flex-col items-center">
        <div className="flex flex-col text-white text-sm lg:text-xl gap-3 mb-3">
          <a href="mailto:furkansylu97@gmail.com" title="Sent mail">
            <LuMails />
          </a>
          <a
            href="https://github.com/furkansylu97"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/furkansoylu/"
            target="_blank"
            rel="noopener noreferrer"
            title="Linkedin Profile"
          >
            <AiOutlineLinkedin />
          </a>
          <a
            href="https://medium.com/@furkansylu97"
            target="_blank"
            rel="noopener noreferrer"
            title="Medium Profile"
          >
            <FaMediumM />
          </a>
          <a
            href="https://www.instagram.com/furkannsyl/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram Profile"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="hidden lg:flex w-[1px] h-52 bg-secondary"></div>
      </div>
    </div>
  );
}

export default SocialContact;
