import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import HomeSlider from "../components/sliders/HomeSlider";
import ServicesSlider from "../components/sliders/ServicesSlider";
import ProjectsSlider from "../components/sliders/ProjectsSlider";
import TestimonialsSlider from "../components/sliders/TestimonialsSlider";
import QuoteForm from "../forms/QuoteForm";
import ServicesBanner from "../components/ServicesBanner";
import Services from "../components/Services";

const Homepage = () => {
    const [settings] = useOutletContext();
    const [sliders, setSliders] = useState([]);
    const [services, setServices] = useState([]);
    const [projects, setProjects] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHomeData = async () => {
            try {
                const response = await fetch("/api/home-data");
                const data = await response.json();

                setSliders(data.sliders || []);
                setServices(data.services || []);
                setProjects(data.projects || []);
                setTestimonials(data.testimonials || []);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching home data:", error);
                setLoading(false);
            }
        };

        fetchHomeData();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <div>
            {/* Hero Slider */}
            {sliders && sliders.length > 0 && (
                <section className="relative">
                    {/* Slider principal a pantalla completa */}
                    <div className="h-screen relative">
                        <HomeSlider dataSlider={sliders} />
                    </div>
                </section>
            )}

            {/* Services with Hover Effect */}
            <section className="section-padding">
                <div className="container-custom">
                    <h2 className="section-title text-center mb-12">
                        Nuestras Soluciones
                    </h2>
                    <Services services={services} />
                </div>
            </section>

            {/* Quote Section */}
            <section className="bg-secondary text-white py-16">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/2 mb-8 lg:mb-0">
                            <h2 className="text-4xl font-bold mb-6">
                                COTIZA TU
                                <br />
                                PROYECTO{" "}
                                <span className="text-primary">AHORA</span>
                            </h2>
                            <p className="mb-6">
                                Puedes cotizar tu proyecto de forma rápida y
                                segura
                            </p>
                            <div className="flex items-center mb-4">
                                <div className="bg-primary/20 rounded-full p-2 mr-4">
                                    <svg
                                        className="w-6 h-6 text-primary"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                </div>
                                <span>Atención personalizada</span>
                            </div>
                            <div className="flex items-center">
                                <div className="bg-primary/20 rounded-full p-2 mr-4">
                                    <svg
                                        className="w-6 h-6 text-primary"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                </div>
                                <span>Soluciones para todos los proyectos</span>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="quote-form">
                                <QuoteForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <h2 className="section-title text-center mb-12">
                        Proyectos
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {projects &&
                            projects.slice(0, 3).map((project, index) => (
                                <div key={index} className="grid-gallery-item">
                                    <img
                                        src={
                                            typeof project.image === "string"
                                                ? project.image
                                                : `/storage/${project.image}`
                                        }
                                        alt={project.title}
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="grid-gallery-item-hover">
                                        <h3 className="text-lg font-semibold">
                                            {project.title}
                                        </h3>
                                        {project.subtitle && (
                                            <p className="text-sm">
                                                {project.subtitle}
                                            </p>
                                        )}
                                        {project.location && (
                                            <p className="text-xs mt-1">
                                                {project.location}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <section className="bg-gray-100 py-12">
                <div className="container-custom">
                    <h2 className="section-title text-center mb-12">
                        Nuestros Clientes
                    </h2>
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        <img
                            src="/images/clients/caterpillar.png"
                            alt="Caterpillar"
                            className="client-logo h-12 sm:h-16"
                        />
                        <img
                            src="/images/clients/hitachi.png"
                            alt="Hitachi"
                            className="client-logo h-12 sm:h-16"
                        />
                        <img
                            src="/images/clients/sany.png"
                            alt="Sany"
                            className="client-logo h-12 sm:h-16"
                        />
                        <img
                            src="/images/clients/cnh.png"
                            alt="CNH"
                            className="client-logo h-12 sm:h-16"
                        />
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <div className="flex flex-col lg:flex-row">
                            <div className="lg:w-1/2 lg:pr-8">
                                <h2 className="text-3xl font-bold mb-6 text-secondary">
                                    CUMPLIMOS
                                    <br />
                                    CERTIFICACIONES
                                    <br />
                                    INTERNACIONALES
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-6">
                                    <div className="flex items-start">
                                        <div className="mr-4">
                                            <svg
                                                className="w-8 h-8 text-primary"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">
                                                Diseño personalizado
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="mr-4">
                                            <svg
                                                className="w-8 h-8 text-primary"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">
                                                Soluciones para todos
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <a
                                    href="/contacto"
                                    className="btn-primary mt-8 inline-block"
                                >
                                    CONTÁCTANOS
                                </a>
                            </div>
                            <div className="lg:w-1/2 mt-8 lg:mt-0">
                                <img
                                    src="/images/cement-truck.jpg"
                                    alt="Camión de cemento"
                                    className="rounded-lg shadow-md w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* News Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <h2 className="section-title text-center mb-12">
                        Noticias y Más
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="relative">
                                <img
                                    src="/images/news/news1.jpg"
                                    alt="Noticia 1"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute top-4 left-4 news-date">
                                    <div className="text-lg font-bold">20</div>
                                    <div className="text-xs">MAY</div>
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="font-semibold text-lg mb-2">
                                    Lorem ipsum dolor sit amet
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    Consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore.
                                </p>
                                <a
                                    href="/noticias/lorem-ipsum"
                                    className="text-primary font-semibold text-sm hover:underline"
                                >
                                    Leer más
                                </a>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="relative">
                                <img
                                    src="/images/news/news2.jpg"
                                    alt="Noticia 2"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute top-4 left-4 news-date">
                                    <div className="text-lg font-bold">13</div>
                                    <div className="text-xs">ABR</div>
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="font-semibold text-lg mb-2">
                                    Quis aute irure dolor in
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    Reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla.
                                </p>
                                <a
                                    href="/noticias/quis-aute"
                                    className="text-primary font-semibold text-sm hover:underline"
                                >
                                    Leer más
                                </a>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="relative">
                                <img
                                    src="/images/news/news3.jpg"
                                    alt="Noticia 3"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute top-4 left-4 news-date">
                                    <div className="text-lg font-bold">17</div>
                                    <div className="text-xs">MAR</div>
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="font-semibold text-lg mb-2">
                                    Excepteur sint occaecat cupidatat
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    Non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est.
                                </p>
                                <a
                                    href="/noticias/excepteur-sint"
                                    className="text-primary font-semibold text-sm hover:underline"
                                >
                                    Leer más
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            {testimonials && testimonials.length > 0 && (
                <TestimonialsSlider testimonials={testimonials} />
            )}
        </div>
    );
};

export default Homepage;
