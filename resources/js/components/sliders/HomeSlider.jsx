// resources/js/components/sliders/HomeSlider.jsx
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import { Link } from "react-router-dom";

const HomeSlider = ({ dataSlider }) => {
    const options = { loop: true, duration: 30 };
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Fade(),
        Autoplay({ playOnInit: true, delay: 5000 }),
    ]);

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);

    const sliderData =
        typeof dataSlider === "string" ? JSON.parse(dataSlider) : dataSlider;

    return (
        <div className="embla h-screen relative" ref={emblaRef}>
            <div className="embla__container h-full">
                {sliderData &&
                    sliderData.map((item, index) => (
                        <div
                            key={index}
                            className="embla__slide relative w-full h-full"
                        >
                            <img
                                className="w-full h-full object-cover"
                                src={
                                    typeof item.image === "string"
                                        ? item.image
                                        : `/storage/${item.image}`
                                }
                                alt={item.title || "Slide imagen"}
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                            <div className="absolute left-0 w-full z-10 top-1/2 transform -translate-y-1/2">
                                <div className="container mx-auto px-6 lg:px-10">
                                    <div className="max-w-2xl">
                                        <div
                                            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-none font-milligrambold"
                                            dangerouslySetInnerHTML={{ __html: item.title }}
                                        ></div>
                                        <Link
                                            to="/nosotros"
                                            className="inline-block bg-[#11312C] text-white font-medium px-8 py-3 rounded-full hover:bg-primary-600 transition-colors"
                                        >
                                            <span className="mr-2 font-integralcfheavy">
                                                CONOCE MAS
                                            </span>
                                            <span className="inline-block bg-[#2C9C47] rounded-full p-1">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-10 inline text-[#11312C] text-2xl"
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            <div className="embla__controls absolute bottom-0 left-0 w-full">
                <div className="embla__dots flex justify-center ">
                    {sliderData &&
                        sliderData.map((item, index) => {
                            const isActive = selectedIndex === index;
                            return (
                                <DotButton
                                    key={index}
                                    onClick={() => onDotButtonClick(index)}
                                    className={`
                                        flex items-center px-10 py-5 transition-all duration-200
                                        ${isActive
                                            ? 'bg-[#2C9C47] shadow-lg'
                                            : 'bg-[#11312C] opacity-80 hover:opacity-100'}
                                    `}
                                    style={{ minWidth: 150 }}
                                >
                                    <img
                                        src={
                                            typeof item.image === "string"
                                                ? item.image
                                                : `/storage/${item.image}`
                                        }
                                        alt={item.title || "Slide imagen"}
                                        className="h-8 object-cover rounded-full w-20"
                                    />
                                    <span className={`
                                        ml-4 tracking-wide text-base font-bold
                                        ${isActive ? 'text-white' : 'text-white'}
                                        text-left
                                    `}>
                                        {item.subtitle}
                                    </span>
                                </DotButton>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default HomeSlider;
