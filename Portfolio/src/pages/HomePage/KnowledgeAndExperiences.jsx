import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { experiences } from "../../resources/experiences";

function KnowledgeAndExperiences() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  return (
    <section className="h-svh lg:h-lvh">
      <div>
        <SectionTitle title="Experiences" />
        <div className="flex">
          <div className="flex flex-col gap-5">
            {experiences.map((experience, index) => (
              <div className="cursor-pointer"
                onClick={() => {
                  setSelectedItemIndex(index);
                }}
              >
                <h1
                  className={`text-xl ${
                    selectedItemIndex === index
                      ? "text-secondary border-secondary"
                      : "text-white"
                  }`}
                >
                  {experience.period}
                </h1>
              </div>
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default KnowledgeAndExperiences;
