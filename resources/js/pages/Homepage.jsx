import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import HomeSlider from "../components/sliders/HomeSlider";
import ServicesSlider from "../components/sliders/ServicesSlider";
import ProjectsSlider from "../components/sliders/ProjectsSlider";
import TestimonialsSlider from "../components/sliders/TestimonialsSlider";
import QuoteForm from "../forms/QuoteForm";
import ServicesBanner from "../components/ServicesBanner";
import Services from "../components/Services";


const proyectosData = [
  {
    titulo: "Briko, Nuevo Cuscatlán",
    descripcion: "Obra Gris",
    imagen: "/images/home/proyecto1.png" // Ajusta esta ruta a tus imágenes
  },
  {
    titulo: "ByPass, Usulután",
    descripcion: "Suministro y colocación de mezcla asfáltica",
    imagen: "/images/home/proyecto2.png"
  },
  {
    titulo: "Carretera a Comalapa",
    descripcion: "Lanzado de concreto (Shotcrete)",
    imagen: "/images/home/proyecto2.png"
  },
  {
    titulo: "Briko, Nuevo Cuscatlán",
    descripcion: "Obra Gris",
    imagen: "/images/home/proyecto1.png" // Ajusta esta ruta a tus imágenes
  },
  {
    titulo: "ByPass, Usulután",
    descripcion: "Suministro y colocación de mezcla asfáltica",
    imagen: "/images/home/proyecto2.png"
  },
  {
    titulo: "Carretera a Comalapa",
    descripcion: "Lanzado de concreto (Shotcrete)",
    imagen: "/images/home/proyecto2.png"
  },
  // Puedes agregar más proyectos según necesites
];

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
            {/* Presentation pavesa */}
            <section className="bg-[url(/images/home/background-linea.png)] bg-[length:100%_70%] bg-top bg-no-repeat">
                <div className="container mx-auto pt-28 lg:px-4 md:px-3">
                    <div className="flex w-full h-[528px]">
                        <div
                            className="group flex-1 transition-all duration-300 hover:flex-[2] bg-cover bg-center relative"
                            style={{
                                backgroundImage:
                                    "url('/images/home/camion-cemento-pavesa.png')",
                            }}
                        >
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#2C9C47] text-white p-3 opacity-0 group-hover:opacity-100 transition duration-300 font-milligrambold">
                                Suministro y bombeo de concreto premezclado en
                                El Salvador
                            </div>
                        </div>

                        <div
                            className="group flex-1 transition-all duration-300 hover:flex-[2] bg-cover bg-center relative"
                            style={{
                                backgroundImage:
                                    "url('/images/home/asfalto-pavesa.png')",
                            }}
                        >
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#2C9C47] text-white p-3 opacity-0 group-hover:opacity-100 transition duration-300 font-milligrambold">
                                Suministro y bombeo de concreto premezclado en
                                El Salvador
                            </div>
                        </div>

                        <div
                            className="group flex-1 transition-all duration-300 hover:flex-[2] bg-cover bg-center relative"
                            style={{
                                backgroundImage:
                                    "url('/images/home/concreto-pavesa.png')",
                            }}
                        >
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#2C9C47] text-white p-3 opacity-0 group-hover:opacity-100 transition duration-300 font-milligrambold">
                                Suministro y bombeo de concreto premezclado en
                                El Salvador
                            </div>
                        </div>

                        <div
                            className="group flex-1 transition-all duration-300 hover:flex-[2] bg-cover bg-center relative"
                            style={{
                                backgroundImage:
                                    "url('/images/home/escavadora-pavesa.png')",
                            }}
                        >
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#2C9C47] text-white p-3 opacity-0 group-hover:opacity-100 transition duration-300 font-milligrambold">
                                Suministro y bombeo de concreto premezclado en
                                El Salvador
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto lg:px-4 md:px-3">
                    <div className="flex py-5 px-10 bg-[rgba(14,42,38,0.79)] justify-around items-center">
                        <p className="text-white font-milligrambold text-2xl max-w-md">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit,
                        </p>
                        <button className="bg-[#2C9C47] py-2 px-4 rounded-3xl text-white transition-all duration-300 transform hover:scale-105 hover:bg-[#2C9C47]/90">
                            <span className="inline-block font-integralcfheavy uppercase">COTIZA ahora</span>
                            <svg width="42" height="27" className="inline-block ml-2" viewBox="0 0 42 27" fill="none" xmlns="http://www.w3.org/2000/svg" > <rect x="0.0341797" y="0.914551" width="41.0684" height="25.1709" rx="12.5855" fill="#F0E92B" /> <g clipPath="url(#clip0_6173_3)"> <path d="M27.8026 14.4311C27.6465 14.4311 27.4875 14.4311 27.3313 14.4311C21.2604 14.4311 17.9022 14.4311 11.8313 14.4336C11.6553 14.4336 11.4792 14.4412 11.3032 14.4235C10.758 14.3702 10.3832 13.9744 10.3917 13.4797C10.4002 13.0053 10.7778 12.6298 11.3088 12.5816C11.482 12.5664 11.6609 12.5714 11.837 12.5714C17.8908 12.5714 21.2377 12.574 27.2915 12.5714C27.4619 12.5714 27.6379 12.6095 27.9389 12.475C27.3767 12.0108 26.8457 11.5896 26.3375 11.1431C25.1051 10.0598 23.8841 8.9638 22.6603 7.87288C22.2173 7.47711 22.1918 6.86315 22.5978 6.49021C23.0124 6.10965 23.6967 6.11219 24.1794 6.53334C25.1335 7.36548 26.0705 8.21538 27.0133 9.05767C28.3421 10.2425 29.671 11.4273 30.9942 12.6146C31.7098 13.2564 31.7041 13.7486 30.98 14.3956C28.7823 16.3592 26.5873 18.3254 24.3896 20.2865C24.2646 20.3982 24.1425 20.5149 23.9977 20.6011C23.5263 20.8878 22.9017 20.8269 22.5581 20.4667C22.1946 20.0886 22.2287 19.5305 22.6518 19.1525C24.276 17.6962 25.9059 16.2425 27.5357 14.7913C27.6379 14.7 27.7742 14.6417 27.8963 14.5655C27.8651 14.5173 27.8339 14.4717 27.8026 14.4235V14.4311Z" fill="#2C9C47" /> </g> <defs> <clipPath id="clip0_6173_3"> <rect width="23.8462" height="14.5726" fill="white" transform="translate(9.30762 6.21362)" /> </clipPath> </defs> </svg>
                        </button>
                    </div>
                </div>
                <div className="container mx-auto pt-32">
                    <h2 className="text-center font-bold text-5xl text-white font-integralcfheavy">
                        COTIZA TU PROYECTO <br />
                        <span className="text-[#2C9C47] font-integralcfheavy">AHORA</span>
                    </h2>
                </div>
                <div className="container mx-auto pt-20">
                    <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
                        <div className="lg:w-1/2 px-5">
                            <img
                                src="/images/home/arquitectos-pavesa-1.png"
                                alt="Arquitectos Pavesa"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="lg:w-1/2 p-5">
                            <form action="">
                                <h2 className="text-white max-w-md text-4xl px-2 py-1 font-milligramregular">
                                    <span className="bg-transparent">Puedes cotizar tu proyecto</span><br /><span className="bg-[#2C9C47] px-2">de forma rápida y segura</span>
                                </h2>
                                <div className="flex flex-wrap mt-10">
                                    <div className="w-full lg:w-1/2 pr-2">
                                        <input type="text" className="focus:outline-none focus:ring-2 focus:ring-[#2C9C47] rounded-lg py-2 px-4 w-full bg-[#D9D9D9] text-[#11312C] placeholder-[#11312C]" placeholder="Nombre completo:" />
                                    </div>
                                    <div className="w-full lg:w-1/2">
                                        <input type="text" className="focus:outline-none focus:ring-2 focus:ring-[#2C9C47] rounded-lg py-2 px-4 w-full bg-[#D9D9D9] text-[#11312C] placeholder-[#11312C]" placeholder="Correo electrónico:" />
                                    </div>
                                </div>
                                <div className="flex flex-wrap mt-4">
                                    <div className="w-full lg:w-1/2 pr-2">
                                        <input type="text" className="focus:outline-none focus:ring-2 focus:ring-[#2C9C47] rounded-lg py-2 px-4 w-full bg-[#D9D9D9] text-[#11312C] placeholder-[#11312C]" placeholder="Número telefónico:" />
                                    </div>
                                    <div className="w-full lg:w-1/2">
                                        <input type="text" className="focus:outline-none focus:ring-2 focus:ring-[#2C9C47] rounded-lg py-2 px-4 w-full bg-[#D9D9D9] text-[#11312C] placeholder-[#11312C]" placeholder="Ubicación de proyecto:" />
                                    </div>
                                </div>
                                <div className="w-full lg:w-100 mt-4">
                                    <input type="text" className="focus:outline-none focus:ring-2 focus:ring-[#2C9C47] rounded-lg py-2 px-4 w-full bg-[#D9D9D9] text-[#11312C] placeholder-[#11312C]" placeholder="Especificación de proyecto:" />
                                </div>
                                <div className="w-full lg:w-100 mt-4">
                                    <textarea className="focus:outline-none focus:ring-2 focus:ring-[#2C9C47] rounded-lg py-2 px-4 w-full bg-[#D9D9D9] text-[#11312C] placeholder-[#11312C]" placeholder="Mensaje adicional:" rows={4} />
                                </div>
                                <div className="w-full lg:w-100 mt-2">
                                    <button className="py-3 px-7 rounded-lg bg-[#2C9C47] font-integralcfheavy text-white">ENVIAR</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto pt-40">
                    <h2 className="section-title text-center mb-12 font-integralcfheavy text-5xl text-[#11312C]">
                        Nuestras Soluciones
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 px-2">
                        <div className="col-span-1 h-[437px] bg-[url(/images/home/asfalto.png)] bg-cover relative group">
                            <div className="absolute bottom-0 left-0 w-full pb-8 text-center">
                                <h4 className="text-white font-integralcfheavy text-2xl mb-2">ASFALTO</h4>
                                <a href="#" className="text-white py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">CONOCE MÁS <svg className="inline-block w-[12px]" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.533 5.64143C11.4295 5.64143 11.3242 5.64143 11.2208 5.64143C7.19947 5.64143 4.97498 5.64143 0.953687 5.64317C0.837074 5.64317 0.72046 5.6484 0.603846 5.63621C0.24272 5.59965 -0.00555496 5.32803 8.76438e-05 4.98851C0.00573025 4.66292 0.255886 4.40523 0.607608 4.37215C0.722341 4.3617 0.840835 4.36518 0.957449 4.36518C4.96746 4.36518 7.18442 4.36692 11.1944 4.36518C11.3073 4.36518 11.4239 4.3913 11.6233 4.29902C11.2509 3.98039 10.8991 3.69137 10.5625 3.38493C9.74617 2.64146 8.93739 1.88929 8.12674 1.14061C7.83332 0.868992 7.81639 0.447638 8.08536 0.191692C8.35997 -0.0694778 8.81325 -0.0677367 9.133 0.221291C9.76497 0.792382 10.3857 1.37566 11.0101 1.95372C11.8904 2.76682 12.7706 3.57993 13.6471 4.39478C14.1211 4.83529 14.1173 5.17307 13.6377 5.61706C12.1819 6.96469 10.728 8.31407 9.27219 9.65996C9.18943 9.73657 9.10855 9.81666 9.01263 9.87586C8.7004 10.0726 8.28661 10.0308 8.05903 9.78358C7.81828 9.52415 7.84085 9.14111 8.1211 8.88168C9.19695 7.88227 10.2766 6.8846 11.3562 5.88867C11.4239 5.82599 11.5142 5.78595 11.5951 5.73371C11.5744 5.70063 11.5537 5.66929 11.533 5.63621V5.64143Z" fill="white"/> </svg>
                                </a>
                            </div>
                        </div>
                        <div className="col-span-1 h-[437px] bg-[url(/images/home/concreto.png)] bg-cover relative group">
                            <div className="absolute bottom-0 left-0 w-full pb-8 text-center">
                                <h4 className="text-white font-integralcfheavy text-2xl mb-2">CONCRETO</h4>
                                <a href="#" className="text-white py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">CONOCE MÁS <svg className="inline-block w-[12px]" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.533 5.64143C11.4295 5.64143 11.3242 5.64143 11.2208 5.64143C7.19947 5.64143 4.97498 5.64143 0.953687 5.64317C0.837074 5.64317 0.72046 5.6484 0.603846 5.63621C0.24272 5.59965 -0.00555496 5.32803 8.76438e-05 4.98851C0.00573025 4.66292 0.255886 4.40523 0.607608 4.37215C0.722341 4.3617 0.840835 4.36518 0.957449 4.36518C4.96746 4.36518 7.18442 4.36692 11.1944 4.36518C11.3073 4.36518 11.4239 4.3913 11.6233 4.29902C11.2509 3.98039 10.8991 3.69137 10.5625 3.38493C9.74617 2.64146 8.93739 1.88929 8.12674 1.14061C7.83332 0.868992 7.81639 0.447638 8.08536 0.191692C8.35997 -0.0694778 8.81325 -0.0677367 9.133 0.221291C9.76497 0.792382 10.3857 1.37566 11.0101 1.95372C11.8904 2.76682 12.7706 3.57993 13.6471 4.39478C14.1211 4.83529 14.1173 5.17307 13.6377 5.61706C12.1819 6.96469 10.728 8.31407 9.27219 9.65996C9.18943 9.73657 9.10855 9.81666 9.01263 9.87586C8.7004 10.0726 8.28661 10.0308 8.05903 9.78358C7.81828 9.52415 7.84085 9.14111 8.1211 8.88168C9.19695 7.88227 10.2766 6.8846 11.3562 5.88867C11.4239 5.82599 11.5142 5.78595 11.5951 5.73371C11.5744 5.70063 11.5537 5.66929 11.533 5.63621V5.64143Z" fill="white"/> </svg>
                                </a>
                            </div>
                        </div>
                        <div className="col-span-1 h-[437px] bg-[url(/images/home/terraceria.png)] bg-cover relative group">
                            <div className="absolute bottom-0 left-0 w-full pb-8 text-center">
                                <h4 className="text-white font-integralcfheavy text-2xl mb-2">TERRACERIA</h4>
                                <a href="#" className="text-white py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">CONOCE MÁS <svg className="inline-block w-[12px]" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.533 5.64143C11.4295 5.64143 11.3242 5.64143 11.2208 5.64143C7.19947 5.64143 4.97498 5.64143 0.953687 5.64317C0.837074 5.64317 0.72046 5.6484 0.603846 5.63621C0.24272 5.59965 -0.00555496 5.32803 8.76438e-05 4.98851C0.00573025 4.66292 0.255886 4.40523 0.607608 4.37215C0.722341 4.3617 0.840835 4.36518 0.957449 4.36518C4.96746 4.36518 7.18442 4.36692 11.1944 4.36518C11.3073 4.36518 11.4239 4.3913 11.6233 4.29902C11.2509 3.98039 10.8991 3.69137 10.5625 3.38493C9.74617 2.64146 8.93739 1.88929 8.12674 1.14061C7.83332 0.868992 7.81639 0.447638 8.08536 0.191692C8.35997 -0.0694778 8.81325 -0.0677367 9.133 0.221291C9.76497 0.792382 10.3857 1.37566 11.0101 1.95372C11.8904 2.76682 12.7706 3.57993 13.6471 4.39478C14.1211 4.83529 14.1173 5.17307 13.6377 5.61706C12.1819 6.96469 10.728 8.31407 9.27219 9.65996C9.18943 9.73657 9.10855 9.81666 9.01263 9.87586C8.7004 10.0726 8.28661 10.0308 8.05903 9.78358C7.81828 9.52415 7.84085 9.14111 8.1211 8.88168C9.19695 7.88227 10.2766 6.8846 11.3562 5.88867C11.4239 5.82599 11.5142 5.78595 11.5951 5.73371C11.5744 5.70063 11.5537 5.66929 11.533 5.63621V5.64143Z" fill="white"/> </svg>
                                </a>
                            </div>
                        </div>
                        <div className="col-span-1 h-[437px] bg-[url(/images/home/obra-gris.png)] bg-cover relative group">
                            <div className="absolute bottom-0 left-0 w-full pb-8 text-center">
                                <h4 className="text-white font-integralcfheavy text-2xl mb-2">OBRA GRIS</h4>
                                <a href="#" className="text-white py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">CONOCE MÁS <svg className="inline-block w-[12px]" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.533 5.64143C11.4295 5.64143 11.3242 5.64143 11.2208 5.64143C7.19947 5.64143 4.97498 5.64143 0.953687 5.64317C0.837074 5.64317 0.72046 5.6484 0.603846 5.63621C0.24272 5.59965 -0.00555496 5.32803 8.76438e-05 4.98851C0.00573025 4.66292 0.255886 4.40523 0.607608 4.37215C0.722341 4.3617 0.840835 4.36518 0.957449 4.36518C4.96746 4.36518 7.18442 4.36692 11.1944 4.36518C11.3073 4.36518 11.4239 4.3913 11.6233 4.29902C11.2509 3.98039 10.8991 3.69137 10.5625 3.38493C9.74617 2.64146 8.93739 1.88929 8.12674 1.14061C7.83332 0.868992 7.81639 0.447638 8.08536 0.191692C8.35997 -0.0694778 8.81325 -0.0677367 9.133 0.221291C9.76497 0.792382 10.3857 1.37566 11.0101 1.95372C11.8904 2.76682 12.7706 3.57993 13.6471 4.39478C14.1211 4.83529 14.1173 5.17307 13.6377 5.61706C12.1819 6.96469 10.728 8.31407 9.27219 9.65996C9.18943 9.73657 9.10855 9.81666 9.01263 9.87586C8.7004 10.0726 8.28661 10.0308 8.05903 9.78358C7.81828 9.52415 7.84085 9.14111 8.1211 8.88168C9.19695 7.88227 10.2766 6.8846 11.3562 5.88867C11.4239 5.82599 11.5142 5.78595 11.5951 5.73371C11.5744 5.70063 11.5537 5.66929 11.533 5.63621V5.64143Z" fill="white"/> </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto pt-32 pb-32">
                    <h2 className="section-title mb-12 font-integralcfheavy text-5xl text-[#11312C]">
                        PROYECTOS
                    </h2>
                    <ProjectsSlider proyectos={proyectosData} />
                </div>
            </section>
            <section className="border-y border-y-[#F16623] border-solid py-8">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 items-center">
                        <div className="col-span-1 lg:px-10">
                            <h4 className="text-[#11312C] font-milligrambold text-2xl text-center lg:text-left">Nuestros <br />clientes</h4>
                        </div>
                        <div className="col-span-1">
                            <img src="/images/home/caterpillar.png" className="max-w-full h-auto mx-auto transition-all duration-300 transform hover:scale-110" alt="" />
                        </div>
                        <div className="col-span-1">
                            <img src="/images/home/hitachi.png" className="max-w-full h-auto mx-auto transition-all duration-300 transform hover:scale-110" alt="" />
                        </div>
                        <div className="col-span-1">
                            <img src="/images/home/sany.png" className="max-w-full h-auto mx-auto transition-all duration-300 transform hover:scale-110" alt="" />
                        </div>
                        <div className="col-span-1">
                            <img src="/images/home/cnh.png" className="max-w-full h-auto mx-auto transition-all duration-300 transform hover:scale-110" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mx-auto py-40">
                    <div className="grid grid-cols-2 gap-5 items-center">
                        <div className="col-span-1 lg:px-5">
                            <img src="/images/home/camion-pavesa-certificaciones.png" className="max-w-full h-auto" alt="" />
                            <div className="grid grid-cols-2">
                                <div className="col-span-1 lg:px-6">
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M65.55 71.9701C64.84 71.9701 64.27 71.3901 64.27 70.6901C64.27 69.9901 64.85 69.4101 65.55 69.4101C66.25 69.4101 66.83 69.9901 66.83 70.6901C66.83 71.3901 66.25 71.9701 65.55 71.9701ZM65.55 66.8301C63.42 66.8301 61.69 68.5601 61.69 70.6801C61.69 72.8001 63.42 74.5401 65.55 74.5401C67.68 74.5401 69.41 72.8101 69.41 70.6801C69.41 68.5501 67.68 66.8301 65.55 66.8301Z" fill="#2C9C47"/><path d="M66.83 48.84V33.42H77.11V48.84H66.83ZM71.97 64.4C70.62 63.02 68.83 62.08 66.83 61.79V51.41H71.97V64.4ZM65.55 77.12C62.01 77.12 59.12 74.24 59.12 70.69C59.12 67.14 62 64.26 65.55 64.26C69.1 64.26 71.98 67.14 71.98 70.69C71.98 74.24 69.1 77.12 65.55 77.12ZM23.14 28.28V25.71H64.27V28.28H23.14ZM31.74 38.56L28.85 30.85H58.56L55.67 38.56H31.74ZM59.12 41.13V43.7H28.27V41.13H59.12ZM55.27 52.7C55.27 53.41 54.69 53.98 53.99 53.98C53.29 53.98 52.71 53.4 52.71 52.7C52.71 50.57 50.98 48.84 48.85 48.84C46.72 48.84 44.99 50.57 44.99 52.7V55.27C44.99 55.98 44.41 56.55 43.71 56.55C43.01 56.55 42.43 55.97 42.43 55.27V47.56C42.43 47.11 42.34 46.68 42.19 46.28H55.28V52.71L55.27 52.7ZM34.7 47.55V50.12C34.7 50.83 34.12 51.4 33.41 51.4C32.7 51.4 32.12 50.82 32.12 50.12V46.26H34.93C34.79 46.66 34.69 47.09 34.69 47.54L34.7 47.55ZM28.28 17.99C28.28 9.49 35.2 2.57 43.7 2.57C52.2 2.57 59.12 9.49 59.12 17.99V23.13H28.27V17.99H28.28ZM71.51 17.99C75.08 21.01 77.11 25.39 77.11 30.07V30.84H66.83V17.99H71.51ZM20.56 30.85H17.99V23.14H20.56V30.85ZM21.34 57.13C21.96 58.36 23.19 59.13 24.57 59.13H29.41C29.81 59.13 30.16 59.35 30.34 59.7C30.96 60.93 32.19 61.7 33.57 61.7H35.84C36.24 61.7 36.59 61.92 36.77 62.27L37.77 64.27H8.06999L8.51999 62.49C8.63999 62.03 9.04999 61.7 9.52999 61.7H11.42C12.79 61.7 14.03 60.93 14.65 59.7L15.94 57.13C16.12 56.77 16.47 56.56 16.87 56.56H20.42C20.82 56.56 21.17 56.78 21.35 57.13H21.34ZM51.41 68.12C51.41 73.08 47.37 77.12 42.41 77.12H11.57C6.60999 77.12 2.56999 73.08 2.56999 68.12C2.56999 67.41 3.14999 66.84 3.85999 66.84H50.13C50.84 66.84 51.41 67.42 51.41 68.12ZM12.85 28.28V25.71H15.42V28.28H12.85ZM10.28 35.99C10.28 36.7 9.69999 37.27 8.98999 37.27C8.27999 37.27 7.69999 36.69 7.69999 35.99V18C7.69999 17.29 8.27999 16.72 8.98999 16.72C9.69999 16.72 10.28 17.3 10.28 18V35.99ZM3.85999 28.28C3.14999 28.28 2.56999 27.7 2.56999 27C2.56999 26.3 3.14999 25.71 3.85999 25.71H5.14999V28.28H3.85999ZM79.69 30.08C79.69 24.46 77.17 19.22 72.78 15.71L72.43 15.43H64.27V23.14H61.7V18C61.69 8.07 53.62 0 43.7 0C33.78 0 25.71 8.07 25.71 17.99V23.13H23.14C23.14 21.71 21.99 20.56 20.57 20.56H18C16.58 20.56 15.43 21.71 15.43 23.13H12.86V17.99C12.86 15.86 11.13 14.13 8.99999 14.13C6.86999 14.13 5.13999 15.86 5.13999 17.99V23.13H3.84999C1.71999 23.13 -0.0100098 24.86 -0.0100098 26.99C-0.0100098 29.12 1.71999 30.84 3.84999 30.84H5.13999V35.98C5.13999 38.11 6.86999 39.84 8.99999 39.84C11.13 39.84 12.86 38.11 12.86 35.98V30.84H15.43C15.43 32.26 16.58 33.41 18 33.41V53.97H16.87C15.49 53.97 14.26 54.74 13.64 55.97L12.35 58.54C12.17 58.89 11.82 59.11 11.42 59.11H9.52999C7.86999 59.11 6.42999 60.24 6.02999 61.84L5.42999 64.25H3.85999C1.72999 64.25 -9.76585e-06 65.98 -9.76585e-06 68.11C-9.76585e-06 74.49 5.18999 79.68 11.57 79.68H42.42C48.8 79.68 53.99 74.49 53.99 68.11C53.99 65.98 52.26 64.25 50.13 64.25H40.64L39.07 61.1C38.45 59.87 37.22 59.1 35.84 59.1H33.57C33.17 59.1 32.82 58.88 32.64 58.53C32.02 57.3 30.79 56.53 29.41 56.53H24.57C24.17 56.53 23.82 56.31 23.64 55.96C23.05 54.78 21.88 54.04 20.56 53.98V33.4C21.98 33.4 23.13 32.25 23.13 30.83H26.09L28.98 38.54H28.26C26.84 38.54 25.69 39.69 25.69 41.11V43.68C25.69 45.1 26.84 46.25 28.26 46.25H29.55V50.11C29.55 52.23 31.28 53.96 33.41 53.96C35.54 53.96 37.27 52.23 37.27 50.11V47.54C37.27 46.83 37.85 46.26 38.55 46.26C39.25 46.26 39.84 46.84 39.84 47.54V55.25C39.84 57.38 41.57 59.1 43.69 59.1C45.81 59.1 47.55 57.37 47.55 55.25V52.68C47.55 51.97 48.13 51.4 48.83 51.4C49.53 51.4 50.11 51.98 50.11 52.68C50.11 54.8 51.84 56.54 53.97 56.54C56.1 56.54 57.83 54.81 57.83 52.68V46.25H59.11C60.53 46.25 61.68 45.1 61.68 43.68V41.11C61.68 39.69 60.53 38.54 59.11 38.54H58.39L61.28 30.83H64.25V61.78C59.9 62.41 56.54 66.15 56.54 70.67C56.54 75.63 60.58 79.67 65.54 79.67C70.5 79.67 74.54 75.63 74.54 70.67V51.39H79.68V30.06L79.69 30.08Z" fill="#2C9C47"/><path d="M43.7 5.13989V7.70989C48.45 7.70989 52.67 11.0699 53.73 15.7099L56.24 15.1399C54.92 9.34989 49.65 5.13989 43.71 5.13989" fill="#2C9C47"/><path d="M56.55 17.99H53.98V20.56H56.55V17.99Z" fill="#2C9C47"/><path d="M74.55 43.7H69.41V46.27H74.55V43.7Z" fill="#2C9C47"/><path d="M74.55 38.5601H69.41V41.1301H74.55V38.5601Z" fill="#2C9C47"/></svg>
                                    <h5 className="font-milligrambold text-[#11312C] mt-5 mb-3 text-2xl">Diseño <br/>personalizado</h5>
                                    <p className="font-milligramregular text-[#11312C]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                                <div className="col-span-1 lg:px-6 relative">
                                    <div className="after:content-[''] after:absolute after:left-0 after:top-1/2 after:transform after:-translate-y-1/2 after:h-[140px] after:w-[1px] after:bg-[#F16623]">
                                    </div>
                                    <svg width="79" height="80" viewBox="0 0 79 80" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M36.59 79.69C35.89 79.6 35.19 79.48 34.5 79.34C31.83 78.8 29.13 78.39 26.45 77.92C25.77 77.8 25.32 77.24 25.37 76.64C25.43 75.97 25.97 75.5 26.72 75.61C28.74 75.91 30.75 76.28 32.77 76.62C34.38 76.89 35.99 77.22 37.61 77.42C39.21 77.62 40.77 77.3 42.3 76.85C50.21 74.5 58.12 72.13 66.03 69.78C67.06 69.47 67.97 69.03 68.1 67.81C68.26 66.29 67.05 65.35 65.42 65.72C62.53 66.38 59.66 67.07 56.77 67.73C54.08 68.35 51.4 68.96 48.7 69.55C47.45 69.82 46.19 69.62 44.95 69.47C41.44 69.06 37.98 68.4 34.5 67.79C32.91 67.51 31.71 66.28 31.48 64.89C31.23 63.38 31.88 61.92 33.17 61.13C33.82 60.73 34.54 60.6 35.3 60.6C36.35 60.6 37.4 60.62 38.45 60.57C40.43 60.48 41.66 59.35 41.62 57.74C41.57 56.04 40 54.64 38.2 54.55C32.37 54.28 26.74 55.2 21.23 57.07C18.96 57.84 16.65 58.49 14.36 59.18C13.94 59.3 13.77 59.48 13.77 59.96C13.8 64.22 13.8 68.47 13.78 72.73C13.78 73.24 13.96 73.38 14.41 73.45C16.58 73.8 26.19 75.48 28.35 75.86C29.13 75.99 29.63 76.58 29.54 77.21C29.44 77.92 28.83 78.32 27.99 78.19C25.97 77.86 16.51 76.21 14.5 75.84C13.93 75.74 13.54 75.71 13.19 76.32C12.69 77.21 11.79 77.59 10.79 77.6C8.57999 77.63 6.37999 77.63 4.16999 77.6C2.46999 77.57 1.20999 76.34 1.19999 74.61C1.16999 69.2 1.16999 63.79 1.19999 58.38C1.20999 56.64 2.43999 55.46 4.18999 55.43C6.36999 55.39 8.54999 55.43 10.73 55.43C11.78 55.43 12.62 55.84 13.22 56.71C13.39 56.96 13.52 57.02 13.83 56.92C17.76 55.73 21.66 54.44 25.63 53.37C25.68 53.36 25.72 53.32 25.82 53.25C25.01 52.45 24.21 51.66 23.42 50.87C21.81 49.24 21.81 47.21 23.42 45.57C24.14 44.8367 24.2833 44.01 23.85 43.09C23.34 42 22.87 40.9 22.54 39.74C22.42 39.31 22.24 39.14 21.76 39.15C21.02 39.17 20.28 39.26 19.55 39.03C18.06 38.57 17.02 37.29 17.01 35.74C16.99 33.07 16.98 30.41 17.01 27.74C17.03 25.83 18.56 24.2 20.52 24.33C22.01 24.42 22.66 23.94 22.97 22.56C23.21 21.52 23.72 20.55 24.25 19.62C24.52 19.15 24.46 18.87 24.06 18.54C23.69 18.23 23.35 17.87 23.04 17.5C21.91 16.14 21.9 14.22 23.13 12.94C25.05 10.95 27.01 8.99 29.01 7.07C30.3 5.83 32.46 5.79 33.65 7.15C34.71 8.37 35.61 8.47 36.9 7.64C37.79 7.06 38.86 6.77 39.89 6.48C40.28 6.37 40.43 6.19 40.39 5.79C40.35 5.38 40.39 4.97 40.39 4.56C40.4 2.52 41.89 1.01 43.92 1C46.54 1 49.15 1 51.77 1C53.71 1 55.36 2.48 55.26 4.41C55.18 5.91 55.61 6.65 57.1 6.95C58.11 7.15 59.06 7.67 59.96 8.2C60.43 8.47 60.73 8.41 61.07 8C61.36 7.65 61.71 7.33 62.06 7.03C63.45 5.86 65.44 5.87 66.75 7.13C68.69 9 70.59 10.9 72.47 12.83C73.79 14.19 73.89 16.36 72.47 17.59C71.22 18.66 71.19 19.56 72 20.83C72.52 21.64 72.82 22.59 73.06 23.53C73.2 24.09 73.46 24.35 74.06 24.27C74.49 24.22 74.93 24.23 75.37 24.27C77.3 24.46 78.65 25.89 78.68 27.86C78.72 30.42 78.72 32.99 78.68 35.55C78.65 37.72 77.12 39.14 74.93 39.15C73.39 39.15 73.4 39.15 72.86 40.6C72.44 41.72 72.01 42.84 71.4 43.88C71.16 44.29 71.2 44.55 71.55 44.85C71.88 45.13 72.18 45.45 72.48 45.77C73.75 47.15 73.84 49.15 72.56 50.5C70.65 52.51 68.69 54.46 66.68 56.37C65.33 57.65 63.21 57.66 61.98 56.26C60.97 55.11 60.13 54.95 58.87 55.76C57.96 56.35 56.87 56.65 55.82 56.96C55.41 57.08 55.3 57.27 55.32 57.66C55.34 58.22 55.37 58.8 55.29 59.35C55.04 61.16 53.67 62.42 51.76 62.46C49.17 62.52 46.58 62.48 43.99 62.46C43.68 62.46 43.32 62.48 43.08 62.34C42.2 61.8 41.46 62.06 40.62 62.49C39.77 62.92 38.79 62.95 37.84 62.96C36.89 62.96 35.94 62.96 34.99 62.96C34.33 62.96 33.93 63.33 33.79 63.94C33.65 64.54 33.94 64.98 34.46 65.27C35.04 65.59 35.69 65.61 36.32 65.7C39.66 66.2 42.96 66.89 46.33 67.21C48.21 67.39 49.93 66.84 51.69 66.45C56.1 65.45 60.49 64.41 64.9 63.4C67.42 62.82 69.63 64.04 70.31 66.34C70.97 68.59 69.75 70.98 67.34 71.75C62.94 73.15 58.51 74.43 54.09 75.75C50.03 76.96 45.97 78.15 41.92 79.36C40.16 79.89 38.36 79.89 36.58 79.67L36.59 79.69ZM11.33 58.08C11.18 57.76 10.89 57.78 10.61 57.78C8.53999 57.78 6.46999 57.79 4.39999 57.78C3.83999 57.78 3.61999 58.01 3.61999 58.55C3.62999 62.64 3.63999 66.73 3.63999 70.82C3.45999 71.96 3.58999 73.12 3.56999 74.26C3.54999 75.11 3.74999 75.29 4.60999 75.29C6.52999 75.29 8.44999 75.29 10.38 75.29C11.29 75.29 11.5 75.07 11.5 74.15C11.5 69.03 11.5 63.9 11.5 58.78C11.5 58.54 11.6 58.26 11.34 58.07L11.33 58.08ZM35.21 52.24C36.51 52.24 37.46 52.24 38.41 52.24C42.12 52.26 44.82 55.94 43.66 59.44C43.47 60.01 43.58 60.13 44.15 60.12C46.64 60.09 49.12 60.1 51.61 60.09C52.53 60.09 52.89 59.72 52.91 58.78C52.93 58.01 52.91 57.24 52.92 56.47C52.93 55.71 53.28 55.22 54.05 55.03C56.15 54.51 58.12 53.66 59.99 52.59C60.69 52.19 61.3 52.29 61.86 52.88C62.37 53.42 62.9 53.94 63.44 54.46C64.07 55.06 64.71 55.08 65.33 54.46C67.12 52.7 68.9 50.92 70.67 49.14C71.25 48.56 71.22 47.91 70.65 47.31C70.12 46.76 69.57 46.21 69.02 45.68C68.46 45.14 68.37 44.54 68.76 43.88C69.85 41.99 70.7 39.99 71.25 37.88C71.44 37.17 71.9 36.82 72.66 36.85C73.45 36.88 74.25 36.88 75.04 36.85C75.85 36.82 76.28 36.4 76.29 35.61C76.3 33.05 76.3 30.48 76.29 27.92C76.29 27.09 75.9 26.73 75.05 26.72C74.28 26.71 73.51 26.72 72.74 26.72C71.95 26.72 71.43 26.37 71.23 25.58C70.69 23.46 69.83 21.47 68.73 19.58C68.37 18.96 68.45 18.42 68.96 17.92C69.53 17.37 70.1 16.81 70.65 16.23C71.23 15.62 71.25 14.97 70.68 14.4C68.89 12.6 67.1 10.8 65.29 9.02C64.64 8.38 64.09 8.42 63.42 9.07C62.9 9.57 62.4 10.08 61.89 10.59C61.16 11.32 60.8 11.38 59.93 10.87C58.11 9.8 56.16 9.04 54.14 8.47C53.25 8.22 52.96 7.87 52.94 6.94C52.92 6.17 52.94 5.4 52.93 4.63C52.91 3.83 52.5 3.38 51.7 3.37C49.16 3.35 46.62 3.34 44.08 3.35C43.22 3.35 42.76 3.84 42.74 4.7C42.72 5.47 42.71 6.24 42.74 7.01C42.77 7.76 42.45 8.23 41.72 8.42C39.58 8.98 37.55 9.82 35.65 10.94C35.02 11.31 34.49 11.2 33.99 10.7C33.42 10.11 32.84 9.52 32.24 8.97C31.65 8.42 31.03 8.4 30.46 8.97C28.63 10.77 26.81 12.58 25.02 14.4C24.42 15.01 24.45 15.6 25.05 16.22C25.58 16.77 26.13 17.32 26.68 17.85C27.24 18.39 27.35 18.96 26.95 19.64C25.85 21.5 25.03 23.48 24.48 25.57C24.27 26.38 23.77 26.71 22.98 26.7C22.21 26.7 21.44 26.69 20.67 26.7C19.85 26.72 19.39 27.09 19.38 27.91C19.35 30.47 19.35 33.04 19.38 35.6C19.39 36.44 19.91 36.87 20.79 36.88C21.53 36.89 22.28 36.91 23.02 36.88C23.81 36.85 24.27 37.19 24.47 37.95C25.03 40.06 25.87 42.06 26.97 43.95C27.33 44.57 27.26 45.11 26.74 45.61C26.17 46.16 25.6 46.72 25.06 47.3C24.43 47.96 24.43 48.54 25.06 49.18C26.14 50.28 27.24 51.35 28.32 52.45C28.53 52.67 28.74 52.79 29.06 52.73C31.21 52.31 33.38 52.25 35.21 52.28V52.24Z" fill="#2C9C47" stroke="#2C9C47" strokeWidth="0.4" strokeMiterlimit="10"/> <path d="M53.19 48.7799C55.22 48.1899 56.98 47.2599 58.58 46.0499C62.52 43.0599 64.92 39.1099 65.62 34.2199C66.94 24.9799 60.85 16.2699 51.73 14.2599C47.96 13.4299 44.31 13.7799 40.76 15.2899C40.41 15.4399 40.07 15.6699 39.66 15.5699C39.16 15.4399 38.78 15.1599 38.71 14.5999C38.64 13.9899 38.88 13.5599 39.45 13.3099C42.7 11.8799 46.07 11.2699 49.62 11.5699C53.82 11.9199 57.53 13.4299 60.75 16.0899C64.86 19.4999 67.35 23.8599 68 29.1999C68.75 35.3799 67 40.8199 62.82 45.4099C59.52 49.0399 55.38 51.1699 50.47 51.7999C39.96 53.1399 30.53 46.3099 28.23 36.6899C26.37 28.9299 28.47 22.2199 34.29 16.7199C34.96 16.0899 35.62 16.0699 36.11 16.5899C36.62 17.1299 36.54 17.7899 35.83 18.4499C32.88 21.1799 30.94 24.4899 30.26 28.4599C29.17 34.7799 30.96 40.1999 35.53 44.6899C37.35 46.4799 39.5 47.7399 41.89 48.6099C42.4 48.7999 42.59 48.7699 42.58 48.1499C42.54 46.3299 42.55 44.5099 42.58 42.6899C42.58 42.2099 42.4 41.9799 41.99 41.7599C37.62 39.3399 35.29 35.6199 35.4 30.6199C35.5 26.2599 37.59 22.9199 41.29 20.5999C41.42 20.5199 41.56 20.4599 41.7 20.3999C43.45 19.6299 44.7 20.3499 44.9 22.2499C45.07 23.9399 44.9 25.6299 44.96 27.3199C45 28.4499 44.89 29.5799 45.03 30.6999C45.22 32.1999 46.66 33.5399 47.97 33.4499C49.4 33.3499 50.74 31.9399 50.75 30.4399C50.78 28.1099 50.76 25.7699 50.75 23.4399C50.75 22.7699 50.82 22.1099 51.03 21.4699C51.41 20.3199 52.27 19.8299 53.43 20.1899C55.35 20.7899 56.73 22.1299 57.91 23.6699C62.45 29.6099 60.51 38.2499 53.87 41.6899C53.36 41.9499 53.19 42.2399 53.2 42.7999C53.24 44.7699 53.21 46.7399 53.21 48.7799H53.19ZM53.09 22.4499C53.09 25.0199 53.09 27.4299 53.09 29.8299C53.09 30.4999 53.08 31.1599 52.89 31.8099C52.02 34.8099 48.24 37.2599 44.83 34.6699C43.3 33.5099 42.6 31.9099 42.61 29.9999C42.61 27.7399 42.65 25.4899 42.66 23.2299C42.66 23.0199 42.77 22.7799 42.56 22.5899C39.47 24.2099 37.33 28.1799 37.71 31.6299C38.14 35.5999 40.18 38.4299 43.85 40.0299C44.59 40.3499 44.91 40.7999 44.9 41.5999C44.88 43.9599 44.9 46.3199 44.88 48.6799C44.88 49.1999 44.95 49.4199 45.56 49.4799C47.13 49.6399 48.67 49.6399 50.24 49.4599C50.72 49.3999 50.89 49.2699 50.88 48.7699C50.85 46.3599 50.88 43.9499 50.86 41.5399C50.86 40.7599 51.17 40.3499 51.88 40.0299C55.7 38.3199 57.87 35.3899 58 31.1699C58.11 27.3899 56.33 24.5899 53.11 22.4499H53.09Z" fill="#2C9C47" stroke="#2C9C47" strokeWidth="0.4" strokeMiterlimit="10"/> <path d="M47.86 52.0799C36.66 52.0799 27.54 42.9599 27.54 31.7599C27.54 20.5599 36.66 11.4399 47.86 11.4399C59.06 11.4399 68.18 20.5599 68.18 31.7599C68.18 42.9599 59.06 52.0799 47.86 52.0799ZM47.86 13.8099C37.96 13.8099 29.91 21.8599 29.91 31.7599C29.91 41.6599 37.96 49.7099 47.86 49.7099C57.76 49.7099 65.81 41.6599 65.81 31.7599C65.81 21.8599 57.76 13.8099 47.86 13.8099Z" fill="#2C9C47" stroke="#2C9C47" strokeWidth="0.4" strokeMiterlimit="10"/> </svg>
                                    <h5 className="font-milligrambold text-[#11312C] mt-5 mb-3 text-2xl">Soluciones para todas las necesidades</h5>
                                    <p className="font-milligramregular text-[#11312C]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 lg:px-5">
                            <h2 className="text-5xl text-[#11312C] font-integralcfheavy mb-5">Cumplimos certificaciones internacionales</h2>
                            <p className="text-[#11312C] tracking-wider leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <button className="bg-[#2C9C47] py-2 px-4 rounded-3xl mt-8 text-white transition-all duration-300 transform hover:scale-105 hover:bg-[rgba(44,156,71,0.9)]">
                                <span className="inline-block font-integralcfheavy uppercase">COTIZA ahora</span>
                                <svg width="42" height="27" className="inline-block ml-2" viewBox="0 0 42 27" fill="none" xmlns="http://www.w3.org/2000/svg" > <rect x="0.0341797" y="0.914551" width="41.0684" height="25.1709" rx="12.5855" fill="#F0E92B" /> <g clipPath="url(#clip0_6173_3)"> <path d="M27.8026 14.4311C27.6465 14.4311 27.4875 14.4311 27.3313 14.4311C21.2604 14.4311 17.9022 14.4311 11.8313 14.4336C11.6553 14.4336 11.4792 14.4412 11.3032 14.4235C10.758 14.3702 10.3832 13.9744 10.3917 13.4797C10.4002 13.0053 10.7778 12.6298 11.3088 12.5816C11.482 12.5664 11.6609 12.5714 11.837 12.5714C17.8908 12.5714 21.2377 12.574 27.2915 12.5714C27.4619 12.5714 27.6379 12.6095 27.9389 12.475C27.3767 12.0108 26.8457 11.5896 26.3375 11.1431C25.1051 10.0598 23.8841 8.9638 22.6603 7.87288C22.2173 7.47711 22.1918 6.86315 22.5978 6.49021C23.0124 6.10965 23.6967 6.11219 24.1794 6.53334C25.1335 7.36548 26.0705 8.21538 27.0133 9.05767C28.3421 10.2425 29.671 11.4273 30.9942 12.6146C31.7098 13.2564 31.7041 13.7486 30.98 14.3956C28.7823 16.3592 26.5873 18.3254 24.3896 20.2865C24.2646 20.3982 24.1425 20.5149 23.9977 20.6011C23.5263 20.8878 22.9017 20.8269 22.5581 20.4667C22.1946 20.0886 22.2287 19.5305 22.6518 19.1525C24.276 17.6962 25.9059 16.2425 27.5357 14.7913C27.6379 14.7 27.7742 14.6417 27.8963 14.5655C27.8651 14.5173 27.8339 14.4717 27.8026 14.4235V14.4311Z" fill="#2C9C47" /> </g> <defs> <clipPath id="clip0_6173_3"> <rect width="23.8462" height="14.5726" fill="white" transform="translate(9.30762 6.21362)" /> </clipPath> </defs> </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mx-auto">
                    <h2 className="text-center text-5xl text-[#11312C] font-integralcfheavy mb-8">Noticias y mas</h2>
                    <div className="grid grid-cols-3 items-center gap-4">
                        <div className="col-span-1 rounded-lg bg-[rgb(17,49,44,0.09)] p-5 group">
                            <div className="relative overflow-hidden h-[380px] mb-4">
                                <img src="/images/home/blog-1.png" className="w-full h-full object-cover absolute transition-all duration-300 transform group-hover:scale-110" alt="" />
                                <div className="absolute bottom-0 left-0 w-full p-5">
                                    <div className="py-3 px-4 bg-[#D9D9D9] inline-block text-center rounded">
                                        <span className="font-integralcfheavy text-5xl">20</span><br/>
                                        <span className="font-milligramregular text-3xl">ENE</span>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-solid inline-block border-[#11312C] rounded-lg py-2 px-4 text-[#11312C]">
                                <span>GRUPO PAVESA</span>
                                <span className="ml-9 font-milligramregular">Comentarios (<span className="font-sans">20</span>)</span>
                            </div>
                            <h2 className="mt-4 text-[#11312C] font-milligrambold text-2xl">Lorem ipsum dolor sit amet</h2>
                        </div>
                        <div className="col-span-1 rounded-lg bg-[rgb(17,49,44,0.09)] p-5 group">
                            <div className="relative overflow-hidden h-[380px] mb-4">
                                <img src="/images/home/blog-2.png" className="w-full h-full object-cover absolute transition-all duration-300 transform group-hover:scale-110" alt="" />
                                <div className="absolute bottom-0 left-0 w-full p-5">
                                    <div className="py-3 px-4 bg-[#D9D9D9] inline-block text-center rounded">
                                        <span className="font-integralcfheavy text-5xl">20</span><br/>
                                        <span className="font-milligramregular text-3xl">ENE</span>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-solid inline-block border-[#11312C] rounded-lg py-2 px-4 text-[#11312C]">
                                <span>GRUPO PAVESA</span>
                                <span className="ml-9 font-milligramregular">Comentarios (<span className="font-sans">20</span>)</span>
                            </div>
                            <h2 className="mt-4 text-[#11312C] font-milligrambold text-2xl">Lorem ipsum dolor sit amet</h2>
                        </div>
                        <div className="col-span-1 rounded-lg bg-[rgb(17,49,44,0.09)] p-5 group">
                            <div className="relative overflow-hidden h-[380px] mb-4">
                                <img src="/images/home/blog-3.png" className="w-full h-full object-cover absolute transition-all duration-300 transform group-hover:scale-110" alt="" />
                                <div className="absolute bottom-0 left-0 w-full p-5">
                                    <div className="py-3 px-4 bg-[#D9D9D9] inline-block text-center rounded">
                                        <span className="font-integralcfheavy text-5xl">20</span><br/>
                                        <span className="font-milligramregular text-3xl">ENE</span>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-solid inline-block border-[#11312C] rounded-lg py-2 px-4 text-[#11312C]">
                                <span>GRUPO PAVESA</span>
                                <span className="ml-9 font-milligramregular">Comentarios (<span className="font-sans">20</span>)</span>
                            </div>
                            <h2 className="mt-4 text-[#11312C] font-milligrambold text-2xl">Lorem ipsum dolor sit amet</h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Homepage;
