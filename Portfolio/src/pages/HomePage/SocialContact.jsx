import React from "react";
import { LuMails } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaMediumM } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const socials = [
  {
    icon: <LuMails />,
    href: "mailto:furkansylu97@gmail.com",
    label: "Send Email",
  },
  {
    icon: <FaGithub />,
    href: "https://github.com/furkansylu97",
    label: "GitHub Profile",
  },
  {
    icon: <AiOutlineLinkedin />,
    href: "https://www.linkedin.com/in/furkansoylu/",
    label: "LinkedIn Profile",
  },
  {
    icon: <FaMediumM />,
    href: "https://medium.com/@furkansylu97",
    label: "Medium Profile",
  },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/furkannsyl/",
    label: "Instagram Profile",
  },
];

function SocialContact() {
  const hoverAnimation =
    "hover:text-secondary hover:scale-125 transition-all duration-300 ease-in-out";

  return (
    <div className="fixed left-[2px] lg:left-0 bottom-44 lg:bottom-0 lg:px-5 z-50">
      <div className="flex flex-col items-center">
        <div className="flex flex-col text-white text-sm lg:text-xl gap-3 mb-3">
          {socials.map(({ icon, href, label }, index) => (
            <a
              key={index}
              href={href}
              target={href.startsWith("mailto") ? "_self" : "_blank"}
              rel={href.startsWith("mailto") ? "" : "noopener noreferrer"}
              aria-label={label}
              title={label}
              className={hoverAnimation}
            >
              {icon}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex w-[1px] h-52 bg-secondary" />
      </div>
    </div>
  );
}

export default SocialContact;
