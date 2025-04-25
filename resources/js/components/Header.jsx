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
                        <Link to="/contacto" className="bg-[#2C9C47] text-white px-4 py-2 rounded-full font-medium flex items-center">
                            COTIZA
                            <span className="ml-2 bg-[#F0E92B] rounded-full p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 text-[#2C9C47]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            </span>

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
