import React from "react";

const Footer = ({ settings }) => {
    return (
        <footer className="bg-[#11312C] py-10 md:py-20 border-b-[20px] border-b-[#2C9C47] mt-20">
            <div className="container mx-auto text-white px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-milligrambold mb-5 text-white">
                            Quiénes somos
                        </h2>
                        <p className="font-milligramregular text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit...
                        </p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl font-milligrambold mb-5 text-white">
                            Nuestras soluciones
                        </h2>
                        <ul className="space-y-2 text-white">
                            <li>
                                <a href="/asfalto" className="footer-link">
                                    Asfalto
                                </a>
                            </li>
                            <li>
                                <a href="/concreto" className="footer-link">
                                    Concreto
                                </a>
                            </li>
                            <li>
                                <a href="/terraceria" className="footer-link">
                                    Terraceria
                                </a>
                            </li>
                            <li>
                                <a href="/obra-gris" className="footer-link">
                                    Obra Gris
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-milligrambold mb-5 text-white">
                            Contáctanos
                        </h2>
                        <a
                            href="mailto:ventas@grupopavesa.com"
                            className="block mb-2"
                        >
                            ventas@grupopavesa.com
                        </a>
                        <a href="tel:+50379511502" className="block mb-2 font-sans">
                            +503 7951 1502
                        </a>
                        <div className="flex justify-center md:justify-start gap-3 mt-4 flex-wrap">
                            {/* Íconos */}
                        </div>
                    </div>
                    <div className="text-center md:text-left">
                        <div className="mb-6">
                            {settings.site_logo ? (
                                <img
                                    src={`/storage/${settings.site_logo}`}
                                    alt={settings.site_name || "Logo"}
                                    className="max-w-[150px] mx-auto md:mx-0"
                                />
                            ) : (
                                <span className="text-xl font-bold">
                                    {settings.site_name || "PAVISA"}
                                </span>
                            )}
                        </div>
                        <button className="bg-[#2C9C47] py-4 px-6 rounded-full flex items-center justify-center mx-auto md:mx-0 text-white transition-all hover:scale-105 hover:bg-[rgba(44,156,71,0.9)] w-full sm:w-auto">
                            <span className="font-milligrambold uppercase text-sm leading-none text-center">
                                COTIZA CON
                                <br />
                                NOSOTROS
                            </span>
                            <svg width="70" height="44" className="ml-2" viewBox="0 0 70 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="70" height="44" rx="22" fill="#F0E92B"/>
                                <path d="M46.8325 23.5394C46.5739 23.5394 46.3105 23.5394 46.0519 23.5394C35.9987 23.5394 30.4375 23.5394 20.3842 23.5436C20.0927 23.5436 19.8011 23.5562 19.5096 23.5269C18.6068 23.4391 17.9861 22.7873 18.0002 21.9724C18.0143 21.191 18.6397 20.5725 19.519 20.4932C19.8059 20.4681 20.1021 20.4764 20.3936 20.4764C30.4186 20.4764 35.9611 20.4806 45.9861 20.4764C46.2682 20.4764 46.5597 20.5391 47.0582 20.3176C46.1271 19.5529 45.2478 18.8593 44.4062 18.1238C42.3654 16.3395 40.3435 14.5343 38.3168 12.7375C37.5833 12.0856 37.541 11.0743 38.2134 10.4601C38.8999 9.83325 40.0331 9.83743 40.8325 10.5311C42.4124 11.9017 43.9642 13.3016 45.5253 14.6889C47.7259 16.6404 49.9265 18.5918 52.1177 20.5475C53.3027 21.6047 53.2933 22.4154 52.0942 23.4809C48.4547 26.7153 44.8199 29.9538 41.1805 33.1839C40.9736 33.3678 40.7714 33.56 40.5316 33.7021C39.751 34.1743 38.7165 34.074 38.1476 33.4806C37.5457 32.858 37.6021 31.9387 38.3027 31.316C40.9924 28.9174 43.6914 26.523 46.3905 24.1328C46.5598 23.9824 46.7855 23.8863 46.9876 23.7609C46.9359 23.6815 46.8842 23.6063 46.8325 23.5269V23.5394Z" fill="#2C9C47"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
