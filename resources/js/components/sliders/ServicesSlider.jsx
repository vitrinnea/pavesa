import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

const ServicesSlider = ({ services }) => {
    const options = { align: "start", loop: false, dragFree: true };
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()]);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    const servicesList = typeof services === 'string' ? JSON.parse(services) : services;

    return (
        <div className="relative">
            <div className="embla__viewport overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex">
                    {servicesList && servicesList.map((service, index) => (
                        <div key={index} className="embla__slide flex-[0_0_250px] sm:flex-[0_0_33.33%] md:flex-[0_0_25%] px-2">
                            <div className="service-card bg-white rounded-lg overflow-hidden shadow-md h-full">
                                <div className="relative overflow-hidden">
                                    <div className="service-card-image h-48 w-full">
                                        <img
                                            src={typeof service.image === 'string' ? service.image : `/storage/${service.image}`}
                                            alt={service.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-primary text-white py-2 px-4 text-center">
                                        <h3 className="font-semibold">{service.title}</h3>
                                    </div>
                                </div>
                            </div>
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

export default ServicesSlider;
