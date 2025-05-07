import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import HomeSlider from "../components/sliders/HomeSlider";

const ConcretoPage = () => {
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
                <div className="container-custom bg-[url(/images/concreto/bg-concreto.png)] bg-bottom bg-cover bg-no-repeat">
                    <div className="grid grid-cols-12 py-10 items-center">
                        <div className="lg:col-span-7 md:col-span-6 col-span-12 px-10">
                            <h2 className="font-milligramregular text-4xl text-white">
                                Experiencia y compromiso<br/>
                                <span className="font-milligrambold bg-[#2C9C47]">en <b className="font-milligrambold">cada proyecto</b></span>
                            </h2>
                            <p className="text-white lg:text-xl md:text-lg text-md">Con más de <span className="font-sans">18</span> años de experiencia, en PAVESA hemos sido parte del desarrollo del país a través de proyectos de construcción de todo tipo, colaborando tanto con instituciones gubernamentales como con clientes privados. Hoy, fortalecemos nuestra oferta al incorporar la producción de concreto premezclado, reafirmando nuestro compromiso de ofrecer soluciones a la medida de cada proyecto. Respaldados por un equipo de más de <span className="font-sans">700</span> colaboradores, tecnología avanzada y la capacidad para atender proyectos de cualquier escala, estamos preparados para llevar tus ideas a la realidad con eficiencia y calidad.</p>
                        </div>
                        <div className="lg:col-span-5 md:col-span-6 col-span-12">
                            <img src="/images/concreto/camion-concreto-1.png" className="max-w-max ml-auto max-h-[650px]" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mx-auto pt-14">
                    <h2 className="section-title text-center mb-12 font-integralcfheavy lg:text-5xl md:text-4xl text-3xl text-[#11312C]">
                        soluciones completas <br/>en concreto
                    </h2>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
                        <div className="px-5 pt-5 pb-16">
                            <div className="flex items-center justify-center h-[135px] mb-5">
                                <img src="/images/concreto/solucion-concreto-1.png" className="max-w-full h-auto" alt="" />
                            </div>
                            <h3 className="text-[#11312C] text-2xl font-milligrambold mb-2 text-center">Suministro de concreto premezclado</h3>
                            <ul className="text-[#11312C] list-disc list-inside leading-10">
                                <li>Variedad y personalización de diseños.</li>
                                <li>Servicios de bombeo.</li>
                            </ul>
                        </div>
                        <div className="px-5 pt-5 pb-16 border-l border-l-[#F16623] border-solid">
                            <div className="flex items-center justify-center h-[135px] mb-5">
                                <img src="/images/concreto/solucion-concreto-2.png" className="max-w-full h-auto" alt="" />
                            </div>
                            <h3 className="text-[#11312C] text-2xl font-milligrambold mb-2 text-center">Transporte en mixers y bombeo especializado</h3>
                            <ul className="text-[#11312C] list-disc list-inside leading-10">
                                <li>Equipos modernos y eficientes.</li>
                                <li>Opción de envío en camión de <span className="font-sans">10m³.</span></li>
                                <li>Envíos en todo el país y flexibilidad de horario.</li>
                            </ul>
                        </div>
                        <div className="px-5 pt-5 pb-16 lg:border-x lg:border-x-[#F16623] lg:border-solid md:border-r md:border-r-[#F16623] md:border-solid">
                            <div className="flex items-center justify-center h-[135px] mb-5">
                                <img src="/images/concreto/solucion-concreto-3.png" className="max-w-full h-auto" alt="" />
                            </div>
                            <h3 className="text-[#11312C] text-2xl font-milligrambold mb-2 text-center">Calidad<br/>&nbsp;</h3>
                            <p className="text-[#11312C]">Garantizamos la calidad del concreto con el respaldo de laboratorios certificados cumpliendo con normativas ASTM y ACI.</p>
                        </div>
                        <div className="px-5 pt-5 pb-16">
                            <div className="flex items-center justify-center h-[135px] mb-5">
                                <img src="/images/concreto/solucion-concreto-4.png" className="max-w-full h-auto" alt="" />
                            </div>
                            <h3 className="text-[#11312C] text-2xl font-milligrambold mb-2 text-center">Asesoramiento <br/>técnico</h3>
                            <p className="text-[#11312C]">Visitas técnicas a obra y recomendaciones según el proyecto.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#11312C] rounded-t-[300px]">
                <div className="container py-32 mx-auto">
                    <div className="relative">
                        <div className="absolute top-0 left-0 w-full">
                            <h2 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-integralcfheavy text-white px-28">Capacidades <br/>operativas</h2>
                        </div>
                        <img src="/images/concreto/capacidades-operativas-l.png" className="max-w-full mx-auto block" alt="" />
                    </div>
                </div>
            </section>
            <section className="mt-[-100px]">
                <div className="container-custom">
                    <div className="grid grid-cols-12 items-center">
                        <div className="md:col-span-7 col-span-12 relative">
                            <img src="/images/concreto/control-calidad.png" className="max-w-full mx-auto block" alt="" />
                            <div className="absolute bottom-0 right-0">
                                <h2 className="lg:text-5xl md:text-4xl text-3xl font-integralcfheavy text-[#2C9C47] lg:px-28 lg:pb-40 md:px-20 md:pb-20 px-28 pb-28">Capacidades <br/>operativas</h2>
                            </div>
                        </div>
                        <div className="md:col-span-5 col-span-12">
                            <h2 className="text-[#11312C] lg:text-5xl md:text-4xl sm:text-5xl text-3xl font-milligrambold mb-4">Concreto que <br/>cumple con los <br/><span className="bg-[#2C9C47] px-2 text-white font-milligrambold">más altos estándares</span></h2>
                            <ul className="text-[#11312C] lg:text-xl sm:text-lg text-md list-disc list-inside leading-10">
                                <li>Pruebas de revenimiento, resistencia, y uniformidad.</li>
                                <li>Control de calidad bajo normativas ASTM y ACI.</li>
                                <li>Ensayos realizados con laboratorios acreditados y resultados transparentes.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-[-90px] bg-[url(/images/concreto/bg-concreto-2.png)] bg-cover bg-top">
                <div className="container py-20 mx-auto">
                    <h2 className="lg:text-6xl md:text-5xl text-4xl text-center font-integralcfheavy text-[#11312C] pt-28 pb-16">TIPOS DE CONCRETO</h2>
                    <img src="/images/concreto/tipos-concreto.png" className="max-w-full mx-auto block" alt="" />
                </div>
                <div className="container mx-auto pb-40">
                    <div className="grid grid-cols-2">
                        <div>
                            <h2 className="text-[#11312C] lg:text-5xl md:text-4xl text-3xl font-integralcfheavy">CONCRETO <br/>CONVENCIONAL</h2>
                        </div>
                        <div>
                            <p className="text-[#11312C] text-xl">Diseñado para estructuras de medianas y grandes dimensiones, ideal para colados masivos y climas cálidos donde la temperatura influye en sus propiedades, en estado fresco y endurecido.</p>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto">
                    <div className="grid grid-cols-3 gap-10 py-10 px-10 bg-[#E9E9E9] rounded-[100px] z-40 relative">
                        <div className="col-span-3 mt-[-70px] text-center">
                            <h2 className="text-[#2C9C47] px-5 py-2 text-5xl font-integralcfheavy bg-[#E9E9E9] rounded-xl inline-block">VENTAJAS</h2>
                        </div>
                        <div className="p-5 rounded-3xl bg-white relative">
                            <p className="font-integralcfheavy text-[#2C9C47] absolute top-[-30px] left-[10px] text-5xl">1</p>
                            <p className="text-[#11312C] text-xl">Disminución de fisuras en la estructura</p>
                        </div>
                        <div className="p-5 rounded-3xl bg-white relative">
                            <p className="font-integralcfheavy text-[#2C9C47] absolute top-[-30px] left-[10px] text-5xl">2</p>
                            <p className="text-[#11312C] text-xl">Mejora la manejabilidad del concreto en obra</p>
                        </div>
                        <div className="p-5 rounded-3xl bg-white relative">
                            <p className="font-integralcfheavy text-[#2C9C47] absolute top-[-30px] left-[10px] text-5xl">3</p>
                            <p className="text-[#11312C] text-xl">Estabiliza la temperatura del elemento</p>
                        </div>
                        <div className="p-5 rounded-3xl bg-white relative">
                            <p className="font-integralcfheavy text-[#2C9C47] absolute top-[-30px] left-[10px] text-5xl">4</p>
                            <p className="text-[#11312C] text-xl">Incrementa la durabilidad del elemento</p>
                        </div>
                        <div className="p-5 rounded-3xl bg-white relative">
                            <p className="font-integralcfheavy text-[#2C9C47] absolute top-[-30px] left-[10px] text-5xl">5</p>
                            <p className="text-[#11312C] text-xl">Optimiza las propiedades en estado fresco y endurecido</p>
                        </div>
                    </div>
                </div>
                <div className="container-custom mx-auto mt-[-50px] z-0">
                    <div className="grid grid-cols-2 items-center">
                        <div>
                            <img src="/images/concreto/informacion-concreto.png" className="max-w-full mx-auto block" alt="" />
                        </div>
                        <div className="">
                            <img src="/images/concreto/info-concreto-2.png" className="max-w-full mx-auto block" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ConcretoPage;
