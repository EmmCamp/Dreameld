import React,{useState} from "react";
import { Link } from "react-router-dom";

import bannerone from '../assets/images/4.png'

import Navbar from "../components/navbar";
import Tagline from "../components/tagline";
import Card from "../components/card";
import PricingOne from "../components/pricingOne";
import ClientOne from "../components/clientOne";
import Faq from "../components/faq";
import Newsletter from "../components/newslatter";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

import ModalVideo from 'react-modal-video';
import "../../node_modules/react-modal-video/css/modal-video.css"

import { servicios } from "../data/data";

import {FiHexagon} from '../assets/icons/vander'


export default function IndexThree(){
    let [isOpen, setOpen] = useState(false);
    return(
        <>
        <Tagline/>
        <Navbar navClass= "defaultscroll is-sticky tagline-height" ulClass='navigation-menu justify-end nav-light' navLight={true}/>

        <section className="relative lg:py-44 py-36 bg-gradient-to-br from-violet-700 to-emerald-500">
            <div className="absolute inset-0 bg-[url('../../assets/images/bg/shape-1.png')] bg-center bg-cover"></div>
            <div className="container relative">
                <div className="relative grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div className="md:col-span-7">
                        <div className="me-6">
                           {/**<div className="bg-white dark:bg-slate-900 text-slate-400 py-2 px-4 inline-flex items-center font-medium rounded-full shadow dark:shadow-gray-800 mb-2"><span className="bg-yellow-500 text-white text-[12px] font-bold px-2.5 py-0 rounded-full me-2">Hosting</span> 99.9% Uptime Guarantee</div>*/}
                            <h4 className="font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">Todo lo que tu negocio necesita para estar en línea</h4>
                            <p className="text-white/70 max-w-xl">Tú enfócate, nosotros lo hacemos funcionar.</p>
                        
                            <div className="mt-6">
                            
                                <Link to="/aboutus" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-violet-600 
                                hover:bg-emerald-500 border border-violet-600 hover:border-emerald-500 text-white focus:ring-[3px] focus:ring-violet-500 
                                focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500">Contactanos</Link>
                                {/*<Link to="#!" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610" className="h-11 w-11 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-full ms-1 lightbox"><i className="mdi mdi-play text-xl align-middle"></i></Link><small className="text-sm font-semibold uppercase align-middle text-white ms-2">Watch Now</small>
                            */}
                            </div>
                        </div>
                    </div>

                    <div className="relative md:col-span-5">
                        <img src={bannerone} className="mover" alt=""/>
                        <div className="overflow-hidden after:content-[''] after:absolute after:h-12 after:w-12 after:bg-yellow-500/20 after:top-0 after:start-0 after:z-1 after:rounded-lg after:animate-[spin_10s_linear_infinite]"></div>
                    </div>
                </div>

                <div className="relative animate-[spin_60s_linear_infinite] z-1">
                    <span className="after:absolute after:start-0 after:bottom-1/2 after:translate-y-1/2 after:h-2 after:w-8 after:rounded-md after:bg-yellow-500/20 relative after:z-10"></span>
                    <span className="after:absolute after:start-0 after:bottom-1/2 after:translate-y-1/2 after:rotate-90 after:h-2 after:w-8 after:rounded-md after:bg-yellow-500/20 relative after:z-10"></span>
                </div>
            </div>
        </section>
            <ModalVideo
				channel="youtube"
				youtube={{ mute: 0, autoplay: 0 }}
				isOpen={isOpen}
				videoId="S_CGed6E610"
				onClose={() => setOpen(false)} 
			/>
        <div className="relative">
            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="relative md:pb-24 pb-16 -mt-[86px] z-1">
            <div className="container">
                <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-center gap-[30px]">
                    {servicios.map((item,index) =>{
                        let Icon = item.icon
                        return(
                        <div className="relative overflow-hidden text-transparent -m-3" key={index}>
                            <FiHexagon className="sm:h-48 h-40 sm:w-48 w-40 fill-gray-50 dark:fill-slate-800 mx-auto"/>
                            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto transition-all duration-500 ease-in-out text-4xl grid align-middle justify-center items-center">
                                <Icon className="text-4xl text-violet-600 mx-auto"/>
                                <Link to="" className="sm:text-lg text-base font-medium mt-1 h5 text-slate-900 hover:text-violet-500 dark:text-white dark:hover:text-emerald-500 transition-all duration-500 ease-in-out">{item.title}</Link>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
           

            <Card/>

           <Newsletter/>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}