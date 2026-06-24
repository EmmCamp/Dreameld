import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom'

import logoDark from '../assets/images/logo-dark.png'
import logoLight from '../assets/images/logo-light.png'
import logoWhite from '../assets/images/logo-white.png'
import usaflag from '../assets/images/flags/usa.png'
import germanyglag from '../assets/images/flags/germany.png'
import italyflag from '../assets/images/flags/italy.png'
import russiaflag from '../assets/images/flags/russia.png'
import spainflag from '../assets/images/flags/spain.png'
import shopImg from '../assets/images/shop/com.jpg'

import { LuSearch, BiShoppingBag } from '../assets/icons/vander'

export default function Navbar({ navClass, ulClass, navLight }) {
    let [isOpen, setMenu] = useState(true);
    let [scroll, setScroll] = useState(false);
    let [country, setCountry] = useState(false);
    let [search, setSearch] = useState(false);
    let [cartitem, setCartitem] = useState(false);

    const [manu, setManu] = useState('');
    const location = useLocation();

    useEffect(() => {
        var current = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
        setManu(current)
    }, [location.pathname.substring(location.pathname.lastIndexOf('/') + 1)])

    useEffect(() => {
        function scrollHandler() {
            setScroll(window.scrollY > 50)
        }
        window.addEventListener('scroll', scrollHandler);

        let countryModal = () => { setCountry(false) }
        document.addEventListener('mousedown', countryModal);

        let searchModal = () => { setSearch(false) }
        document.addEventListener('mousedown', searchModal);

        let cartModal = () => { setCartitem(false) }
        document.addEventListener('mousedown', cartModal);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
            document.removeEventListener('mousedown', countryModal);
            document.removeEventListener('mousedown', searchModal);
            document.removeEventListener('mousedown', cartModal);
        };

    }, []);

    const toggleMenu = () => {
        setMenu(!isOpen)
        if (document.getElementById("navigation")) {
            const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
            anchorArray.forEach(element => {
                element.addEventListener('click', (elem) => {
                    const target = elem.target.getAttribute("href")
                    if (target !== "") {
                        if (elem.target.nextElementSibling) {
                            var submenu = elem.target.nextElementSibling.nextElementSibling;
                            submenu.classList.toggle('open');
                        }
                    }
                })
            });
        }
    }




    return (

        <nav id="topnav" className={`${scroll ? 'nav-sticky' : ''} ${navClass}`}>
            <div className="container relative">
                
                {/* === LOGO DINÁMICO DE DREAMELD (CAMBIA EN MODO OSCURO) === */}
<Link className="logo flex items-center" to="/index" style={{ height: 'auto', padding: '10px 0' }}>
    {/* LOGO VERSIÓN DÍA: Se muestra normalmente, se oculta en dark mode */}
   <img 
    src="/Dream1.png" 
    className="inline-block dark:hidden"
    alt="Dreameld" 
    style={{ 
        height: '40px', 
        width: 'auto', 
        maxHeight: 'none', 
        maxWidth: '220px',
        display: 'block',
        objectFit: 'contain',
        // ¡Aquí está la magia interactiva!
        filter: typeof scroll !== 'undefined' && scroll ? 'none' : 'brightness(0) invert(1)'
    }} 
/>
    {/* LOGO VERSIÓN NOCHE: Se oculta normalmente, aparece solo en dark mode */}
    <img 
        src="/Dreameld_3A.png" 
        className="hidden dark:inline-block"
        alt="Dreameld Night" 
        style={{ 
            height: '40px', 
            width: 'auto', 
            maxHeight: 'none', 
            maxWidth: '220px',
            display: 'block',
            objectFit: 'contain'
        }} 
    />
</Link>
{/* === AQUÍ TERMINA LOGO DINÁMICO === */}
                {/* === AQUÍ TERMINA LOGO NUEVO === */}

                {/* ===================================== */}
                {/* CÓDIGO ORIGINAL DE HOXIA RESPALDADO ABAJO: */}
                {/* <nav id="topnav" className={`${scroll ? 'nav-sticky' : ''} ${navClass}`}> */}
                {/* <div className="container relative"> */}
                {/* <Link className="logo" to="/index"> */}
                {/* {navLight ? */}
                {/* <span className="inline-block dark:hidden"> */}
                {/* <img src={logoDark} className="h-7 l-dark" alt="" /> */}
                {/* <img src={logoLight} className="h-7 l-light" alt="" /> */}
                {/* </span> : */}
                {/* <span className="inline-block"> */}
                {/* <img src={logoDark} className="h-7 inline-block" alt="" /> */}
                {/* </span> */}
                {/* } */}
                {/* </Link> */}
                {/* CÓDIGO ORIGINAL DE HOXIA RESPALDADO */}

                <div className="menu-extras">
                    <div className="menu-item">
                        <Link className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>
                {/* Menu de Idioma / pais
                <ul className="buy-button list-none mb-0">
                    <li className="dropdown inline-block relative">
                        <button onClick={() => setSearch(!search)} className="dropdown-toggle h-8 w-8 inline-flex items-center text-center justify-center text-base bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-full align-middle transition-all duration-500" type="button">
                            <LuSearch />
                        </button>
                        <div className={`${search ? '' : 'hidden'} dropdown-menu absolute end-0 m-0 mt-4 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 `}>
                            <div className="relative">
                                <LuSearch className="text-lg absolute top-2 end-3" />
                                <input type="text" className="form-input h-9 pe-10 sm:w-44 w-36 border-none bg-white dark:bg-slate-900 focus:ring-0" name="s" id="navSearch" placeholder="Search..." />
                            </div>
                        </div>
                    </li>
                    
                    <li className="dropdown inline-block relative ps-1">
                        <button onClick={() => setCountry(!country)} className="dropdown-toggle h-8 w-8 inline-flex items-center text-center justify-center text-base bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-full align-middle transition-all duration-500" type="button">
                            <img src={usaflag} alt="" />
                        </button>
                        <div className={`${country ? '' : 'hidden'} dropdown-menu absolute end-0 m-0 mt-4 z-10 w-36 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 `}>
                            <ul className="py-2 text-start">
                                <li className="my-1">
                                    <Link to="" className="flex items-center text-[14px] font-medium py-1.5 px-4 hover:text-sky-500"><img src={germanyglag} className="h-6 w-6 rounded-full me-2 shadow dark:shadow-gray-800" alt="" /> German</Link>
                                </li>
                                <li className="my-1">
                                    <Link to="" className="flex items-center text-[14px] font-medium py-1.5 px-4 hover:text-sky-500"><img src={italyflag} className="h-6 w-6 rounded-full me-2 shadow dark:shadow-gray-800" alt="" /> Italian</Link>
                                </li>
                                <li className="my-1">
                                    <Link to="" className="flex items-center text-[14px] font-medium py-1.5 px-4 hover:text-sky-500"><img src={russiaflag} className="h-6 w-6 rounded-full me-2 shadow dark:shadow-gray-800" alt="" /> Russian</Link>
                                </li>
                                <li className="my-1">
                                    <Link to="" className="flex items-center text-[14px] font-medium py-1.5 px-4 hover:text-sky-500"><img src={spainflag} className="h-6 w-6 rounded-full me-2 shadow dark:shadow-gray-800" alt="" /> Spanish</Link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="dropdown inline-block relative ps-1">
                        <button onClick={() => setCartitem(!cartitem)} className="dropdown-toggle h-8 w-8 inline-flex items-center text-center justify-center text-base bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-full align-middle transition-all duration-500" type="button">
                            <BiShoppingBag />
                        </button>
                        <div className={`${cartitem ? '' : 'hidden'} dropdown-menu absolute end-0 m-0 mt-4 z-10 w-60 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800`}>
                            <ul className="py-3 text-start" >
                                <li>
                                    <Link to="#" className="flex items-center justify-between py-1.5 px-4">
                                        <span className="flex items-center">
                                            <img src={shopImg} className="rounded shadow dark:shadow-gray-800 w-9" alt="" />
                                            <span className="ms-3">
                                                <span className="block h6 text-[16px] font-medium hover:text-sky-500">hoxia.com</span>
                                                <span className="block text-sm text-slate-400">$12</span>
                                            </span>
                                        </span>

                                        <span className="text-sm font-semibold">$12</span>
                                    </Link>
                                </li>

                                <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>

                                <li className="flex items-center justify-between py-1.5 px-4">
                                    <h6 className="font-medium mb-0">Total($):</h6>
                                    <h6 className="font-medium mb-0">$12</h6>
                                </li>

                                <li className="py-1.5 px-4 space-x-1">
                                    <Link to="#" className="inline-block px-4 py-[6px] text-sm tracking-wide bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-lg align-middle transition-all duration-500">View Cart</Link>
                                    <Link to="#" className="inline-block px-4 py-[6px] text-sm tracking-wide bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-lg align-middle transition-all duration-500">Checkout</Link>
                                    <p className="text-sm text-slate-400 mt-1">*T&C Apply</p>
                                </li>

                            </ul>
                        </div>
                    </li>
                </ul>*/}

                <div id="navigation" className={`${isOpen === true ? 'hidden' : 'block'}`}>
                    <ul className={`${navClass ? `${ulClass}` : ' navigation-menu justify-end '}  `}>
                       {/*<li className={`${["index", "index-two", "index-three", "index-four"].includes(manu) ? "active" : ""} has-submenu parent-menu-item`}>
                            <Link to="/index">Home</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li className={manu === "index" ? "active" : ""}><Link to="/index" className="sub-menu-item">Hero One</Link></li>
                                <li className={manu === "index-two" ? "active" : ""}><Link to="/index-two" className="sub-menu-item">Hero Two</Link></li>
                                <li className={manu === "index-three" ? "active" : ""}><Link to="/index-three" className="sub-menu-item">Hero Three</Link></li>
                                <li className={manu === "index-four" ? "active" : ""}><Link to="/index-four" className="sub-menu-item">Hero Four</Link></li>
                            </ul>
                        </li>*/}
                        <li className={manu === "Inicio" ? "active" : ""}><Link to="/index" className="sub-menu-item">Inicio</Link></li>
                        <li className={manu === "aboutus" ? "active" : ""}><Link to="/aboutus" className="sub-menu-item">Nosotros</Link></li>
                        <li className={manu === "software" ? "active" : ""}><Link to="/servicios" className="sub-menu-item">Servicios</Link></li>
                        <li className={manu === "hosting-shared" ? "active" : ""}><Link to="/hosting-shared" className="sub-menu-item">Web Hosting</Link></li>
                        {/*
                        <li className={`${["hosting-shared", "hosting-vps", "hosting-dedicated", "hosting-cloud", "hosting-domain", "hosting-reseller"].includes(manu) ? "active" : ""} has-submenu parent-menu-item`}><Link to="#"> Hosting </Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li className={manu === "hosting-shared" ? "active" : ""}><Link to="/hosting-shared" className="sub-menu-item">Shared Hosting</Link></li>
                                <li className={manu === "hosting-vps" ? "active" : ""}><Link to="/hosting-vps" className="sub-menu-item">VPS Hosting</Link></li>
                                <li className={manu === "hosting-dedicated" ? "active" : ""}><Link to="/hosting-dedicated" className="sub-menu-item">Dedicated Server</Link></li>
                                <li className={manu === "hosting-cloud" ? "active" : ""}><Link to="/hosting-cloud" className="sub-menu-item">Cloud Hosting</Link></li>
                                <li className={manu === "hosting-domain" ? "active" : ""}><Link to="/hosting-domain" className="sub-menu-item">Domain Name</Link></li>
                                <li className={manu === "hosting-reseller" ? "active" : ""}><Link to="/hosting-reseller" className="sub-menu-item">Reseller Hosting</Link></li>
                            </ul>
                            
                        </li>
                        */}
                        {/*
                        <li className={`${["domain-detail", "cart", "checkouts", "my-account"].includes(manu) ? "active" : ""} has-submenu parent-menu-item`}><Link to="#"> Domain </Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li className={manu === "domain-detail" ? "active" : ""}><Link to="/domain-detail" className="sub-menu-item">Domain Detail</Link></li>
                                <li className={manu === "cart" ? "active" : ""}><Link to="/cart" className="sub-menu-item">Cart</Link></li>
                                <li className={manu === "checkouts" ? "active" : ""}><Link to="/checkouts" className="sub-menu-item">Checkout</Link></li>
                                <li className={manu === "my-account" ? "active" : ""}><Link to="/my-account" className="sub-menu-item">Account</Link></li>
                            </ul>
                        </li>
                        */}
                        {/*<li className={`${["helpcenter-overview", "helpcenter-faqs", "helpcenter-guides", "helpcenter-support", "blogs", "blog-detail", "login", "signup", "reset-password", "lock-screen", "terms", "privacy", "comingsoon", "maintenance", "error", "thankyou"].includes(manu) ? "active" : ""} has-submenu parent-menu-item`}>
                            <Link to="#">Pages</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li className={`${["helpcenter-overview", "helpcenter-faqs", "helpcenter-guides", "helpcenter-support"].includes(manu) ? "active" : ""} has-submenu parent-menu-item`}>
                                    <Link to="#"> Helpcenter </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li className={manu === "helpcenter-overview" ? "active" : ""}><Link to="/helpcenter-overview" className="sub-menu-item">Overview</Link></li>
                                        <li className={manu === "helpcenter-faqs" ? "active" : ""}><Link to="/helpcenter-faqs" className="sub-menu-item">FAQs</Link></li>
                                        <li className={manu === "helpcenter-guides" ? "active" : ""}><Link to="/helpcenter-guides" className="sub-menu-item">Guides</Link></li>
                                        <li className={manu === "helpcenter-support" ? "active" : ""}><Link to="/helpcenter-support" className="sub-menu-item">Support</Link></li>
                                    </ul>
                                </li>

                                <li className={`${["blogs", "blog-detail"].includes(manu) ? "active" : ""} has-submenu parent-menu-item`}><Link to="#"> Blog </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li className={manu === "blogs" ? "active" : ""}><Link to="/blogs" className="sub-menu-item"> Blogs</Link></li>
                                        <li className={manu === "blog-detail" ? "active" : ""}><Link to="/blog-detail" className="sub-menu-item"> Blog Detail</Link></li>
                                    </ul>
                                </li>

                                <li className={`${["login", "signup", "reset-password", "lock-screen"].includes(manu) ? "active" : ""} has-submenu parent-menu-item`}><Link to="#"> Auth Pages </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li className={manu === "login" ? "active" : ""}><Link to="/login" className="sub-menu-item"> Login</Link></li>
                                        <li className={manu === "signup" ? "active" : ""}><Link to="/signup" className="sub-menu-item"> Signup</Link></li>
                                        <li className={manu === "reset-password" ? "active" : ""}><Link to="/reset-password" className="sub-menu-item"> Forgot Password</Link></li>
                                        <li className={manu === "lock-screen" ? "active" : ""}><Link to="/lock-screen" className="sub-menu-item"> Lock Screen</Link></li>
                                    </ul>
                                </li>

                                <li className={`${["terms", "privacy"].includes(manu) ? "active" : ""} has-submenu parent-menu-item`}><Link to="#"> Utility </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li className={manu === "terms" ? "active" : ""}><Link to="/terms" className="sub-menu-item">Terms of Services</Link></li>
                                        <li className={manu === "privacy" ? "active" : ""}><Link to="/privacy" className="sub-menu-item">Privacy Policy</Link></li>
                                    </ul>
                                </li>

                                <li className={`${["comingsoon", "maintenance", "error", "thankyou"].includes(manu) ? "active" : ""} has-submenu parent-menu-item`}><Link to="#"> Special </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li className={manu === "comingsoon" ? "active" : ""}><Link to="/comingsoon" className="sub-menu-item"> Coming Soon</Link></li>
                                        <li className={manu === "maintenance" ? "active" : ""}><Link to="/maintenance" className="sub-menu-item"> Maintenance</Link></li>
                                        <li className={manu === "error" ? "active" : ""}><Link to="/error" className="sub-menu-item"> 404!</Link></li>
                                        <li className={manu === "thankyou" ? "active" : ""}><Link to="/thankyou" className="sub-menu-item"> Thank you</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>*/}

                        <li><Link to="/contact" className="sub-menu-item">Contacto</Link></li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}