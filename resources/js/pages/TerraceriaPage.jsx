import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import HomeSlider from "../components/sliders/HomeSlider";

const TerraceriaPage = () => {
    const [settings] = useOutletContext();
    const [sliders, setSliders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchConcretData = async () => {
            try {
                const response = await fetch("/api/home-data");
                const data = await response.json();
                setSliders(data.sliders || []);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching home data:", error);
                setLoading(false);
            }
        };
        fetchConcretData();
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
            <section>
                <div className="container-custom bg-[url(/images/terraceria/bg-terraceria.png)] bg-bottom bg-cover bg-no-repeat">
                    <div className="grid grid-cols-12 py-10 items-center">
                        <div className="col-span-6">
                            <img src="/images/terraceria/terraceria-pavesa.png" className="max-w-xl max-h-[700px]" alt="" />
                        </div>
                        <div className="col-span-6 px-10 max-w-xl">
                            <h2 className="font-milligramregular text-4xl text-white">
                                Lorem ipsum dolor sit amet
                            </h2>
                            <p className="text-white text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mx-auto">
                    <h2 className="section-title text-center mb-12 font-integralcfheavy text-5xl text-[#11312C]">
                        Algunas de <br/>nuestras soluciones
                    </h2>
                    <div className="grid grid-cols-4">
                        <div className="px-5 pt-5 pb-16">
                            <div className="flex items-center justify-center mb-4">
                                <img src="/images/terraceria/terraceria-1.png" className="max-w-full mx-auto" alt="" />
                            </div>
                            <h3 className="text-[#11312C] text-2xl font-milligrambold mb-2 text-center">Movimientos <br/>masivos de tierra</h3>
                        </div>
                        <div className="px-5 pt-5 pb-16">
                            <div className="flex items-center justify-center mb-4">
                                <img src="/images/terraceria/terraceria-2.png" className="max-w-full mx-auto" alt="" />
                            </div>
                            <h3 className="text-[#11312C] text-2xl font-milligrambold mb-2 text-center">Diseños de <br/>terrazas</h3>
                        </div>
                        <div className="px-5 pt-5 pb-16">
                            <div className="flex items-center justify-center mb-4">
                                <img src="/images/terraceria/terraceria-3.png" className="max-w-full mx-auto" alt="" />
                            </div>
                            <h3 className="text-[#11312C] text-2xl font-milligrambold mb-2 text-center">Cortes y rellenos <br/>estructurales</h3>
                        </div>
                        <div className="px-5 pt-5 pb-16">
                            <div className="flex items-center justify-center mb-4">
                                <img src="/images/terraceria/terraceria-4.png" className="max-w-full mx-auto" alt="" />
                            </div>
                            <h3 className="text-[#11312C] text-2xl font-milligrambold mb-2 text-center">
                                Terraplenes
                                <br/><span className="font-milligramregular text-xl">(acarreo de tierra para relleno)</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-28">
                <div className="container mx-auto bg-[url(/images/terraceria/bg-terraceria-2.png)] bg-cover bg-no-repeat">
                    <div className="grid grid-cols-2">
                        <div className="mt-[-50px]">
                            <h2 className="text-[#2C9C47] text-4xl font-integralcfheavy mb-2 text-center">
                                ALCANCE DE<br/>
                                <span className="text-[#11312C] text-6xl font-integralcfheavy">NUESTROS <br/>SERVICIOS</span>
                            </h2>
                        </div>
                        <div className="mt-[-70px]">
                            <img src="/images/terraceria/terraceria-servicios.png" className="max-w-full mx-auto" alt="" />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 py-24">
                        <div className="px-5 pt-5 pb-16">
                            <div className="flex items-center justify-center h-[135px] mb-5">
                            <img src="/images/terraceria/esa-terraceria.png" className="max-w-full mx-auto" alt="" />
                            </div>
                            <h3 className="text-[#11312C] text-2xl font-milligrambold mb-2 text-center">Cobertura a <br/>nivel nacional</h3>
                        </div>
                        <div className="px-5 pt-5 pb-16 border-x border-x-[#F16623] border-solid">
                            <div className="flex items-center justify-center h-[135px] mb-5">
                            <img src="/images/terraceria/excavadora-terraceria.png" className="max-w-full mx-auto" alt="" />
                            </div>
                            <h3 className="text-[#11312C] text-2xl font-milligrambold mb-2 text-center">Equipos <br/>modernos</h3>
                        </div>
                        <div className="px-5 pt-5 pb-16">
                            <div className="flex items-center justify-center h-[135px] mb-5">
                            <img src="/images/terraceria/engranaje-terraceria.png" className="max-w-full mx-auto" alt="" />
                            </div>
                            <h3 className="text-[#11312C] text-2xl font-milligrambold mb-2 text-center">Asesoría <br/>técnica</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TerraceriaPage;
