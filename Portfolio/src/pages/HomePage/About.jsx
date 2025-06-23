import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function About() {
  return (
    <div>
      <SectionTitle title="About Me" />
      <div className="flex h-[50vh]">
        <DotLottieReact
          src="https://lottie.host/50888e59-bf72-47b5-8a35-8f6f9b3e691c/5Vk5cWtcEP.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  );
}

export default About;
