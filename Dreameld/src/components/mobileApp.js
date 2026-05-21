import React from "react";
import { Link } from "react-router-dom";
import envelope from '../assets/images/envelope.svg'
import aapImg from '../assets/images/app.png'
import playstore from '../assets/images/playstore.png'
import {FiSmartphone,MdOutlineKeyboardArrowRight} from '../assets/icons/vander'

export default function MobileApp(){
    return(
            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center">
                    <div className="lg:col-span-5 md:col-span-6">
                        <img src={envelope} className="mx-auto d-block" alt=""/>
                    </div>

                    <div className="lg:col-span-7 md:col-span-6">
                        <span className="bg-sky-500/5 text-sky-500 text-xs font-medium px-2.5 py-0.5 rounded h-5">Mobile Apps</span>
                        <h4 className="md:text-3xl text-2xl lg:leading-normal leading-normal font-medium my-4">Available for your <br/> Smartphones</h4>
                        <p className="text-slate-400 max-w-xl mb-0">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                        <div className="my-5">
                            <Link to=""><img src={aapImg} className="m-1 inline-block" alt=""/></Link>

                            <Link to=""><img src={playstore} className="m-1 inline-block" alt=""/></Link>
                        </div>

                        <div className="inline-block">
                            <div className="pt-4 flex items-center border-t border-gray-100 dark:border-gray-800">
                                <FiSmartphone className="me-2 text-sky-500 h-10 w-10"/>
                                <div className="content">
                                    <h6 className="text-base font-medium">Install app now on your cellphones</h6>
                                    <Link to="" className="relative inline-flex items-center font-medium tracking-wide align-middle text-lg text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-sky-500 hover:text-sky-500 after:bg-sky-500 duration-500 ease-in-out">Learn More<MdOutlineKeyboardArrowRight/></Link> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}