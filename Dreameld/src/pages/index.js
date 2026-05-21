import React from "react";
import { Link } from "react-router-dom";

import bannerImg from '../assets/images/1.png'

import Tagline from "../components/tagline";
import Navbar from "../components/navbar";
import Switcher from "../components/switcher";
import DomainList from "../components/domainList";
import HostingServices from "../components/hostingServices";
import ServerOne from "../components/serverOne";
import PricingOne from "../components/pricingOne";
import ServerTwo from "../components/serverTwo";
import ClientOne from "../components/clientOne";
import Faq from "../components/faq";
import Newsletter from "../components/newslatter";
import Footer from "../components/footer";

import CountUp from 'react-countup';

import {LuSearch} from '../assets/icons/vander'
import { counterData } from "../data/data";

export default function Index(){
    return(
        <>
        <Tagline/>
        <Navbar navClass= "defaultscroll is-sticky tagline-height" ulClass='navigation-menu justify-end nav-light' navLight={true}/>

        <section className="relative lg:py-44 py-36 bg-gradient-to-br from-sky-700 to-blue-600">
            <div className="absolute inset-0 bg-[url('../../assets/images/bg/shape-1.png')] bg-center bg-cover opacity-5"></div>
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div className="md:col-span-7">
                        <div className="me-6">
                            <h4 className="font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">Hosting & Domain In One Plateform</h4>
                            <p className="text-white/70 text-lg max-w-xl">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                        
                            <div className="mt-6">
                                <Link to="" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-yellow-500 hover:bg-yellow-600 border border-yellow-500 hover:border-yellow-600 text-white focus:ring-[3px] focus:ring-yellow-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500">Learn more</Link>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-5">
                        <img src={bannerImg} alt=""/>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative py-24 bg-slate-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px] items-center">
                    <div>
                        <h4 className="md:text-3xl md:leading-normal text-2xl leading-normal font-medium">Find your perfect business <br/> name and domain</h4>
                    </div>
                    
                    <div className="">
                        <form className="relative max-w-xl">
                            <input type="text" id="searchDomain" name="text" className="pt-4 pe-40 pb-4 ps-6 w-full h-12 outline-none text-black dark:text-white rounded-lg bg-white dark:bg-slate-900 shadow dark:shadow-gray-800" placeholder="Search Your Domain"/>
                            <button type="submit" className="absolute top-[0] end-[0] h-12 inline-flex items-center px-8 py-2.5 text-[16px] font-medium tracking-wide bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-e-lg align-middle transition-all duration-500"><LuSearch className="me-1"/>Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:pb-24 pb-16 -mt-[74px]">
            <DomainList/>
            <HostingServices title="Hosting Services"/>
            <ServerOne/>
            <PricingOne/>
            <ServerTwo/>

            <div className="container relative md:mt-24 mt-16 lg:pt-24 pt-16">
                <div className="absolute inset-0 opacity-25 dark:opacity-50 bg-[url('../../assets/images/map.png')] bg-no-repeat bg-center bg-cover"></div>
                <div className="relative grid grid-cols-1 pb-8 text-center z-1">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-medium">Trusted by more than 10K users</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                </div>

                <div className="relative grid md:grid-cols-3 grid-cols-1 items-center mt-8 gap-[30px] z-1">
                    {counterData.map((item,index) =>{
                        return(
                            <div className="counter-box text-center" key={index}>
                                <h1 className="lg:text-4xl text-3xl font-semibold mb-2 text-slate-400 dark:text-white"><CountUp start={item.start} end={item.end}/>+</h1>
                                <h5 className="counter-head text-lg font-medium">{item.title}</h5>
                            </div>
                        )
                    })}
                </div>
            </div>
            
           <ClientOne clientClass="container relative md:mt-24 mt-16"/>
           <Faq/>
           <Newsletter/>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}