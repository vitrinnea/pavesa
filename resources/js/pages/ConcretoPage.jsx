import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import HomeSlider from "../components/sliders/HomeSlider";

const ConcretoPage = () => {
    const [settings] = useOutletContext();
    const [sliders, setSliders] = useState([]);
    const [concretPage, setConcretPage] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchConcretData = async () => {
            try {
                const res = await fetch("/api/concreto");
                const data = await res.json();
                setSliders(data.sliders || []);
                setConcretPage(data.concretPage || {});
            } catch (e) {
                console.error("Error fetching concreto:", e);
            } finally {
                setLoading(false);
            }
        };
        fetchConcretData();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2C9C47]" />
            </div>
        );
    }

    return (
        <div className="w-full overflow-x-hidden">
            {sliders?.length > 0 && (
                <section className="relative h-[50vh] md:h-[70vh]">
                    <HomeSlider dataSlider={sliders} />
                </section>
            )}

            {/* Sección 1 */}
            <section className="bg-cover bg-no-repeat bg-bottom"
                style={{ backgroundImage: "url(/images/concreto/bg-concreto.png)" }}>
                <div className="container mx-auto px-4 py-12 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
                    <div className="md:col-span-7">
                        <h1
                            className="text-white font-integralcfheavy text-3xl md:text-5xl leading-tight mb-6"
                            dangerouslySetInnerHTML={{ __html: concretPage.section_title_01 || "" }}
                        />
                        <div
                            className="text-white/90 space-y-4 text-base md:text-lg leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: concretPage.section_description_01 || "" }}
                        />
                    </div>
                    <div className="md:col-span-5 flex justify-center">
                        <img
                            src={`/storage/${concretPage.section_image_01 || ""}`}
                            alt="Concreto"
                            className="w-full max-w-sm md:max-w-md rounded-xl object-cover shadow-lg"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            {/* Sección 2 - Cards */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <h2
                        className="text-center font-integralcfheavy text-3xl md:text-5xl text-[#11312C] mb-12"
                        dangerouslySetInnerHTML={{ __html: concretPage.section_title_02 || "" }}
                    />
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="bg-[#11312C] text-white rounded-3xl p-6 md:p-8 relative overflow-hidden group">
                                <span className="absolute top-4 right-5 text-5xl md:text-7xl font-bold text-[#2C9C47]/20 select-none">
                                    {i}
                                </span>
                                <p className="font-milligrambold text-xl md:text-2xl mb-4">
                                    {concretPage?.[`card_title_0${i}`]}
                                </p>
                                <p className="text-sm md:text-base leading-relaxed">
                                    {concretPage?.[`card_description_0${i}`]}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sección 3 - Imagen grande */}
            <section className="relative bg-[#11312C] rounded-t-[60px] md:rounded-t-[160px] pt-20 md:pt-32 pb-10 md:pb-0">
                <div className="container mx-auto px-4">
                    <h2
                        className="text-white font-integralcfheavy text-3xl md:text-6xl leading-tight mb-10 md:mb-0"
                        dangerouslySetInnerHTML={{ __html: concretPage.section_title_03 || "" }}
                    />
                    <img
                        src={`/storage/${concretPage.section_image_03 || ""}`}
                        alt="Concreto ilustración"
                        className="w-full max-w-5xl mx-auto rounded-2xl object-cover"
                        loading="lazy"
                    />
                </div>
            </section>

            {/* Sección 4 */}
            <section className="mt-[-40px] md:mt-[-90px]">
                <div className="container mx-auto px-4 grid md:grid-cols-12 gap-10 items-center">
                    <div className="md:col-span-7 relative">
                        <img
                            src={`/storage/${concretPage.section_image_04 || ""}`}
                            alt=""
                            className="w-full rounded-2xl object-cover"
                            loading="lazy"
                        />
                        <h3
                            className="absolute bottom-4 left-4 md:left-10 text-[#2C9C47] text-3xl md:text-5xl font-integralcfheavy drop-shadow"
                            dangerouslySetInnerHTML={{ __html: concretPage.section_title_04 || "" }}
                        />
                    </div>
                    <div className="md:col-span-5">
                        <h4
                            className="text-[#11312C] font-integralcfheavy text-3xl md:text-5xl mb-6"
                            dangerouslySetInnerHTML={{ __html: concretPage.section_subtitle_04 || "" }}
                        />
                        <div
                            className="prose prose-neutral max-w-none text-[#11312C] text-base md:text-lg leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: concretPage.section_description_04 || "" }}
                        />
                    </div>
                </div>
            </section>

            {/* Sección 5 */}
            <section
                className="mt-[-30px] md:mt-[-70px] bg-top bg-cover"
                style={{ backgroundImage: "url(/images/concreto/bg-concreto-2.png)" }}
            >
                <div className="container mx-auto px-4 pt-16 md:pt-32">
                    <h2 className="text-center text-[#11312C] font-integralcfheavy text-3xl md:text-6xl mb-10">
                        {concretPage.section_title_05}
                    </h2>
                    <img
                        src={`/storage/${concretPage.section_image_05 || ""}`}
                        alt=""
                        className="w-full max-w-4xl mx-auto rounded-2xl mb-12"
                        loading="lazy"
                    />
                    <div className="grid md:grid-cols-2 gap-10 mb-10">
                        <div>
                            <h3
                                className="text-[#11312C] font-integralcfheavy text-2xl md:text-5xl leading-tight mb-6"
                                dangerouslySetInnerHTML={{ __html: concretPage.section_subtitle_05 || "" }}
                            />
                        </div>
                        <div
                            className="text-[#11312C] text-base md:text-lg leading-relaxed space-y-4"
                            dangerouslySetInnerHTML={{ __html: concretPage.section_description_05 || "" }}
                        />
                    </div>
                </div>

                {/* Ventajas */}
                <div className="container mx-auto px-4 pb-24">
                    <div className="bg-[#E9E9E9] rounded-[40px] md:rounded-[100px] p-6 md:p-12 relative">
                        <div className="text-center mt-[-55px] mb-8">
                            <span className="inline-block bg-[#E9E9E9] px-6 py-3 rounded-xl text-[#2C9C47] font-integralcfheavy text-2xl md:text-5xl">
                                {concretPage.section_title_06}
                            </span>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className="bg-white rounded-3xl p-6 relative shadow-sm">
                                    <span className="absolute -top-5 left-4 bg-[#2C9C47] text-white w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full font-bold text-lg md:text-2xl">
                                        {i}
                                    </span>
                                    <p className="text-[#11312C] font-milligramregular text-sm md:text-base mt-6">
                                        {concretPage?.[`advantage_0${i}`]}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Imágenes finales */}
                <div className="container mx-auto px-4 pb-24">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <img
                            src={`/storage/${concretPage.section_image_06 || ""}`}
                            alt=""
                            className="w-full rounded-2xl object-cover"
                            loading="lazy"
                        />
                        <img
                            src={`/storage/${concretPage.section_image_07 || ""}`}
                            alt=""
                            className="w-full rounded-2xl object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ConcretoPage;
