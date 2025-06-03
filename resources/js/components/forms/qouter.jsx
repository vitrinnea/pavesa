import React from "react";
import { useForm } from "@inertiajs/react";

export default function QuoteForm() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        phone: "",
        location: "",
        specification: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/api/create-quote', {
            onSuccess: () => reset(),
            onError: (errors) => {
                console.error("Error submitting form:", errors);
            },
            preserveScroll: true,
            preserveState: true,
            onFinish: () => {
                // Optionally, you can add any additional logic after the form submission
                console.log("Form submitted successfully");
            },
        });

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
                        value={data.name}
                        onChange={e => setData('name', e.target.value)}
                        className="focus:outline-none focus:ring-2 focus:ring-[#2C9C47] rounded-lg py-2 px-4 w-full bg-[#D9D9D9] text-[#11312C] placeholder-[#11312C]"
                        placeholder="Nombre completo:"
                    />
                    {errors.name && <div className="text-red-500 text-xs">{errors.name}</div>}
                </div>
                <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
                    <input
                        type="email"
                        value={data.email}
                        onChange={e => setData('email', e.target.value)}
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
                        value={data.phone}
                        onChange={e => setData('phone', e.target.value)}
                        className="focus:outline-none focus:ring-2 focus:ring-[#2C9C47] rounded-lg py-2 px-4 w-full bg-[#D9D9D9] text-[#11312C] placeholder-[#11312C]"
                        placeholder="Número telefónico:"
                    />
                    {errors.phone && <div className="text-red-500 text-xs">{errors.phone}</div>}
                </div>
                <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
                    <input
                        type="text"
                        value={data.location}
                        onChange={e => setData('location', e.target.value)}
                        className="focus:outline-none focus:ring-2 focus:ring-[#2C9C47] rounded-lg py-2 px-4 w-full bg-[#D9D9D9] text-[#11312C] placeholder-[#11312C]"
                        placeholder="Ubicación de proyecto:"
                    />
                    {errors.location && <div className="text-red-500 text-xs">{errors.location}</div>}
                </div>
            </div>
            <div className="w-full lg:w-100 mt-4">
                <input
                    type="text"
                    value={data.specification}
                    onChange={e => setData('specification', e.target.value)}
                    className="focus:outline-none focus:ring-2 focus:ring-[#2C9C47] rounded-lg py-2 px-4 w-full bg-[#D9D9D9] text-[#11312C] placeholder-[#11312C]"
                    placeholder="Especificación de proyecto:"
                />
                {errors.specification && <div className="text-red-500 text-xs">{errors.specification}</div>}
            </div>
            <div className="w-full lg:w-100 mt-4">
                <textarea
                    value={data.message}
                    onChange={e => setData('message', e.target.value)}
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
