// filepath: /c:/laragon/www/cajamarca/resources/js/components/HomeSlider.js
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";

function cardGallery({ dataSlider }) {
    return (
        <div>
            {JSON.parse(dataSlider).map((item, index) => (
                <div key={index}>
                    <div className="embla_event__slide__img">
                        <img
                            id="background"
                            src={`/storage/${item}`}
                            alt="Laravel background"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default cardGallery;
