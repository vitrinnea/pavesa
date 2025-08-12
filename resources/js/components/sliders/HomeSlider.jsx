// resources/js/components/sliders/HomeSlider.jsx
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import {
    usePrevNextButtons,
    PrevButton,
    NextButton,
} from "./EmblaCarouselArrowButtonsHome";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import { Link } from "react-router-dom";

const HomeSlider = ({ dataSlider }) => {
    const options = { loop: true, duration: 30 };
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Fade(),
        Autoplay({ playOnInit: true, delay: 6000, stopOnInteraction: false }),
    ]);

    const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi);
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    const sliderData =
        typeof dataSlider === "string" ? JSON.parse(dataSlider) : dataSlider;

    return (
        <div
            className="embla relative h-[60vh] sm:h-[70vh] lg:h-screen w-full overflow-hidden"
            ref={emblaRef}
        >
            <div className="embla__container h-full">
                {sliderData?.map((item, index) => (
                    <div
                        key={index}
                        className="embla__slide relative w-full h-full flex-shrink-0"
                    >
                        <img
                            className="w-full h-full object-cover"
                            src={
                                typeof item.image === "string"
                                    ? item.image
                                    : `/storage/${item.image}`
                            }
                            alt={item.title || `Slide ${index + 1}`}
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full px-5 sm:px-8 md:px-12 max-w-7xl mx-auto">
                                <div className="max-w-xl md:max-w-2xl">
                                    <h2
                                        className="font-milligrambold leading-tight text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight"
                                        dangerouslySetInnerHTML={{
                                            __html: item.description,
                                        }}
                                    />
                                    {item.button_text?.trim() && (
                                        <Link
                                            to={item.button_link || "#" }
                                            className="inline-flex items-center gap-2 bg-[#11312C] hover:bg-[#2C9C47] transition-colors text-white font-integralcfheavy tracking-wide rounded-full px-6 py-3 text-sm sm:text-base shadow-lg"
                                        >
                                            <span
                                                className="uppercase"
                                                dangerouslySetInnerHTML={{
                                                    __html: item.button_text,
                                                }}
                                            />
                                            <span className="flex items-center justify-center bg-[#2C9C47] group-hover:bg-[#11312C] transition-colors rounded-full p-1">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5 text-[#11312C] group-hover:text-[#2C9C47] transition-colors"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dots / Thumbnails */}
            <div className="absolute bottom-0 left-0 w-full">
                <div className="flex items-stretch justify-between gap-2 px-2 sm:px-4 pb-2">
                    <div className="flex-1 overflow-x-auto no-scrollbar">
                        <div className="flex gap-2 sm:gap-3 min-w-max">
                            {sliderData?.map((item, index) => {
                                const active = selectedIndex === index;
                                return (
                                    <DotButton
                                        key={index}
                                        onClick={() =>
                                            onDotButtonClick(index)
                                        }
                                        className={`flex items-center gap-2 sm:gap-3 rounded-2xl transition-all duration-200 px-3 py-2 sm:px-5 sm:py-4 backdrop-blur
                                            $ {
                                                active
                                                    ? "bg-[#2C9C47] shadow-lg"
                                                    : "bg-[#11312C]/80 hover:bg-[#11312C]"
                                            }`}
                                    >
                                        <img
                                            src={
                                                typeof item.image === "string"
                                                    ? item.image
                                                    : `/storage/${item.image}`
                                            }
                                            alt={item.title || "Miniatura"}
                                            className="h-8 w-14 sm:w-20 object-cover rounded-md"
                                            loading="lazy"
                                        />
                                        <span
                                            className="text-white text-xs sm:text-sm font-bold leading-tight line-clamp-2"
                                            dangerouslySetInnerHTML={{
                                                __html: item.subtitle || "",
                                            }}
                                        />
                                    </DotButton>
                                );
                            })}
                        </div>
                    </div>
                    {/* Arrows (ocultas en móvil) */}
                    <div className="hidden md:flex items-center gap-2">
                        <PrevButton
                            onClick={onPrevButtonClick}
                            disabled={prevBtnDisabled}
                            className="!bg-[#11312C] hover:!bg-[#2C9C47] !w-12 h-12 flex items-center justify-center rounded-xl text-white"
                        />
                        <NextButton
                            onClick={onNextButtonClick}
                            disabled={nextBtnDisabled}
                            className="!bg-[#11312C] hover:!bg-[#2C9C47] !w-12 h-12 flex items-center justify-center rounded-xl text-white"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSlider;
