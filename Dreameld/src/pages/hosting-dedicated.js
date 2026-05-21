import React, { useState } from "react";
import { Link } from "react-router-dom";

import india from '../assets/images/flags/india.png'
import usa from '../assets/images/flags/usa.png'

import Tagline from "../components/tagline";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import ServerFaq from "../components/serverFaq";

import { serverPlanOne } from "../data/data";

import {FiHexagon,VscServer,TbCloudHeart, MdOutlineMarkEmailRead,MdKeyboardArrowRight,LiaShoppingBagSolid} from '../assets/icons/vander'

export default function HostingDedicated(){
    let [activeIndex, setActiveIndex] = useState(0)
    return(
        <>
        <Tagline/>
        <Navbar navClass= "defaultscroll is-sticky tagline-height" ulClass='navigation-menu justify-end'/>

        <section className="relative table w-full md:py-48 py-36 bg-[url('../../assets/images/bg/bg5.png')] bg-center bg-cover">
            <div className="absolute inset-0 bg-sky-500/5"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-12">
                    <h3 className="text-4xl leading-normal font-semibold mb-6">Dedicated Web Hosting</h3>
                    <p className="text-slate-400 text-[17px] max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>

                    <ul className="tracking-[0.5px] mt-6 inline-block">
                        <li className="inline-block uppercase text-[13px] font-semibold duration-500 ease-in-out hover:text-sky-500"><Link to="/index">Hoxia</Link></li>
                        <li className="inline-block ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                        <li className="inline-block uppercase text-[13px] font-semibold text-sky-500" aria-current="page">Dedicated Hosting</li>
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

        <section className="relative md:py-24 py-16">
            <div className="container">
                <div className="grid lg:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-5 lg:pb-0 pb-8 lg:text-start text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-medium">Why Choose Dedicated Server?</h3>
                        <p className="text-slate-400 max-w-xl lg:text-start mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                        
                        <div className="mt-4">
                            <Link to="/aboutus" className="relative inline-flex items-center tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-sky-500 hover:text-sky-500 after:bg-sky-500 duration-500 ease-in-out">Find Out More <MdKeyboardArrowRight className="ms-1 text-lg"/></Link>
                        </div>
                    </div>

                    <div className="lg:col-span-7 lg:mt-0 mt-8">
                        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                            <div className="group relative p-6 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-sky-500 dark:hover:bg-sky-500 transition-all duration-500 ease-in-out rounded-md bg-white dark:bg-slate-900 overflow-hidden h-fit">
                                <div className="relative overflow-hidden text-transparent -m-3">
                                    <FiHexagon className="h-24 w-24 fill-sky-500/[0.07] group-hover:fill-white/20"/>
                                    <div className="absolute top-2/4 -translate-y-2/4 start-8 text-sky-500 rounded-md group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                        <VscServer/>
                                    </div>
                                </div>
        
                                <div className="mt-6">
                                    <h5><Link to="" className="text-lg font-medium group-hover:text-white transition-all duration-500 ease-in-out">Web Hosting</Link></h5>
                                    <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                                </div>
                            </div>
        
                            <div className="grid grid-cols-1 items-center gap-[30px]">
                                <div className="group relative p-6 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-sky-500 dark:hover:bg-sky-500 transition-all duration-500 ease-in-out rounded-md bg-white dark:bg-slate-900 overflow-hidden h-fit">
                                    <div className="relative overflow-hidden text-transparent -m-3">
                                        <FiHexagon className="h-24 w-24 fill-sky-500/[0.07] group-hover:fill-white/20"/>
                                        <div className="absolute top-2/4 -translate-y-2/4 start-8 text-sky-500 rounded-md group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                           <TbCloudHeart/>
                                        </div>
                                    </div>
            
                                    <div className="mt-6">
                                        <h5><Link to="" className="text-lg font-medium group-hover:text-white transition-all duration-500 ease-in-out">Domains</Link></h5>
                                        <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                                    </div>
                                </div>
            
                                <div className="group relative p-6 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-sky-500 dark:hover:bg-sky-500 transition-all duration-500 ease-in-out rounded-md bg-white dark:bg-slate-900 overflow-hidden h-fit">
                                    <div className="relative overflow-hidden text-transparent -m-3">
                                        <FiHexagon className="h-24 w-24 fill-sky-500/[0.07] group-hover:fill-white/20"/>
                                        <div className="absolute top-2/4 -translate-y-2/4 start-8 text-sky-500 rounded-md group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                            <MdOutlineMarkEmailRead/>
                                        </div>
                                    </div>
            
                                    <div className="mt-6">
                                        <h5><Link to="" className="text-lg font-medium group-hover:text-white transition-all duration-500 ease-in-out">Emails</Link></h5>
                                        <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-medium">Dedicated Server Plans</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                </div>
            
                <div className="grid grid-cols-1 mt-8">
                    <ul className="inline-block w-fit mx-auto flex-wrap justify-center text-center shadow dark:shadow-gray-800 rounded-md">
                        <li role="presentation" className="inline-block">
                            <button onClick={() => setActiveIndex(0)} className={`${activeIndex === 0 ? "text-white bg-sky-500" : ""} px-6 py-2 text-sm font-semibold rounded-md w-full transition-all duration-500 ease-in-out `} ><img src={india} className="h-12" alt=""/><span className="block mt-1">India</span></button>
                        </li>
                        <li role="presentation" className="inline-block">
                            <button onClick={() => setActiveIndex(1)} className={`${activeIndex === 1 ? "text-white bg-sky-500" : ""} px-6 py-2 text-sm font-semibold rounded-md w-full transition-all duration-500 ease-in-out `} ><img src={usa} className="h-12" alt=""/><span className="block mt-1">USA</span></button>
                        </li>
                    </ul>

                    <div id="StarterContent" className="mt-6">
                        {activeIndex === 0 ? 
                            <div className="" >
                                <div className="grid grid-cols-1">
                                    <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                                        <table className="w-full text-start">
                                            <thead>
                                                <tr>
                                                    <th className="px-4 py-5 font-semibold text-lg text-start w-64">Plans</th>
                                                    <th className="px-4 py-5 font-semibold text-lg text-center w-48">Processor</th>
                                                    <th className="px-4 py-5 font-semibold text-lg text-center w-48">Ram</th>
                                                    <th className="px-4 py-5 font-semibold text-lg text-center w-48">Disk</th>
                                                    <th className="px-4 py-5 font-semibold text-lg text-center w-48">Bandwidth</th>
                                                    <th className="px-4 py-5 font-semibold text-lg text-center w-48">Price</th>
                                                    <th className="px-4 py-5 font-semibold text-lg text-end w-20">#</th>
                                                </tr>
                                            </thead>
                
                                            <tbody>
                                                {serverPlanOne.slice(0,4).map((item, index) => {
                                                    return(
                                                        <tr className="border-t border-gray-100 dark:border-gray-700" key={index}>
                                                            <th className="p-4 text-start">{item.plans}</th>
                                                            <td className="text-center">{item.processor}</td>
                                                            <td className="text-center">{item.ram}</td>
                                                            <td className="text-center">{item.disk}</td>
                                                            <td className="text-center">{item.bandwidth}</td>
                                                            <td className="text-center">{item.price}</td>
                                                            <td className="text-end p-4"><Link to="/domain-detail" className="h-8 w-8 inline-flex items-center text-center justify-center text-base bg-yellow-500/5 hover:bg-yellow-500 border border-yellow-500/10 hover:border-yellow-500 text-yellow-500 hover:text-white focus:ring-[3px] focus:ring-yellow-500 focus:ring-opacity-25 focus:outline-none rounded-md align-middle transition-all duration-500"><LiaShoppingBagSolid/></Link></td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>

                                        <div className="text-center border-t border-gray-100 dark:border-gray-700 px-2 py-4">
                                            <p className="text-slate-400 mb-0">Couldn't find what you're looking for ? <Link to="#" className="h6 text-sky-500">Let us know <i className="mdi mdi-arrow-right"></i></Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div> :''
                        }
                        {activeIndex === 1 ?
                            <div className="">
                                <div className="grid grid-cols-1">
                                    <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                                        <table className="w-full text-start">
                                            <thead>
                                                <tr>
                                                    <th className="px-4 py-5 font-semibold text-lg text-start w-64">Plans</th>
                                                    <th className="px-4 py-5 font-semibold text-lg text-center w-48">Processor</th>
                                                    <th className="px-4 py-5 font-semibold text-lg text-center w-48">Ram</th>
                                                    <th className="px-4 py-5 font-semibold text-lg text-center w-48">Disk</th>
                                                    <th className="px-4 py-5 font-semibold text-lg text-center w-48">Bandwidth</th>
                                                    <th className="px-4 py-5 font-semibold text-lg text-center w-48">Price</th>
                                                    <th className="px-4 py-5 font-semibold text-lg text-end w-20">#</th>
                                                </tr>
                                            </thead>
                
                                            <tbody>
                                                {serverPlanOne.map((item,index) => {
                                                    return(
                                                        <tr className="border-t border-gray-100 dark:border-gray-700" key={index}>
                                                            <th className="p-4 text-start">{item.plans} <span className={`font-medium ${item.color}`}>{item.title}</span></th>
                                                            <td className="text-center">{item.processor}</td>
                                                            <td className="text-center">{item.ram}</td>
                                                            <td className="text-center">{item.disk}</td>
                                                            <td className="text-center">{item.bandwidth}</td>
                                                            <td className="text-center">{item.price}</td>
                                                            <td className="text-end p-4"><Link to="/domain-detail" className="h-8 w-8 inline-flex items-center text-center justify-center text-base bg-yellow-500/5 hover:bg-yellow-500 border border-yellow-500/10 hover:border-yellow-500 text-yellow-500 hover:text-white focus:ring-[3px] focus:ring-yellow-500 focus:ring-opacity-25 focus:outline-none rounded-md align-middle transition-all duration-500"><LiaShoppingBagSolid/></Link></td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>

                                        <div className="text-center border-t border-gray-100 dark:border-gray-700 px-2 py-4">
                                            <p className="text-slate-400 mb-0">Couldn't find what you're looking for ? <Link to="#" className="h6 text-sky-500">Let us know <i className="mdi mdi-arrow-right"></i></Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div> : ''
                        }
                    </div>
                </div>
            </div>
            <ServerFaq/>
           
        </section>
        <Footer/>
        <Switcher/>

        </>
    )
}