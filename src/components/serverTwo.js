import React from "react";
import serverImg from '../assets/images/3.png'
import { serverData } from "../data/data";

export default function ServerTwo(){
    return(
        <div className="container relative md:mt-24 mt-16">
            <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
                <div className="lg:col-span-6">
                    <div className="lg:me-8">
                        <img src={serverImg} alt=""/>
                    </div>
                </div>
                <div className="lg:col-span-6">
                    <div className="grid grid-cols-1 gap-[30px]">
                        {serverData.map((item, index) =>{
                            let Icon = item.icon
                            return(
                                <div className="group flex items-center relative overflow-hidden p-6 rounded-md shadow dark:shadow-gray-800 hover:bg-emerald-500 dark:hover:bg-violet-500 transition-all duration-500 ease-in-out" key={index}>
                                    <span className="text-violet-500 dark:text-emerald-500 group-hover:text-white text-5xl font-semibold transition-all duration-500 ease-in-out">
                                        <Icon/>
                                    </span>
                                    <div className="flex-1 ms-3">
                                        <h5 className="group-hover:text-white text-xl font-semibold transition-all duration-500 ease-in-out">{item.title}</h5>
                                        <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-2">{item.desc}</p>
                                    </div>
                                    <div className="absolute start-1 top-5 text-dark/[0.03] dark:text-white/[0.03] text-8xl group-hover:text-white/[0.04] transition-all duration-500 ease-in-out">
                                        <Icon/>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}