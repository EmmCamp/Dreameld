import React from "react";
import { Link } from "react-router-dom";

import Tagline from "../components/tagline";
import Navbar from "../components/navbar";
import ServerTwo from "../components/serverTwo";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import Faq from "../components/faq";

import { serviceData2 } from "../data/data";

import {AiOutlineCheckCircle,LiaTimesSolid, BsCheckLg} from '../assets/icons/vander'

export default function HostingVps(){
    return(
        <>
        <Tagline/>
        <Navbar navClass= "defaultscroll is-sticky tagline-height" ulClass='navigation-menu justify-end'/>
        <section className="relative table w-full md:py-48 py-36 bg-[url('../../assets/images/bg/bg5.png')] bg-center bg-cover">
            <div className="absolute inset-0 bg-sky-500/5"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-12">
                    <h3 className="text-4xl leading-normal font-semibold mb-6">VPS Web Hosting</h3>
                    <p className="text-slate-400 text-[17px] max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>

                    <ul className="tracking-[0.5px] mt-6 inline-block">
                        <li className="inline-block uppercase text-[13px] font-semibold duration-500 ease-in-out hover:text-sky-500"><Link to="/index">Dreameld</Link></li>
                        <li className="inline-block ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                        <li className="inline-block uppercase text-[13px] font-semibold text-sky-500" aria-current="page">VPS Hosting</li>
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
            <ServerTwo/>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-medium">VPS Hosting Features</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {serviceData2.slice(0,4).map((item,index) =>{
                        let Icon = item.icon
                        return(
                            <div className="group relative p-6 shadow dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-700 hover:bg-sky-500 dark:hover:bg-sky-500 transition-all duration-500 ease-in-out rounded-md bg-slate-50 dark:bg-slate-800 hover:scale-[1.02] overflow-hidden" key={index}>
                                <Icon className="text-[36px] text-sky-500 group-hover:text-white/70 duration-500"/>
                                <div className="mt-6">
                                    <h5><Link to="" className="text-lg font-medium group-hover:text-white transition-all duration-500 ease-in-out">{item.title}</Link></h5>
                                    <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3">{item.desc}</p>
                                </div>
                                <Icon className="text-8xl text-slate-400/10 dark:text-slate-100/[0.02] group-hover:text-white/10 dark:group-hover:text-white/5 absolute -top-5 group-hover:-top-2 -end-10 group-hover:-end-5 duration-500"/>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container-fluid relative py-36 md:mt-24 mt-16 bg-gradient-to-br from-sky-500 to-yellow-500 opacity-80">
                <div className="container relative">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                        <div>
                            <h4 className="font-semibold leading-normal text-4xl text-white">100% Faster Solid State Drive Server</h4>
                        </div>
                        
                        <div>
                            <ul className="list-none text-slate-400">
                                <li className="mb-1 flex text-white/70"><AiOutlineCheckCircle className="text-yellow-500 text-xl me-2"/> Digital Marketing Solutions for Tomorrow</li>
                                <li className="mb-1 flex text-white/70"><AiOutlineCheckCircle className="text-yellow-500 text-xl me-2"/> Our Talented & Experienced Marketing Agency</li>
                                <li className="mb-1 flex text-white/70"><AiOutlineCheckCircle className="text-yellow-500 text-xl me-2"/> Create your own skin to match your brand</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-medium">Pricing Plans</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                </div>

                <div className="grid grid-cols-1 mt-8">
                    <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                        <table className="w-full text-start">
                            <thead>
                                <tr>
                                    <th className="px-5 py-6 font-semibold text-start w-64"></th>
                                    <th className="px-5 py-6 font-semibold text-center w-52">
                                        <div className="text-2xl h6">Starter</div>
                                        <p className="text-slate-400 fw-normal mt-3 mb-0">We offers a <span className="font-medium">free month</span> of service for new customers.</p>
                                        <div className="d-flex justify-content-center mt-3">
                                            <span className="h6 text-slate-400 mb-0 mt-2">$</span>
                                            <span className="price text-sky-500 text-3xl h1 mb-0">4.99</span>
                                            <span className="h6 text-slate-400 align-self-end mb-1">/mo</span>
                                        </div>
                                    </th>
                                    <th className="px-5 py-6 font-semibold text-center w-52">
                                        <div className="text-2xl h6">Business</div>
                                        <p className="text-slate-400 fw-normal mt-3 mb-0">We offers a <span className="font-medium">free 14 days</span> of service for new customers.</p>
                                        <div className="d-flex justify-content-center mt-3">
                                            <span className="h6 text-slate-400 mb-0 mt-2">$</span>
                                            <span className="price text-sky-500 text-3xl h1 mb-0">9.99</span>
                                            <span className="h6 text-slate-400 align-self-end mb-1">/mo</span>
                                        </div>
                                    </th>
                                    <th className="px-5 py-6 font-semibold text-center w-52">
                                        <div className="text-2xl h6">Enterprise</div>
                                        <p className="text-slate-400 fw-normal mt-3 mb-0">We offers a <span className="font-medium">free 7 days</span> of service for new customers.</p>
                                        <div className="d-flex justify-content-center mt-3">
                                            <span className="h6 text-slate-400 mb-0 mt-2">$</span>
                                            <span className="price text-sky-500 text-3xl h1 mb-0">14.99</span>
                                            <span className="h6 text-slate-400 align-self-end mb-1">/mo</span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="border-t border-gray-100 dark:border-gray-700">
                                    <th className="p-6 text-start font-medium text-[16px]">Space</th>
                                    <td className="text-center">1 GB</td>
                                    <td className="text-center">5 GB</td>
                                    <td className="text-center">20 GB</td>
                                </tr>

                                <tr className="border-t border-gray-100 dark:border-gray-700">
                                    <th className="p-6 text-start font-medium text-[16px]">Bandwidth</th>
                                    <td className="text-center">10 GB</td>
                                    <td className="text-center">100 GB</td>
                                    <td className="text-center">500 GB</td>
                                </tr>
                                
                                <tr className="border-t border-gray-100 dark:border-gray-700">
                                    <th className="p-6 text-start font-medium text-[16px]">Email Accounts</th>
                                    <td className="text-center">100</td>
                                    <td className="text-center">1000</td>
                                    <td className="text-center">5000</td>
                                </tr>
                                
                                <tr className="border-t border-gray-100 dark:border-gray-700">
                                    <th className="p-6 text-start font-medium text-[16px]">MySQL Accounts</th>
                                    <td className="text-center">100</td>
                                    <td className="text-center">1000</td>
                                    <td className="text-center">5000</td>
                                </tr>
                                
                                <tr className="border-t border-gray-100 dark:border-gray-700">
                                    <th className="p-6 text-start font-medium text-[16px]">Processor</th>
                                    <td className="text-center">3Core</td>
                                    <td className="text-center">5Core</td>
                                    <td className="text-center">7Core</td>
                                </tr>
                                
                                <tr className="border-t border-gray-100 dark:border-gray-700">
                                    <th className="p-6 text-start font-medium text-[16px]">CPUs</th>
                                    <td className="text-center">3.2GHz CPU</td>
                                    <td className="text-center">2x3.2GHz CPU</td>
                                    <td className="text-center">4x3.2GHz CPU</td>
                                </tr>
                                
                                <tr className="border-t border-gray-100 dark:border-gray-700">
                                    <th className="p-6 text-start font-medium text-[16px]">Cpanel</th>
                                    <td className="text-center">WHM</td>
                                    <td className="text-center">WHM</td>
                                    <td className="text-center">WHM</td>
                                </tr>
                                
                                <tr className="border-t border-gray-100 dark:border-gray-700">
                                    <th className="p-6 text-start font-medium text-[16px]">Support</th>
                                    <td className="text-center">Free Setup</td>
                                    <td className="text-center">24/7 Hour</td>
                                    <td className="text-center">24/7 Hour</td>
                                </tr>
                                
                                <tr className="border-t border-gray-100 dark:border-gray-700">
                                    <th className="p-6 text-start font-medium text-[16px]">SSH Access</th>
                                    <td className="text-center"><LiaTimesSolid className="text-red-600 w-full"/></td>
                                    <td className="text-center"><LiaTimesSolid className="text-red-600 w-full"/></td>
                                    <td className="text-center"><BsCheckLg className="text-green-600 w-full"/></td>
                                </tr>
                                
                                <tr className="border-t border-gray-100 dark:border-gray-700">
                                    <th className="p-6 text-start font-medium text-[16px]">SMTP Management</th>
                                    <td className="text-center"><LiaTimesSolid className="text-red-600 w-full"/></td>
                                    <td className="text-center"><LiaTimesSolid className="text-red-600 w-full"/></td>
                                    <td className="text-center"><BsCheckLg className="text-green-600 w-full"/></td>
                                </tr>
                                
                                <tr className="border-t border-gray-100 dark:border-gray-700">
                                    <th className="p-6 text-start font-medium text-[16px]">FTP Access</th>
                                    <td className="text-center"><LiaTimesSolid className="text-red-600 w-full"/></td>
                                    <td className="text-center"><BsCheckLg className="text-green-600 w-full"/></td>
                                    <td className="text-center"><BsCheckLg className="text-green-600 w-full"/></td>
                                </tr>
                                
                                <tr className="border-t border-gray-100 dark:border-gray-700">
                                    <th className="p-6 text-start font-medium text-[16px]">Google Adwords Credit</th>
                                    <td className="text-center"><LiaTimesSolid className="text-red-600 w-full"/></td>
                                    <td className="text-center"><BsCheckLg className="text-green-600 w-full"/></td>
                                    <td className="text-center"><BsCheckLg className="text-green-600 w-full"/></td>
                                </tr>
                                
                                <tr className="border-t border-gray-100 dark:border-gray-700">
                                    <th className="p-6 text-start font-medium text-[16px]">&nbsp;</th>
                                    <td className="text-center"><Link to="#" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500">Start Now</Link></td>
                                    <td className="text-center"><Link to="#" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500">Buy Now</Link></td>
                                    <td className="text-center"><Link to="#" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500">Buy Now</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Faq/>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}