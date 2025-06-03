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
        imagen: "/images/home/proyecto1.png", // Ajusta esta ruta a tus imágenes
    },
    {
        titulo: "ByPass, Usulután",
        descripcion: "Suministro y colocación de mezcla asfáltica",
        imagen: "/images/home/proyecto2.png",
    },
    {
        titulo: "Carretera a Comalapa",
        descripcion: "Lanzado de concreto (Shotcrete)",
        imagen: "/images/home/proyecto2.png",
    },
    {
        titulo: "Briko, Nuevo Cuscatlán",
        descripcion: "Obra Gris",
        imagen: "/images/home/proyecto1.png", // Ajusta esta ruta a tus imágenes
    },
    {
        titulo: "ByPass, Usulután",
        descripcion: "Suministro y colocación de mezcla asfáltica",
        imagen: "/images/home/proyecto2.png",
    },
    {
        titulo: "Carretera a Comalapa",
        descripcion: "Lanzado de concreto (Shotcrete)",
        imagen: "/images/home/proyecto2.png",
    },
    // Puedes agregar más proyectos según necesites
];

const Homepage = () => {
    const [settings] = useOutletContext();
    const [sliders, setSliders] = useState([]);
    const [homePage, setHomePage] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHomeData = async () => {
            try {
                const response = await fetch("/api/home-data");
                const data = await response.json();

                setSliders(data.sliders || []);
                setHomePage(data.homePage || []);

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
            <section className="bg-[url(/images/home/background-linea.png)] lg:bg-[length:100%_70%] bg-cover bg-top bg-no-repeat">
                <div className="container mx-auto pt-16 sm:pt-28 lg:px-4 md:px-3">
                    {/* Servicios dinámicos */}
                    <div className="flex flex-wrap w-full h-auto sm:h-[400px] md:h-[475px] lg:h-[528px]">
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="group flex-1 min-h-[250px] transition-all duration-300 hover:flex-[2] bg-cover bg-center relative"
                                style={{
                                    backgroundImage: `url('/storage/${
                                        homePage?.[`service_image_0${i}`]
                                    }')`,
                                }}
                            >
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#2C9C47] text-white p-2 sm:p-3 text-sm sm:text-base opacity-0 group-hover:opacity-100 transition duration-300 font-milligrambold text-center">
                                    {homePage?.[`service_description_0${i}`]}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="container mx-auto lg:px-4 md:px-3">
                    <div className="flex flex-col sm:flex-row py-4 sm:py-5 px-4 sm:px-10 bg-[rgba(14,42,38,0.79)] justify-center sm:justify-around items-center">
                        <p className="text-white font-milligrambold text-lg sm:text-2xl max-w-md text-center sm:text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit,
                        </p>
                        <button className="bg-[#2C9C47] py-2 px-4 rounded-3xl text-white transition-all duration-300 transform hover:scale-105 hover:bg-[#2C9C47]/90 mt-4 sm:mt-0">
                            <span className="inline-block font-integralcfheavy uppercase text-sm sm:text-base">
                                COTIZA ahora
                            </span>
                            <svg
                                width="32"
                                height="20"
                                className="inline-block ml-2"
                                viewBox="0 0 42 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="0.0341797"
                                    y="0.914551"
                                    width="41.0684"
                                    height="25.1709"
                                    rx="12.5855"
                                    fill="#F0E92B"
                                />
                                <g clipPath="url(#clip0_6173_3)">
                                    <path
                                        d="M27.8026 14.4311C27.6465 14.4311 27.4875 14.4311 27.3313 14.4311C21.2604 14.4311 17.9022 14.4311 11.8313 14.4336C11.6553 14.4336 11.4792 14.4412 11.3032 14.4235C10.758 14.3702 10.3832 13.9744 10.3917 13.4797C10.4002 13.0053 10.7778 12.6298 11.3088 12.5816C11.482 12.5664 11.6609 12.5714 11.837 12.5714C17.8908 12.5714 21.2377 12.574 27.2915 12.5714C27.4619 12.5714 27.6379 12.6095 27.9389 12.475C27.3767 12.0108 26.8457 11.5896 26.3375 11.1431C25.1051 10.0598 23.8841 8.9638 22.6603 7.87288C22.2173 7.47711 22.1918 6.86315 22.5978 6.49021C23.0124 6.10965 23.6967 6.11219 24.1794 6.53334C25.1335 7.36548 26.0705 8.21538 27.0133 9.05767C28.3421 10.2425 29.671 11.4273 30.9942 12.6146C31.7098 13.2564 31.7041 13.7486 30.98 14.3956C28.7823 16.3592 26.5873 18.3254 24.3896 20.2865C24.2646 20.3982 24.1425 20.5149 23.9977 20.6011C23.5263 20.8878 22.9017 20.8269 22.5581 20.4667C22.1946 20.0886 22.2287 19.5305 22.6518 19.1525C24.276 17.6962 25.9059 16.2425 27.5357 14.7913C27.6379 14.7 27.7742 14.6417 27.8963 14.5655C27.8651 14.5173 27.8339 14.4717 27.8026 14.4235V14.4311Z"
                                        fill="#2C9C47"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_6173_3">
                                        <rect
                                            width="23.8462"
                                            height="14.5726"
                                            fill="white"
                                            transform="translate(9.30762 6.21362)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="container mx-auto pt-32">
                    <h2 className="text-center font-bold text-5xl text-white font-integralcfheavy">
                        COTIZA TU PROYECTO <br />
                        <span className="text-[#2C9C47] font-integralcfheavy">
                            AHORA
                        </span>
                    </h2>
                </div>
                <div className="w-full lg:container lg:mx-auto pt-20">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                        <div className="md:w-1/2 px-5">
                            <img
                                src="/images/home/arquitectos-pavesa-1.png"
                                alt="Arquitectos Pavesa"
                                className="max-w-[450px] w-full h-auto "
                            />
                        </div>
                        <div className="md:w-1/2 p-5">
                            <QuoteForm/>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto pt-40">
                    <h2 className="section-title text-center mb-12 font-integralcfheavy text-5xl text-white lg:text-[#11312C]">
                        {homePage?.solution_title_general}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 px-2">
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="col-span-1 h-[437px] bg-cover relative group overflow-hidden"
                                style={{
                                    backgroundImage: `url('/storage/${
                                        homePage?.[`solution_image_0${i}`]
                                    }')`,
                                }}
                            >
                                {/* ...decoración... */}
                                <div className="absolute bottom-0 left-0 w-full pb-8 text-center">
                                    <h4 className="text-white font-integralcfheavy text-2xl mb-2">
                                        {
                                            homePage?.[
                                                `solution_description_0${i}`
                                            ]
                                        }
                                    </h4>
                                    <a
                                        href={
                                            homePage?.[`solution_link_0${i}`] ||
                                            "#"
                                        }
                                        className="text-white py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    >
                                        CONOCE MÁS
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="container mx-auto pt-32 pb-32">
                    <h2 className="section-title mb-12 font-integralcfheavy text-5xl text-[#11312C]">
                        {homePage?.project_title_general}
                    </h2>
                    <ProjectsSlider proyectos={proyectosData} />
                </div>
            </section>
            <section className="border-y border-y-[#F16623] border-solid py-8">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 items-center">
                        <div className="col-span-1 lg:px-10">
                            <h4 className="text-[#11312C] font-milligrambold text-2xl text-center lg:text-left">
                                {homePage?.customer_title_general}
                            </h4>
                        </div>
                        {homePage?.customer_images_gallery?.map((img, idx) => (
                            <div className="col-span-1" key={idx}>
                                <img
                                    src={`/storage/${img}`}
                                    className="max-w-full h-auto mx-auto transition-all duration-300 transform hover:scale-110"
                                    alt=""
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <div className="container mx-auto lg:py-40 md:py-20 py-10">
                    <div className="grid lg:grid-cols-2 gap-5 items-center">
                        <div className="col-span-1 lg:px-5 px-4">
                            <img
                                src={`/storage/${homePage?.certification_image_general}`}
                                className="max-w-full h-auto"
                                alt=""
                            />
                            <div className="grid grid-cols-2">
                                <div className="col-span-1 lg:px-6 md:px-4 px-2">
                                    <img
                                        src={`/storage/${homePage?.certification_image_01}`}
                                        alt=""
                                    />
                                    <h5 className="font-milligrambold text-[#11312C] mt-5 mb-3 lg:text-2xl md:text-xl">
                                        {homePage?.certification_title_01}
                                    </h5>
                                    <p className="font-milligramregular text-[#11312C]">
                                        {homePage?.certification_description_01}
                                    </p>
                                </div>
                                <div className="col-span-1 lg:px-6 md:px-4 px-2 relative">
                                    <div className="after:content-[''] after:absolute after:left-0 after:top-1/2 after:transform after:-translate-y-1/2 after:h-[140px] after:w-[1px] after:bg-[#F16623]"></div>
                                    <img
                                        src={`/storage/${homePage?.certification_image_02}`}
                                        alt=""
                                    />
                                    <h5 className="font-milligrambold text-[#11312C] mt-5 mb-3 lg:text-2xl md:text-xl">
                                        {homePage?.certification_title_02}
                                    </h5>
                                    <p className="font-milligramregular text-[#11312C]">
                                        {homePage?.certification_description_02}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 lg:px-5 px-4">
                            <h2 className="lg:text-5xl md:text-4xl text-4xl text-[#11312C] font-integralcfheavy mb-5">
                                {homePage?.certification_title_general}
                            </h2>
                            <p className="text-[#11312C] tracking-wider leading-loose">
                                {homePage?.certification_description_general}
                            </p>
                            <button className="bg-[#2C9C47] py-2 px-4 rounded-3xl mt-8 text-white transition-all duration-300 transform hover:scale-105 hover:bg-[rgba(44,156,71,0.9)]">
                                <span className="inline-block font-integralcfheavy uppercase">
                                    COTIZA ahora
                                </span>
                                <svg
                                    width="42"
                                    height="27"
                                    className="inline-block ml-2"
                                    viewBox="0 0 42 27"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {" "}
                                    <rect
                                        x="0.0341797"
                                        y="0.914551"
                                        width="41.0684"
                                        height="25.1709"
                                        rx="12.5855"
                                        fill="#F0E92B"
                                    />{" "}
                                    <g clipPath="url(#clip0_6173_3)">
                                        {" "}
                                        <path
                                            d="M27.8026 14.4311C27.6465 14.4311 27.4875 14.4311 27.3313 14.4311C21.2604 14.4311 17.9022 14.4311 11.8313 14.4336C11.6553 14.4336 11.4792 14.4412 11.3032 14.4235C10.758 14.3702 10.3832 13.9744 10.3917 13.4797C10.4002 13.0053 10.7778 12.6298 11.3088 12.5816C11.482 12.5664 11.6609 12.5714 11.837 12.5714C17.8908 12.5714 21.2377 12.574 27.2915 12.5714C27.4619 12.5714 27.6379 12.6095 27.9389 12.475C27.3767 12.0108 26.8457 11.5896 26.3375 11.1431C25.1051 10.0598 23.8841 8.9638 22.6603 7.87288C22.2173 7.47711 22.1918 6.86315 22.5978 6.49021C23.0124 6.10965 23.6967 6.11219 24.1794 6.53334C25.1335 7.36548 26.0705 8.21538 27.0133 9.05767C28.3421 10.2425 29.671 11.4273 30.9942 12.6146C31.7098 13.2564 31.7041 13.7486 30.98 14.3956C28.7823 16.3592 26.5873 18.3254 24.3896 20.2865C24.2646 20.3982 24.1425 20.5149 23.9977 20.6011C23.5263 20.8878 22.9017 20.8269 22.5581 20.4667C22.1946 20.0886 22.2287 19.5305 22.6518 19.1525C24.276 17.6962 25.9059 16.2425 27.5357 14.7913C27.6379 14.7 27.7742 14.6417 27.8963 14.5655C27.8651 14.5173 27.8339 14.4717 27.8026 14.4235V14.4311Z"
                                            fill="#2C9C47"
                                        />{" "}
                                    </g>{" "}
                                    <defs>
                                        {" "}
                                        <clipPath id="clip0_6173_3">
                                            {" "}
                                            <rect
                                                width="23.8462"
                                                height="14.5726"
                                                fill="white"
                                                transform="translate(9.30762 6.21362)"
                                            />{" "}
                                        </clipPath>{" "}
                                    </defs>{" "}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pb-32">
                <div className="container mx-auto">
                    <h2 className="text-center lgtext-5xl md:text-4xl sm:text-3xl text-[#11312C] font-integralcfheavy mb-8">
                        Noticias y mas
                    </h2>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center gap-4">
                        <div className="col-span-1 rounded-lg bg-[rgb(17,49,44,0.09)] p-5 group">
                            <div className="relative overflow-hidden h-[380px] mb-4">
                                <img
                                    src="/images/home/blog-1.png"
                                    className="w-full h-full object-cover absolute transition-all duration-300 transform group-hover:scale-110"
                                    alt=""
                                />
                                <div className="absolute bottom-0 left-0 w-full p-5">
                                    <div className="py-3 px-4 bg-[#D9D9D9] inline-block text-center rounded">
                                        <span className="font-integralcfheavy text-5xl">
                                            20
                                        </span>
                                        <br />
                                        <span className="font-milligramregular text-3xl">
                                            ENE
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-solid inline-block border-[#11312C] rounded-lg py-2 px-4 text-[#11312C]">
                                <span>GRUPO PAVESA</span>
                                <span className="ml-9 font-milligramregular">
                                    Comentarios (
                                    <span className="font-sans">20</span>)
                                </span>
                            </div>
                            <h2 className="mt-4 text-[#11312C] font-milligrambold text-2xl">
                                Lorem ipsum dolor sit amet
                            </h2>
                        </div>
                        <div className="col-span-1 rounded-lg bg-[rgb(17,49,44,0.09)] p-5 group">
                            <div className="relative overflow-hidden h-[380px] mb-4">
                                <img
                                    src="/images/home/blog-2.png"
                                    className="w-full h-full object-cover absolute transition-all duration-300 transform group-hover:scale-110"
                                    alt=""
                                />
                                <div className="absolute bottom-0 left-0 w-full p-5">
                                    <div className="py-3 px-4 bg-[#D9D9D9] inline-block text-center rounded">
                                        <span className="font-integralcfheavy text-5xl">
                                            20
                                        </span>
                                        <br />
                                        <span className="font-milligramregular text-3xl">
                                            ENE
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-solid inline-block border-[#11312C] rounded-lg py-2 px-4 text-[#11312C]">
                                <span>GRUPO PAVESA</span>
                                <span className="ml-9 font-milligramregular">
                                    Comentarios (
                                    <span className="font-sans">20</span>)
                                </span>
                            </div>
                            <h2 className="mt-4 text-[#11312C] font-milligrambold text-2xl">
                                Lorem ipsum dolor sit amet
                            </h2>
                        </div>
                        <div className="col-span-1 rounded-lg bg-[rgb(17,49,44,0.09)] p-5 group">
                            <div className="relative overflow-hidden h-[380px] mb-4">
                                <img
                                    src="/images/home/blog-3.png"
                                    className="w-full h-full object-cover absolute transition-all duration-300 transform group-hover:scale-110"
                                    alt=""
                                />
                                <div className="absolute bottom-0 left-0 w-full p-5">
                                    <div className="py-3 px-4 bg-[#D9D9D9] inline-block text-center rounded">
                                        <span className="font-integralcfheavy text-5xl">
                                            20
                                        </span>
                                        <br />
                                        <span className="font-milligramregular text-3xl">
                                            ENE
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-solid inline-block border-[#11312C] rounded-lg py-2 px-4 text-[#11312C]">
                                <span>GRUPO PAVESA</span>
                                <span className="ml-9 font-milligramregular">
                                    Comentarios (
                                    <span className="font-sans">20</span>)
                                </span>
                            </div>
                            <h2 className="mt-4 text-[#11312C] font-milligrambold text-2xl">
                                Lorem ipsum dolor sit amet
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Homepage;
