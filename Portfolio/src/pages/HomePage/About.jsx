import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function About() {
  return (
    <section>
      <div>
        <SectionTitle title="About Me" />
        <div className="flex w-full">
          <div className="h-[50vh] w-1/2 pr-20">
            <DotLottieReact
              src="https://lottie.host/50888e59-bf72-47b5-8a35-8f6f9b3e691c/5Vk5cWtcEP.lottie"
              loop
              autoplay
            />
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default About;
