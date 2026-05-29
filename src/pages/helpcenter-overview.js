import React, { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

import { accordionData,feturesData } from "../data/data";

import {FiArrowRight,MdKeyboardArrowDown} from '../assets/icons/vander'

export default function Overview(){
    let [activeIndex, setActiveIndex] = useState(1)
   
    return(
        <>
        <Navbar navClass= "defaultscroll is-sticky" ulClass='navigation-menu justify-end nav-light' navLight={true}/>
        <section className="relative table w-full py-36 bg-[url('../../assets/images/bg/bg6.jpg')] bg-center bg-no-repeat bg-cover">
            <div className="absolute inset-0 bg-sky-900/80"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="mb-6 md:text-4xl text-3xl md:leading-snug leading-snug font-medium text-white">Hello ! <br/> How can we help you?</h3>

                    <div className="text-center subcribe-form mt-4 pt-2">
                        <form className="relative mx-auto max-w-xl">
                            <input type="text" id="help" name="name" className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-slate-900 dark:text-white rounded-lg bg-white/70 dark:bg-slate-900/70 shadow dark:shadow-gray-800" placeholder="Search your questions or topic..."/>
                            <button type="submit" className="absolute top-[2px] end-[3px] h-[46px] inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-lg align-middle transition-all duration-500">Search</button>
                        </form>
                    </div>
                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block text-[15px] font-medium duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/index">Dreameld</Link></li>
                    <li className="inline-block text-[15px] text-white ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block text-[15px] font-medium duration-500 ease-in-out text-white">Helpcenter</li>
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
        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl text-2xl md:leading-snug leading-snug font-medium">Find The Help You Need</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 gap-[30px]">
                    {feturesData.map((item,index)=>{
                        let Icon = item.icon
                        return(
                            <div className="text-center px-6 mt-6" key={index}>
                                <div className="w-14 h-14 bg-sky-500/5 text-sky-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                                    <Icon/>
                                </div>
        
                                <div className="content mt-7">
                                    <Link to="/helpcenter-faqs" className="title h5 text-lg font-medium hover:text-sky-500">{item.title}</Link>
                                    <p className="text-slate-400 mt-3">{item.desc}</p>
                                    
                                    <div className="mt-5">
                                        <Link to="/helpcenter-faqs" className="hover:text-sky-500 after:bg-sky-500 duration-500 ease-in-out inline-flex items-center">Read More <FiArrowRight className="ms-1"/></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl text-2xl md:leading-snug leading-snug font-medium">Get Started</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                </div>

                <div className="flex justify-center mt-8">
                    <div className="lg:w-2/3">
                        <div id="accordion-collapseone" data-accordion="collapse" className="mt-6">
                            {accordionData.slice(0,4).map((item,index)=>{
                                return(
                                    <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4" key={index}>
                                        <h2 className="text-base font-medium" id="accordion-collapse-heading-1">
                                            <button onClick={()=>setActiveIndex(item.id)} type="button" className={`${activeIndex === item.id ? " bg-gray-50 dark:bg-slate-800 text-sky-500" : ""} flex justify-between items-center p-5 w-full font-medium text-start`}>
                                               <span className="text-[17px]">{item.title}</span>
                                                <MdKeyboardArrowDown className={`${activeIndex === item.id ? "rotate-180" : ""} w-4 h-4 shrink-0`}/>
                                            </button>
                                        </h2>
                                        <div>
                                            {activeIndex === item.id ? 
                                                <div className="p-5">
                                                    <p className="text-slate-400 dark:text-gray-400">{item.desc}</p> 
                                                </div>:''
                                            }
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}