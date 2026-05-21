import React, { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/navbar";

import {MdKeyboardArrowDown} from '../assets/icons/vander'

import { Link as Link2 } from 'react-scroll';
import Footer from "../components/footer";
import Switcher from "../components/switcher";

import { accordionData } from "../data/data";

export default function Faq (){
    let[activeIndex1,setActiveIndex1] = useState(1)
    let[activeIndex2,setActiveIndex2] = useState(1)
    let[activeIndex3,setActiveIndex3] = useState(1)
    let[activeIndex4,setActiveIndex4] = useState(1)
 
    return(
        <>
        <Navbar navClass= "defaultscroll is-sticky" ulClass='navigation-menu justify-end nav-light' navLight={true}/>
        <section className="relative table w-full py-36 bg-[url('../../assets/images/bg/bg6.jpg')] bg-center bg-no-repeat bg-cover">
            <div className="absolute inset-0 bg-sky-900/80"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-10">
                    <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">Frequently Asked Questions</h3>

                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block text-[15px] font-medium duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/index">Hoxia</Link></li>
                    <li className="inline-block text-[15px] text-white ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block text-[15px] font-medium duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/helpcenter-overview">Helpcenter</Link></li>
                    <li className="inline-block text-[15px] text-white ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block text-[15px] font-medium duration-500 ease-in-out text-white">FAQs</li>
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
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                    <div className="lg:col-span-4 md:col-span-5">
                        <div className="rounded-md shadow dark:shadow-gray-800 p-6 sticky top-20">
                            <ul className=" list-none sidebar-nav mb-0 py-0" id="navmenu-nav">
                                <li className="navbar-item p-0"><Link2 to="tech"  spy={true} activeClass="active" smooth={true} className="text-base font-medium navbar-link">Buying Questions</Link2></li>
                                <li className="navbar-item mt-3 p-0"><Link2 to="general"  spy={true} activeClass="active"
                                    smooth={true} className="text-base font-medium navbar-link">General Questions</Link2></li>
                                <li className="navbar-item mt-3 p-0"><Link2 to="payment"  spy={true} activeClass="active"
                                    smooth={true} className="text-base font-medium navbar-link">Payments Questions</Link2></li>
                                <li className="navbar-item mt-3 p-0"><Link2 to="support"  spy={true} activeClass="active"
                                    smooth={true} className="text-base font-medium navbar-link">Support Questions</Link2></li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-8 md:col-span-7">
                        <div id="tech">
                            <h5 className="text-2xl font-medium">Buying Product</h5>

                            <div id="accordion-collapseone" data-accordion="collapse" className="mt-6">
                                {
                                    accordionData.slice(0,4).map((item,index)=>{
                                        return(
                                        <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4" key={index}>
                                            <h2 className="text-base font-semibold" >
                                                <button type="button" onClick={()=>setActiveIndex1(item.id)} className={`${activeIndex1 === item.id ? 'flex justify-betwee bg-gray-50 dark:bg-slate-800 text-sky-500 ':""} flex justify-between items-center p-5 w-full font-medium text-start`}>
                                                    <span className="text-[17px]">{item.title}</span>
                                                    <MdKeyboardArrowDown className={`${activeIndex1 === item.id ? 'rotate-180' : '' } w-4 h-4 shrink-0`}/>
                                                    
                                                </button>
                                            </h2>
                                            <div >
                                                {activeIndex1 === item.id ? 
                                                <div className="p-5">
                                                    <p className="text-slate-400 dark:text-gray-400">{item.desc}</p>
                                                </div>:''
                                                }
                                            </div>
                                        </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div id="general" className="mt-8">
                            <h5 className="text-2xl font-medium">General Questions</h5>

                            <div id="accordion-collapseone" data-accordion="collapse" className="mt-6">
                                {
                                    accordionData.slice(0,4).map((item,index)=>{
                                        return(
                                        <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4" key={index}>
                                            <h2 className="text-base font-semibold" >
                                                <button type="button" onClick={()=>setActiveIndex2(item.id)} className={`${activeIndex2 === item.id ? 'flex justify-betwee bg-gray-50 dark:bg-slate-800 text-sky-500 ':""} flex justify-between items-center p-5 w-full font-medium text-start`}>
                                                    <span className="text-[17px]">{item.title}</span>
                                                    <MdKeyboardArrowDown className={`${activeIndex2 === item.id ? 'rotate-180' : '' } w-4 h-4 shrink-0`}/>
                                                    
                                                </button>
                                            </h2>
                                            <div >
                                                {activeIndex2 === item.id ? 
                                                <div className="p-5">
                                                    <p className="text-slate-400 dark:text-gray-400">{item.desc}</p>
                                                </div>:''
                                                }
                                            </div>
                                        </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div id="payment" className="mt-8">
                            <h5 className="text-2xl font-medium">Payments Questions</h5>

                            <div id="accordion-collapseone" data-accordion="collapse" className="mt-6">
                                {
                                    accordionData.slice(0,4).map((item,index)=>{
                                        return(
                                        <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4" key={index}>
                                            <h2 className="text-base font-semibold" >
                                                <button type="button" onClick={()=>setActiveIndex3(item.id)} className={`${activeIndex3 === item.id ? 'flex justify-betwee bg-gray-50 dark:bg-slate-800 text-sky-500 ':""} flex justify-between items-center p-5 w-full font-medium text-start`}>
                                                    <span className="text-[17px]">{item.title}</span>
                                                    <MdKeyboardArrowDown className={`${activeIndex3 === item.id ? 'rotate-180' : '' } w-4 h-4 shrink-0`}/>
                                                    
                                                </button>
                                            </h2>
                                            <div >
                                                {activeIndex3 === item.id ? 
                                                <div className="p-5">
                                                    <p className="text-slate-400 dark:text-gray-400">{item.desc}</p>
                                                </div>:''
                                                }
                                            </div>
                                        </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div id="support" className="mt-8">
                            <h5 className="text-2xl font-medium">Support Questions</h5>

                            <div id="accordion-collapseone" data-accordion="collapse" className="mt-6">
                                {
                                    accordionData.slice(0,4).map((item,index)=>{
                                        return(
                                        <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4" key={index}>
                                            <h2 className="text-base font-semibold" >
                                                <button type="button" onClick={()=>setActiveIndex4(item.id)} className={`${activeIndex4 === item.id ? 'flex justify-betwee bg-gray-50 dark:bg-slate-800 text-sky-500 ':""} flex justify-between items-center p-5 w-full font-medium text-start`}>
                                                    <span className="text-[17px]">{item.title}</span>
                                                    <MdKeyboardArrowDown className={`${activeIndex4 === item.id ? 'rotate-180' : '' } w-4 h-4 shrink-0`}/>
                                                    
                                                </button>
                                            </h2>
                                            <div >
                                                {activeIndex4 === item.id ? 
                                                <div className="p-5">
                                                    <p className="text-slate-400 dark:text-gray-400">{item.desc}</p>
                                                </div>:''
                                                }
                                            </div>
                                        </div>
                                        )
                                    })
                                }
                            </div>
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