import React from "react";

const Footer = ({ settings }) => {
    return (
        <footer className="bg-[#11312C] py-10 md:py-20 border-b-[20px] border-b-[#2C9C47] mt-20">
            <div className="container mx-auto text-white px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-milligrambold mb-5">

                            Quiénes somos
                        </h2>
                        <p className="font-milligramregular">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit...
                        </p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl font-milligrambold mb-5">
                            Nuestras soluciones
                        </h2>
                        <ul className="space-y-2">
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
                        <h2 className="text-2xl font-milligrambold mb-5">
                            Contáctanos
                        </h2>
                        <a
                            href="mailto:ventas@grupopavesa.com"
                            className="block mb-2"
                        >
                            ventas@grupopavesa.com
                        </a>
                        <a href="tel:+50379511502" className="block mb-2">
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
                            <svg
                                className="ml-2"
                                width="42"
                                height="27"
                                viewBox="0 0 42 27"
                                fill="none"
                            >
                                ...
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
