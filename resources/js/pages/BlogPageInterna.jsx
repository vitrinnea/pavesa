import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useParams } from 'react-router-dom';

const BlogInternaPage = () => {
    const [fullUrl, setFullUrl] = useState('');
    const [settings] = useOutletContext();
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);
    const [article, setArticle] = useState([]);
    const { slug } = useParams();

    useEffect(() => {
        const fetchConcretData = async () => {
            try {
                const response = await fetch("/api/blog/" + slug);
                const data = await response.json();
                setBlogs(data.blogs || []);
                setArticle(data.article || []);
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
                        <h1 className="text-4xl font-bold mb-4 font-integralcfheavy text-[#11312C]">
                            {article.title}
                        </h1>
                        <div className="border border-solid inline-block border-[#11312C] rounded-lg py-2 px-4 mb-3 text-[#11312C]">
                            <span className="font-sans uppercase">GRUPO PAVESA</span>
                        </div>
                        <div className="w-100 text-center">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-100 h-auto m-auto mb-5"
                            />
                        </div>
                        <p className="text-lg text-black mb-6">
                            <em>{article.excerpt}</em>
                        </p>
                        <div className="prose max-w-none text-black text-justify center-img"
                            dangerouslySetInnerHTML={{ __html: article.content }}>
                        </div>
                        <div class="flex justify-start mt-8">
                            <p>Compartir en:</p>
                            <a href={"https://www.linkedin.com/cws/share?url=" + fullUrl} class="mx-2">
                                <img src="/images/home/linkedin.png" alt="Share Linkedin Paves" />
                            </a>
                            <a href={"http://www.facebook.com/sharer.php?u=" + fullUrl} class="mx-2">
                                <img src="/images/home/facebook.png" alt="Share Facebook Pavesa" />
                            </a>
                            <a href={"https://twitter.com/intent/tweet?url=" + fullUrl} class="mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2C9C47" width="24" height="24">
                                    <path d="M23.954 4.569a10 10 0 0 1-2.825.775 4.932 4.932 0 0 0 2.163-2.724 9.865 9.865 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482A13.94 13.94 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.574 4.897 4.897 0 0 1-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.918 4.918 0 0 0 4.588 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.209c9.142 0 14.307-7.721 13.995-14.646a9.936 9.936 0 0 0 2.411-2.534z"/>
                                </svg>
                            </a>
                            {/* <a href={"https://www.linkedin.com/cws/share?url=" + fullUrl} class="mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2C9C47" width="24" height="24">
                                    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v.511l-8 5.333-8-5.333V6h16zM4 18V8.489l7.447 4.965a1 1 0 0 0 1.106 0L20 8.489V18H4z"/>
                                </svg>
                            </a> */}
                        </div>
                    </div>
                    <aside className="col-span-12 md:col-span-4">
                        <h2 className="text-2xl font-semibold mb-6 text-[#11312C] font-milligrambold text-center">
                            Artículos Recientes
                        </h2>
                        <div className="space-y-6">
                            {blogs.map((blog, index) => (
                                <article key={index} className="border border-gray-300 rounded-lg p-4 flex flex-col">
                                    <a href={"/blog/" + blog.slug}>
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-full h-40 object-cover rounded-md mb-4"
                                        />
                                    </a>
                                    <a href={"/blog/" + blog.slug}>
                                        <h3 className="font-semibold mb-2 font-integralcfheavy text-[#11312C]">
                                            {blog.title}
                                        </h3>
                                    </a>
                                    <a href={"/blog/" + blog.slug} className="text-[#2C9C47] font-milligrambold text-lg flex items-center">Más 
                                        <svg width="12" height="8" className="ml-2" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.88542 4.51315C9.79675 4.51315 9.70647 4.51315 9.6178 4.51315C6.17098 4.51315 4.26427 4.51315 0.817446 4.51454C0.717492 4.51454 0.617537 4.51872 0.517582 4.50897C0.208045 4.47972 -0.00476139 4.26242 7.51233e-05 3.99081C0.00491164 3.73033 0.219331 3.52418 0.520807 3.49772C0.619149 3.48936 0.720716 3.49215 0.820671 3.49215C4.25782 3.49215 6.15808 3.49354 9.59523 3.49215C9.69196 3.49215 9.79191 3.51304 9.9628 3.43922C9.64359 3.18431 9.34212 2.95309 9.05354 2.70794C8.35386 2.11317 7.66062 1.51144 6.96578 0.912487C6.71428 0.695193 6.69977 0.35811 6.93031 0.153353C7.16568 -0.0555822 7.55422 -0.0541894 7.82829 0.177033C8.36998 0.633906 8.902 1.10053 9.43724 1.56297C10.1917 2.21346 10.9462 2.86395 11.6975 3.51583C12.1038 3.86823 12.1005 4.13845 11.6894 4.49364C10.4416 5.57175 9.19541 6.65125 7.94759 7.72797C7.87665 7.78926 7.80733 7.85333 7.72511 7.90069C7.45749 8.05809 7.10281 8.02466 6.90774 7.82687C6.70138 7.61932 6.72073 7.31288 6.96094 7.10534C7.8831 6.30581 8.80849 5.50768 9.73388 4.71094C9.79191 4.66079 9.8693 4.62876 9.93862 4.58697C9.92089 4.5605 9.90315 4.53543 9.88542 4.50897V4.51315Z" fill="#2C9C47"/>
                                        </svg>
                                    </a>       
                                </article>
                            ))}
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
};

export default BlogInternaPage;
