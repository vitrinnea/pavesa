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
                <div className="container-custom bg-[url(/images/concreto/bg-concreto.png)] bg-bottom bg-cover bg-no-repeat px-4">
                    <div className="grid grid-cols-1 md:grid-cols-12 py-10 items-center">
                        <div className="md:col-span-7 col-span-1 px-0 md:px-10">
                            <h2 className="font-milligramregular text-2xl md:text-4xl text-white"
                                dangerouslySetInnerHTML={{ __html: concretPage.section_title_01 }}>
                            </h2>
                            <p className="text-white text-base md:text-xl"
                                dangerouslySetInnerHTML={{ __html: concretPage.section_description_01 }}
                            ></p>
                        </div>
                        <div className="md:col-span-5 col-span-1 mt-8 md:mt-0">
                            <img src={`/storage/${concretPage?.section_image_01}`} className="w-full max-w-[400px] md:max-w-max ml-auto max-h-[400px] md:max-h-[650px]" alt="Concreto Pavesa - Experiencia y compromiso" />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mx-auto pt-14 px-4">
                    <h2 className="section-title text-center mb-12 font-integralcfheavy text-2xl md:text-5xl text-[#11312C]"
                        dangerouslySetInnerHTML={{ __html: concretPage.section_title_02 }}>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
            <section className="bg-[#11312C] rounded-t-[80px] md:rounded-t-[300px]">
                <div className="container py-16 md:py-32 mx-auto px-4">
                    <div className="relative">
                        <div className="absolute top-0 left-0 w-full">
                            <h2 className="text-2xl md:text-6xl font-integralcfheavy text-white px-4 md:px-28"
                                dangerouslySetInnerHTML={{ __html: concretPage?.section_title_03 }}
                            ></h2>
                        </div>
                        <img src={`/storage/${concretPage?.section_image_03}`} className="w-full max-w-full mx-auto block mt-16 md:mt-0" alt="Seccion 3 Concreto" />
                    </div>
                </div>
            </section>
            <section className="mt-[-40px] md:mt-[-100px]">
                <div className="container-custom px-4">
                    <div className="grid grid-cols-1 md:grid-cols-12 items-center">
                        <div className="md:col-span-7 col-span-1 relative">
                            <img src={`/storage/${concretPage?.section_image_04}`} className="w-full max-w-full mx-auto block" alt="" />
                            <div className="absolute bottom-0 right-0">
                                <h2 className="text-2xl md:text-5xl font-integralcfheavy text-[#2C9C47] px-4 md:px-28 pb-10 md:pb-40"
                                    dangerouslySetInnerHTML={{ __html: concretPage?.section_title_04 }}
                                ></h2>
                            </div>
                        </div>
                        <div className="md:col-span-5 col-span-1 mt-8 md:mt-0">
                            <h2 className="text-[#11312C] text-2xl md:text-5xl font-milligrambold mb-4"
                                dangerouslySetInnerHTML={{ __html: concretPage?.section_subtitle_04 }}
                            ></h2>
                            <div dangerouslySetInnerHTML={{ __html: concretPage?.section_description_04 }}></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-[-40px] md:mt-[-90px] bg-[url(/images/concreto/bg-concreto-2.png)] bg-cover bg-top">
                <div className="container py-10 md:py-20 mx-auto px-4">
                    <h2 className="text-2xl md:text-6xl text-center font-integralcfheavy text-[#11312C] pt-10 md:pt-28 pb-8 md:pb-16">{concretPage?.section_title_05}</h2>
                    <img src={`/storage/${concretPage?.section_image_05}`} className="w-full max-w-full mx-auto block" alt="Camion Pavesa sección 5" />
                </div>
                <div className="container mx-auto pb-20 md:pb-40 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h2 className="text-[#11312C] text-2xl md:text-5xl font-integralcfheavy"
                                dangerouslySetInnerHTML={{ __html: concretPage?.section_subtitle_05 }}
                            ></h2>
                        </div>
                        <div>
                            <p className="text-[#11312C] text-base md:text-xl"
                                dangerouslySetInnerHTML={{ __html: concretPage?.section_description_05 }}
                            ></p>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10 px-4 md:px-10 bg-[#E9E9E9] rounded-[40px] md:rounded-[100px] z-40 relative">
                        <div className="col-span-1 md:col-span-3 mt-[-30px] md:mt-[-70px] text-center">
                            <h2 className="text-[#2C9C47] px-2 md:px-5 py-2 text-2xl md:text-5xl font-integralcfheavy bg-[#E9E9E9] rounded-xl inline-block">{concretPage?.section_title_06}</h2>
                        </div>
                        {[1,2,3,4,5].map(i => (
                            <div key={i} className="p-5 rounded-3xl bg-white relative">
                                <p className="font-integralcfheavy text-[#2C9C47] absolute top-[-20px] md:top-[-30px] left-[10px] text-2xl md:text-5xl">{i}</p>
                                <p className="text-[#11312C] text-base md:text-xl">{concretPage?.[`advantage_0${i}`]}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="container-custom mx-auto mt-[-20px] md:mt-[-50px] z-0 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
                        <div>
                            <img src={`/storage/${concretPage?.section_image_06}`} className="w-full max-w-full mx-auto block" alt="Tabla de precios" />
                        </div>
                        <div>
                            <img src={`/storage/${concretPage?.section_image_07}`} className="w-full h-auto ml-auto" alt="Concreto pavesa Seccion 7" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ConcretoPage;
