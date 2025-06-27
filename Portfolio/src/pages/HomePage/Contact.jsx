import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Contact() {
  const user = {
    Name: "Furkan Soylu",
    Email: "furkansylu97@gmail.com",
    Birthdate: "16/06/1997",
    Country: "Türkiye",
  };

  return (
    <section className="h-svh lg:h-lvh -mt-24 lg:-mt-0">
      <div>
        <SectionTitle title="Say Hello" />
        <div className="flex flex-col h-[80vh] lg:h-full lg:flex-row my-5 lg:my-10 gap-10 lg:gap-0 justify-between items-center">
          <div className="flex flex-col gap-1 w-full lg:w-2/5 h-1/2 lg:h-full order-2 lg:order-1">
            <p className="text-secondary text-sm">{"{"}</p>
            {Object.keys(user).map((key) => (
              <p className="ml-5" key={key}>
                <span className="text-secondary">{key} :</span>{" "}
                <span className="text-secondary">{user[key]}</span>
              </p>
            ))}
            <p className="text-secondary">{"}"}</p>
          </div>
          <div className="w-full lg:w-3/5 object-contain order-1 lg:order-2">
            <DotLottieReact
              src="https://lottie.host/3dee1868-001d-4063-b34e-82922bc882b6/g3YonEn9Oj.lottie"
              loop
              autoplay
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
