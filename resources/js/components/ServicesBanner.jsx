// resources/js/components/ServicesBanner.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ServicesBanner = () => {
    const [activeService, setActiveService] = useState(1); // Por defecto, Mezcla Asfáltica activa

    const services = [
        {
            id: 0,
            title: 'Concreto',
            image: '/images/services/concreto-thumb.jpg',
            url: '/concreto'
        },
        {
            id: 1,
            title: 'Mezcla Asfáltica',
            image: '/images/services/asfalto-thumb.jpg',
            url: '/asfalto'
        },
        {
            id: 2,
            title: 'Terracería',
            image: '/images/services/terraceria-thumb.jpg',
            url: '/terraceria'
        }
    ];

    const handlePrev = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setActiveService(prev => prev === 0 ? services.length - 1 : prev - 1);
    };

    const handleNext = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setActiveService(prev => prev === services.length - 1 ? 0 : prev + 1);
    };

    return (
        <div className="services-banner w-full">
            <div className="flex w-full h-20">
                {services.map((service) => (
                    <Link
                        key={service.id}
                        to={service.url}
                        className={`
                            flex-1 h-full flex items-center relative
                            ${activeService === service.id ? 'service-item-active' : 'service-item-inactive'}
                            hover:bg-primary transition-colors duration-300
                        `}
                    >
                        <div className="flex items-center h-full px-6">
                            <div className="service-thumbnail">
                                <img
                                    src={service.image || "/images/placeholder.jpg"}
                                    alt={service.title}
                                />
                            </div>
                            <span className="service-title">{service.title}</span>
                        </div>

                        {activeService === service.id && (
                            <div className="service-nav-buttons">
                                <button
                                    onClick={handlePrev}
                                    className="service-nav-button"
                                    aria-label="Anterior servicio"
                                >
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="service-nav-button"
                                    aria-label="Siguiente servicio"
                                >
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ServicesBanner;
