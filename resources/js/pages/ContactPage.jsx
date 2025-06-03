import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import QuoteForm from "../forms/QuoteForm";

const TerraceriaPage = () => {
    const [settings] = useOutletContext();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchConcretData = async () => {
            try {
                const response = await fetch("/api/home-data");
                const data = await response.json();
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
                    <img src="/images/contacto/bg-contacto.png" className="max-w-full h-auto block" alt="" />
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="px-20">
                            <h2 className="text-white font-integralcfheavy text-7xl text-shadow max-w-xl mb-3">
                                CONTACTO
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[url(/images/contacto/bg-cotiza.png)] bg-[length:100%_100%] bg-no-repeat py-10">
                <h2 className="text-[#2C9C47] text-6xl font-integralcfheavy text-center">Cotiza tu <br/>proyecto</h2>
            </section>
            <section className="bg-[url(/images/contacto/bg-contact-2.png)] bg-[length:50%_100%] bg-no-repeat mt-10">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="lg:w-1/2 px-5">
                            <div className="flex bg-[#11312C] p-3 mt-10 rounded-xl items-center">
                                <svg width="35" height="43" viewBox="0 0 35 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.5 2C26.0365 2 33 8.92268 33 17.5C32.9999 19.5401 32.2359 21.7784 31.2295 23.8936C30.2028 26.0511 28.8228 28.2853 27.3828 30.374C24.501 34.5541 21.2608 38.3168 19.7783 39.9736L19.7773 39.9727C18.569 41.3439 16.4179 41.3414 15.2139 39.9639V39.9648C13.7563 38.3164 10.5165 34.5553 7.63086 30.376C6.18899 28.2877 4.80587 26.053 3.77637 23.8955C2.7673 21.7807 2.00006 19.5416 2 17.5C2 8.96025 8.96019 2 17.5 2ZM17.5 15.0801C16.5145 15.0801 15.6964 15.8974 15.6963 16.8828C15.6963 17.8683 16.5144 18.6865 17.5 18.6865C18.4856 18.6865 19.3037 17.8683 19.3037 16.8828C19.3036 15.8974 18.4855 15.0801 17.5 15.0801Z" fill="#2C9C47" stroke="#11312C" stroke-width="4"/>
                                </svg>
                                <p className="text-white font-milligramregular text-xl ml-2"><span className="font-sans">6</span>ta. Calle Oriente #<span className="font-sans">2</span>, Colonia Utila, Santa Tecla, La Libertad</p>
                            </div>
                            <div className="flex bg-[#11312C] p-3 mt-4 rounded-xl items-center">
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.8916 2.39844C8.13054 1.57477 9.55385 1.25138 11.0088 1.70605C12.4857 2.16763 13.714 3.34635 14.7129 4.92773L15.3174 5.87012C15.8694 6.71598 16.2779 7.29829 16.6592 7.84277C17.177 8.5821 17.6536 9.26392 18.3457 10.3975L18.4502 10.5771C19.4726 12.4336 18.5751 14.223 17.6885 15.3496C17.0006 16.2237 16.1002 17.0004 15.3457 17.5977C15.4044 17.8394 15.4791 18.1272 15.5762 18.4502C15.8958 19.5138 16.4362 20.9449 17.3145 22.417C18.9916 25.2282 21.8798 28.1709 26.9023 29.0664C26.9743 29.0094 27.056 28.9462 27.1436 28.873C27.6054 28.4872 28.2765 27.8726 29.0645 26.9922L29.0713 26.9844L29.2598 26.7842C29.7055 26.3246 30.2017 25.9274 30.7832 25.6895C31.5034 25.3948 32.21 25.4008 32.877 25.585C33.4861 25.7532 34.0672 26.0724 34.5996 26.3975C35.1242 26.7177 35.7716 27.1531 36.4336 27.5781L37.5176 28.2686C38.644 28.9991 39.8585 29.8539 40.7842 30.8516C42.084 32.2526 42.9912 34.137 42.2705 36.4736L41.9443 37.5312H41.873C41.2836 38.9936 40.3893 40.3844 39.0381 41.333C37.2943 42.5572 35.0469 42.869 32.3594 42.0742V42.0732C27.6837 40.6971 22.298 37.4101 17.8799 34.1279L17.0098 33.4717C12.561 30.071 8.82451 24.9624 6.7041 21.6035L6.30176 20.9561C4.24503 17.5908 2.98634 14.7667 1.81445 11.4717L1.74316 11.2588C1.05242 9.06373 1.93087 7.1661 3.03027 5.78906C4.14534 4.39257 5.67556 3.28166 6.64648 2.57031L6.8916 2.39844Z" fill="#2C9C47" stroke="#11312C" stroke-width="3"/>
                                </svg>
                                <div>
                                    <p className="text-white font-sans text-xl ml-2 mb-2"><span className="text-[#2C9C47] font-milligrambold">Oficinas</span> +503 2522 - 0814</p>
                                    <p className="text-white font-sans text-xl ml-2"><span className="text-[#2C9C47] font-milligrambold">Ventas</span> +503 7951 - 1502</p>
                                </div>
                            </div>
                            <div className="flex bg-[#11312C] p-3 mt-4 rounded-xl items-center">
                                <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_6151_1253)">
                                    <path d="M2.92495 0.421464L16.7375 15.6933C17.5261 16.5611 18.6453 17.0569 19.8409 17.0569C21.0364 17.0569 22.1557 16.5611 22.9442 15.6933L36.5024 0.669384C36.6042 0.545424 36.7568 0.446256 36.884 0.37188C36.2989 0.12396 35.663 0 35.0016 0H4.65469C4.01876 0 3.40826 0.12396 2.84863 0.347088C2.84863 0.347088 2.89951 0.396672 2.92495 0.421464Z" fill="#2C9C47"/>
                                    <path d="M39.0211 2.13211C38.9703 2.28086 38.8685 2.42962 38.7668 2.57837L25.2086 17.5775C23.8604 19.0651 21.9272 19.908 19.8922 19.908C17.8572 19.908 15.9239 19.0651 14.5757 17.5775L0.737734 2.30566C0.737734 2.30566 0.686859 2.23128 0.661421 2.20649C0.228984 2.90066 -0.0253906 3.69401 -0.0253906 4.56173V25.2383C-0.0253906 27.7671 2.08592 29.8 4.6551 29.8H35.002C37.5966 29.8 39.6825 27.7423 39.6825 25.2383V4.56173C39.6825 3.66922 39.4281 2.82629 38.9703 2.13211H39.0211Z" fill="#2C9C47"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_6151_1253">
                                    <rect width="39.7333" height="29.8" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                                <p className="text-white font-milligramregular text-xl ml-2">ventas@grupopavesa.com</p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 px-5">
                            <QuoteForm />
                        </div>
                    </div>
                    <div className="container mx-auto">
                        <img src="/images/contacto/camion-pavesa-contacto.png" className="max-w-full h-auto block" alt="" />
                    </div>
                </div>
            </section>
            <div className="w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.7890151907086!2d-89.2794715!3d13.6705895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f632fb9d7b49fe7%3A0x97c558524e63da76!2sPavesa%2C%20S.A.%20de%20C.V.!5e0!3m2!1ses!2ssv!4v1746491011234!5m2!1ses!2ssv"
                    className="w-full h-[500px] border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default TerraceriaPage;
