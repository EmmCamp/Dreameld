import React from "react";
import { Link } from "react-router-dom";

import logoDark from '../assets/images/logo-dark.png'
import logoLight  from '../assets/images/logo-light.png'

import Switcher from "../components/switcher";
import BackButton from "../components/backButton";

export default function Signup(){
    return(
        <>
         <section className="h-screen flex items-center justify-center relative overflow-hidden bg-[url('../../assets/images/bg/bg6.jpg')] bg-no-repeat bg-center bg-cover">
            
            <div className="container relative">
                <div className="md:flex justify-center">
                    <div className="lg:w-2/6 md:w-2/4 relative overflow-hidden bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
                        <div className="p-6">
                            <Link to="/">
                                <img src={logoDark} className="mx-auto h-7 block dark:hidden" alt=""/>
                                <img src={logoLight} className="mx-auto h-7 dark:block hidden" alt=""/>
                            </Link>
                            <h5 className="my-6 text-xl font-medium">Signup</h5>
                            <form className="text-start">
                                <div className="grid grid-cols-1">
                                    <div className="mb-4 text-start">
                                        <label className="form-label font-medium" htmlFor="RegisterName">Your Name:</label>
                                        <input id="RegisterName" type="text" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-lg outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0 mt-2" placeholder="Harry"/>
                                    </div>
    
                                    <div className="mb-4 text-start">
                                        <label className="form-label font-medium" htmlFor="LoginEmail">Email Address:</label>
                                        <input id="LoginEmail" type="email" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-lg outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0 mt-2" placeholder="name@example.com"/>
                                    </div>
    
                                    <div className="mb-4 text-start">
                                        <label className="form-label font-medium" htmlFor="LoginPassword">Password:</label>
                                        <input id="LoginPassword" type="password" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-lg outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0 mt-2" placeholder="Password:"/>
                                    </div>
    
                                    <div className="mb-4">
                                        <div className="flex items-center mb-0">
                                            <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-sky-500 focus:border-sky-300 focus:ring focus:ring-offset-0 focus:ring-sky-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="Accept:T&C"/>
                                            <label className="form-checkbox-label text-slate-400" htmlFor="Accept:T&C">I Accept <Link to="" className="text-sky-500">Terms And Condition</Link></label>
                                        </div>
                                    </div>
    
                                    <div className="mb-4">
                                        <input type="submit" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-lg align-middle transition-all duration-500 w-full" value="Register"/>
                                    </div>
    
                                    <div className="text-center">
                                        <span className="text-slate-400 me-2">Already have an account ? </span> <Link to="/login" className="text-slate-900 dark:text-white font-medium">Sign in</Link>
                                    </div>
                                </div>
                            </form>
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