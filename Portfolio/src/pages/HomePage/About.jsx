import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import icons from "../../components/Icons";

function About() {
  return (
    <section id="about-section">
      <div className="h-svh lg:h-dvh -mt-24 lg:-mt-0">
        <SectionTitle title="About Me" />
        <div className="block lg:flex w-full">
          <div className="h-32 lg:h-[45vh] w-full lg:w-1/2 pr-10 lg:pr-52">
            <DotLottieReact
              src="https://lottie.host/50888e59-bf72-47b5-8a35-8f6f9b3e691c/5Vk5cWtcEP.lottie"
              loop
              autoplay
            />
          </div>
          <div className="flex flex-col w-5/6 lg:w-1/2 items-center justify-center p-3 lg:p-4 mx-4 lg:mx-5 gap-2 lg:gap-4 border-solid border-2 border-secondary rounded-2xl italic">
            <p className="text-primary text-[10px] lg:text-base font-medium">
              My name is Furkan Soylu, and I graduated from the Department of
              Mechatronics Engineering at Katip Çelebi University, where the
              language of instruction is English. Although my background is in
              engineering, I have developed a strong passion for web development
              and continuously improve my skills by working on various projects.
              I am also interested in UI and UX design, focusing on creating
              user-friendly and visually appealing interfaces while keeping up
              with the latest technology trends.
            </p>
            <p className="text-primary text-[10px] lg:text-base font-medium">
              Outside of my professional life, I enjoy traveling, listening to
              music, camping, and attending theater performances. These
              activities inspire my creativity and help me approach my work with
              a fresh perspective. Overall, I am a dedicated and innovative
              individual committed to learning and growing in the technology
              field.
            </p>
          </div>
        </div>
        <div className="my-1 lg:my-3 py-1 lg:py-3 mx-4 lg:mx-0">
          <h1 className="text-black lg:text-white text-xs lg:text-xl w-5/6 lg:w-full my-1 lg:my-3S">
            I’ve been focusing on the following technologies in my development
            process:
          </h1>
          <div className="flex flex-wrap w-5/6 lg:w-4/5 mx-auto justify-center gap-3 lg:gap-10 mt-3 pr-10 lg:pr-0">
            {icons.map((icon, index) => (
              <div className="flex flex-col items-center justify-center text-center" key={index}>
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="w-6 lg:w-16 h-6 lg:h-16 object-contain"
                />
                <div className="hidden lg:block text-center">
                  <h1 className="font-normal lg:font-medium mt-1">{icon.name}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
