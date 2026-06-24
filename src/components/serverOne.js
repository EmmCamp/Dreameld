import React from "react";
import { Link } from "react-router-dom";

import serverImg from '../assets/images/2.png'

import {AiOutlineCheckCircle,MdKeyboardArrowRight} from '../assets/icons/vander'

export default function ServerOne(){
    return(
            <div className="container relative md:mt-24 mt-16">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div className="lg:col-span-6 md:order-2 order-1">
                        <div className="lg:ms-8">
                            <img src={serverImg} alt=""/>
                        </div>
                    </div>
                    <div className="lg:col-span-6 md:order-1 order-2">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-medium">Respuesta rápida <br/> y servidores seguros</h3>
                        <p className="text-slate-400 max-w-xl">Infraestructura confiable y soporte cercano para mantener tus proyectos digitales siempre disponibles, protegidos y en crecimiento.</p>

                        <ul className="list-none text-slate-400 mt-4">
                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-500 text-xl me-2"/>Soluciones tecnológicas para negocios modernos</li>
                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-500 text-xl me-2"/>Soporte especializado y acompañamiento continuo</li>
                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-violet-500 text-xl me-2"/>Infraestructura flexible adaptada a tu crecimiento</li>
                        </ul>

                        <div className="mt-4">
                            <Link to="/aboutus" className="relative inline-flex items-center tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-violet-500 hover:text-emerald-500 after:bg-sky-500 duration-500 ease-in-out">Conoce más <MdKeyboardArrowRight className="me-1 text-lg"/></Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}