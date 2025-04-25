import React from "react";

import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

const ProjectsSlider = ({ projects }) => {
    const options = { align: "start", loop: false };
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()]);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    const projectsList = typeof projects === 'string' ? JSON.parse(projects) : projects;

    return (
        <div className="relative">
            <div className="embla__viewport overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex">
                    {projectsList && projectsList.map((project, index) => (
                        <div key={index} className="embla__slide flex-[0_0_300px] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] px-2">
                            <a href={`/proyectos/${project.slug}`} className="block h-full">
                                <div className="grid-gallery-item h-60 mb-4">
                                    <img
                                        src={typeof project.image === 'string' ? project.image : `/storage/${project.image}`}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="grid-gallery-item-hover">
                                        <h3 className="text-lg font-semibold">{project.title}</h3>
                                        {project.subtitle && <p className="text-sm">{project.subtitle}</p>}
                                        {project.location && <p className="text-xs mt-1">{project.location}</p>}
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className="embla__buttons flex justify-between absolute top-1/2 left-0 right-0 transform -translate-y-1/2 px-4 pointer-events-none">
                <PrevButton
                    onClick={onPrevButtonClick}
                    disabled={prevBtnDisabled}
                    className="pointer-events-auto"
                />
                <NextButton
                    onClick={onNextButtonClick}
                    disabled={nextBtnDisabled}
                    className="pointer-events-auto"
                />
            </div>
        </div>
    );
};

export default ProjectsSlider;
