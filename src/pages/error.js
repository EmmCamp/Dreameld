import React from "react";
import { Link } from "react-router-dom";

import logo from '../assets/images/logo-icon-40.png'
import error from '../assets/images/error.png'

import Switcher from "../components/switcher";
import BackButton from "../components/backButton";

export default function Error(){
    return(
        <>
         <section className="relative bg-sky-500/5">
            <div className="container-fluid relative">
                <div className="grid grid-cols-1">
                    <div className="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
                        <div className="text-center">
                            <Link to="/index"><img src={logo} className="mx-auto h-10" alt=""/></Link>
                        </div>
                        <div className="title-heading text-center my-auto">
                            <img src={error} className="mx-auto" alt=""/>
                            <h1 className="mt-3 mb-6 md:text-4xl text-3xl font-medium">Page Not Found?</h1>
                            <p className="text-slate-400">Whoops, this is embarassing. <br/> Looks like the page you were looking for wasn't found.</p>
                            
                            <div className="mt-4">
                                <Link to="/index" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-lg align-middle transition-all duration-500">Back to Home</Link>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="mb-0 text-slate-400 font-medium">© {new Date().getFullYear()} Hoxia. Design & Develop with <i className="mdi mdi-heart text-red-600"></i> by <Link to="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
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