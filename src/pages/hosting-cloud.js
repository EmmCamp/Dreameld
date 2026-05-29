import React from "react";
import { Link } from "react-router-dom";

import Tagline from "../components/tagline";
import Navbar from "../components/navbar";
import ServerFaq from "../components/serverFaq";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import { FeatureData2, priceData } from "../data/data";

import {AiOutlineCheckCircle,FiHexagon, MdKeyboardArrowRight} from '../assets/icons/vander'

export default function HostingCloud(){
    return(
        <>
        <Tagline/>
        <Navbar navClass= "defaultscroll is-sticky tagline-height " ulClass='navigation-menu justify-end nav-light' navLight={true}/>
        <section className="relative lg:py-44 py-36 bg-gradient-to-br from-yellow-500 to-sky-500">
            <div className="absolute inset-0 bg-[url('../../assets/images/bg/shape-1.png')] bg-center bg-cover"></div>
            <div className="container relative">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 mt-12 items-center gap-[30px]">
                    <div className="lg:col-span-8">
                        <h3 className="text-4xl leading-normal text-white font-semibold mb-6">Cloud Hosting</h3>
                        <p className="text-white/60 text-[17px] max-w-xl">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                        
                        <ul className="list-none text-white/80 mt-6">
                            <li className="mb-2 flex"><AiOutlineCheckCircle className="text-yellow-500 text-xl me-2"/> <span className="font-medium me-1">10GB</span> Ram</li>
                            <li className="mb-2 flex"><AiOutlineCheckCircle className="text-yellow-500 text-xl me-2"/> <span className="font-medium me-1">100GB</span> Bandwith</li>
                            <li className="mb-2 flex"><AiOutlineCheckCircle className="text-yellow-500 text-xl me-2"/> <span className="font-medium me-1">100GB SSD</span> Storage</li>
                            <li className="mb-2 flex"><AiOutlineCheckCircle className="text-yellow-500 text-xl me-2"/> <span className="font-medium me-1">3 Domain</span> Hosted Support</li>
                            <li className="mb-2 flex"><AiOutlineCheckCircle className="text-yellow-500 text-xl me-2"/> <span className="font-medium me-1">50</span> Email Account</li>
                            <li className="mb-2 flex"><AiOutlineCheckCircle className="text-yellow-500 text-xl me-2"/> <span className="font-medium me-1">5</span> Database</li>
                            <li className="mb-2 flex"><AiOutlineCheckCircle className="text-yellow-500 text-xl me-2"/> <span className="font-medium me-1">Unlimited</span> Traffic</li>
                        </ul>
                    </div>

                    <div className="lg:col-span-4">
                        <div className="group p-[1px] relative overflow-hidden shadow-lg dark:shadow-gray-800 rounded-md text-center bg-gradient-to-tr from-sky-500 to-blue-700 h-fit">
                            <div className="p-8 py-12 bg-white dark:bg-slate-900 rounded-md text">
                                <h6 className="font-medium mb-5 text-xl">Special Offer Price</h6>
        
                                <div className="d-flex justify-content-center font-semibold mt-3">
                                    <span className="h6 text-slate-400 mb-0 mt-2">$</span>
                                    <span className="price text-sky-500 text-5xl h1 mb-0">4.99</span>
                                    <span className="h6 text-slate-400 align-self-end mb-1">/mo</span>
                                </div>

                                <p className="text-slate-400 mt-4">Original Price <span className="text-yellow-500">$10.99</span></p>

                                <Link to="" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-sky-500/10 hover:bg-sky-500 border border-sky-500/10 hover:border-sky-500 text-sky-500 hover:text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500 w-full mt-5">Talk to us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block text-[15px] text-white/70 font-medium duration-500 ease-in-out hover:text-white"><Link to="/index">Dreameld</Link></li>
                    <li className="inline-block text-[15px] text-white/70 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block text-[15px] font-medium duration-500 ease-in-out text-white">Cloud hosting</li>
                </ul>
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
            <div className="container lg mx-auto">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-medium">Features</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-4 gap-[30px]">
                   {FeatureData2.map((item, index) =>{
                    let Icon = item.icon
                    return(
                        <div className="group relative lg:px-6 mt-4 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center" key={index}>
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <FiHexagon className="h-28 w-28 fill-sky-500/5 mx-auto rotate-[30deg]"/>
                                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-sky-500 rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                    <Icon/>
                                </div>
                            </div>

                            <div className="mt-6">
                                <h5><Link to="#" className="text-lg font-medium hover:text-sky-500 transition-all duration-500 ease-in-out">{item.title}</Link></h5>
                                <p className="text-slate-400 transition-all duration-500 ease-in-out mt-3">{item.desc}</p>

                                <div className="mt-4">
                                    <Link to="#" className="relative inline-flex items-center tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-sky-500 hover:text-sky-500 after:bg-sky-500 duration-500 ease-in-out">Read More <MdKeyboardArrowRight className="ms-1 text-lg"/></Link>
                                </div>
                            </div>
                        </div>
                    )
                   })}
                </div>
            </div>

            <div className="container-fluid relative pt-36 pb-56 md:mt-24 mt-16 bg-gradient-to-br from-sky-500 to-yellow-500 opacity-80">
                <div className="container relative">
                    <div className="grid grid-cols-1 items-center text-center">
                        <h4 className="mb-4 font-medium leading-normal text-3xl text-white">Pricing Table</h4>
                        <p className="text-white/70 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                    </div>
                </div>
            </div>

            <div className="container relative">
                <div className="relative -mt-36">
                    <div className="grid md:grid-cols-3 gap-[30px]">
                        {priceData.map((item,index) => {
                            return(
                                <div className="group relative overflow-hidden bg-white dark:bg-slate-900 shadow hover:shadow-lg dark:hover:shadow-lg dark:shadow-gray-800 hover:dark:shadow-gray-800 rounded-md h-fit duration-500 hover:-mt-5" key={index}>
                                    <div className="p-6 border-b border-gray-100 dark:border-gray-700 group-hover:bg-sky-500 group-hover:text-white duration-500">
                                        <h6 className="font-medium mb-5 text-xl">{item.titit}</h6>
                                        
                                        <div className="flex">
                                            <span className="text-lg font-medium">$</span>
                                            <span className="price text-5xl h6 font-semibold mb-0">{item.price}</span>
                                            <span className="text-lg font-medium self-end mb-1">/mo</span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <ul className="list-none text-slate-400">
                                            {item.features.map((el,index) =>{
                                                return(
                                                    <li key={index} className="mb-2 flex"><AiOutlineCheckCircle className="w-8  text-sky-500 text-[20px] align-middle "/><span className="ms-2">{el}</span></li>
                                                )
                                            })}
                                        </ul>
                                        <Link to="#" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500 w-full mt-5">Buy Now</Link>
                                    </div>
                                </div>
                            )
                        })}
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