import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import icons from "../../components/Icons";

function About() {
  return (
    <section>
      <div>
        <SectionTitle title="About Me" />
        <div className="flex w-full">
          <div className="h-[45vh] w-1/2 pr-52">
            <DotLottieReact
              src="https://lottie.host/50888e59-bf72-47b5-8a35-8f6f9b3e691c/5Vk5cWtcEP.lottie"
              loop
              autoplay
            />
          </div>
          <div className="flex flex-col w-1/2 items-center justify-center px-4 mx-5 gap-4 border-solid border-2 border-secondary rounded-2xl italic">
            <p className="text-primary text-base font-medium">
              My name is Furkan Soylu, and I graduated from the Department of
              Mechatronics Engineering at Katip Çelebi University, where the
              language of instruction is English. Although my background is in
              engineering, I have developed a strong passion for web development
              and continuously improve my skills by working on various projects.
              I am also interested in UI and UX design, focusing on creating
              user-friendly and visually appealing interfaces while keeping up
              with the latest technology trends.
            </p>
            <p className="text-primary text-base font-medium">
              Outside of my professional life, I enjoy traveling, listening to
              music, camping, and attending theater performances. These
              activities inspire my creativity and help me approach my work with
              a fresh perspective. Overall, I am a dedicated and innovative
              individual committed to learning and growing in the technology
              field.
            </p>
          </div>
        </div>
        <div className="my-3 py-3">
          <h1 className="text-white text-xl my-3 ">
            I’ve been focusing on the following technologies in my development
            process:
          </h1>
          <div className="flex flex-wrap w-4/5 mx-auto justify-center gap-10 mt-3">
            {icons.map((icon, index) => (
              <div className="flex flex-col items-center justify-center text-center" key={index}>
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="w-16 h-16 object-contain"
                />
                <div className="text-center">
                  <h1 className="font-medium mt-1">{icon.name}</h1>
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
