import React from "react";
import { Link } from "react-router-dom";

// Imports de imágenes
import mapImage from '../assets/images/map2.png';
import germany from '../assets/images/flags/germany.png';
import italy from '../assets/images/flags/italy.png';
import russia from '../assets/images/flags/russia.png';
import spain from '../assets/images/flags/spain.png';
import usa from '../assets/images/flags/usa.png';
import mexico from '../assets/images/flags/mexico64.png';

export default function WorldMap() {

    return (

        <div className="container relative md:mt-24 mt-16">

            <div className="relative grid grid-cols-1 pb-8 text-center z-1">

                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-medium">Infraestructura Global, Soporte Local</h3>



                <p className="text-slate-400 max-w-xl mx-auto">Conectamos tus proyectos a una red estratégica de centros de datos de alta velocidad en EE.UU., Europa y Latinoamérica para garantizar la menor latencia y la máxima velocidad de carga.</p>

            </div>



            <div className="grid grid-cols-1 pt-8">

                <div className="relative">

                    <img src={mapImage} className="mx-auto" alt="" />



                    <Link to="" className="absolute top-[15%] start-[20%]"><img src={germany} className="md:h-8 h-4 md:w-8 w-4 rounded-full shadow dark:shadow-gray-800" alt="" title="Germany" /></Link>
                    <Link to="" className="absolute top-[20%] start-[30%]"><img src={italy} className="md:h-8 h-4 md:w-8 w-4 rounded-full shadow dark:shadow-gray-800" alt="" title="Italy" /></Link>
                    <Link to="" className="absolute top-[25%] start-[70%]"><img src={russia} className="md:h-8 h-4 md:w-8 w-4 rounded-full shadow dark:shadow-gray-800" alt="" title="Russia" /></Link>
                    <Link to="" className="absolute top-[25%] start-[50%]"><img src={spain} className="md:h-8 h-4 md:w-8 w-4 rounded-full shadow dark:shadow-gray-800" alt="" title="Spain" /></Link>
                    <Link to="" className="absolute top-[17%] start-[50%]"><img src={usa} className="md:h-8 h-4 md:w-8 w-4 rounded-full shadow dark:shadow-gray-800" alt="" title="USA" /></Link>
                    <Link to="" className="absolute top-[20%] start-[20%]"><img src={mexico} className="md:h-8 h-4 md:w-8 w-4 rounded-full shadow dark:shadow-gray-800" alt="" title="Mexico" /></Link>
                </div>

            </div>

        </div>

    )

}

