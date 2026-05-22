import React from "react";
import { Link } from "react-router-dom";

import contactImg from '../assets/images/contact.svg'

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

import { BsTelephone, LuMail, FiMapPin } from '../assets/icons/vander'

export default function Contact() {

    return (
        <>
            <Navbar navClass="defaultscroll is-sticky" ulClass='navigation-menu justify-end ' />
            <section className="relative table w-full md:py-40 py-36 bg-[url('../../assets/images/bg/bg5.png')] bg-center bg-cover">
                <div className="absolute inset-0 bg-sky-500/5"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center mt-12">
                        <h3 className="md:text-4xl text-3xl md:leading-snug leading-snug font-medium">Contáctanos</h3>
                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="tracking-[0.5px] mb-0 inline-block">
                        <li className="inline-block text-[15px] font-medium duration-500 ease-in-out hover:text-sky-500"><Link to="/index">DREAMELD</Link></li>
                        <li className="inline-block text-[15px] ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                       <li className="inline-block text-[15px] font-medium duration-500 ease-in-out" style={{ color: '#7c3aed' }}>Contacto</li>
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
                            <img src={contactImg} alt="" />
                        </div>

                        <div className="lg:col-span-5 md:col-span-6">
                            <div className="lg:ms-5">
                                <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700 p-6">
                                    <h3 className="mb-6 text-2xl leading-normal font-medium">¡Ponte en contacto!</h3>

                                    <form >
                                        <p className="mb-0" id="error-msg"></p>
                                        <div id="simple-msg"></div>
                                        <div className="grid lg:grid-cols-12 lg:gap-6">
                                            <div className="lg:col-span-6 mb-5">
                                                <label htmlFor="name" className="font-medium">Tú nombre:</label>
                                                <input name="name" id="name" type="text" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-lg outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0 mt-2" placeholder="Nombre :" />
                                            </div>

                                            <div className="lg:col-span-6 mb-5">
                                                <label htmlFor="email" className="font-medium">Tu correo electrónico:</label>
                                                <input name="email" id="email" type="email" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-lg outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0 mt-2" placeholder="Correo electrónico :" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1">
                                            <div className="mb-5">
                                                <label htmlFor="subject" className="font-medium">Tú Mensaje o Dudas:</label>
                                                <input name="subject" id="subject" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-lg outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0 mt-2" placeholder="Mensaje :" />
                                            </div>

                                            <div className="mb-5">
                                                <label htmlFor="comments" className="font-medium">Tú Comentario:</label>
                                                <textarea name="comments" id="comments" className="form-input w-full text-[15px] py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-lg outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0 mt-2" placeholder="Mensaje :"></textarea>
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            id="submit"
                                            name="send"
                                            className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide text-white focus:ring-[3px] rounded-md text-center align-middle transition-all duration-500"
                                            style={{
                                                backgroundColor: '#7c3aed', // Morado Dreameld Base
                                                borderColor: '#7c3aed',
                                                borderWidth: '1px',
                                                boxShadow: '0 4px 6px -1px rgba(124, 58, 237, 0.3)', // Sombrilla sutil
                                            }}
                                            onMouseOver={(e) => {
                                                e.currentTarget.style.backgroundColor = '#6d28d9'; // Morado más oscuro en hover
                                                e.currentTarget.style.borderColor = '#6d28d9';
                                            }}
                                            onMouseOut={(e) => {
                                                e.currentTarget.style.backgroundColor = '#7c3aed'; // Volver al color base
                                                e.currentTarget.style.borderColor = '#7c3aed';
                                            }}
                                        >
                                            Enviar Mensaje
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container lg:mt-24 mt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                        <div className="text-center px-6">
                            <div className="relative text-transparent">
                                <div className="w-14 h-14 bg-sky-500/5 text-sky-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                                    <BsTelephone />
                                </div>
                            </div>

                            <div className="content mt-7">
                                <h5 className="title h5 text-lg font-medium">Teléfono de Soporte</h5>
                                <p className="text-slate-400 mt-3">Atención rápida y personalizada.</p><p>Resolvemos tus dudas en minutos para que no te detengas.</p>

                                <div className="mt-4">
                                    <Link to="tel:+152534-468-854" className="relative inline-block tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-sky-500 hover:text-sky-500 after:bg-sky-500 duration-500 ease-in-out">+152 534-468-854</Link>
                                </div>
                            </div>
                        </div>

                        <div className="text-center px-6">
                            <div className="relative text-transparent">
                                <div className="w-14 h-14 bg-sky-500/5 text-sky-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                                    <LuMail />
                                </div>
                            </div>

                            <div className="content mt-7">
                                <h5 className="title h5 text-lg font-medium">Correo de Ventas y Dudas</h5>
                                <p className="text-slate-400 mt-3">Escríbenos para cotizaciones especiales o soporte técnico experto.</p><p>Respondemos a la brevedad.</p>

                                <div className="mt-4">
                                    <Link to="mailto:contacto@dreameld.com.mx" className="relative inline-block tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-sky-500 hover:text-sky-500 after:bg-sky-500 duration-500 ease-in-out">contacto@dreameld.com.mx</Link>
                                </div>
                            </div>
                        </div>

                        <div className="text-center px-6">
                            <div className="relative text-transparent">
                                <div className="w-14 h-14 bg-sky-500/5 text-sky-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                                    <FiMapPin />
                                </div>
                            </div>

                            <div className="content mt-7">
                                <h5 className="title h5 text-lg font-medium">Contacto Directo</h5>
                                <p className="text-slate-400 mt-3">¿Prefieres hablar con un humano? Llámanos o escríbenos por WhatsApp para soporte rápido o ventas. <br /></p>

                                <div className="mt-4">
                                    <Link
                                        to="https://wa.me/52XXXXXXXXXX?text=Hola,%20vengo%20de%20Dreameld%20y%20necesito%20información%20sobre%20un%20hosting"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="read-more lightbox relative inline-block tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-sky-500 hover:text-sky-500 after:bg-sky-500 duration-500 ease-in-out"
                                    >
                                        Chatea con nosotros
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