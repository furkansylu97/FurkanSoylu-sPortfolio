import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../resources/projects";

function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  return (
    <section className="h-svh lg:h-lvh -mt-20 lg:-mt-0">
      <div>
        <SectionTitle title="Projects" />
        <div className="flex flex-col lg:flex-row py-8 lg:py-24 gap-8 lg:gap-10 ">
          <div className="lg:hidden w-full">
            <Swiper
              slidesPerView={1.4}
              spaceBetween={10}
              freeMode={true}
              centeredSlides={true}
              modules={[FreeMode]}
              centeredSlidesBounds={true}
              className="w-full"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={project.id}>
                  <div
                    className={`cursor-pointer px-2 py-2 rounded-md transition-all duration-300 ${
                      selectedItemIndex === index
                        ? "bg-tertiary text-black font-bold"
                        : "text-white bg-primary"
                    }`}
                    onClick={() => setSelectedItemIndex(index)}
                  >
                    <span className="text-[10px]">{project.title}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="hidden lg:flex flex-col gap-3 lg:gap-6 border-l-2 lg:border-l-4 border-cyan-800 w-1/3 lg:w-1/6 h-1/3 lg:h-1/6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="cursor-pointer"
                onClick={() => {
                  setSelectedItemIndex(index);
                }}
              >
                <h1
                  className={`text-[8px] lg:text-xl px-2 lg:px-5 ${
                    selectedItemIndex === index
                      ? "text-secondary border-secondary border-l-2 lg:border-l-4 -ml-[4px] bg-[#155e75] py-2 lg:py-3"
                      : "text-white"
                  }`}
                >
                  {project.title}
                </h1>
              </div>
            ))}
          </div>

          <div className="flex flex-col h-[40vh] lg:h-full w-5/6 px-2 lg:px-10 gap-3 lg:gap-0">
            <h1 className="flex text-secondary text-[13px] lg:text-xl font-medium">
              {projects[selectedItemIndex].title}
            </h1>
            <div className="my-2">
              <img
                className=" w-5/6 lg:w-3/5 h-auto rounded-lg"
                src={projects[selectedItemIndex].src}
                alt={projects[selectedItemIndex].title}
              />
            </div>
            <div className="mt-1 lg:mt-2 flex flex-col gap-1 lg:gap-2 w-4/5">
              <p className="text-black text-sm lg:text-base lg:font-semibold">
                {projects[selectedItemIndex].description}
              </p>
              <div>
                <button
                  className="border lg:border-2 border-secondary text-secondary text-xs lg:text-xl font-normal lg:font-medium mt-2 lg:mt-3 px-3 lg:px-4 py-2 rounded"
                  onClick={() =>
                    window.open(projects[selectedItemIndex].link, "_blank")
                  }
                >
                  Go to Page
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
