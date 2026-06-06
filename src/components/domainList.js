import React from "react";

import { partnersData } from "../data/data";
import TinySlider from "tiny-slider-react";
import '../../node_modules/tiny-slider/dist/tiny-slider.css'

let settings = {
    container: '.tiny-six-item',
    controls: false,
    mouseDrag: false,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
    nav: false,
    speed: 400,
    gutter: 0,
    responsive: {
        1025: {
            items: 6
        },

        992: {
            items: 6
        },

        767: {
            items: 4
        },

        320: {
            items: 2
        },
    },
  };

export default function DomainList(){
    return(
        <div className="container relative">
            <div className="grid grid-cols-1 relative">
                <div className="tiny-six-item">
                <TinySlider settings={settings}>
                    {partnersData.map((item,index) =>{
                            return(
                                <div className="tiny-slide" key={index}>
                                    {/*<div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-4 m-2 text-center">*/}
                                    <div className="nobg dark:nobg p-4 m-2 text-center">
                                        <img src={item.image} className="mx-auto h-32 w-32 " alt=""/>
                                        {/*<span className="flex justify-center mt-2">
                                            <span className="text-base text-slate-400">$</span>
                                            <span className="text-lg font-semibold h6 mx-1">{item.amount}</span>
                                            <span className="text-base text-slate-400 self-end">/year</span>
                                        </span>*/}
                                    </div>
                                </div>
                            )
                        } )}
                </TinySlider>
                </div>
            </div>
        </div>
    )
}