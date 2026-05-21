import React from "react";
import { Link } from "react-router-dom";

import BannerImg from '../assets/images/hero.png'
import client1 from "../assets/images/client/01.jpg";
import client2 from "../assets/images/client/02.jpg";
import client3 from "../assets/images/client/03.jpg";

import Tagline from "../components/tagline";
import Navbar from "../components/navbar";
import Switcher from "../components/switcher";
import ServerOne from "../components/serverOne";
import ServerTwo from "../components/serverTwo";
import HostingServices from "../components/hostingServices";
import Faq from "../components/faq";
import Newsletter from "../components/newslatter";
import Footer from "../components/footer";
import WorldMap from "../components/worldMap";

import {LuSearch,AiOutlineCheckCircle} from '../assets/icons/vander'
import { clientLogo } from "../data/data";

export default function IndexTwo(){
    let domainList = [".com",".in",".net",".info",".tv",".mobi",".me",".biz",".org"]
    return(
        <>
        <Tagline/>
        <Navbar navClass= "defaultscroll is-sticky tagline-height" ulClass='navigation-menu justify-end'/>

        <section className="relative pt-28 before:content-[''] before:absolute before:bottom-40 xl:before:start-[45rem] xl:before:w-[90rem] xl:before:h-[35rem] ltr:before:rotate-[115deg] rtl:before:rotate-[65deg] before:bg-amber-500 after:content-[''] after:absolute xl:after:bottom-96 xl:after:start-[30rem] xl:after:w-[75rem] xl:after:h-40 ltr:after:rotate-[115deg] rtl:after:rotate-[65deg] after:bg-amber-500/10 after:-z-1 before:start-40 before:w-[75rem] before:h-[30rem] after:start-0 after:bottom-80 after:w-[75rem] after:h-60 overflow-hidden bg-[url('../../assets/images/bg/bg5.png')] bg-top bg-cover" id="home">
            <div className="absolute inset-0 bg-sky-500/5"></div>
            <div className="container relative">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div>
                        <h4 className="font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Fastest <span className="text-sky-500">Performance</span> and <span className="text-sky-500">Best</span> Web Hosting</h4>
                        <p className="text-slate-400 text-[17px] max-w-xl">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                    
                        <div className="mt-6 ">
                            <Link to="#" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-amber-500 hover:bg-amber-600 border border-amber-500 hover:border-amber-600 text-white focus:ring-[3px] focus:ring-amber-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500">Get Started</Link>

                            <span className="h6 text-[22px] font-semibold mb-0 ms-2 align-middle">50% OFF</span>
                        </div>
                    </div>

                    <div className="relative">
                        <img src={BannerImg} alt=""/>
                        <div className="absolute bottom-1/2 translate-y-1/2 lg:-end-7 -end-5 p-4 rounded-md shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-48 m-3">
                            <h5 className="text-lg font-medium mb-3">Revanue</h5>
                            <div className="flex justify-between mt-3 mb-2">
                                <span className="text-slate-400">Profit</span>
                                <span className="text-slate-400">84%</span>
                            </div>
                            <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                <div className="bg-sky-500 h-[6px] rounded-full" style={{width:'84%'}}></div>
                            </div>
                        </div>

                        <div className="absolute flex justify-between items-center lg:bottom-20 bottom-10 md:start-12 -start-2 p-4 rounded-md shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3">
                            <div className="flex items-center">
                                <div className="flex items-center me-3">
                                    <img src={client1} className="h-10 w-10 rounded-full border-2 dark:border-gray-700 shadow-md dark:shadow-gray-800 hover:z-2" alt=""/>
                                    <img src={client2} className="h-10 w-10 rounded-full border-2 dark:border-gray-700 shadow-md dark:shadow-gray-800 hover:z-2 -ms-3" alt=""/>
                                    <img src={client3} className="h-10 w-10 rounded-full border-2 dark:border-gray-700 shadow-md dark:shadow-gray-800 hover:z-2 -ms-3" alt=""/>
                                </div>
                                <div className="flex-1">
                                    <ul className="list-none mb-0 text-amber-400">
                                        <li className="inline font-medium text-[18px]">4.6</li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                    </ul>
                                    <p className="font-medium">10K Reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:pb-24 pb-16 -mt-12">
            <div className="container relative">
                <div className="md:flex">
                    <div className="lg:w-2/3 md:w-full bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 md:p-8 p-6">
                        <form className="relative mb-2">
                            <input type="text" id="searchDomain" name="text" className="pt-4 pe-40 pb-4 ps-6 w-full h-12 outline-none text-black dark:text-white rounded-lg bg-white dark:bg-slate-900 shadow dark:shadow-gray-800" placeholder="Search Your Domain"/>
                            <button type="submit" className="absolute top-[0] end-[0] h-12 inline-flex items-center px-8 py-2.5 text-[16px] font-medium tracking-wide bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-e-lg align-middle transition-all duration-500"><LuSearch className="me-1"/> Search</button>
                        </form>

                        <ul className="list-none">
                            {domainList.map((item,index) =>{
                                return(
                                    <li className="inline-grid m-1" key={index}><Link to="" className="font-medium px-2 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 hover:text-sky-500">{item}</Link></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>

            <ServerOne/>
            <ServerTwo/>
            <HostingServices title="Web Hosting Features" bgIcon={true}/>

           <WorldMap/>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-medium">Explore Our Hosting Pricing</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <div className="group p-6 relative overflow-hidden shadow-lg dark:shadow-gray-800 rounded-md h-fit">
                        <div className="flex justify-between items-center mb-5">
                            <h6 className="font-medium text-xl">Shared</h6>

                            <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full h-5 ms-1">Save 25%</span>
                        </div>

                        <div className="flex mb-5">
                            <span className="text-lg font-medium">$</span>
                            <span className="price text-5xl h6 font-semibold mb-0">9</span>
                            <span className="text-lg font-medium self-end mb-1">/mo</span>
                        </div>

                        <ul className="list-none text-slate-400">
                            <li className="mb-1 flex justify-between items-center">
                                <span className="flex items-center"><AiOutlineCheckCircle className="text-sky-500 text-[20px] align-middle me-2"/><span className="mt-0.5">Website</span></span>
                                <span>1</span>
                            </li>
                            <li className="mb-1 flex justify-between">
                                <span className="flex items-center"><AiOutlineCheckCircle className="text-sky-500 text-[20px] align-middle me-2"/> <span className="mt-0.5">SSd Storage</span></span>
                                <span>10 GB</span>
                            </li>
                            <li className="mb-1 flex justify-between">
                                <span className="flex items-center"><AiOutlineCheckCircle className="text-sky-500 text-[20px] align-middle me-2"/> <span className="mt-0.5">Visitor</span></span>
                                <span>3,000 User</span>
                            </li>
                            <li className="mb-1 flex justify-between">
                                <span className="flex items-center"><AiOutlineCheckCircle className="text-sky-500 text-[20px] align-middle me-2"/> <span className="mt-0.5">Domain</span></span>
                                <span>Free</span>
                            </li>
                            <li className="mb-1 flex justify-between">
                                <span className="flex items-center"><AiOutlineCheckCircle className="text-sky-500 text-[20px] align-middle me-2"/> <span className="mt-0.5">SSL Bandwidth</span></span>
                                <span>100 GB</span>
                            </li>
                            <li className="mb-1 flex justify-between">
                                <span className="flex items-center"><AiOutlineCheckCircle className="text-sky-500 text-[20px] align-middle me-2"/> <span className="mt-0.5">GIT Access</span></span>
                                <span>Free</span>
                            </li>
                        </ul>
                        <Link to="" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-sky-500/10 hover:bg-sky-500 border border-sky-500/10 hover:border-sky-500 text-sky-500 hover:text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500 w-full mt-5">Buy Now</Link>
                    </div>

                    <div className="group relative overflow-hidden shadow-lg dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900 h-fit">
                        <div className="bg-gradient-to-tr from-sky-500 to-blue-700 text-white py-2 px-6 h6 text-lg font-medium">Popular</div>
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-5">
                                <h6 className="font-medium text-xl">VPS</h6>

                                <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full h-5 ms-1">Save 25%</span>
                            </div>

                            <div className="flex mb-5">
                                <span className="text-lg font-medium">$</span>
                                <span className="price text-5xl h6 font-semibold mb-0">12</span>
                                <span className="text-lg font-medium self-end mb-1">/mo</span>
                            </div>

                            <ul className="list-none text-slate-400">
                                <li className="mb-1 flex justify-between">
                                    <span className="flex items-center"><AiOutlineCheckCircle className="text-sky-500 text-[20px] align-middle me-2"/> <span className="mt-0.5">Website</span></span>
                                    <span>1</span>
                                </li>
                                <li className="mb-1 flex justify-between">
                                    <span className="flex items-center"><AiOutlineCheckCircle className="text-sky-500 text-[20px] align-middle me-2"/> <span className="mt-0.5">SSd Storage</span></span>
                                    <span>10 GB</span>
                                </li>
                                <li className="mb-1 flex justify-between">
                                    <span className="flex items-center"><AiOutlineCheckCircle className="text-sky-500 text-[20px] align-middle me-2"/> <span className="mt-0.5">Visitor</span></span>
                                    <span>3,000 User</span>
                                </li>
                                <li className="mb-1 flex justify-between">
                                    <span className="flex items-center"><AiOutlineCheckCircle className="text-sky-500 text-[20px] align-middle me-2"/> <span className="mt-0.5">Domain</span></span>
                                    <span>Free</span>
                                </li>
                                <li className="mb-1 flex justify-between">
                                    <span className="flex items-center"><AiOutlineCheckCircle className="text-sky-500 text-[20px] align-middle me-2"/> <span className="mt-0.5">SSL Bandwidth</span></span>
                                    <span>100 GB</span>
                                </li>
                                <li className="mb-1 flex justify-between">
                                    <span className="flex items-center"><AiOutlineCheckCircle className="text-sky-500 text-[20px] align-middle me-2"/> <span className="mt-0.5">GIT Access</span></span>
                                    <span>Free</span>
                                </li>
                            </ul>
                            <Link to="" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500 w-full mt-5">Buy Now</Link>
                        </div>
                    </div>

                    <div className="group p-6 relative overflow-hidden shadow-lg dark:shadow-gray-800 rounded-md h-fit">
                        <div className="flex justify-between items-center mb-5">
                            <h6 className="font-medium text-xl">Dedicated</h6>

                            <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full h-5 ms-1">Save 25%</span>
                        </div>

                        <div className="flex mb-5">
                            <span className="text-lg font-medium">$</span>
                            <span className="price text-5xl h6 font-semibold mb-0">18</span>
                            <span className="text-lg font-medium self-end mb-1">/mo</span>
                        </div>

                        <ul className="list-none text-slate-400">
                            <li className="mb-1 flex justify-between">
                                <span className="flex items-center"><AiOutlineCheckCircle className="text-sky-500 text-[20px] align-middle me-2"/> <span className="mt-0.5">Website</span></span>
                                <span>1</span>
                            </li>
                            <li className="mb-1 flex justify-between">
                                <span className="flex items-center"><AiOutlineCheckCircle className="text-sky-500 text-[20px] align-middle me-2"/> <span className="mt-0.5">SSd Storage</span></span>
                                <span>10 GB</span>
                            </li>
                            <li className="mb-1 flex justify-between">
                                <span className="flex items-center"><AiOutlineCheckCircle className="text-sky-500 text-[20px] align-middle me-2"/> <span className="mt-0.5">Visitor</span></span>
                                <span>3,000 User</span>
                            </li>
                            <li className="mb-1 flex justify-between">
                                <span className="flex items-center"><AiOutlineCheckCircle className="text-sky-500 text-[20px] align-middle me-2"/> <span className="mt-0.5">Domain</span></span>
                                <span>Free</span>
                            </li>
                            <li className="mb-1 flex justify-between">
                                <span className="flex items-center"><AiOutlineCheckCircle className="text-sky-500 text-[20px] align-middle me-2"/> <span className="mt-0.5">SSL Bandwidth</span></span>
                                <span>100 GB</span>
                            </li>
                            <li className="mb-1 flex justify-between">
                                <span className="flex items-center"><AiOutlineCheckCircle className="text-sky-500 text-[20px] align-middle me-2"/> <span className="mt-0.5">GIT Access</span></span>
                                <span>Free</span>
                            </li>
                        </ul>
                        <Link to="" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-sky-500/10 hover:bg-sky-500 border border-sky-500/10 hover:border-sky-500 text-sky-500 hover:text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500 w-full mt-5">Buy Now</Link>
                    </div>

                    <div className="group p-6 relative overflow-hidden shadow-lg dark:shadow-gray-800 rounded-md h-fit">
                        <div className="flex justify-between items-center mb-5">
                            <h6 className="font-medium text-xl">Reseller</h6>

                            <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full h-5 ms-1">Save 25%</span>
                        </div>

                        <div className="flex mb-5">
                            <span className="text-lg font-medium">$</span>
                            <span className="price text-5xl h6 font-semibold mb-0">19</span>
                            <span className="text-lg font-medium self-end mb-1">/mo</span>
                        </div>

                        <ul className="list-none text-slate-400">
                            <li className="mb-1 flex justify-between">
                                <span className="flex items-center"><AiOutlineCheckCircle className="text-sky-500 text-[20px] align-middle me-2"/> <span className="mt-0.5">Website</span></span>
                                <span>1</span>
                            </li>
                            <li className="mb-1 flex justify-between">
                                <span className="flex items-center"><AiOutlineCheckCircle className="text-sky-500 text-[20px] align-middle me-2"/> <span className="mt-0.5">SSd Storage</span></span>
                                <span>10 GB</span>
                            </li>
                            <li className="mb-1 flex justify-between">
                                <span className="flex items-center"><AiOutlineCheckCircle className="text-sky-500 text-[20px] align-middle me-2"/> <span className="mt-0.5">Visitor</span></span>
                                <span>3,000 User</span>
                            </li>
                            <li className="mb-1 flex justify-between">
                                <span className="flex items-center"><AiOutlineCheckCircle className="text-sky-500 text-[20px] align-middle me-2"/> <span className="mt-0.5">Domain</span></span>
                                <span>Free</span>
                            </li>
                            <li className="mb-1 flex justify-between">
                                <span className="flex items-center"><AiOutlineCheckCircle className="text-sky-500 text-[20px] align-middle me-2"/> <span className="mt-0.5">SSL Bandwidth</span></span>
                                <span>100 GB</span>
                            </li>
                            <li className="mb-1 flex justify-between">
                                <span className="flex items-center"><AiOutlineCheckCircle className="text-sky-500 text-[20px] align-middle me-2"/> <span className="mt-0.5">GIT Access</span></span>
                                <span>Free</span>
                            </li>
                        </ul>
                        <Link to="" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-sky-500/10 hover:bg-sky-500 border border-sky-500/10 hover:border-sky-500 text-sky-500 hover:text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500 w-full mt-5">Buy Now</Link>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-medium">Our Respected Clients</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                </div>

                <div className="grid md:grid-cols-4 grid-cols-2 mt-8 gap-[30px]">
                    {clientLogo.map((item,index)=>{
                        return(
                            <div key={index} className="p-5 rounded-md shadow dark:shadow-gray-800 bg-gray-50 dark:bg-gray-800">
                                <img src={item} className="mx-auto" alt=""/>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Faq/>
            <Newsletter/>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}