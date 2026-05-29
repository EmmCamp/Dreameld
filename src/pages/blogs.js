import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

import { blogData } from "../data/data";

import {FiArrowRight, MdKeyboardArrowLeft, MdKeyboardArrowRight} from '../assets/icons/vander'

export default function Blogs(){

    return(
        <>
        <Navbar navClass= "defaultscroll is-sticky" ulClass='navigation-menu justify-end'/>
        <section className="relative table w-full md:py-40 py-36 bg-[url('../../assets/images/bg/bg5.png')] bg-center bg-cover">
            <div className="absolute inset-0 bg-sky-500/5"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-12">
                    <h3 className="md:text-4xl text-3xl md:leading-snug leading-snug font-medium">Latest Blogs or News</h3>
                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block text-[15px] font-medium duration-500 ease-in-out hover:text-sky-500"><Link to="/index">Dreameld</Link></li>
                    <li className="inline-block text-[15px] ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block text-[15px] font-medium duration-500 ease-in-out text-sky-500">Blogs</li>
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
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                    {blogData.map((item,index)=>{
                        return(
                            <div className="relative overflow-hidden group rounded-md shadow hover:shadow-md dark:shadow-gray-800 transition duration-500" key={index}>
                                <img src={item.image} alt=""/>

                                <div className="p-6">
                                    <span className="bg-sky-500/5 text-sky-500 text-xs font-semibold px-2.5 py-0.5 rounded-full h-5 ms-1">VPS Hosting</span>

                                    <h5 className="mt-3"><Link to={`/blog-detail/${item.id}`} className="title text-lg font-medium hover:text-sky-500 duration-500">{item.title}</Link></h5>
                                
                                    <p className="text-slate-400 mt-3">{item.desc}</p>
                                    
                                    <div className="mt-4">
                                        <Link to={`/blog-detail/${item.id}`} className="relative inline-flex items-center tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-sky-500 hover:text-sky-500 after:bg-sky-500 duration-500 ease-in-out">Read More<FiArrowRight className="ms-1"/></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                    <div className="md:col-span-12 text-center">
                        <nav aria-label="Page navigation example">
                            <ul className="inline-flex items-center -space-x-px">
                                <li>
                                    <Link to="#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-sky-500 dark:hover:border-sky-500 hover:bg-sky-500 dark:hover:bg-sky-500">
                                        <MdKeyboardArrowLeft className="text-[20px] rtl:rotate-180 rtl:-mt-1"/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-sky-500 dark:hover:border-sky-500 hover:bg-sky-500 dark:hover:bg-sky-500">1</Link>
                                </li>
                                <li>
                                    <Link to="#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-sky-500 dark:hover:border-sky-500 hover:bg-sky-500 dark:hover:bg-sky-500">2</Link>
                                </li>
                                <li>
                                    <Link to="#" aria-current="page" className="z-10 w-[40px] h-[40px] inline-flex justify-center items-center text-white bg-sky-500 border border-sky-500">3</Link>
                                </li>
                                <li>
                                    <Link to="#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-sky-500 dark:hover:border-sky-500 hover:bg-sky-500 dark:hover:bg-sky-500">4</Link>
                                </li>
                                <li>
                                    <Link to="#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-sky-500 dark:hover:border-sky-500 hover:bg-sky-500 dark:hover:bg-sky-500">5</Link>
                                </li>
                                <li>
                                    <Link to="#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-sky-500 dark:hover:border-sky-500 hover:bg-sky-500 dark:hover:bg-sky-500">
                                        <MdKeyboardArrowRight className="text-[20px] rtl:rotate-180 rtl:-mt-1"/>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}