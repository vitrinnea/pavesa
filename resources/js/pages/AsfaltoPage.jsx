import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import HomeSlider from "../components/sliders/HomeSlider";

const AsfaltoPage = () => {
    const [settings] = useOutletContext();
    const [sliders, setSliders] = useState([]);
    const [asfaltoPage, setAsfaltoPage] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchConcretData = async () => {
            try {
                const response = await fetch("/api/asfalto");
                const data = await response.json();
                setSliders(data.sliders || []);
                setAsfaltoPage(data.asfaltoPage || []);
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
            <section className="bg-[url(/images/asfalto/bg-asfalto.png)] bg-bottom bg-cover bg-no-repeat px-4">
                <div className="container mx-auto">
                    <div className="grid sm:grid-cols-12 py-16 items-center justify-center">
                        <div className="col-span-7">
                            <img src={`/storage/${asfaltoPage?.section_image_01}`} className="w-full h-auto mx-auto" alt="Asfalto Pavesa" />
                        </div>
                        <div className="col-span-5 px-10" dangerouslySetInnerHTML={{ __html: asfaltoPage.section_title_01 }}></div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mx-auto pt-14">
                    <h2 className="section-title text-center mb-12 font-integralcfheavy text-2xl  sm:text-5xl text-[#11312C]"
                        dangerouslySetInnerHTML={{ __html: asfaltoPage.section_title_02 }}></h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4">
                        <div className="px-5 pt-5 pb-16">
                            <div className="flex items-center justify-center h-[135px] mb-5">
                                <img src={`/storage/${asfaltoPage?.solucion_image_01}`} className="max-w-xl h-auto mx-auto" alt="Asfalto Pavesa Solucion 1" />
                            </div>
                            <h3 className="text-[#11312C] text-2xl font-milligrambold mb-2 text-center"
                                dangerouslySetInnerHTML={{ __html: asfaltoPage.solucion_title_01 }}
                            ></h3>
                            <div
                                dangerouslySetInnerHTML={{ __html: asfaltoPage.solucion_description_01 }}
                            ></div>
                        </div>
                        <div className="px-5 pt-5 pb-16 border-l border-l-[#F16623] border-solid">
                            <div className="flex items-center justify-center h-[135px] mb-5">
                                <img src={`/storage/${asfaltoPage?.solucion_image_02}`} className="max-w-xl h-auto mx-auto" alt="Asfalto Pavesa Solucion 2" />
                            </div>
                            <h3 className="text-[#11312C] text-2xl font-milligrambold mb-2 text-center"
                                dangerouslySetInnerHTML={{ __html: asfaltoPage.solucion_title_02 }}
                            ></h3>
                            <div
                                dangerouslySetInnerHTML={{ __html: asfaltoPage.solucion_description_02 }}
                            ></div>
                        </div>
                        <div className="px-5 pt-5 pb-16 border-x border-x-[#F16623] border-solid">
                            <div className="flex items-center justify-center h-[135px] mb-5">
                                <img src={`/storage/${asfaltoPage?.solucion_image_03}`} className="max-w-xl h-auto mx-auto" alt="Asfalto Pavesa Solucion 3" />
                            </div>
                            <h3 className="text-[#11312C] text-2xl font-milligrambold mb-2 text-center"
                                dangerouslySetInnerHTML={{ __html: asfaltoPage.solucion_title_03 }}
                            ></h3>
                            <div
                                dangerouslySetInnerHTML={{ __html: asfaltoPage.solucion_description_03 }}
                            ></div>
                        </div>
                        <div className="px-5 pt-5 pb-16">
                            <div className="flex items-center justify-center h-[135px] mb-5">
                                <img src={`/storage/${asfaltoPage?.solucion_image_04}`} className="max-w-xl h-auto mx-auto" alt="Asfalto Pavesa Solucion 4" />
                            </div>
                            <h3 className="text-[#11312C] text-2xl font-milligrambold mb-2 text-center"
                                dangerouslySetInnerHTML={{ __html: asfaltoPage.solucion_title_04 }}
                            ></h3>
                            <div
                                dangerouslySetInnerHTML={{ __html: asfaltoPage.solucion_description_04 }}
                            ></div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-custom mx-auto">
                    <div className="grid sm:grid-cols-2 py-24 px-2">
                        <div className="xl:px-24">
                            <h2 className="font-integralcfheavy text-2xl sm:text-5xl text-[#2C9C47] mb-10"
                                dangerouslySetInnerHTML={{ __html: asfaltoPage.section_title_03 }}>
                            </h2>
                            <div>
                                <div className="flex items-center gap-10 mb-8">
                                    <div className="min-w-[160px]">
                                        <img src={`/storage/${asfaltoPage?.capacidad_image_01}`} className="max-w-xl h-auto mx-auto" alt="Asfalto Pavesa - Capacidad 1" />
                                    </div>
                                    <div>
                                        <h3 className="text-[#11312C] text-xl font-milligrambold"
                                            dangerouslySetInnerHTML={{ __html: asfaltoPage.capacidad_title_01 }}
                                        ></h3>
                                        <div
                                            dangerouslySetInnerHTML={{ __html: asfaltoPage.capacidad_description_01 }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-10 mb-8">
                                <div className="min-w-[160px]">
                                    <img src={`/storage/${asfaltoPage?.capacidad_image_02}`} className="max-w-xl h-auto mx-auto" alt="Asfalto Pavesa - Capacidad 2" />
                                </div>
                                <div>
                                    <h2 className="text-[#11312C] text-2xl font-milligrambold"
                                        dangerouslySetInnerHTML={{ __html: asfaltoPage.capacidad_title_02 }}
                                    ></h2>
                                    <div
                                        dangerouslySetInnerHTML={{ __html: asfaltoPage.capacidad_description_02 }}
                                    ></div>
                                </div>
                            </div>
                            <div className="flex items-center gap-10 mb-8">
                                <div className="min-w-[160px]">
                                    <img src={`/storage/${asfaltoPage?.capacidad_image_03}`} className="max-w-xl h-auto mx-auto" alt="Asfalto Pavesa - Capacidad 3" />
                                </div>
                                <div>
                                    <h2 className="text-[#11312C] text-2xl font-milligrambold"
                                        dangerouslySetInnerHTML={{ __html: asfaltoPage.capacidad_title_03 }}
                                    ></h2>
                                    <div
                                        dangerouslySetInnerHTML={{ __html: asfaltoPage.capacidad_description_03 }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={`/storage/${asfaltoPage?.section_image_03}`} className="max-w-full h-auto ml-auto" alt="Asfalto Pavesa - Seccion 3" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AsfaltoPage;
