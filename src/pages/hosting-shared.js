import React from "react";
import { Link } from "react-router-dom";

import Tagline from "../components/tagline";
import Navbar from "../components/navbar";
import PricingTwo from "../components/pricingTwo";
import Newsletter from "../components/newslatter";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

import {FeatureData2} from "../data/data"

import {FiHexagon} from '../assets/icons/vander'

export default function HostingShared(){
  
    return(
        <>
        <Tagline/>
        <Navbar navClass= "defaultscroll is-sticky tagline-height" ulClass='navigation-menu justify-end'/>
        <section className="relative table w-full md:pt-40 md:pb-56 pt-32 pb-48 bg-[url('../../assets/images/bg/bg5.png')] bg-center bg-cover">
            <div className="absolute inset-0 bg-sky-500/5"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-12">
                    <h3 className="text-4xl leading-normal font-semibold mb-6">Hosting rápido, seguro y listo para crecer contigo.</h3>
                    <p className="text-slate-400 text-[17px] max-w-xl mx-auto">Recibe soporte real por WhatsApp y administra tus servicios sin complicaciones ni tecnicismos.</p>

                    <ul className="tracking-[0.5px] mt-6 inline-block">
                        <li className="inline-block uppercase text-[13px] font-semibold duration-500 ease-in-out hover:text-violet-500"><Link to="/index">Dreameld</Link></li>
                        <li className="inline-block ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                        <li className="inline-block uppercase text-[13px] font-semibold text-violet-500 dark:text-emerald-500" aria-current="page">Hospedaje web compartido</li>
                    </ul>
                </div>
            </div>
        </section>
        <div className="relative">
            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="relative md:pb-24 pb-16">
            <PricingTwo title={false} priceClass="container relative z-2 -mt-36"/>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-medium">¿Porque contratar nuestro servicio de hosting?</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {FeatureData2.slice(0,4).map((item,index) => {
                        let Icon = item.icon
                        return(
                            <div className="group relative p-6 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-violet-500 dark:hover:bg-emerald-500 transition-all duration-500 ease-in-out rounded-md bg-white dark:bg-slate-900 overflow-hidden" key={index}>
                                <div className="relative overflow-hidden text-transparent -m-3">
                                    <FiHexagon className="h-24 w-24 fill-sky-500/[0.07] group-hover:fill-white/20"/>
                                    <div className="absolute top-2/4 -translate-y-2/4 start-8 text-emerald-500 dark:text-violet-500 rounded-md group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                    <Icon/>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <h5><Link to="" className="text-lg font-medium group-hover:text-white transition-all duration-500 ease-in-out">{item.title}</Link></h5>
                                    <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3">{item.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
           <Newsletter/>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}