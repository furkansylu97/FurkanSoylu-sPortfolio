import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaMediumM } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function SocialContact() {
  return (
    <div className="fixed left-[2px] lg:left-0 bottom-44 lg:bottom-0 lg:px-5">
      <div className="flex flex-col items-center">
        <div className="flex flex-col text-white text-sm lg:text-xl gap-3 mb-3">
          <BiLogoGmail />
          <FaGithub />
          <AiOutlineLinkedin />
          <FaMediumM />
          <FaInstagram />
        </div>
        <div className="hidden lg:flex w-[1px] h-52 bg-secondary"></div>
      </div>
    </div>
  );
}

export default SocialContact;
