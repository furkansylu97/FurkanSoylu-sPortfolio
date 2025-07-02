import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import SectionTitle from "../../components/SectionTitle";
import { experiences } from "../../resources/experiences";

function KnowledgeAndExperiences() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  return (
    <section className="h-svh lg:h-lvh">
      <div>
        <SectionTitle title="Experiences & Education" />
        <div className="flex flex-col lg:flex-row py-0 lg:py-32 gap-5 lg:gap-10">
          <div className="lg:w-1/6">
            <div className="w-100 lg:hidden">
              <Swiper
                slidesPerView={1.4}
                spaceBetween={10}
                freeMode={true}
                centeredSlides={true}
                modules={[FreeMode]}
                centeredSlidesBounds={true}
                className="w-full"
              >
                {experiences.map((experience, index) => (
                  <SwiperSlide key={experience.id}>
                    <div
                      className={`cursor-pointer px-2 py-2 rounded-md transition-all duration-300 ${
                        selectedItemIndex === index
                          ? "bg-tertiary text-black font-bold"
                          : "text-white bg-primary"
                      }`}
                      onClick={() => setSelectedItemIndex(index)}
                    >
                      <span className="text-[10px]">{experience.period}</span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="hidden lg:flex flex-col gap-6 border-l-4 border-cyan-800 h-1/6">
              {experiences.map((experience, index) => (
                <div
                  key={experience.id}
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
          </div>

          <div className="flex flex-col w-full lg:w-4/6 gap-1">
            <h1 className="flex text-quaternary text-[13px] lg:text-xl font-medium">
              {experiences[selectedItemIndex].company}
              <span className="text-slate-700 text-[13px] lg:text-xl font-normal">
                , {experiences[selectedItemIndex].location}
              </span>
            </h1>
            <span className="text-secondary text-[10px] lg:text-xl font-medium">
              {experiences[selectedItemIndex].title}
            </span>
            <div className="mt-1 lg:mt-2 flex flex-col gap-1 lg:gap-2">
              {Array.isArray(experiences[selectedItemIndex].description) ? (
                experiences[selectedItemIndex].description.map(
                  (line, index) => (
                    <p
                      key={index}
                      className="text-black text-[11px] lg:text-base flex items-start gap-2"
                    >
                      <span className="text-secondary">•</span>
                      <span>{line}</span>
                    </p>
                  )
                )
              ) : (
                <p className="text-black text-sm lg:text-base">
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
