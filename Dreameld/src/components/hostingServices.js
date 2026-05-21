import React from "react";
import { Link } from "react-router-dom";
import {FiHexagon} from '../assets/icons/vander'

import { serviceData2 } from "../data/data";

export default function HostingServices({title,bgIcon}){
    return(
        <div className="container relative md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-medium">{title}</h3>
                <p className="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                {serviceData2.map((item,index) => {
                    let Icon = item.icon
                   return(
                    <div key={index}>
                        {bgIcon === true ?  
                            <div key={index} className="group relative p-6 shadow dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-700 hover:bg-sky-500 dark:hover:bg-sky-500 transition-all duration-500 ease-in-out rounded-md bg-slate-50 dark:bg-slate-800 hover:scale-[1.02] overflow-hidden">
                                <Icon className="text-[36px] text-sky-500 group-hover:text-white/70 duration-500"/>
                                <div className="mt-6">
                                    <h5><Link to="" className="text-lg font-medium group-hover:text-white transition-all duration-500 ease-in-out">{item.title}</Link></h5>
                                    <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3">{item.desc}</p>
                                </div>
                                <Icon className="text-8xl text-slate-400/10 dark:text-slate-100/[0.02] group-hover:text-white/10 dark:group-hover:text-white/5 absolute -top-5 group-hover:-top-2 -end-10 group-hover:-end-5 duration-500"/>
                            </div>:
                            <div key={index} className="group relative p-6 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-sky-500 dark:hover:bg-sky-500 transition-all duration-500 ease-in-out rounded-md bg-white dark:bg-slate-900 overflow-hidden">
                                <div className="relative overflow-hidden text-transparent -m-3">
                                    <FiHexagon className="h-24 w-24 fill-sky-500/[0.07] group-hover:fill-white/20"/>
                                    <div className="absolute top-2/4 -translate-y-2/4 start-8 text-sky-500 rounded-md group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                    <Icon/>
                                    </div>
                                </div>
    
                                <div className="mt-6">
                                    <h5><Link to="#" className="text-lg font-medium group-hover:text-white transition-all duration-500 ease-in-out">{item.title}</Link></h5>
                                    <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3">{item.desc}</p>
                                </div>
                            </div>
                            }
                    </div>
                   
                   )
 
                })}
               
            </div>
        </div>
    )
}