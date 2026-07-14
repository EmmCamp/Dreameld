import React, { useState } from "react";
import { Link } from "react-router-dom";
import {AiOutlineCheckCircle} from '../assets/icons/vander'
export default function PricingTwo({title,priceClass}){
    let [activeIndex, setActiveIndex] = useState(0)
    return(
        <div className={priceClass}>
            {title === false ? "" : 
                <div className="grid grid-cols-1 pb-16 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-medium">Hosting profesional para impulsar tu negocio</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Implementa, administra y escala tus proyectos digitales con una plataforma segura, rápida y diseñada para crecer contigo.</p>
                </div>
            }

                <div className="grid grid-cols-1">
                    <ul className="inline-block w-fit mx-auto flex-wrap justify-center text-center p-2 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-full" id="myTab" data-tabs-toggle="#StarterContent" role="tablist">
                        <li role="presentation" className="inline-block">
                            <button onClick={()=>setActiveIndex(0)} className={`${activeIndex === 0 ? 'px-4 py-1 text-sm font-semibold rounded-full w-full transition-all duration-500 ease-in-out text-white bg-violet-500 ' : ' px-4 py-1 text-sm font-semibold rounded-full w-full hover:text-emerald-500 transition-all duration-500 ease-in-out'}`} >Mensual</button>
                        </li>
                        <li role="presentation" className="inline-block">
                            <button onClick={()=>setActiveIndex(1)}  className={`${activeIndex === 1 ? 'px-4 py-1 text-sm font-semibold rounded-full w-full transition-all duration-500 ease-in-out text-white bg-violet-500' : ' px-4 py-1 text-sm font-semibold rounded-full w-full hover:text-emerald-500 transition-all duration-500 ease-in-out'}`} >Anual <span className="bg-green-600 text-white text-xs font-bold px-2.5 py-0.5 rounded-full h-5 ms-1">Ahorra hasta 60%!!</span></button>
                        </li>
                    </ul>

                    <div id="StarterContent" className="mt-6">
                        {activeIndex === 0 ? 
                            <div className="">
                                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px]">
                                {/*<div className="group p-6 relative overflow-hidden shadow-lg dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900 h-fit">
                                        <h6 className="font-medium mb-5 text-xl">Básico</h6>
                
                                        <div className="flex mb-5">
                                            <span className="text-lg font-medium">$</span>
                                            <span className="price text-5xl h6 font-semibold mb-0">0</span>
                                            <span className="text-lg font-medium self-end mb-1">/mo</span>
                                        </div>
                
                                        <ul className="list-none text-slate-400">
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className=" w-10 text-sky-500 text-[20px] align-middle me-2"/> <span className="">We offers a free month of service for new customers.</span></li>
                                        </ul>
                                        <Link to="" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-transparent hover:bg-sky-500 border border-gray-100 dark:border-gray-800 hover:border-sky-500 dark:hover:border-sky-500 text-slate-900 dark:text-white hover:text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500 w-full mt-5">Free Demo</Link>
                                    </div>*/}
                                    
                                    <div className="group p-6 relative overflow-hidden shadow-lg dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900 h-fit">
                                        <h1 className="font-bold text-2xl mb-1 text-slate-800">Básico</h1>
                                        <h2 className="font-normal text-sm mb-5 text-slate-500">Rendimiento Estándar</h2>
                
                                        <div className="flex mb-5">
                                            <span className="text-lg font-medium">$</span>
                                            <span className="price text-5xl h6 font-semibold mb-0">200</span>
                                            <span className="text-lg font-medium self-end mb-1">MXN</span>
                                        </div>
                
                                        <ul className="list-none text-slate-400">
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600  text-[20px] align-middle me-2"/> <span className="">1 Sitio web</span></li>
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600  text-[20px] align-middle me-2"/> <span className="">5 GB Almacenamiento</span></li>
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600  text-[20px] align-middle me-2"/> <span className="">10 Cuentas de correo</span></li>
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600 text-[20px] shrink-0 align-middle me-2"/> <span className="">Certificado SSL Gratis</span></li>
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600 text-[20px] shrink-0 align-middle me-2"/> <span className="">Escaneo de malware automático</span></li>
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600 text-[20px] shrink-0 align-middle me-2"/> <span className="">Panel de control cPanel</span></li>
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600 text-[20px] shrink-0 align-middle me-2"/> <span className="">Soporte por WhatsApp&nbsp;</span></li>
                                        </ul>
                                        <Link to="" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-transparent hover:bg-violet-500 border border-gray-100 dark:border-gray-800 dark:hover:bg-emerald-500 hover:border-violet-500 dark:hover:border-emerald-500 text-slate-900 dark:text-white hover:text-white focus:ring-[3px] focus:ring-violet-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500 w-full mt-5">Contactanos</Link>
                                    </div>

                                    <div className="group p-6 relative overflow-hidden shadow-lg dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900 h-fit">
                                        <h1 className="font-bold text-2xl mb-1 text-slate-800">Profesional</h1>
                                        <h2 className="font-normal text-sm mb-5 text-slate-500">Rendimiento Mejorado</h2>
                
                                        <div className="flex mb-5">
                                            <span className="text-lg font-medium">$</span>
                                            <span className="price text-5xl h6 font-semibold mb-0">325.00</span>
                                            <span className="text-lg font-medium self-end mb-1">MXN</span>
                                        </div>
                
                                        <ul className="list-none text-slate-400">
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600  text-[20px] align-middle me-2"/> <span className="">3 Sitios web</span></li>
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600  text-[20px] align-middle me-2"/> <span className="">15 GB Almacenamiento</span></li>
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600  text-[20px] align-middle me-2"/> <span className="">Cuentas de correo ilimitadas</span></li>
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600 text-[20px] shrink-0 align-middle me-2"/> <span className="">Certificado SSL Gratis</span></li>
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600  text-[20px] align-middle me-2"/> <span className="">Wordpress Autoinstalable</span></li>
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600  text-[20px] align-middle me-2"/> <span className="">Compatible con sitios React</span></li>
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600  text-[20px] align-middle me-2"/> <span className="">Migracion de sitio gratis</span></li>
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600  text-[20px] align-middle me-2"/> <span className="">Respaldos mensuales automáticos</span></li>
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600  text-[20px] align-middle me-2"/> <span className="">Escaneo de malware automático</span></li>
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600 text-[20px] shrink-0 align-middle me-2"/> <span className="">Panel de control cPanel</span></li>
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600 text-[20px] shrink-0 align-middle me-2"/> <span className="">Soporte por WhatsApp (Prioritario)</span></li>
                                        </ul>
                                        <Link to="" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-transparent hover:bg-violet-500 border border-gray-100 dark:border-gray-800 dark:hover:bg-emerald-500 hover:border-violet-500 dark:hover:border-emerald-500 text-slate-900 dark:text-white hover:text-white focus:ring-[3px] focus:ring-violet-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500 w-full mt-5">Contactanos</Link>
                                    </div>
                
                                    <div className="group relative overflow-hidden shadow-lg dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900 h-fit">
                                        <div className="bg-gradient-to-tr from-emerald-500 to-violet-700 text-white py-2 px-6 h6 text-lg font-medium">Popular</div>
                                               
                                        <div className="p-6">
                                            <h1 className="font-bold text-2xl mb-1 text-slate-800">Negocio</h1>
                                            <h2 className="font-normal text-sm mb-5 text-slate-500">Máximo Rendimiento Comercial</h2>
                                            <div className="flex mb-5">
                                                <span className="text-lg font-medium">$</span>
                                                <span className="price text-5xl h6 font-semibold mb-5">466.67</span>
                                                <span className="text-lg font-medium self-end mb-1">MXN</span>
                                            </div>
                
                                            <ul className="list-none text-slate-400">
                                                <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600  text-[20px] align-middle me-2"/> <span className="">10 Sitios web</span></li>
                                                <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600  text-[20px] align-middle me-2"/> <span className="">25 GB Almacenamiento</span></li>
                                                <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600  text-[20px] align-middle me-2"/> <span className="">Cuentas de correo ilimitadas</span></li>
                                                <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600 text-[20px] shrink-0 align-middle me-2"/> <span className="">Certificado SSL Gratis</span></li>
                                                <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600  text-[20px] align-middle me-2"/> <span className="">Wordpress Autoinstalable</span></li>
                                                <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600  text-[20px] align-middle me-2"/> <span className="">Creador de sitios web incluido</span></li>
                                                <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600  text-[20px] align-middle me-2"/> <span className="">Migracion de sitio gratis</span></li>
                                                <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600 text-[20px] shrink-0 align-middle me-2"/> <span className="">Respaldos quincenales automáticos</span></li>
                                                <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600 text-[20px] shrink-0 align-middle me-2"/> <span className="">Escaneo de malware automático</span></li>
                                                <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600 text-[20px] shrink-0 align-middle me-2"/> <span className="">Panel de control cPanel</span></li>
                                                <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600 text-[20px] shrink-0 align-middle me-2"/> <span className="">Soporte por WhatsApp (Prioritario 24/7) </span> </li>
                                            </ul>
                                            <Link to="" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-violet-500 hover:bg-emerald-500 border border-violet-500 hover:border-emerald-500 text-white focus:ring-[3px] focus:ring-emerald-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500 w-full mt-5">Contactanos</Link>
                                            <p className="text-sm text-slate-400 mt-1.5"><span className="text-red-600">*</span>Consulta restricciones</p>
                                        </div>
                                    </div>
                
                                    <div className="group p-[1px] relative overflow-hidden shadow-lg dark:shadow-gray-800 rounded-md bg-gradient-to-tr from-sky-500 to-blue-700 h-fit">
                                        <div className="p-6 bg-white dark:bg-slate-900 rounded-md">
                                            <h6 className="font-medium mb-5 text-xl">A medida</h6>
                
                                            <p className="text-slate-400 mb-5">Precio variable dependiendo las necesidades de tu proyecto</p>
                
                                            <ul className="list-none">
                                                <li className="mb-1 font-medium flex"><AiOutlineCheckCircle className=" text-violet-500 text-[20px] align-middle me-2"/> <span className="">Precios a personalizados</span></li>
                                            </ul>
                                            <Link to="" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-transparent hover:bg-violet-500 border border-gray-100 dark:border-gray-800 dark:hover:bg-emerald-500 hover:border-violet-500 dark:hover:border-emerald-500 text-slate-900 dark:text-white hover:text-white focus:ring-[3px] focus:ring-violet-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500 w-full mt-5">Contactanos</Link>
                                        </div>
                                    </div>
                                </div>
                            </div> : ''
                        }
                        {activeIndex === 1 ? 
                            <div className="">
                                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px]">
                                {/*<div className="group p-6 relative overflow-hidden shadow-lg dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900 h-fit">
                                        <h6 className="font-medium mb-5 text-xl">Free</h6>
                
                                        <div className="flex mb-5">
                                            <span className="text-lg font-medium">$</span>
                                            <span className="price text-5xl h6 font-semibold mb-0">0</span>
                                            <span className="text-lg font-medium self-end mb-1">/year</span>
                                        </div>
                
                                        <ul className="list-none text-slate-400">
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className=" w-10 text-sky-500 text-[20px] align-middle me-2"/> <span className="">We offers a free month of service for new customers.</span></li>
                                        </ul>
                                        <Link to="" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-transparent hover:bg-sky-500 border border-gray-100 dark:border-gray-800 hover:border-sky-500 dark:hover:border-sky-500 text-slate-900 dark:text-white hover:text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500 w-full mt-5">Free Demo</Link>
                                    </div>*/}
                                    
                                <div className="group p-6 relative overflow-hidden shadow-lg dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900 h-fit">
                                        <h6 className="font-medium mb-5 text-xl">Básico</h6>
                
                                        <div className="flex mb-5">
                                            <span className="text-lg font-medium">$</span>
                                            <span className="price text-5xl h6 font-semibold mb-0">1500</span>
                                            <span className="text-lg font-medium self-end mb-1">MXN/Anual</span>
                                        </div>
                
                                        <ul className="list-none text-slate-400">
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600  text-[20px] align-middle me-2"/> <span className="">1 Sitio web</span></li>
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600  text-[20px] align-middle me-2"/> <span className="">5 GB Almacenamiento</span></li>
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600  text-[20px] align-middle me-2"/> <span className="">10 Cuentas de correo</span></li>
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600 text-[20px] shrink-0 align-middle me-2"/> <span className="">Certificado SSL</span></li>
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600 text-[20px] shrink-0 align-middle me-2"/> <span className="">Escaneo de malware automático</span></li>
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600 text-[20px] shrink-0 align-middle me-2"/> <span className="">Panel de control cPanel</span></li>
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600 text-[20px] shrink-0 align-middle me-2"/> <span className="">Soporte por WhatsApp&nbsp;</span></li>
                                        </ul>
                                        <Link to="" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-transparent hover:bg-violet-500 border border-gray-100 dark:border-gray-800 dark:hover:bg-emerald-500 hover:border-violet-500 dark:hover:border-emerald-500 text-slate-900 dark:text-white hover:text-white focus:ring-[3px] focus:ring-violet-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500 w-full mt-5">Contactanos</Link>
                                    </div>

                                    <div className="group p-6 relative overflow-hidden shadow-lg dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900 h-fit">
                                        <h6 className="font-medium mb-5 text-xl">Profesional</h6>
                
                                        <div className="flex mb-5">
                                            <span className="text-lg font-medium">$</span>
                                            <span className="price text-5xl h6 font-semibold mb-0">2600</span>
                                            <span className="text-lg font-medium self-end mb-1">MXN/Anual</span>
                                        </div>
                
                                        <ul className="list-none text-slate-400">
                                                <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600  text-[20px] align-middle me-2"/> <span className="">3 Sitios web</span></li>
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600  text-[20px] shrink-0 align-middle me-2"/> <span className="">15 GB Almacenamiento</span></li>
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600  text-[20px] shrink-0 align-middle me-2"/> <span className="">Cuentas de correo ilimitadas</span></li>
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600 text-[20px] shrink-0 align-middle me-2"/> <span className="">Certificado SSL</span></li>
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600  text-[20px] shrink-0 align-middle me-2"/> <span className="">Wordpress Autoinstalable</span></li>
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600  text-[20px] shrink-0 align-middle me-2"/> <span className="">Sitios React</span></li>
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600  text-[20px] shrink-0 align-middle me-2"/> <span className="">Migracion de sitio gratis</span></li>
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600  text-[20px] shrink-0 align-middle me-2"/> <span className="">Respaldos mensuales automáticos</span></li>
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600  text-[20px] shrink-0 align-middle me-2"/> <span className="">Escaneo de malware automático</span></li>
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600 text-[20px] shrink-0 align-middle me-2"/> <span className="">Panel de control cPanel</span></li>
                                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600 text-[20px] shrink-0 align-middle me=2"/> <span className="">Soporte por WhatsApp (Prioritario)</span></li>
                                        </ul>
                                        <Link to="" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-transparent hover:bg-violet-500 border border-gray-100 dark:border-gray-800 dark:hover:bg-emerald-500 hover:border-violet-50０ dark:hover:border-emerald-5００ text-slate-9００ dark:text-white hover:text-white focus:ring-[3px] focus:ring-violet-5００ focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-5００ w-full mt-5">Contactanos</Link>
                                    </div>
                
                                    <div className="group relative overflow-hidden shadow-lg dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900 h-fit">
                                        <div className="bg-gradient-to-tr from-emerald-500 to-violet-700 text-white py-2 px-6 h6 text-lg font-medium">Popular</div>
                                        <div className="p-6">
                                            <h6 className="font-medium mb-5 text-xl">Negocio</h6>
                
                                            <div className="flex mb-5">
                                                <span className="text-lg font-medium">$</span>
                                                <span className="price text-5xl h6 font-semibold mb-0">4000</span>
                                                <span className="text-lg font-medium self-end mb-1">MXN /Anual</span>
                                            </div>
                
                                             <ul className="list-none text-slate-400">
                                             <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600  text-[20px] align-middle me-2"/> <span className="">10 Sitios web</span></li>
                                                <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600  text-[20px] align-middle me-2"/> <span className="">25 GB Almacenamiento</span></li>
                                                <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600  text-[20px] align-middle me-2"/> <span className="">Cuentas de correo ilimitadas</span></li>
                                                <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600 text-[20px] shrink-0 align-middle me-2"/> <span className="">Certificado SSL</span></li>
                                                <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600  text-[20px] align-middle me-2"/> <span className="">Wordpress Autoinstalable</span></li>
                                                <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600  text-[20px] align-middle me-2"/> <span className="">Sitios React</span></li>
                                                <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600  text-[20px] align-middle me-2"/> <span className="">Migracion de sitio</span></li>
                                                <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600 text-[20px] shrink-0 align-middle me-2"/> <span className="">Constructor de sitios intuitivo</span></li>
                                                <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600 text-[20px] shrink-0 align-middle me-2"/> <span className="">Respaldos quincenales automáticos</span></li>
                                                <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600 text-[20px] align-middle me-2"/> <span className="">Escaneo de malware automático</span></li>
                                                <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600 text-[20px] align-middle me-2"/> <span className="">Panel de control cPanel</span></li>
                                                <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-600 text-[20px] align-middle me-2"/> <span className="">Soporte por WhatsApp (Prioritario 24/7) </span> </li>
                                            </ul>
                                           <Link to="" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-violet-500 hover:bg-emerald-500 border border-violet-500 hover:border-emerald-500 text-white focus:ring-[3px] focus:ring-emerald-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500 w-full mt-5">Contactanos</Link>
                                            <p className="text-sm text-slate-400 mt-1.5"><span className="text-red-600">*</span>Consulta restricciones</p>
                                        </div>
                                    </div>
                
                                    <div className="group p-[1px] relative overflow-hidden shadow-lg dark:shadow-gray-800 rounded-md bg-gradient-to-tr from-sky-500 to-blue-700 h-fit">
                                        <div className="p-6 bg-white dark:bg-slate-900 rounded-md">
                                            <h6 className="font-medium mb-5 text-xl">A medida</h6>
                
                                            <p className="text-slate-400 mb-5">Precio variable dependiendo las necesidades de tu proyecto</p>
                
                                            <ul className="list-none">
                                                <li className="mb-1 font-medium flex"><AiOutlineCheckCircle className=" text-violet-500 text-[20px] align-middle me-2"/> <span className="">Presupuesto a la medida</span></li>
                                            </ul>
                                            <Link to="" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-transparent hover:bg-violet-500 border border-gray-100 dark:border-gray-800 dark:hover:bg-emerald-500 hover:border-violet-500 dark:hover:border-emerald-500 text-slate-900 dark:text-white hover:text-white focus:ring-[3px] focus:ring-violet-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500 w-full mt-5">Contactanos</Link>
                                        </div>
                                    </div>
                                </div>
                            </div> : ""
                        }

                    </div>
                </div>
            </div>
    )
}