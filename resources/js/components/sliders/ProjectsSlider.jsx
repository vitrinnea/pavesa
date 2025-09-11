import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
    usePrevNextButtons,
    PrevButton,
    NextButton,
} from "./EmblaCarouselArrowButtons";

const ProjectsSlider = ({ proyectos }) => {
    // Ajustando las opciones para mostrar múltiples slides a la vez
    const options = {
        loop: true,
        align: "start",
        slidesToScroll: 1,
        containScroll: "trimSnaps",
        dragFree: true,
        // Slides por vista en lugar de slides para desplazar
        slidesPerView: 1,
        breakpoints: {
            "(min-width: 500px)": { slidesPerView: 1 },
            "(min-width: 640px)": { slidesPerView: 2 },
            "(min-width: 1024px)": { slidesPerView: 3 },
        },
    };

    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    return (
        <div className="proyectos-carousel">
            <div className="flex items-start relative">
                {/* Botones a la izquierda - Ajustando z-index y posición */}
                <div className="flex-col gap-2 mt-[60px] relative z-20 mr-8 hidden lg:flex">
                    <PrevButton
                        onClick={onPrevButtonClick}
                        disabled={prevBtnDisabled}
                        className="!bg-[#119D58] !w-12 !h-12 !rounded-none !mb-2"
                        style={{
                            backgroundColor: "#119D58",
                            color: "#fff",
                            borderRadius: "8px",
                        }}
                    />
                    <NextButton
                        onClick={onNextButtonClick}
                        disabled={nextBtnDisabled}
                        className="!bg-[#119D58] !w-12 !h-12 !rounded-none"
                        style={{
                            backgroundColor: "#119D58",
                            color: "#fff",
                            borderRadius: "8px",
                        }}
                    />
                </div>

                {/* Carrusel - Contenedor con ancho limitado y overflow */}
                <div className="embla_event flex-1 overflow-hidden relative z-10">
                    <div className="embla_event__viewport" ref={emblaRef}>
                        <div className="embla_event__container flex">
                            {proyectos &&
                                proyectos.map((proyecto, index) => (
                                    <div
                                        className="embla_event__slide flex-shrink-0 min-w-0"
                                        style={{
                                            flex: "0 0 calc(33.333% - 20px)",
                                            marginRight: "30px",
                                        }}
                                        key={index}
                                    >
                                        <div className="slide-content">
                                            <img
                                                src={'/storage/'+proyecto.image}
                                                alt={proyecto.title}
                                                className="embla__slide__img w-full h-[370px] object-cover "
                                            />
                                            <div className="mt-4">
                                                <h3
                                                    className="font-black font-milligrambold text-[22px] leading-tight mb-1"
                                                    style={{
                                                        color: "#0F433D",
                                                    }}
                                                >
                                                    {proyecto.title}
                                                </h3>
                                                <p className="text-[#222] font-medium font-milligramregular text-[16px]">
                                                    {proyecto.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsSlider;
