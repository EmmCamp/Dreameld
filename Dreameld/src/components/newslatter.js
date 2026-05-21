import React from "react";
import {MdMailOutline, BsPencil} from '../assets/icons/vander'

export default function Newsletter(){
    return(
            <div className="container relative md:mt-24 mt-16">
                <div className="relative bg-white dark:bg-slate-900 lg:px-8 px-6 py-10 rounded-xl shadow dark:shadow-gray-800 overflow-hidden">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                        <div className="md:text-start text-center z-1">
                            <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-medium">Subscribe to Newsletter!</h3>
                            <p className="text-slate-400 max-w-xl mx-auto mt-2">Subscribe to get latest updates and information.</p>
                        </div>

                        <div className="subcribe-form z-1">
                            <form className="relative max-w-xl">
                                <input type="email" id="subcribe" name="email" className="py-4 pe-40 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800" placeholder="Your Email Address :"/>
                                <button type="submit" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500  absolute top-[2px] end-[3px] h-[46px]">Subscribe</button>
                            </form>
                        </div>
                    </div>

                    <div className="absolute -top-5 -start-5">
                        <MdMailOutline className="lg:text-[150px] text-7xl text-slate-900/5 dark:text-white/5 -rotate-45"/>
                    </div>

                    <div className="absolute -bottom-5 -end-5">
                        <BsPencil className="lg:text-[150px] text-7xl text-slate-900/5 dark:text-white/5"/>
                    </div>
                </div>
            </div> 
    )
}