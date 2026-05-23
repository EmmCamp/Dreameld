import React from "react";
import { Link } from "react-router-dom";

import resellerImg from '../assets/images/reseller.svg'

import Tagline from "../components/tagline";
import Navbar from "../components/navbar";
import Faq from '../components/faq'
import Footer from '../components/footer'
import Switcher from '../components/switcher'
import { FeatureData2 } from "../data/data";
import {AiOutlineCheckCircle, LiaTimesSolid} from '../assets/icons/vander'

export default function HostingReseller(){
   
    return(
        <>
        <Tagline/>
        <Navbar navClass= "defaultscroll is-sticky tagline-height " ulClass='navigation-menu justify-end'/>
        <section className="relative items-center overflow-hidden bg-gradient-to-t from-sky-500/70 to-sky-500/10 dark:from-sky-500/80 dark:to-sky-500/20">
            <div className="absolute inset-0 bg-[url('../../assets/images/bg/shape-1.png')] bg-center bg-cover"></div>
            <div className="container relative z-2">
                <div className="grid grid-cols-1 md:mt-44 mt-32 text-center">
                    <h4 className="text-4xl leading-normal font-semibold mb-6">Unlimited Reseller Hosting</h4>
                    <p className="text-slate-400 text-[17px] max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>

                    <div className="mt-6">
                        <Link to="" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-yellow-500 hover:bg-yellow-600 border border-yellow-500 hover:border-yellow-600 text-white focus:ring-[3px] focus:ring-yellow-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500">Get Started</Link>
                    </div>
                </div>

                <div className="md:flex justify-center mt-10">
                    <div className="lg:w-1/2 md:w-2/3">
                        <img src={resellerImg} className="mx-auto" alt=""/>
                    </div>
                </div>
            </div>
        </section>
        <div className="relative">
            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 marketing-hero md:h-[250px] sm:h-[140px] h-[60px] bg-white dark:bg-slate-900 overflow-hidden z-1 text-white dark:text-slate-900"></div>
        </div>
        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-medium">Choose Your Reseller Hosting</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <div className="group p-6 relative overflow-hidden shadow-lg dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900 h-fit">
                        <h6 className="font-medium mb-5 text-xl">Free</h6>

                        <div className="flex mb-5">
                            <span className="text-lg font-medium">$</span>
                            <span className="price text-5xl h6 font-semibold mb-0">0</span>
                            <span className="text-lg font-medium self-end mb-1">/mo</span>
                        </div>

                        <ul className="list-none text-slate-400">
                            <li className="flex"><AiOutlineCheckCircle className="text-emerald-600 text-[20px] align-middle me-2"/> <span>Full Access</span></li>
                            <li className="mt-2 flex"><LiaTimesSolid className="text-slate-400 text-[20px] align-middle me-2"/> <span>Source Files</span></li>
                            <li className="mt-2 flex"><LiaTimesSolid className="text-slate-400 text-[20px] align-middle me-2"/> <span>Free Appointments</span></li>
                            <li className="mt-2 flex"><LiaTimesSolid className="text-slate-400 text-[20px] align-middle me-2"/> <span>Enhanced Security</span></li>
                            <li className="mt-2 flex"><LiaTimesSolid className="text-slate-400 text-[20px] align-middle me-2"/> <span>Up to 10 Active Users</span></li>
                            <li className="mt-2 flex"><LiaTimesSolid className="text-slate-400 text-[20px] align-middle me-2"/> <span>Up to 30 Project Integrations</span></li>
                            <li className="mt-2 flex"><LiaTimesSolid className="text-slate-400 text-[20px] align-middle me-2"/> <span>Accounting Module</span></li>
                            <li className="mt-2 flex"><LiaTimesSolid className="text-slate-400 text-[20px] align-middle me-2"/> <span>Network Platform</span></li>
                        </ul>
                        <Link to ="" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-transparent hover:bg-sky-500 border border-gray-100 dark:border-gray-800 hover:border-sky-500 dark:hover:border-sky-500 text-slate-900 dark:text-white hover:text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500 w-full mt-5">Free Demo</Link>
                    </div>

                    <div className="group p-6 relative overflow-hidden shadow-lg dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900 h-fit">
                        <h6 className="font-medium mb-5 text-xl">Single</h6>

                        <div className="flex mb-5">
                            <span className="text-lg font-medium">$</span>
                            <span className="price text-5xl h6 font-semibold mb-0">9</span>
                            <span className="text-lg font-medium self-end mb-1">/mo</span>
                        </div>

                        <ul className="list-none text-slate-400">
                            <li className="flex"><AiOutlineCheckCircle className="text-emerald-600 text-[20px] align-middle me-2"/> <span>Full Access</span></li>
                            <li className="mt-2 flex"><AiOutlineCheckCircle className="text-emerald-600 text-[20px] align-middle me-2"/> <span>Source Files</span></li>
                            <li className="mt-2 flex"><AiOutlineCheckCircle className="text-emerald-600 text-[20px] align-middle me-2"/> <span>Free Appointments</span></li>
                            <li className="mt-2 flex"><AiOutlineCheckCircle className="text-emerald-600 text-[20px] align-middle me-2"/> <span>Enhanced Security</span></li>
                            <li className="mt-2 flex"><LiaTimesSolid className="text-slate-400 text-[20px] align-middle me-2"/> <span>Up to 10 Active Users</span></li>
                            <li className="mt-2 flex"><LiaTimesSolid className="text-slate-400 text-[20px] align-middle me-2"/> <span>Up to 30 Project Integrations</span></li>
                            <li className="mt-2 flex"><LiaTimesSolid className="text-slate-400 text-[20px] align-middle me-2"/> <span>Accounting Module</span></li>
                            <li className="mt-2 flex"><LiaTimesSolid className="text-slate-400 text-[20px] align-middle me-2"/> <span>Network Platform</span></li>
                        </ul>
                        <Link to ="" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-transparent hover:bg-sky-500 border border-gray-100 dark:border-gray-800 hover:border-sky-500 dark:hover:border-sky-500 text-slate-900 dark:text-white hover:text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500 w-full mt-5">Subscribe Now</Link>
                    </div>

                    <div className="group relative overflow-hidden shadow-lg dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900 h-fit">
                        <div className="bg-gradient-to-tr from-sky-500 to-blue-700 text-white py-2 px-6 h6 text-lg font-medium">Popular</div>
                        <div className="p-6">
                            <h6 className="font-medium mb-5 text-xl">Professional</h6>

                            <div className="flex mb-5">
                                <span className="text-lg font-medium">$</span>
                                <span className="price text-5xl h6 font-semibold mb-0">49</span>
                                <span className="text-lg font-medium self-end mb-1">/mo</span>
                            </div>

                            <ul className="list-none text-slate-400">
                                <li className="flex"><AiOutlineCheckCircle className="text-emerald-600 text-[20px] align-middle me-2"/> <span>Full Access</span></li>
                                <li className="mt-2 flex"><AiOutlineCheckCircle className="text-emerald-600 text-[20px] align-middle me-2"/> <span>Source Files</span></li>
                                <li className="mt-2 flex"><AiOutlineCheckCircle className="text-emerald-600 text-[20px] align-middle me-2"/> <span>Free Appointments</span></li>
                                <li className="mt-2 flex"><AiOutlineCheckCircle className="text-emerald-600 text-[20px] align-middle me-2"/> <span>Enhanced Security</span></li>
                                <li className="mt-2 flex"><AiOutlineCheckCircle className="text-emerald-600 text-[20px] align-middle me-2"/> <span>Up to 10 Active Users</span></li>
                                <li className="mt-2 flex"><AiOutlineCheckCircle className="text-emerald-600 text-[20px] align-middle me-2"/> <span>Up to 30 Project Integrations</span></li>
                                <li className="mt-2 flex"><LiaTimesSolid className="text-slate-400 text-[20px] align-middle me-2"/> <span>Accounting Module</span></li>
                                <li className="mt-2 flex"><LiaTimesSolid className="text-slate-400 text-[20px] align-middle me-2"/> <span>Network Platform</span></li>
                            </ul>
                            <Link to ="" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500 w-full mt-5">Buy Now</Link>

                            <p className="text-sm text-slate-400 mt-1.5"><span className="text-red-600">*</span>T&C Apply</p>
                        </div>
                    </div>

                    <div className="group p-[1px] relative overflow-hidden shadow-lg dark:shadow-gray-800 rounded-md bg-gradient-to-tr from-sky-500 to-blue-700 h-fit">
                        <div className="p-6 bg-white dark:bg-slate-900 rounded-md">
                            <h6 className="font-medium mb-5 text-xl">Enterprise</h6>

                            <div className="flex mb-5">
                                <span className="text-lg font-medium">$</span>
                                <span className="price text-5xl h6 font-semibold mb-0">99</span>
                                <span className="text-lg font-medium self-end mb-1">/mo</span>
                            </div>

                            <ul className="list-none text-slate-400">
                                <li className="flex"><AiOutlineCheckCircle className="text-emerald-600 text-[20px] align-middle me-2"/> <span>Full Access</span></li>
                                <li className="mt-2 flex"><AiOutlineCheckCircle className="text-emerald-600 text-[20px] align-middle me-2"/> <span>Source Files</span></li>
                                <li className="mt-2 flex"><AiOutlineCheckCircle className="text-emerald-600 text-[20px] align-middle me-2"/> <span>Free Appointments</span></li>
                                <li className="mt-2 flex"><AiOutlineCheckCircle className="text-emerald-600 text-[20px] align-middle me-2"/> <span>Enhanced Security</span></li>
                                <li className="mt-2 flex"><AiOutlineCheckCircle className="text-emerald-600 text-[20px] align-middle me-2"/> <span>Up to 10 Active Users</span></li>
                                <li className="mt-2 flex"><AiOutlineCheckCircle className="text-emerald-600 text-[20px] align-middle me-2"/> <span>Up to 30 Project Integrations</span></li>
                                <li className="mt-2 flex"><AiOutlineCheckCircle className="text-emerald-600 text-[20px] align-middle me-2"/> <span>Accounting Module</span></li>
                                <li className="mt-2 flex"><AiOutlineCheckCircle className="text-emerald-600 text-[20px] align-middle me-2"/> <span>Network Platform</span></li>
                            </ul>
                            <Link to ="" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-transparent hover:bg-sky-500 border border-gray-100 dark:border-gray-800 hover:border-sky-500 dark:hover:border-sky-500 text-slate-900 dark:text-white hover:text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500 w-full mt-5">Talk to us</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-medium">All the power and performance you'll ever need</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {FeatureData2.slice(0,4).map((item,index)=>{
                        let Icon = item.icon
                        return(
                            <div className="group relative p-6 shadow dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-700 hover:bg-sky-500 dark:hover:bg-sky-500 transition-all duration-500 ease-in-out rounded-md bg-slate-50 dark:bg-slate-800 hover:scale-[1.02] overflow-hidden" key={index}>
                                <Icon className="text-[36px] text-sky-500 group-hover:text-white/70 duration-500"/>
                                <div className="mt-6">
                                    <h5><Link to ="" className="text-lg font-medium group-hover:text-white transition-all duration-500 ease-in-out">{item.title}</Link></h5>
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
                            <h4 className="font-semibold leading-normal text-4xl text-white">High quality <br/> website hosting</h4>
                        </div>
                        
                        <div>
                            <ul className="list-none text-slate-400">
                                <li className="mb-2 flex text-white/70"><AiOutlineCheckCircle className="text-yellow-500 text-xl me-2"/> Digital Marketing Solutions for Tomorrow</li>
                                <li className="mb-2 flex text-white/70"><AiOutlineCheckCircle className="text-yellow-500 text-xl me-2"/> Our Talented & Experienced Marketing Agency</li>
                                <li className="mb-2 flex text-white/70"><AiOutlineCheckCircle className="text-yellow-500 text-xl me-2"/> Create your own skin to match your brand</li>
                            </ul>
                        </div>
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