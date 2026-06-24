import React, { useState } from "react";
import {MdKeyboardArrowDown} from '../assets/icons/vander'
import { accordionData } from "../data/data";
export default function Faq(){

    let[activeIndex, setActiveIndex] = useState(1)

    let setActiveData = (id) =>{
        setActiveIndex(id)
    }
    
    return(
            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-medium">Preguntas Frecuentes</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Resolvemos tus dudas sobre hosting, infraestructura y servicios digitales para ayudarte a crecer con tecnología confiable y soporte cercano.</p>
                </div>
                <div id="accordion-collapse" data-accordion="collapse" className="grid md:grid-cols-2 grid-cols-1 mt-8 md:gap-[30px]">
                    <div>
                        {accordionData.slice(0,4).map((item, index) => {
                            return(
                                <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4" key={index}>
                                    <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                        <button type="button" onClick={() => setActiveData(item.id)} className={`${activeIndex === item.id ? 'flex justify-betwee bg-gray-50 dark:bg-slate-800 dark:text-emerald-500 text-violet-500 ':""} flex justify-between items-center p-5 w-full font-medium text-start`}>
                                            <span className="text-[17px]">{item.title}</span>
                                            <MdKeyboardArrowDown className={`${activeIndex === item.id ? 'rotate-180' : '' } w-4 h-4 shrink-0`}/>
                                        </button>
                                    </h2>
                                    <div className={activeIndex === item.id ? "" : "hidden"}>
                                        <div className="p-5">
                                            <p className="text-slate-400 dark:text-gray-400">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        {accordionData.slice(4,8).map((item, index) => {
                                return(
                                    <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4" key={index}>
                                        <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                            <button type="button" onClick={() => setActiveData(item.id)} className={`${activeIndex === item.id ? 'flex justify-betwee bg-gray-50 dark:bg-slate-800  dark:text-emerald-500 text-violet-500 ':""} flex justify-between items-center p-5 w-full font-medium text-start`}>
                                                <span className="text-[17px]">{item.title}</span>
                                                <MdKeyboardArrowDown className={`${activeIndex === item.id ? 'rotate-180' : '' } w-4 h-4 shrink-0`}/>
                                            </button>
                                        </h2>
                                        <div className={activeIndex === item.id ? "" : "hidden"}>
                                            <div className="p-5">
                                                <p className="text-slate-400 dark:text-gray-400">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div> 
    )
}