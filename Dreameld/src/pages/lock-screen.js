import React from "react";
import { Link } from "react-router-dom";

import client  from '../assets/images/client/05.jpg'

import Switcher from "../components/switcher";
import BackButton from "../components/backButton";

export default function LockScreen(){
    return(
        <>
         <section className="h-screen flex items-center justify-center relative overflow-hidden bg-[url('../../assets/images/bg/bg6.jpg')] bg-no-repeat bg-center bg-cover">
            
            <div className="container relative">
                <div className="md:flex justify-center">
                    <div className="p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
                        <div className="text-center">
                            <img src={client} className="mx-auto h-20 w-20 rounded-full shadow dark:shadow-gray-800" alt=""/>
                            <h5 className="mb-6 mt-4 text-xl font-medium">Jimmi Jimenez</h5>
                        </div>
                        <form>
                            <div className="grid grid-cols-1">
                                <div className="mb-4 text-start">
                                    <label className="form-lable font-medium" htmlFor="LoginPassword">Password:</label>
                                    <input id="LoginPassword" type="password" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-lg outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0 mt-2" required="" placeholder="Password:"/>
                                </div>

                                <div className="flex justify-between mb-4">
                                    <div className="inline-flex items-center mb-0">
                                        <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-sky-500 focus:border-sky-300 focus:ring focus:ring-offset-0 focus:ring-sky-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="RememberMe"/>
                                        <label className="form-checkbox-label text-slate-400" htmlFor="RememberMe">Remember me</label>
                                    </div>
                                    <p className="text-slate-400 mb-0"><Link to="/reset-password" className="text-slate-900 dark:text-white font-medium">Forgot password ?</Link></p>
                                </div>

                                <div className="">
                                    <input type="submit" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-lg align-middle transition-all duration-500 w-full" value="Login / Sign in"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <Switcher/>
        <BackButton/>
        </>
    )
}