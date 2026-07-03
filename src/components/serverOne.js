import React from "react";
import { Link } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";

import serverImg from "../assets/images/2.png";

const CheckIcon = () => {
    return (
        <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
            <FaCircleCheck
                className="text-violet-500 dark:text-emerald-500"
                style={{ width: 20, height: 20 }}
            />
        </div>
    );
};

const FeatureItem = ({ title, children }) => {
    return (
        <li className="flex gap-4 items-start">
            <CheckIcon />

            <div className="text-slate-400 leading-7">
                <span className="font-bold text-violet-500 dark:text-emerald-500">
                    {title}&nbsp; 
                </span>{" "}
                {children}
            </div>
        </li>
    );
};

export default function ServerOne() {
    return (
        <div className="container relative md:mt-24 mt-16">

            <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-16">

                {/* Imagen */}
                <div className="lg:col-span-6 md:order-2 order-1">
                    <div className="flex justify-center lg:justify-end lg:ms-8">
                        <img
                            src={serverImg}
                            alt="Infraestructura de servidores"
                            className="w-full max-w-[520px] h-auto"
                        />
                    </div>
                </div>

                {/* Texto */}
                <div className="lg:col-span-6 md:order-1 order-2">

                    <div className="max-w-xl">

                        <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold text-emerald-500 dark:text-violet-600">
                            Confiable por dentro, simple
                            <br /> por fuera
                            
                        </h4>

                        <p className="text-slate-400 leading-8 mb-10">
                            Infraestructura confiable y soporte cercano para mantener tus proyectos digitales siempre disponibles, protegidos y en crecimiento.
                        </p>

                        <ul className="space-y-6">

                            <FeatureItem>
                                <span className="font-bold text-violet-500 dark:text-emerald-500">
                                    Disponible cuando te buscan.
                                </span>{" "}
                                Servidores estables para que tu página permanezca disponible cuando un cliente quiera encontrarte o realizar una compra.
                            </FeatureItem>

                            <FeatureItem>
                                <span className="font-bold text-violet-500 dark:text-emerald-500">
                                    Siempre protegido.
                                </span>{" "}
                                SSL, respaldos automáticos y mantenimiento continuo para minimizar riesgos y mantener tu información segura.
                            </FeatureItem>

                            <FeatureItem>
                                <span className="font-bold text-violet-500 dark:text-emerald-500">
                                    Escala sin migraciones.
                                </span>{" "}
                                Cambia de plan conforme crece tu proyecto sin interrupciones y sin tener que rehacer tu sitio.
                            </FeatureItem>

                            <FeatureItem>
                                <span className="font-bold text-violet-500 dark:text-emerald-500">
                                    Sin complicaciones.
                                </span>{" "}
                                Administra tus servicios fácilmente o deja la infraestructura en nuestras manos para que puedas enfocarte en hacer crecer tu negocio.
                            </FeatureItem>

                        </ul>

                        <div className="mt-10">
                            <Link
                                to="/aboutus"
                                className="inline-flex items-center text-violet-500 hover:text-emerald-500 duration-300"
                            >
                                Conoce más
                                <MdKeyboardArrowRight className="ml-1 text-lg" />
                            </Link>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}