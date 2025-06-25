import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { experiences } from "../../resources/experiences";

function KnowledgeAndExperiences() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  return (
    <section className="h-svh lg:h-lvh">
      <div>
        <SectionTitle title="Experiences" />
        <div className="flex py-32 gap-10 ">
          <div className="flex flex-col gap-6 border-l-4 border-cyan-800 w-1/6 h-1/6">
            {experiences.map((experience, index) => (
              <div
                className="cursor-pointer"
                onClick={() => {
                  setSelectedItemIndex(index);
                }}
              >
                <h1
                  className={`text-xl px-5 ${
                    selectedItemIndex === index
                      ? "text-secondary border-secondary border-l-4 -ml-[4px] bg-[#155e75] py-3"
                      : "text-white"
                  }`}
                >
                  {experience.period}
                </h1>
              </div>
            ))}
          </div>
          <div className="flex flex-col w-4/6 gap-1">
            <h1 className="flex text-quaternary text-xl font-medium">
              {experiences[selectedItemIndex].company}
              <span className="text-slate-700 text-xl font-normal">
                , {experiences[selectedItemIndex].location}
              </span>
            </h1>
            <span className="text-secondary text-xl font-medium">
              {experiences[selectedItemIndex].title}
            </span>
            <div className="mt-2 flex flex-col gap-2">
              {Array.isArray(experiences[selectedItemIndex].description) ? (
                experiences[selectedItemIndex].description.map((line, index) => (
                  <p
                    key={index}
                    className="text-black text-base flex items-start gap-2"
                  >
                    <span className="text-secondary">•</span>
                    <span>{line}</span>
                  </p>
                ))
              ) : (
                <p className="text-black text-base">
                  {experiences[selectedItemIndex].description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KnowledgeAndExperiences;
