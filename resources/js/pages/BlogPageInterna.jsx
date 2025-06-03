import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useParams } from 'react-router-dom';

const BlogInternaPage = () => {
    const [settings] = useOutletContext();
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);
    const { slug } = useParams();

    useEffect(() => {
        const fetchConcretData = async () => {
            try {
                const response = await fetch("/api/blog/" + slug);
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
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-0">
                        <div className="px-20">
                            <h2 className="text-white font-integralcfheavy text-7xl text-shadow max-w-xl mb-3">
                                LOREM IPSUM DOLOR SIT
                            </h2>
                            <h5 className="text-white font-milligramregular text-xl text-shadow max-w-lg mb-3">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit,
                            </h5>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-12 md:col-span-8">
                        <h1 className="text-4xl font-bold mb-4 text-gray-900">
                            Título del Blog
                        </h1>
                        <p className="text-lg text-gray-700 mb-6">
                            Extracto del blog que resume el contenido principal
                            y atrae al lector.
                        </p>
                        <img
                            src="ruta-de-la-imagen.jpg"
                            alt="Imagen del blog"
                            className="w-full h-auto rounded-lg mb-6 object-cover"
                        />
                        <div className="prose max-w-none text-gray-800">
                            <p>
                                Contenido completo del blog con texto
                                enriquecido, párrafos, imágenes, enlaces y más.
                            </p>
                            <p>
                                Más contenido detallado para informar y
                                enganchar al lector.
                            </p>
                        </div>
                    </div>
                    <aside className="col-span-12 md:col-span-4">
                        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
                            Artículos Recientes
                        </h2>
                        <div className="space-y-6">
                            <article className="border border-gray-300 rounded-lg p-4 flex flex-col">
                                <img
                                    src="/images/home/blog-1.png"
                                    alt="Artículo 1"
                                    className="w-full h-40 object-cover rounded-md mb-4"
                                />
                                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                                    Título del Artículo 1
                                </h3>
                                <a
                                    href="#"
                                    className="mt-auto inline-block text-green-700 font-semibold hover:underline"
                                >
                                    Ver más
                                </a>
                            </article>
                            <article className="border border-gray-300 rounded-lg p-4 flex flex-col">
                                <img
                                    src="/images/home/blog-2.png"
                                    alt="Artículo 2"
                                    className="w-full h-40 object-cover rounded-md mb-4"
                                />
                                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                                    Título del Artículo 2
                                </h3>
                                <a
                                    href="#"
                                    className="mt-auto inline-block text-green-700 font-semibold hover:underline"
                                >
                                    Ver más
                                </a>
                            </article>
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
};

export default BlogInternaPage;
