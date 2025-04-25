// resources/js/components/Services.jsx
import React from "react";
import { Link } from "react-router-dom";

const Services = ({ services }) => {
    return (
        <>
            <div className="flex h-[500px] overflow-hidden">
                <div className="group flex w-full transition-all duration-500">
                    <div className="relative flex-1 overflow-hidden transition-all duration-500 group-hover:flex-[0.5] hover:flex-[2] cursor-pointer">
                        <img
                            src="https://via.placeholder.com/400x500?text=Camión"
                            className="h-full w-full object-cover"
                            alt="Camión de concreto"
                        />
                        <div className="absolute bottom-4 left-4 bg-green-600 text-white text-sm font-semibold p-2 rounded group-hover:flex hidden">
                            Suministro y bombeo <br /> de concreto premezclado
                            en El Salvador
                        </div>
                    </div>

                    <div className="relative flex-1 overflow-hidden transition-all duration-500 group-hover:flex-[0.5] hover:flex-[2] cursor-pointer">
                        <img
                            src="https://via.placeholder.com/400x500?text=Asfalto"
                            className="h-full w-full object-cover"
                            alt="Aplicación de asfalto"
                        />
                    </div>

                    <div className="relative flex-1 overflow-hidden transition-all duration-500 group-hover:flex-[0.5] hover:flex-[2] cursor-pointer">
                        <img
                            src="https://via.placeholder.com/400x500?text=Ensayo+Concreto"
                            className="h-full w-full object-cover"
                            alt="Ensayo de concreto"
                        />
                    </div>

                    <div className="relative flex-1 overflow-hidden transition-all duration-500 group-hover:flex-[0.5] hover:flex-[2] cursor-pointer">
                        <img
                            src="https://via.placeholder.com/400x500?text=Excavadora"
                            className="h-full w-full object-cover"
                            alt="Excavadora trabajando"
                        />
                    </div>
                </div>
            </div>

            <div className="text-center mt-6 px-4">
                <h2 className="text-2xl font-bold mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </h2>
                <a
                    href="#"
                    className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-full font-bold shadow hover:bg-green-700 transition"
                >
                    COTIZA AHORA <span className="ml-2">➡️</span>
                </a>
            </div>
        </>
    );
};

export default Services;
