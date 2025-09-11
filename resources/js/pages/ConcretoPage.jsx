import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import HomeSlider from "../components/sliders/HomeSlider";

const ConcretoPage = () => {
    const [settings] = useOutletContext();
    const [sliders, setSliders] = useState([]);
    const [concretPage, setConcretPage] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchConcretData = async () => {
            try {
                const response = await fetch("/api/concreto");
                const data = await response.json();
                setSliders(data.sliders || []);
                setConcretPage(data.concretPage || []);
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
                <div className="container-custom bg-[url(/images/concreto/bg-concreto.png)] bg-bottom bg-cover bg-no-repeat">
                    <div className="grid grid-cols-12 py-10 items-center">
                        <div className="lg:col-span-7 md:col-span-6 col-span-12 px-10">
                            <h2 className="font-milligramregular text-4xl text-white"
                                dangerouslySetInnerHTML={{ __html: concretPage.section_title_01 }}>
                            </h2>
                            <p className="text-white lg:text-xl md:text-lg text-md"
                                dangerouslySetInnerHTML={{ __html: concretPage.section_description_01 }}
                            ></p>
                        </div>
                        <div className="lg:col-span-5 md:col-span-6 col-span-12">
                            <img src={`/storage/${concretPage?.section_image_01}`} className="max-w-max ml-auto lg:max-h-[650px] w-full" alt="Concreto Pavesa - Experiencia y compromiso" />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mx-auto pt-14">
                    <h2 className="section-title text-center mb-12 font-integralcfheavy lg:text-5xl md:text-4xl text-3xl text-[#11312C]"
                        dangerouslySetInnerHTML={{ __html: concretPage.section_title_02 }}>
                    </h2>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2">
                        <div className="px-5 pt-5 pb-16">
                            <div className="flex items-center justify-center h-[135px] mb-5">
                                <img src={`/storage/${concretPage?.solution_image_01}`} className="max-w-full h-auto" alt="Solucion concreto 01" />
                            </div>
                            <h3 className="text-[#11312C] text-2xl font-milligrambold mb-2 text-center"
                                dangerouslySetInnerHTML={{ __html: concretPage?.solution_title_01 }}
                            ></h3>
                            <div dangerouslySetInnerHTML={{ __html: concretPage?.solution_description_01 || '' }}></div>
                        </div>
                        <div className="px-5 pt-5 pb-16 border-l border-l-[#F16623] border-solid">
                            <div className="flex items-center justify-center h-[135px] mb-5">
                                <img src={`/storage/${concretPage?.solution_image_02}`} className="max-w-full h-auto" alt="Solucion concreto 02" />
                            </div>
                            <h3 className="text-[#11312C] text-2xl font-milligrambold mb-2 text-center"
                                dangerouslySetInnerHTML={{ __html: concretPage?.solution_title_02 }}
                            ></h3>
                            <div dangerouslySetInnerHTML={{ __html: concretPage?.solution_description_02 || '' }}></div>
                        </div>
                        <div className="px-5 pt-5 pb-16 lg:border-x lg:border-x-[#F16623] lg:border-solid md:border-r md:border-r-[#F16623] md:border-solid">
                            <div className="flex items-center justify-center h-[135px] mb-5">
                                <img src={`/storage/${concretPage?.solution_image_03}`} className="max-w-full h-auto" alt="Solucion concreto 03" />
                            </div>
                            <h3 className="text-[#11312C] text-2xl font-milligrambold mb-2 text-center"
                                dangerouslySetInnerHTML={{ __html: concretPage?.solution_title_03 }}
                            ></h3>
                            <div dangerouslySetInnerHTML={{ __html: concretPage?.solution_description_03 || '' }}></div>
                        </div>
                        <div className="px-5 pt-5 pb-16">
                            <div className="flex items-center justify-center h-[135px] mb-5">
                                <img src={`/storage/${concretPage?.solution_image_04}`} className="max-w-full h-auto" alt="Solucion concreto 04" />
                            </div>
                            <h3 className="text-[#11312C] text-2xl font-milligrambold mb-2 text-center"
                                dangerouslySetInnerHTML={{ __html: concretPage?.solution_title_04 }}
                            ></h3>
                            <div dangerouslySetInnerHTML={{ __html: concretPage?.solution_description_04 || '' }}></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#11312C] rounded-t-[300px]">
                <div className="container py-32 mx-auto">
                    <div className="relative px-5">
                        <div className="sm:absolute top-0 left-0 w-full">
                            <h2 className="lg:text-6xl md:text-5xl sm:text-4xl text-2xl font-integralcfheavy text-white px-5 sm:px-28"
                                dangerouslySetInnerHTML={{ __html: concretPage?.section_title_03 }}
                            ></h2>
                        </div>
                        <img src={`/storage/${concretPage?.section_image_03}`} className="max-w-full mx-auto block w-full" alt="Seccion 3 Concreto" />
                    </div>
                </div>
            </section>
            <section className="sm:mt-[-100px] px-5">
                <div className="container-custom">
                    <div className="grid sm:grid-cols-12 items-center">
                        <div className="md:col-span-7 sm:col-span-12 relative">
                            <img src={`/storage/${concretPage?.section_image_04}`} className="max-w-full mx-auto block" alt="" />
                            <div className="sm:absolute bottom-0 right-0">
                                <h2 className="lg:text-5xl md:text-4xl text-2xl font-integralcfheavy text-[#2C9C47] lg:px-28 lg:pb-40 md:px-20 md:pb-20 px-28 pb-10"
                                    dangerouslySetInnerHTML={{ __html: concretPage?.section_title_04 }}
                                ></h2>
                            </div>
                        </div>
                        <div className="md:col-span-5 sm:col-span-12">
                            <h2 className="text-[#11312C] lg:text-5xl md:text-4xl sm:text-5xl text-3xl font-milligrambold mb-4"
                                dangerouslySetInnerHTML={{ __html: concretPage?.section_subtitle_04 }}
                            ></h2>
                            <div
                                dangerouslySetInnerHTML={{ __html: concretPage?.section_description_04 }}
                            ></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="lg:mt-[-90px] bg-[url(/images/concreto/bg-concreto-2.png)] bg-cover bg-top">
                <div className="container py-20 mx-auto">
                    <h2 className="lg:text-6xl md:text-5xl text-4xl text-center font-integralcfheavy text-[#11312C] sm:pt-28 pb-16">{concretPage?.section_title_05}</h2>
                    <img src={`/storage/${concretPage?.section_image_05}`} className="max-w-full mx-auto block" alt="Camion Pavesa sección 5" />
                </div>
                <div className="container mx-auto pb-40 px-5">
                    <div className="grid sm:grid-cols-2">
                        <div>
                            <h2 className="text-[#11312C] lg:text-5xl md:text-4xl text-2xl font-integralcfheavy"
                                dangerouslySetInnerHTML={{ __html: concretPage?.section_subtitle_05 }}
                            ></h2>
                        </div>
                        <div>
                            <p className="text-[#11312C] text-xl"
                                dangerouslySetInnerHTML={{ __html: concretPage?.section_description_05 }}
                            ></p>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto">
                    <div className="grid  sm:grid-cols-3 gap-10 py-10 px-10 bg-[#E9E9E9] rounded-[100px] z-40 relative max-w-full">
                        <div className="sm:col-span-3 mt-[-50px] text-center">
                            <h2 className="text-[#2C9C47] px-5 py-2 text-2xl sm:text-5xl font-integralcfheavy bg-[#E9E9E9] rounded-xl inline-block">{concretPage?.section_title_06}</h2>
                        </div>
                        <div className="p-5 rounded-3xl bg-white relative">
                            <p className="font-integralcfheavy text-[#2C9C47] absolute top-[-30px] left-[10px] text-5xl">1</p>
                            <p className="text-[#11312C] text-xl">{concretPage?.advantage_01}</p>
                        </div>
                        <div className="p-5 rounded-3xl bg-white relative">
                            <p className="font-integralcfheavy text-[#2C9C47] absolute top-[-30px] left-[10px] text-5xl">2</p>
                            <p className="text-[#11312C] text-xl">{concretPage?.advantage_02}</p>
                        </div>
                        <div className="p-5 rounded-3xl bg-white relative">
                            <p className="font-integralcfheavy text-[#2C9C47] absolute top-[-30px] left-[10px] text-5xl">3</p>
                            <p className="text-[#11312C] text-xl">{concretPage?.advantage_03}</p>
                        </div>
                        <div className="p-5 rounded-3xl bg-white relative">
                            <p className="font-integralcfheavy text-[#2C9C47] absolute top-[-30px] left-[10px] text-5xl">4</p>
                            <p className="text-[#11312C] text-xl">{concretPage?.advantage_04}</p>
                        </div>
                        <div className="p-5 rounded-3xl bg-white relative">
                            <p className="font-integralcfheavy text-[#2C9C47] absolute top-[-30px] left-[10px] text-5xl">5</p>
                            <p className="text-[#11312C] text-xl">{concretPage?.advantage_05}</p>
                        </div>
                    </div>
                </div>
                <div className="container-custom mx-auto sm:mt-[-50px] z-0">
                    <div className="grid grid-cols-2 items-center">
                        <div>
                            <img src={`/storage/${concretPage?.section_image_06}`} className="max-w-full mx-auto block" alt="Tabla de precios" />
                        </div>
                        <div className="">
                            <img src={`/storage/${concretPage?.section_image_07}`} className="max-w-full h-auto ml-auto" alt="Concreto pavesa Seccion 7" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ConcretoPage;
