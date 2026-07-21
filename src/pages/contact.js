import React, { useState } from "react";
import { Link } from "react-router-dom";

import contactImg from '../assets/images/contact.svg'

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

import { BsTelephone, LuMail, FiMapPin } from '../assets/icons/vander'

export default function Contact() {
    // 1. Estados para manejar los datos del formulario y las respuestas
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        comments: ""
    });
    const [status, setStatus] = useState({ loading: false, success: null, message: "" });

    // 2. Manejador de cambios en los inputs
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 3. Función para enviar los datos al archivo PHP
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: null, message: "" });

        try {
            // REPLAZA ESTA URL por la ruta real donde subas tu archivo PHP en tu hosting
            const response = await fetch("https://dreameld.com.mx/contacto.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                setStatus({ loading: false, success: true, message: "¡Mensaje enviado con éxito! Nos comunicaremos pronto." });
                setFormData({ name: "", email: "", subject: "", comments: "" }); // Limpia el formulario
            } else {
                setStatus({ loading: false, success: false, message: result.error || "Hubo un problema al enviar el mensaje." });
            }
        } catch (error) {
            console.error("Error al enviar formulario:", error);
            setStatus({ loading: false, success: false, message: "Error de conexión con el servidor." });
        }
    };

    return (
        <>
           <Navbar navClass="defaultscroll is-sticky" ulClass='navigation-menu justify-end' />

            <section 
                className="relative table w-full md:py-40 py-36 bg-[url('../../assets/images/bg/bg5.png')] bg-center bg-cover"
                style={{ 
                    backgroundColor: document.documentElement.classList.contains('dark') ? 'transparent' : 'rgba(30, 7, 68, 0.85)' 
                }}
            >
                <div className="absolute inset-0 bg-transparent dark:bg-slate-950/80"></div>
                
                <div className="container relative" style={{ zIndex: 2 }}>
                    <div className="grid grid-cols-1 text-center mt-12">
                        <h3 className="md:text-4xl text-3xl md:leading-snug leading-snug font-medium text-white dark:text-white">
                            Contáctanos
                        </h3>
                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="tracking-[0.5px] mb-0 inline-block">
                        <li className="inline-block text-[15px] font-medium duration-500 ease-in-out text-white/80 hover:text-sky-400">
                            <Link to="/index">DREAMELD</Link>
                        </li>
                        <li className="inline-block text-[15px] text-white/60 ltr:rotate-0 rtl:rotate-180">
                            <i className="mdi mdi-chevron-right"></i>
                        </li>
                        <li className="inline-block text-[15px] font-medium duration-500 ease-in-out" style={{ color: '#a78bfa' }}>
                            Contacto
                        </li>
                    </ul>
                </div>
            </section>

            <div className="relative">
                <div className="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-7 md:col-span-6">
                            <img
                                src="/soporte-dreameld.png"
                                className="w-full h-auto object-contain rounded-2xl shadow-md"
                                alt="Soporte Express Dreameld"
                                style={{ maxHeight: '460px', display: 'block' }}
                            />
                        </div>

                        <div className="lg:col-span-5 md:col-span-6">
                            <div className="lg:ms-5">
                                <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700 p-6">
                                    <h3 className="mb-6 text-2xl leading-normal font-medium dark:text-white">¡Ponte en contacto!</h3>

                                    {/* FORMULARIO ACTUALIZADO CON MANEJADORES DE REACT */}
                                    <form onSubmit={handleSubmit}>
                                        
                                        {/* Bloques de notificación dinámicos */}
                                        {status.message && (
                                            <div className={`p-3 rounded-lg text-sm mb-4 font-medium ${status.success ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'}`}>
                                                {status.message}
                                            </div>
                                        )}

                                        <div className="grid lg:grid-cols-12 lg:gap-6">
                                            <div className="lg:col-span-6 mb-5">
                                                <label htmlFor="name" className="font-medium dark:text-slate-300">Nombre completo</label>
                                                <input 
                                                    name="name" 
                                                    id="name" 
                                                    type="text" 
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-lg outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0 mt-2" 
                                                    placeholder="Ej. Juan Pérez" 
                                                />
                                            </div>

                                            <div className="lg:col-span-6 mb-5">
                                                <label htmlFor="email" className="font-medium dark:text-slate-300">Correo electrónico</label>
                                                <input 
                                                    name="email" 
                                                    id="email" 
                                                    type="email" 
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-lg outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0 mt-2" 
                                                    placeholder="ejemplo@correo.com" 
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1">
                                            <div className="mb-5">
                                                <label htmlFor="subject" className="font-medium dark:text-slate-300">Asunto</label>
                                                <input 
                                                    name="subject" 
                                                    id="subject" 
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    required
                                                    className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-lg outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0 mt-2" 
                                                    placeholder="¿En qué te podemos ayudar?" 
                                                />
                                            </div>

                                            <div className="mb-5">
                                                <label htmlFor="comments" className="font-medium dark:text-slate-300">Mensaje</label>
                                                <textarea 
                                                    name="comments" 
                                                    id="comments" 
                                                    value={formData.comments}
                                                    onChange={handleChange}
                                                    required
                                                    className="form-input w-full text-[15px] py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-lg outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0 mt-2" 
                                                    placeholder="Escribe aquí los detalles de tu consulta..."
                                                ></textarea>
                                            </div>
                                        </div>
                                        
                                        <button
                                            type="submit"
                                            id="submit"
                                            name="send"
                                            disabled={status.loading}
                                            className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide text-white focus:ring-[3px] rounded-md text-center align-middle transition-all duration-500 disabled:opacity-50"
                                            style={{
                                                backgroundColor: '#7c3aed', 
                                                borderColor: '#7c3aed',
                                                borderWidth: '1px',
                                                boxShadow: '0 4px 6px -1px rgba(124, 58, 237, 0.3)', 
                                            }}
                                            onMouseOver={(e) => {
                                                if(!status.loading) {
                                                    e.currentTarget.style.backgroundColor = '#6d28d9'; 
                                                    e.currentTarget.style.borderColor = '#6d28d9';
                                                }
                                            }}
                                            onMouseOut={(e) => {
                                                if(!status.loading) {
                                                    e.currentTarget.style.backgroundColor = '#7c3aed'; 
                                                    e.currentTarget.style.borderColor = '#7c3aed';
                                                }
                                            }}
                                        >
                                            {status.loading ? "Enviando..." : "Enviar Mensaje"}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bloques informativos inferiores de contacto */}
                <div className="container lg:mt-24 mt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                        <div className="text-center px-6">
                            <div className="relative">
                                <div className="w-14 h-14 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800" style={{ backgroundColor: 'rgba(147, 51, 234, 0.1)' }}>
                                    <BsTelephone style={{ color: '#9333ea', width: '24px', height: '24px' }} />
                                </div>
                            </div>

                            <div className="content mt-7">
                                <h5 className="title h5 text-lg font-medium dark:text-white">Teléfono de Soporte</h5>
                                <p className="text-slate-400 mt-3">Atención rápida y personalizada.</p><p className="dark:text-slate-300">Resolvemos tus dudas en minutos para que no te detengas.</p>

                                <div className="mt-4">
                                    <li className="inline-block text-[15px] font-medium duration-500 ease-in-out" style={{ color: '#7c3aed' }}>449 123 4567</li>
                                </div>
                            </div>
                        </div>

                        <div className="text-center px-6">
                            <div className="relative">
                                <div className="w-14 h-14 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800" style={{ backgroundColor: 'rgba(147, 51, 234, 0.1)' }}>
                                    <LuMail style={{ color: '#9333ea', width: '24px', height: '24px' }} />
                                </div>
                            </div>

                            <div className="content mt-7">
                                <h5 className="title h5 text-lg font-medium dark:text-white">Correo de Ventas y Dudas</h5>
                                <p className="text-slate-400 mt-3">Escríbenos para cotizaciones especiales o soporte técnico experto.</p><p className="dark:text-slate-300">Respondemos a la brevedad.</p>

                                <div className="mt-4">
                                    <li className="inline-block text-[15px] font-medium duration-500 ease-in-out" style={{ color: '#7c3aed' }}>Contacto@dreameld.com.mx</li>
                                </div>
                            </div>
                        </div>

                        <div className="text-center px-6">
                            <div className="relative">
                                <div className="w-14 h-14 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800" style={{ backgroundColor: 'rgba(147, 51, 234, 0.1)' }}>
                                    <FiMapPin style={{ color: '#9333ea', width: '24px', height: '24px' }} />
                                </div>
                            </div>

                            <div className="content mt-7">
                                <h5 className="title h5 text-lg font-medium dark:text-white">Contacto Directo</h5>
                                <p className="text-slate-400 mt-3">¿Prefieres hablar con un humano? Llámanos o escríbenos por WhatsApp para soporte rápido o ventas. <br /></p>

                                <div className="mt-4">
                                    <Link
                                        to="https://wa.me/52XXXXXXXXXX?text=Hola,%20vengo%20de%20Dreameld%20y%20necesito%20información%20sobre%20un%20hosting"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="read-more lightbox relative inline-block tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-sky-500 hover:text-sky-500 after:bg-sky-500 duration-500 ease-in-out"
                                    >
                                        <li className="inline-block text-[15px] font-medium duration-500 ease-in-out" style={{ color: '#7c3aed' }}>Chatea con nosotros</li>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Switcher />
        </>
    )
}