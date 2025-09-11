import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import HomeSlider from "../components/sliders/HomeSlider";

const TerraceriaPage = () => {
    const [settings] = useOutletContext();
    const [sliders, setSliders] = useState([]);
    const [terraceria, setTerraceria] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchConcretData = async () => {
            try {
                const response = await fetch("/api/terraceria");
                const data = await response.json();
                setSliders(data.sliders || []);
                setTerraceria(data.terraceriaPage || []);
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
                    <div className="h-[70vh] md:h-screen relative"> {/* Altura adaptada */}
                        <HomeSlider dataSlider={sliders} />
                    </div>
                </section>
            )}

            <section>
                <div className="container-custom bg-[url(/images/terraceria/bg-terraceria.png)] bg-bottom bg-cover bg-no-repeat">
                    <div className="grid grid-cols-1 lg:grid-cols-12 py-10 items-center gap-8 px-4 md:px-0"> {/* responsive grid y padding */}
                        <div className="lg:col-span-6">
                            <img
                                src={`/storage/${terraceria?.section_image_01}`}
                                className="w-full max-w-md md:max-w-xl max-h-[500px] md:max-h-[700px]"
                                alt="Cover Terraceria Pavesa"
                            />
                        </div>
                        <div className="md:col-span-6 px-4 md:px-10 max-w-xl mx-auto text-center md:text-left">
                            <h2 className="font-milligrambold text-2xl md:text-4xl text-white mb-4">
                                {terraceria?.section_title_01}
                            </h2>
                            <p className="text-white text-base md:text-xl">
                                {terraceria?.section_description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mx-auto px-4">
                    <div dangerouslySetInnerHTML={{ __html: terraceria?.section_title_02 }}></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="px-5 pt-5 pb-16">
                            <div className="flex items-center justify-center mb-4">
                                <img
                                    src={`/storage/${terraceria?.solucion_image_01}`}
                                    className="max-w-full mx-auto"
                                    alt={terraceria?.solucion_title_01}
                                />
                            </div>
                            <h3 className="text-[#11312C] text-xl md:text-2xl font-milligrambold mb-2 text-center"
                                dangerouslySetInnerHTML={{ __html: terraceria?.solucion_title_01 }}
                            ></h3>
                        </div>
                        <div className="px-5 pt-5 pb-16">
                            <div className="flex items-center justify-center mb-4">
                                <img
                                    src={`/storage/${terraceria?.solucion_image_02}`}
                                    className="max-w-full mx-auto"
                                    alt={terraceria?.solucion_title_02}
                                />
                            </div>
                            <h3 className="text-[#11312C] text-xl md:text-2xl font-milligrambold mb-2 text-center"
                                dangerouslySetInnerHTML={{ __html: terraceria?.solucion_title_02 }}
                            ></h3>
                        </div>
                        <div className="px-5 pt-5 pb-16">
                            <div className="flex items-center justify-center mb-4">
                                <img
                                    src={`/storage/${terraceria?.solucion_image_03}`}
                                    className="max-w-full mx-auto"
                                    alt={terraceria?.solucion_title_03}
                                />
                            </div>
                            <h3 className="text-[#11312C] text-xl md:text-2xl font-milligrambold mb-2 text-center"
                                dangerouslySetInnerHTML={{ __html: terraceria?.solucion_title_03 }}
                            ></h3>
                        </div>
                        <div className="px-5 pt-5 pb-16">
                            <div className="flex items-center justify-center mb-4">
                                <img
                                    src={`/storage/${terraceria?.solucion_image_04}`}
                                    className="max-w-full mx-auto"
                                    alt={terraceria?.solucion_title_04}
                                />
                            </div>
                            <h3 className="text-[#11312C] text-xl md:text-2xl font-milligrambold mb-2 text-center"
                                dangerouslySetInnerHTML={{ __html: terraceria?.solucion_title_04 }}
                            ></h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-28">
                <div className="container mx-auto bg-[url(/images/terraceria/bg-terraceria-2.png)] bg-cover bg-no-repeat">
                    <div className="grid sm:grid-cols-2">
                        <div className="mt-[-50px]"
                            dangerouslySetInnerHTML={{ __html: terraceria?.section_title_03 }}
                        ></div>
                        <div className="sm:mt-[-70px]">
                            <img src={`/storage/${terraceria?.section_image_03}`} className="max-w-full mx-auto" alt="Alcance de servicios Pavesa" />
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-3 py-24">
                        <div className="px-5 pt-5 pb-16">
                            <div className="flex items-center justify-center h-[135px] mb-5">
                            <img src={`/storage/${terraceria?.alcance_image_01}`} className="max-w-full mx-auto" alt="" />
                            </div>
                            <h3 className="text-[#11312C] text-2xl font-milligrambold mb-2 text-center"
                                dangerouslySetInnerHTML={{ __html: terraceria?.alcance_title_01 }}
                            ></h3>
                        </div>
                        <div className="px-5 pt-5 pb-16 border-x border-x-[#F16623] border-solid">
                            <div className="flex items-center justify-center h-[135px] mb-5">
                            <img src={`/storage/${terraceria?.alcance_image_02}`} className="max-w-full mx-auto" alt="" />
                            </div>
                            <h3 className="text-[#11312C] text-2xl font-milligrambold mb-2 text-center"
                                dangerouslySetInnerHTML={{ __html: terraceria?.alcance_title_02 }}
                            ></h3>
                        </div>
                        <div className="px-5 pt-5 pb-16">
                            <div className="flex items-center justify-center h-[135px] mb-5">
                            <img src={`/storage/${terraceria?.alcance_image_03}`} className="max-w-[125px] mx-auto" alt="" />
                            </div>
                            <h3 className="text-[#11312C] text-2xl font-milligrambold mb-2 text-center"
                                dangerouslySetInnerHTML={{ __html: terraceria?.alcance_title_03 }}
                            ></h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TerraceriaPage;
