// resources/js/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = ({ settings }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`w-full transition-all duration-300 ${isSticky ? 'navbar-sticky' : 'absolute top-0 left-0 z-10'}`}>
            <div className="container mx-auto px-4 sm:px-6 xl:px-8 py-2">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center">
                        {settings.site_logo ? (
                            <img
                                src={`/storage/${settings.site_logo}`}
                                alt={settings.site_name || "PAVESA"}
                                className="h-14 sm:h-16"
                            />
                        ) : (
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                                    <span className="text-white text-xl font-bold">P</span>
                                </div>
                                <span className="text-xl font-bold text-primary ml-2">PAVESA</span>
                                <span className="text-xs text-gray-600 ml-1 mt-4">S.A de C.V</span>
                            </div>
                        )}
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center">
                        <ul className="flex space-x-1">
                            <li>
                                <NavLink to="/"
                                    className={({isActive}) =>
                                        `px-4 py-2 font-medium uppercase text-sm ${isActive ? 'text-primary font-semibold' : 'text-white hover:text-primary'}`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/concreto"
                                    className={({isActive}) =>
                                        `px-4 py-2 font-medium uppercase text-sm ${isActive ? 'text-primary font-semibold' : 'text-white hover:text-primary'}`
                                    }
                                >
                                    Concreto
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/asfalto"
                                    className={({isActive}) =>
                                        `px-4 py-2 font-medium uppercase text-sm ${isActive ? 'text-primary font-semibold' : 'text-white hover:text-primary'}`
                                    }
                                >
                                    Asfalto
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/terraceria"
                                    className={({isActive}) =>
                                        `px-4 py-2 font-medium uppercase text-sm ${isActive ? 'text-primary font-semibold' : 'text-white hover:text-primary'}`
                                    }
                                >
                                    Terracería
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/alquiler"
                                    className={({isActive}) =>
                                        `px-4 py-2 font-medium uppercase text-sm ${isActive ? 'text-primary font-semibold' : 'text-white hover:text-primary'}`
                                    }
                                >
                                    Alquiler
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/obra-gris"
                                    className={({isActive}) =>
                                        `px-4 py-2 font-medium uppercase text-sm ${isActive ? 'text-primary font-semibold' : 'text-white hover:text-primary'}`
                                    }
                                >
                                    Obra Gris
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog"
                                    className={({isActive}) =>
                                        `px-4 py-2 font-medium uppercase text-sm ${isActive ? 'text-primary font-semibold' : 'text-white hover:text-primary'}`
                                    }
                                >
                                    Blog
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contacto"
                                    className={({isActive}) =>
                                        `px-4 py-2 font-medium uppercase text-sm ${isActive ? 'text-primary font-semibold' : 'text-white hover:text-primary'}`
                                    }
                                >
                                    Contáctanos
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div className="hidden lg:flex items-center space-x-4">
                        <button className="text-gray-600 hover:text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                        <Link to="/contacto" className="bg-[#2C9C47] text-white px-4 py-2 rounded-full font-medium font-integralcfheavy flex items-center">
                            COTIZA
                            <svg
                                width="42"
                                height="27"
                                className="inline-block ml-2"
                                viewBox="0 0 42 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="0.0341797"
                                    y="0.914551"
                                    width="41.0684"
                                    height="25.1709"
                                    rx="12.5855"
                                    fill="#F0E92B"
                                />
                                <g clip-path="url(#clip0_6173_3)">
                                    <path
                                        d="M27.8026 14.4311C27.6465 14.4311 27.4875 14.4311 27.3313 14.4311C21.2604 14.4311 17.9022 14.4311 11.8313 14.4336C11.6553 14.4336 11.4792 14.4412 11.3032 14.4235C10.758 14.3702 10.3832 13.9744 10.3917 13.4797C10.4002 13.0053 10.7778 12.6298 11.3088 12.5816C11.482 12.5664 11.6609 12.5714 11.837 12.5714C17.8908 12.5714 21.2377 12.574 27.2915 12.5714C27.4619 12.5714 27.6379 12.6095 27.9389 12.475C27.3767 12.0108 26.8457 11.5896 26.3375 11.1431C25.1051 10.0598 23.8841 8.9638 22.6603 7.87288C22.2173 7.47711 22.1918 6.86315 22.5978 6.49021C23.0124 6.10965 23.6967 6.11219 24.1794 6.53334C25.1335 7.36548 26.0705 8.21538 27.0133 9.05767C28.3421 10.2425 29.671 11.4273 30.9942 12.6146C31.7098 13.2564 31.7041 13.7486 30.98 14.3956C28.7823 16.3592 26.5873 18.3254 24.3896 20.2865C24.2646 20.3982 24.1425 20.5149 23.9977 20.6011C23.5263 20.8878 22.9017 20.8269 22.5581 20.4667C22.1946 20.0886 22.2287 19.5305 22.6518 19.1525C24.276 17.6962 25.9059 16.2425 27.5357 14.7913C27.6379 14.7 27.7742 14.6417 27.8963 14.5655C27.8651 14.5173 27.8339 14.4717 27.8026 14.4235V14.4311Z"
                                        fill="#2C9C47"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_6173_3">
                                        <rect
                                            width="23.8462"
                                            height="14.5726"
                                            fill="white"
                                            transform="translate(9.30762 6.21362)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>

                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-gray-600 focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <nav className="lg:hidden mt-4 pb-4">
                        <div className="flex flex-col space-y-2">
                            <NavLink to="/"
                                className={({isActive}) =>
                                    `block py-2 px-4 rounded ${isActive ? 'bg-primary/10 text-primary font-semibold' : 'hover:bg-gray-100'}`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </NavLink>
                            <NavLink to="/concreto"
                                className={({isActive}) =>
                                    `block py-2 px-4 rounded ${isActive ? 'bg-primary/10 text-primary font-semibold' : 'hover:bg-gray-100'}`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                Concreto
                            </NavLink>
                            <NavLink to="/asfalto"
                                className={({isActive}) =>
                                    `block py-2 px-4 rounded ${isActive ? 'bg-primary/10 text-primary font-semibold' : 'hover:bg-gray-100'}`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                Asfalto
                            </NavLink>
                            <NavLink to="/terraceria"
                                className={({isActive}) =>
                                    `block py-2 px-4 rounded ${isActive ? 'bg-primary/10 text-primary font-semibold' : 'hover:bg-gray-100'}`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                Terracería
                            </NavLink>
                            <NavLink to="/alquiler"
                                className={({isActive}) =>
                                    `block py-2 px-4 rounded ${isActive ? 'bg-primary/10 text-primary font-semibold' : 'hover:bg-gray-100'}`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                Alquiler
                            </NavLink>
                            <NavLink to="/obra-gris"
                                className={({isActive}) =>
                                    `block py-2 px-4 rounded ${isActive ? 'bg-primary/10 text-primary font-semibold' : 'hover:bg-gray-100'}`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                Obra Gris
                            </NavLink>
                            <NavLink to="/blog"
                                className={({isActive}) =>
                                    `block py-2 px-4 rounded ${isActive ? 'bg-primary/10 text-primary font-semibold' : 'hover:bg-gray-100'}`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                Blog
                            </NavLink>
                            <NavLink to="/contacto"
                                className={({isActive}) =>
                                    `block py-2 px-4 rounded ${isActive ? 'bg-primary/10 text-primary font-semibold' : 'hover:bg-gray-100'}`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                Contáctanos
                            </NavLink>
                            <Link to="/contacto" className="bg-primary text-white px-4 py-2 rounded-full font-medium text-center" onClick={() => setIsOpen(false)}>
                                COTIZA
                            </Link>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
