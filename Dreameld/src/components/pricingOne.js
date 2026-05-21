import React from "react";
import { Link } from "react-router-dom";

import {AiOutlineCheckCircle} from '../assets/icons/vander'

export default function PricingOne(){
    return(
            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-medium">Explore Our Hosting Pricing</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <div className="group p-6 relative overflow-hidden shadow-lg dark:shadow-gray-800 rounded-md h-fit">
                        <h6 className="font-medium mb-5 text-xl">Free</h6>

                        <div className="flex mb-5">
                            <span className="text-lg font-medium">$</span>
                            <span className="price text-5xl h6 font-semibold mb-0">0</span>
                            <span className="text-lg font-medium self-end mb-1">/mo</span>
                        </div>

                        <ul className="list-none text-slate-400">
                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-sky-500 text-[20px] w-10 align-middle me-2 mt-0.5"/><span className="mt-0.5">We offers a free month of service for new customers.</span></li>
                        </ul>
                        <Link to="" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-transparent hover:bg-sky-500 border border-gray-100 dark:border-gray-800 hover:border-sky-500 dark:hover:border-sky-500 text-slate-900 dark:text-white hover:text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500 w-full mt-5">Free Demo</Link>
                    </div>

                    <div className="group p-6 relative overflow-hidden shadow-lg dark:shadow-gray-800 rounded-md h-fit">
                        <h6 className="font-medium mb-5 text-xl">Single</h6>

                        <div className="flex mb-5">
                            <span className="text-lg font-medium">$</span>
                            <span className="price text-5xl h6 font-semibold mb-0">9</span>
                            <span className="text-lg font-medium self-end mb-1">/mo</span>
                        </div>

                        <ul className="list-none text-slate-400">
                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-sky-500 text-[20px] align-middle w-10 me-2 mt-0.5"/> <span className="mt-0.5">We offers a free 7 days of service for new customers.</span></li>
                            <li className="mb-1 flex"><AiOutlineCheckCircle className="text-sky-500 text-[20px] align-middle w-10 me-2 mt-0.5"/> <span className="mt-0.5">Our Talented & Experienced Marketing Agency</span></li>
                        </ul>
                        <Link to="" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-transparent hover:bg-sky-500 border border-gray-100 dark:border-gray-800 hover:border-sky-500 dark:hover:border-sky-500 text-slate-900 dark:text-white hover:text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500 w-full mt-5">Subscribe Now</Link>
                    </div>

                    <div className="group relative overflow-hidden shadow-lg dark:shadow-gray-800 rounded-md h-fit">
                        <div className="bg-gradient-to-tr from-sky-500 to-blue-700 text-white py-2 px-6 h6 text-lg font-medium">Popular</div>
                        <div className="p-6">
                            <h6 className="font-medium mb-5 text-xl">Professional</h6>

                            <div className="flex mb-5">
                                <span className="text-lg font-medium">$</span>
                                <span className="price text-5xl h6 font-semibold mb-0">49</span>
                                <span className="text-lg font-medium self-end mb-1">/mo</span>
                            </div>

                            <ul className="list-none text-slate-400">
                                <li className="mb-1 flex items-start"><AiOutlineCheckCircle className="text-sky-500 text-[20px] align-middle me-2 w-10 mt-0.5"/> <span className="mt-0.5">We offers a free 14 days of service for new customers.</span></li>
                                <li className="mb-1 flex items-center"><AiOutlineCheckCircle className="text-sky-500 text-[20px] align-middle me-2"/> <span className="mt-0.5">Full Access</span></li>
                                <li className="mb-1 flex items-center"><AiOutlineCheckCircle className="text-sky-500 text-[20px] align-middle me-2"/><span className="mt-0.5">Source Files</span></li>
                                <li className="mb-1 flex items-center"><AiOutlineCheckCircle className="text-sky-500 text-[20px] align-middle me-2"/><span className="mt-0.5">Free Appointments</span></li>
                                <li className="mb-1 flex items-center"><AiOutlineCheckCircle className="text-sky-500 text-[20px] align-middle me-2"/><span className="mt-0.5">Enhanced Security</span></li>
                                <li className="mb-1 flex items-center"><AiOutlineCheckCircle className="text-sky-500 text-[20px] align-middle me-2"/> <span className="mt-0.5">Free Installment</span></li>
                            </ul>
                            <Link to="" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500 w-full mt-5">Buy Now</Link>

                            <p className="text-sm text-slate-400 mt-1.5"><span className="text-red-600">*</span>T&C Apply</p>
                        </div>
                    </div>

                    <div className="group p-[1px] relative overflow-hidden shadow-lg dark:shadow-gray-800 rounded-md bg-gradient-to-tr from-sky-500 to-blue-700 h-fit">
                        <div className="p-6 bg-white dark:bg-slate-900 rounded-md">
                            <h6 className="font-medium mb-5 text-xl">Custom</h6>

                            <p className="text-slate-400 mb-5">Pricing plan will be as per client or company requirements</p>

                            <ul className="list-none">
                                <li className="mb-1 font-medium flex items-center"><AiOutlineCheckCircle className="text-sky-500 text-[20px] align-middle me-2"/> <span className="mt-1">Custom Pricing</span></li>
                            </ul>
                            <Link to="" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-transparent hover:bg-sky-500 border border-gray-100 dark:border-gray-800 hover:border-sky-500 dark:hover:border-sky-500 text-slate-900 dark:text-white hover:text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500 w-full mt-5">Talk to us</Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}