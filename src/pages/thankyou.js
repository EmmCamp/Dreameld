import React from "react";
import { Link } from "react-router-dom";

import BackButton from "../components/backButton";
import Switcher from "../components/switcher";

import {FiThumbsUp} from '../assets/icons/vander'

export default function ThankYou(){
    return(
        <>
        <section className="relative h-screen flex items-center justify-center text-center bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid grid-cols-1">
                    <div className="title-heading text-center my-auto">
                        <div className="w-24 h-24 bg-sky-500/5 dark:bg-sky-500/20 text-sky-500 rounded-full text-5xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <FiThumbsUp/>
                        </div>
                        <h1 className="mt-6 mb-8 md:text-5xl text-3xl font-medium">Thank You</h1>
                        <p className="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                        
                        <div className="mt-6">
                            <Link to="/index" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-sky-500/5 dark:bg-sky-500/20 hover:bg-sky-500 dark:hover:bg-sky-500 border-sky-500/10 hover:border-sky-500 text-sky-500 hover:text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-lg align-middle transition-all duration-500">Back to Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Switcher/>
        <BackButton/>
        </>
    )
}