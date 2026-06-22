/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import { serviciosC } from "../data/data";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import ImgAut from '../assets/images/consulting/automation.png'
import ImgHard from '../assets/images/consulting/hardware.png'
import ImgLic from '../assets/images/consulting/licensing.png'
import imgWeb from '../assets/images/consulting/web-development.png'
import {AiOutlineCheckCircle,MdKeyboardArrowRight} from '../assets/icons/vander'

export default function Card() {


    return (
        <div className="container relative md:mt-24 mt-16">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div className="lg:col-span-6 md:order-2 order-1">
                        <div className="lg:ms-8">
                            <img src={imgWeb} alt=""/>
                        </div>
                    </div>
                    <div className="lg:col-span-6 md:order-1 order-2">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-medium"> Construimos experiencias digitales<br/> que generan resultados </h3>
                        <p className="text-slate-400 max-w-xl">Diseñamos y desarrollamos sitios web, plataformas empresariales y 
                                                                plicaciones web personalizadas que fortalecen tu presencia digital,optimizan procesos y aportan valor a tus clientes y colaboradores.</p>
                        <ul className="list-none text-slate-400 mt-4">
                        <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-500 text-xl me-2"/>Sitios web de negocio</li>
                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-500 text-xl me-2"/>Aplicaciones web a medida</li>
                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-500 text-xl me-2"/>Portales empresariales</li>
                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-500 text-xl me-2"/>Diseño responsivo y optimizado</li>
                        </ul>

                        <div className="mt-4">
                            <Link to="/aboutus" className="relative inline-flex items-center tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-sky-500 hover:text-sky-500 after:bg-sky-500 duration-500 ease-in-out">Conoce más <MdKeyboardArrowRight className="me-1 text-lg"/></Link>
                        </div>
                    </div>
                </div>
                <br></br> <br></br>

                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px] ">
                    <div className="lg:col-span-6 md:order-1 order-2">
                        <div className="lg:ms-8">
                            <img src={ImgHard} alt=""/>
                        </div>
                    </div>
                   
                    <div className="lg:col-span-6 md:order-2 order-1">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-medium"> Tecnología diseñada<br/> para las necesidades de tu negocio </h3>
                        <p className="text-slate-400 max-w-xl">Analizamos los requerimientos de tu organización para recomendar y cotizar equipos de cómputo, estaciones de trabajo y 
                                                                soluciones tecnológicas que impulsen el rendimiento y crecimiento de tu operación.</p>

                        <ul className="list-none text-slate-400 mt-4">
                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-500 text-xl me-2"/>Equipos para oficina</li>
                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-500 text-xl me-2"/>Workstations profesionales</li>
                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-500 text-xl me-2"/>Equipos para desarrollo y diseño</li>
                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-500 text-xl me-2"/>Asesoría en adquisición tecnológica</li>
                        </ul>

                        <div className="mt-4">
                            <Link to="/aboutus" className="relative inline-flex items-center tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-sky-500 hover:text-sky-500 after:bg-sky-500 duration-500 ease-in-out">Conoce más <MdKeyboardArrowRight className="me-1 text-lg"/></Link>
                        </div>
                    </div>
                </div>
                <br></br><br></br><br></br>
                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div className="lg:col-span-6 md:order-2 order-1">
                        <div className="lg:ms-8">
                            <img src={ImgLic} alt=""/>
                        </div>
                    </div>
                    <div className="lg:col-span-6 md:order-1 order-2">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-medium"> Software empresarial con respaldo oficial</h3>
                        <p className="text-slate-400 max-w-xl">Proveemos licencias originales de Microsoft y 
                                                                otras plataformas empresariales, ayudando a tu empresa a mantenerse segura, actualizada y en 
                                                                cumplimiento con las mejores prácticas tecnológicas.</p>
                        <ul className="list-none text-slate-400 mt-4">
                        <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-500 text-xl me-2"/>Microsoft 365</li>
                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-500 text-xl me-2"/>Asesoria Especializada</li>
                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-500 text-xl me-2"/>Implementacion</li>
                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-500 text-xl me-2"/>Gestión y renovación de licencias</li>
                        </ul>

                        <div className="mt-4">
                            <Link to="/aboutus" className="relative inline-flex items-center tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-sky-500 hover:text-sky-500 after:bg-sky-500 duration-500 ease-in-out">Conoce más <MdKeyboardArrowRight className="me-1 text-lg"/></Link>
                        </div>
                    </div>
                </div>
                <br></br><br></br><br></br>
                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div className="lg:col-span-6 md:order-1 order-2">
                        <div className="lg:ms-8">
                            <img src={ImgAut} alt=""/>
                        </div>
                    </div>
                    <div className="lg:col-span-6 md:order-2 order-1">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-medium"> Optimiza procesos y<br/> elimina tareas repetitivas </h3>
                        <p className="text-slate-400 max-w-xl">Desarrollamos soluciones de software a medida que automatizan operaciones, conectan 
                                                                    sistemas y mejoran la eficiencia de tu organización. Nuestro objetivo es ayudarte a reducir costos, minimizar 
                                                                    errores y aumentar la productividad de tus equipos.</p>
                        <ul className="list-none text-slate-400 mt-4">
                        <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-500 text-xl me-2"/>Automatizacion de procesos operativos</li>
                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-500 text-xl me-2"/>Integración entre sistemas y plataformas</li>
                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-500 text-xl me-2"/>Generación automática de reportes</li>
                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-500 text-xl me-2"/>Reducción de errores manuales</li>
                        </ul>

                        <div className="mt-4">
                            <Link to="/aboutus" className="relative inline-flex items-center tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-sky-500 hover:text-sky-500 after:bg-sky-500 duration-500 ease-in-out">Conoce más <MdKeyboardArrowRight className="me-1 text-lg"/></Link>
                        </div>
                    </div>
                </div>
            </div>

    );
}