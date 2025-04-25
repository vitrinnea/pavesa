import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Autoplay from "embla-carousel-autoplay";

const TestimonialsSlider = ({ testimonials }) => {
    const options = { loop: true, duration: 30 };
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Fade(),
        Autoplay({ playOnInit: true, delay: 5000 }),
    ]);

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

    const testimonialsList = typeof testimonials === 'string' ? JSON.parse(testimonials) : testimonials;

    return (
        <div className="section-padding">
            <h2 className="section-title text-center mb-12">Lo que dicen nuestros clientes</h2>
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {testimonialsList && testimonialsList.map((item, index) => (
                        <div key={index} className="embla__slide">
                            <div className="flex justify-center flex-col">
                                <div className="relative lg:w-[950px] mx-auto mb-[200px] lg:mb-0">
                                    <img
                                        src={typeof item.image === 'string' ? item.image : `/storage/${item.image}`}
                                        alt={`Testimonio de ${item.title}`}
                                        className="lg:w-[700px] rounded-lg mx-auto"
                                    />
                                    <div className="bg-white text-center p-8 rounded-lg shadow-lg w-[95%] lg:w-[400px] h-[250px] mt-[-250px] lg:mt-[-350px] lg:mb-24 relative top-[225px] lg:top-0 right-0 left-[0px] lg:left-[300px] mx-auto">
                                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mt-[-50px]">
                                            "
                                        </div>
                                        <p className="mt-4 text-gray-600">{item.description}</p>
                                        <div className="flex justify-center mt-4">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="embla__controls">
                    <div className="embla__dots flex justify-center mt-6">
                        {scrollSnaps.map((_, index) => (
                            <DotButton
                                key={index}
                                onClick={() => onDotButtonClick(index)}
                                className={`embla__dot w-3 h-3 rounded-full mx-1 ${
                                    index === selectedIndex
                                        ? "bg-primary"
                                        : "bg-gray-300"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsSlider;
