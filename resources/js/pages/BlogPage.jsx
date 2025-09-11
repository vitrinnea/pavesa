import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const TerraceriaPage = () => {
    const [settings] = useOutletContext();
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchConcretData = async () => {
            try {
                const response = await fetch("/api/blog");
                const data = await response.json();
                setBlogs(data.blogs || []);
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
            <section className="container-custom">
                <div className="relative">
                    <img
                        src="/images/blog/bg-blog.png"
                        className="w-full h-auto block"
                        alt=""
                    />
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-0 pt-10 sm:pt-0 sm:left-20">
                        <div className="px-20">
                            <h2 className="text-white font-integralcfheavy sm:text-7xl text-shadow max-w-xl mb-3">
                                LOREM IPSUM DOLOR SIT
                            </h2>
                            <h5 className="text-white font-milligramregular text-xl text-shadow max-w-lg mb-3">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit,
                            </h5>
                            {/* <button className="bg-[#2C9C47] py-3 px-5 font-milligrambold rounded-xl flex items-center text-white">
                                MÁS
                                <svg width="18" height="11" className="ml-1" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                    <g clip-path="url(#clip0_6151_935)">
                                    <path d="M13.9609 6.20284C13.843 6.20284 13.723 6.20284 13.6051 6.20284C9.02261 6.20284 6.48767 6.20285 1.90515 6.20476C1.77226 6.20476 1.63937 6.21051 1.50648 6.1971C1.09495 6.15688 0.812029 5.85814 0.818459 5.4847C0.824889 5.12659 1.10996 4.84316 1.51077 4.80678C1.64151 4.79529 1.77654 4.79912 1.90943 4.79912C6.47909 4.79912 9.00547 4.80103 13.5751 4.79912C13.7037 4.79912 13.8366 4.82784 14.0638 4.72635C13.6394 4.37589 13.2386 4.058 12.855 3.72095C11.9247 2.90323 11.0031 2.07593 10.0793 1.25246C9.74493 0.953715 9.72564 0.490275 10.0321 0.208764C10.3451 -0.0784927 10.8616 -0.0765777 11.226 0.241319C11.9462 0.869453 12.6535 1.51099 13.3651 2.14679C14.3682 3.04111 15.3713 3.93543 16.3701 4.83167C16.9102 5.31618 16.9059 5.6877 16.3594 6.17603C14.7004 7.65828 13.0436 9.14243 11.3846 10.6228C11.2903 10.707 11.1981 10.7951 11.0888 10.8602C10.733 11.0766 10.2615 11.0307 10.0021 10.7587C9.72778 10.4734 9.7535 10.0521 10.0729 9.76674C11.2989 8.6675 12.5292 7.57018 13.7595 6.47478C13.8366 6.40584 13.9395 6.36179 14.0317 6.30434C14.0081 6.26796 13.9845 6.23349 13.9609 6.1971V6.20284Z" fill="white" /> </g>
                                    <defs> <clipPath id="clip0_6151_935"> <rect width="18" height="11" fill="white" /> </clipPath> </defs>
                                </svg>
                            </button> */}
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4 mx-5">
                        {blogs && blogs.map((item, index) => {
                            const isSpecial = [
                                0,   6,   7,  13,  14,  20,  21,  27,  28,  34,  35,  41,
                                42,  48,  49,  55,  56,  62,  63,  69,  70,  76,  77,  83,
                                84,  90,  91,  97,  98, 104, 105, 111, 112, 118, 119, 125,
                                126, 132, 133, 139, 140, 146, 147, 153, 154, 160, 161, 167,
                                168, 174, 175, 181, 182, 188, 189, 195, 196, 202, 203, 209,
                                210, 216, 217, 223, 224, 230, 231, 237, 238, 244, 245, 251,
                                252, 258, 259, 265, 266, 272, 273, 279, 280, 286, 287, 293,
                                294, 300, 301, 307, 308, 314, 315, 321, 322, 328, 329, 335,
                                336, 342, 343, 349, 350, 356, 357, 363, 364, 370, 371, 377,
                                378, 384, 385, 391, 392, 398, 399
                                ].includes(index); // Índices que tendrán col-span-2
                            return (
                                <div
                                    key={index}
                                    className={`rounded-lg border border-solid border-[#000000] p-5 group ${isSpecial ? 'sm:col-span-2' : 'sm:col-span-1'}`}
                                >
                                    <div className="relative overflow-hidden h-[380px] mb-4">
                                        <img
                                            className="w-full h-full object-cover absolute transition-all duration-300 transform group-hover:scale-110"
                                            alt={item.title}
                                            src={
                                                typeof item.image === "string"
                                                    ? item.image
                                                    : `/storage/${item.image}`
                                            }
                                        />
                                    </div>
                                    <div className="border border-solid inline-block border-[#11312C] rounded-lg py-2 px-4 text-[#11312C]">
                                        <span className="font-sans uppercase">{item.dia}&nbsp;{item.mes}</span>
                                    </div>
                                    <h2 className="mt-4 text-[#11312C] font-milligrambold text-2xl mb-1">{item.title}</h2>
                                    <p className="text-[#11312C] font-milligramregular mb-4">{item.excerpt}</p>
                                    <a href={"/blog/" + item.slug} className="text-[#11312C] font-milligrambold text-lg flex items-center">Más
                                        <svg width="12" height="8" className="ml-2" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.88542 4.51315C9.79675 4.51315 9.70647 4.51315 9.6178 4.51315C6.17098 4.51315 4.26427 4.51315 0.817446 4.51454C0.717492 4.51454 0.617537 4.51872 0.517582 4.50897C0.208045 4.47972 -0.00476139 4.26242 7.51233e-05 3.99081C0.00491164 3.73033 0.219331 3.52418 0.520807 3.49772C0.619149 3.48936 0.720716 3.49215 0.820671 3.49215C4.25782 3.49215 6.15808 3.49354 9.59523 3.49215C9.69196 3.49215 9.79191 3.51304 9.9628 3.43922C9.64359 3.18431 9.34212 2.95309 9.05354 2.70794C8.35386 2.11317 7.66062 1.51144 6.96578 0.912487C6.71428 0.695193 6.69977 0.35811 6.93031 0.153353C7.16568 -0.0555822 7.55422 -0.0541894 7.82829 0.177033C8.36998 0.633906 8.902 1.10053 9.43724 1.56297C10.1917 2.21346 10.9462 2.86395 11.6975 3.51583C12.1038 3.86823 12.1005 4.13845 11.6894 4.49364C10.4416 5.57175 9.19541 6.65125 7.94759 7.72797C7.87665 7.78926 7.80733 7.85333 7.72511 7.90069C7.45749 8.05809 7.10281 8.02466 6.90774 7.82687C6.70138 7.61932 6.72073 7.31288 6.96094 7.10534C7.8831 6.30581 8.80849 5.50768 9.73388 4.71094C9.79191 4.66079 9.8693 4.62876 9.93862 4.58697C9.92089 4.5605 9.90315 4.53543 9.88542 4.50897V4.51315Z" fill="#2C9C47"/>
                                        </svg>
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TerraceriaPage;
