import React, { useState } from "react";

export default function QuoteForm() {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
        description: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [processing, setProcessing] = useState(false);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        setErrors({});
        try {
            const response = await fetch('/api/create-qouter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content'),
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                setErrors(result.errors || {});
            } else {
                setData({
                    name: "",
                    email: "",
                    phone: "",
                    location: "",
                    description: "",
                    message: "",
                });
                alert(result.message || "Cotización enviada correctamente.");
            }
        } catch (error) {
            alert("Ocurrió un error al enviar el formulario.");
        }
        setProcessing(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="text-white max-w-md text-4xl px-2 py-1 font-milligramregular">
                <span className="bg-transparent">
                    Puedes cotizar tu proyecto
                </span>
                <br />
                <span className="bg-[#2C9C47] px-2">
                    de forma rápida y segura
                </span>
            </h2>
            <div className="flex flex-wrap mt-10">
                <div className="w-full lg:w-1/2 lg:pr-2">
                    <input
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        className="focus:outline-none focus:ring-2 focus:ring-[#2C9C47] rounded-lg py-2 px-4 w-full bg-[#D9D9D9] text-[#11312C] placeholder-[#11312C]"
                        placeholder="Nombre completo:"
                    />
                    {errors.name && <div className="text-red-500 text-xs">{errors.name}</div>}
                </div>
                <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
                    <input
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        className="focus:outline-none focus:ring-2 focus:ring-[#2C9C47] rounded-lg py-2 px-4 w-full bg-[#D9D9D9] text-[#11312C] placeholder-[#11312C]"
                        placeholder="Correo electrónico:"
                    />
                    {errors.email && <div className="text-red-500 text-xs">{errors.email}</div>}
                </div>
            </div>
            <div className="flex flex-wrap mt-4">
                <div className="w-full lg:w-1/2 lg:pr-2">
                    <input
                        type="text"
                        name="phone"
                        value={data.phone}
                        onChange={handleChange}
                        className="focus:outline-none focus:ring-2 focus:ring-[#2C9C47] rounded-lg py-2 px-4 w-full bg-[#D9D9D9] text-[#11312C] placeholder-[#11312C]"
                        placeholder="Número telefónico:"
                    />
                    {errors.phone && <div className="text-red-500 text-xs">{errors.phone}</div>}
                </div>
                <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
                    <input
                        type="text"
                        name="location"
                        value={data.location}
                        onChange={handleChange}
                        className="focus:outline-none focus:ring-2 focus:ring-[#2C9C47] rounded-lg py-2 px-4 w-full bg-[#D9D9D9] text-[#11312C] placeholder-[#11312C]"
                        placeholder="Ubicación de proyecto:"
                    />
                    {errors.location && <div className="text-red-500 text-xs">{errors.location}</div>}
                </div>
            </div>
            <div className="w-full lg:w-100 mt-4">
                <input
                    type="text"
                    name="description"
                    value={data.description}
                    onChange={handleChange}
                    className="focus:outline-none focus:ring-2 focus:ring-[#2C9C47] rounded-lg py-2 px-4 w-full bg-[#D9D9D9] text-[#11312C] placeholder-[#11312C]"
                    placeholder="Especificación de proyecto:"
                />
                {errors.description && <div className="text-red-500 text-xs">{errors.description}</div>}
            </div>
            <div className="w-full lg:w-100 mt-4">
                <textarea
                    name="message"
                    value={data.message}
                    onChange={handleChange}
                    className="focus:outline-none focus:ring-2 focus:ring-[#2C9C47] rounded-lg py-2 px-4 w-full bg-[#D9D9D9] text-[#11312C] placeholder-[#11312C]"
                    placeholder="Mensaje adicional:"
                    rows={4}
                />
                {errors.message && <div className="text-red-500 text-xs">{errors.message}</div>}
            </div>
            <div className="w-full lg:w-100 mt-2">
                <button
                    type="submit"
                    disabled={processing}
                    className="py-3 px-7 rounded-lg bg-[#2C9C47] font-integralcfheavy text-white"
                >
                    ENVIAR
                </button>
            </div>
        </form>
    );
}
