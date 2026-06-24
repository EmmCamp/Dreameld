import React from "react";

import Tagline from "../components/tagline";
import Navbar from "../components/navbar";
import ServerOne from "../components/serverOne";
import DomainList from "../components/domainList";
import PricingTwo from "../components/pricingTwo";
import HostingServices from "../components/hostingServices";
import ServerTwo from "../components/serverTwo";
import Faq from "../components/faq";
import Newsletter from "../components/newslatter";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

import { TypeAnimation } from 'react-type-animation';

import {LuSearch} from '../assets/icons/vander'

export default function IndexFour(){
    return(
        <>
        <Tagline/>
        <Navbar navClass= "defaultscroll is-sticky tagline-height" ulClass='navigation-menu justify-end nav-light' navLight={true}/>

        <section className="relative lg:py-64 py-36 bg-[url('../../assets/images/bg/bg1.jpg')] bg-center bg-cover">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-transparent "></div>
            <div className="container relative">
                <div className="grid grid-cols-1 items-center text-center mt-10">
                    <h4 className="font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">Impulsamos tus procesos digitales <br/> con
                     <span className="typewrite text-green-500" data-period="2000" data-type='[ "Automatizaciones", "Software", "Automatizaciones", "Consultoría" ]'> <span className="wrap"></span> </span>
                     <TypeAnimation
                        sequence={[
                            'Infraestructura',
                            2000,
                            'Software',
                            2000,
                            'Automatizaciones',
                            2000,
                            'Consultoría',
                            2000
                        ]}
                        wrapper="span"
                        speed={10}
                        style={{ color: '#A6D219' }}
                        repeat={Infinity}
                        cursor={false}
                     />
                     </h4>
                    {/*
                    <p className="text-white/70 text-lg max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                
                    <div className="mt-6">
                        <form className="relative max-w-xl mx-auto">
                            <input type="text" id="searchDomain" name="text" className="pt-4 pe-40 pb-4 ps-6 w-full h-12 outline-none text-black rounded-lg bg-white shadow" placeholder="Search Your Domain"/>
                            <button type="submit" className="absolute top-[0] end-[0] h-12 inline-flex items-center px-8 py-2.5 text-[16px] font-medium tracking-wide bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-e-lg align-middle transition-all duration-500"><LuSearch className="me-1"/> Search</button>
                        </form>
                        
                        
                    </div>
                    */}
                </div>
            </div>  
         </section>

        <section className="relative md:pb-24 pb-16 -mt-[74px]">
           
            <ServerTwo/>
            <PricingTwo priceClass="container relative md:mt-24 mt-16"/>
            <HostingServices title="Servicios de web hosting"/>
            <ServerOne/>
            <Faq/>
            <DomainList/>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}