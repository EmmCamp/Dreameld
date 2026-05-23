import React from "react";
import { Link } from "react-router-dom";
import TinySlider from "tiny-slider-react";
import '../../node_modules/tiny-slider/dist/tiny-slider.css'

import { clientData } from "../data/data";

let settings = {
    container: '.tiny-three-item',
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    speed: 400,
    gutter: 12,
    responsive: {
        992: {
            items: 3
        },

        767: {
            items: 2
        },

        320: {
            items: 1
        },
    },
  };

export default function ClientOne({clientClass}){
    
    return(
        <div className={clientClass}>
            <div className="grid grid-cols-1 relative">
                <div className="tiny-three-item">
                    <TinySlider settings={settings}>
                            {clientData.map((item,index)=>{
                                return(
                                    <div className="tiny-slide" key={index}>
                                        <div className="rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 p-6 m-2">
                                            <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                                                <img src={item.image} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
                                                
                                                <div className="ps-4">
                                                    <Link to="" className="text-lg h6 hover:text-sky-500 duration-500 ease-in-out">{item.name}</Link>
                                                    <p className="text-slate-400">{item.title}</p>
                                                </div>
                                            </div>
                                            
                                            <div className="mt-6">
                                                <p className="text-slate-400">{item.desc}</p>
                                                <ul className="list-none mb-0 text-amber-400 mt-2">
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                    </TinySlider>
                    
                </div>
            </div>
        </div>
    )
}