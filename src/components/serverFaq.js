import React,{useState} from "react";
import serverImg from '../assets/images/3.png'
import {MdKeyboardArrowDown} from '../assets/icons/vander'
import { accordionData } from "../data/data";
export default function ServerFaq(){
    let [activeIndex1, setActiveIndex1] = useState(1)
   
    return(
        <div className="container relative md:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-medium">Questions regarding Dedicated Server ?</h3>
            <p className="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
        </div>

        <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-8 gap-[30px]">
            <div className="lg:col-span-6">
                <div className="lg:me-8">
                    <img src={serverImg} alt=""/>
                </div>
            </div>
            <div className="lg:col-span-6">
                <div id="accordion-collapse" data-accordion="collapse">
                    {accordionData.slice(0,4).map((item,index) =>{
                        return(
                            <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4" key={index}>
                                <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                    <button type="button" onClick={()=>setActiveIndex1(item.id)} className={`${activeIndex1 === item.id ? "bg-gray-50 dark:bg-slate-800 text-sky-500" : ""} flex justify-between items-center p-5 w-full font-medium text-start`}>
                                        <span className="text-[17px]">{item.title}</span>
                                        <MdKeyboardArrowDown className={`${activeIndex1 === item.id ? 'rotate-180' : '' } w-4 h-4 shrink-0`}/>
                                    </button>
                                </h2>
                                <div id="accordion-collapse-body-1" className={activeIndex1 === item.id ? "" : "hidden"} aria-labelledby="accordion-collapse-heading-1">
                                    <div className="p-5">
                                        <p className="text-slate-400 dark:text-gray-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                    </div>
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