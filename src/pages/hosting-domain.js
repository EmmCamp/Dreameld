import React from "react";
import { Link } from "react-router-dom";

import Tagline from "../components/tagline";
import Navbar from "../components/navbar";
import Faq from "../components/faq";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

import {LuSearch} from '../assets/icons/vander'

import { domainPlan,FeatureData2 } from "../data/data";

export default function HostingDomain(){
    return(
        <>
        <Tagline/>
        <Navbar navClass= "defaultscroll is-sticky tagline-height " ulClass='navigation-menu justify-end'/>
        <section className="relative md:flex md:h-screen md:py-0 table w-full py-36 justify-center items-center bg-[url('../../assets/images/bg/domain.jpg')] bg-top bg-cover">
            <div className="container relative">
                <div className="grid grid-cols-1 mt-12">
                    <h3 className="lg:text-5xl text-4xl lg:leading-normal leading-normal font-semibold text-slate-900 mb-6">The Perfect Place to <br/> Host Your Website</h3>
                    <p className="text-slate-400 text-[17px] max-w-xl">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>

                    <div className="mt-6">
                        <form className="relative max-w-xl">
                            <input type="text" id="searchDomain" name="text" className="pt-4 pe-40 pb-4 ps-6 w-full h-12 outline-none text-black rounded-lg bg-white shadow" placeholder="Search Your Domain"/>
                            <button type="submit" className="absolute top-[0] end-[0] h-12 inline-flex items-center px-8 py-2.5 text-[16px] font-medium tracking-wide bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-e-lg align-middle transition-all duration-500"><LuSearch className="me-1"/> Search</button>
                        </form>
                    </div>

                    <ul className="list-none mt-2">
                        <li className="inline-grid m-1"><Link to="" className="font-medium px-2 rounded-md shadow bg-white text-slate-900 hover:text-sky-500">.com</Link></li>
                        <li className="inline-grid m-1"><Link to="" className="font-medium px-2 rounded-md shadow bg-white text-slate-900 hover:text-sky-500">.in</Link></li>
                        <li className="inline-grid m-1"><Link to="" className="font-medium px-2 rounded-md shadow bg-white text-slate-900 hover:text-sky-500">.net</Link></li>
                        <li className="inline-grid m-1"><Link to="" className="font-medium px-2 rounded-md shadow bg-white text-slate-900 hover:text-sky-500">.info</Link></li>
                        <li className="inline-grid m-1"><Link to="" className="font-medium px-2 rounded-md shadow bg-white text-slate-900 hover:text-sky-500">.tv</Link></li>
                        <li className="inline-grid m-1"><Link to="" className="font-medium px-2 rounded-md shadow bg-white text-slate-900 hover:text-sky-500">.mobi</Link></li>
                        <li className="inline-grid m-1"><Link to="" className="font-medium px-2 rounded-md shadow bg-white text-slate-900 hover:text-sky-500">.me</Link></li>
                        <li className="inline-grid m-1"><Link to="" className="font-medium px-2 rounded-md shadow bg-white text-slate-900 hover:text-sky-500">.biz</Link></li>
                        <li className="inline-grid m-1"><Link to="" className="font-medium px-2 rounded-md shadow bg-white text-slate-900 hover:text-sky-500">.org</Link></li>
                    </ul>
                </div>
            </div>
        </section>
        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-medium">Web Hosting Features</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {FeatureData2.slice(0,4).map((item, index) => {
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

            <div className="container md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-medium">Domain Pricing Table</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                </div>

                <div className="grid grid-cols-1 mt-8">
                    <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                        <table className="w-full text-start">
                            <thead>
                                <tr>
                                    <th className="px-4 py-5 font-semibold text-start w-64">Domain Name</th>
                                    <th className="px-4 py-5 font-semibold text-center w-36">Registration</th>
                                    <th className="px-4 py-5 font-semibold text-center w-28">2 Year</th>
                                    <th className="px-4 py-5 font-semibold text-center w-28">Renew</th>
                                    <th className="px-4 py-5 font-semibold text-end w-44">Click Here</th>
                                </tr>
                            </thead>

                            <tbody>
                                {domainPlan.map((item,index) =>{
                                    return(
                                    <tr className="border-t border-gray-100 dark:border-gray-700" key={index}>
                                        <th className="p-4 text-start"><Link to={`/domain-detail/${item.id}`} className="font-medium hover:text-sky-500 text-[16px]">{item.name}</Link></th>
                                        <td className="text-center">{item.registration}</td>
                                        <td className="text-center">{item.year}</td>
                                        <td className="text-center">$ 3.99</td>
                                        <td className="text-end p-4"><Link to={`/domain-detail/${item.id}`} className="inline-block px-5 py-2 text-[13px] font-medium tracking-wide bg-sky-500/5 hover:bg-sky-500 border border-sky-500/10 hover:border-sky-500 text-sky-500 hover:text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500">Buy Now</Link></td>
                                    </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
 
            <div className="container-fluid md:mt-24 mt-16 relative bg-[url('../../assets/images/bg/cta.png')] bg-top bg-cover">
                <div className="py-36">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-yellow-500 opacity-80"></div>

                    <div className="container relative">
                        <div className="grid grid-cols-1 text-center">
                            <h4 className="font-semibold leading-normal text-4xl mb-5 text-white">Managed WordPress Hosting Or Server</h4>
                            <p className="text-white/70 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                        
                            <div className="mt-6">
                                <Link to="" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-yellow-500 hover:bg-yellow-600 border border-yellow-500 hover:border-yellow-600 text-white focus:ring-[3px] focus:ring-yellow-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500">Learn More</Link>
                            </div>
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