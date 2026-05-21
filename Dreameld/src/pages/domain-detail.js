import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import comImg from "../assets/images/shop/com.jpg"

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

import {AiOutlineCheckCircle, FiUser, FiMail, FiMessageCircle} from '../assets/icons/vander'
import { domainPlan,clientData2 } from "../data/data";

export default function DomainDetail(){
    let params = useParams()
    let id = params.id
    let data = domainPlan.find((domain) => domain.id === parseInt(id))

    let [activeIndex, setActiveIndex] = useState(0)
    
    return(
        <>
        <Navbar navClass= "defaultscroll is-sticky" ulClass='navigation-menu justify-end'/>
        <section className="relative table w-full md:py-40 py-36 bg-[url('../../assets/images/bg/bg5.png')] bg-center bg-cover">
            <div className="absolute inset-0 bg-sky-500/5"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-12">
                    <h3 className="md:text-4xl text-3xl md:leading-snug leading-snug font-medium">{data?.title ? data?.title : 'hoxia'}.com</h3>
                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block text-[15px] font-medium duration-500 ease-in-out hover:text-sky-500"><Link to="/index">Hoxia</Link></li>
                    <li className="inline-block text-[15px] ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block text-[15px] font-medium duration-500 ease-in-out hover:text-sky-500"><Link to="/hosting-domain">Domain</Link></li>
                    <li className="inline-block text-[15px] ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block text-[15px] font-medium duration-500 ease-in-out text-sky-500">{data?.title ? data?.title : 'hoxia'}.com</li>
                </ul>
            </div>
        </section>
        <div className="relative">
            <div className="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden z-1 text-white dark:text-slate-900">
                <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] items-center">
                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="tiny-single-item">
                            <div className="tiny-slide">
                                <img src={data?.image ? data?.image : comImg} className="rounded-md shadow dark:shadow-gray-800" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 md:col-span-6">
                        <div className="lg:ms-6">
                            <h5 className="text-2xl font-semibold">{data?.title ? data?.title : 'hoxia'}.com</h5>
                            <div className="mt-2">
                                <span className="text-slate-400 font-semibold me-1">$16USD <del className="text-red-600">$21USD</del></span>
                            </div>

                            <div className="mt-4">
                                <h5 className="text-lg font-semibold">Overview :</h5>
                                <p className="text-slate-400 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero exercitationem, unde molestiae sint quae inventore atque minima natus fugiat nihil quisquam voluptates ea omnis. Modi laborum soluta tempore unde accusantium.</p>
                            
                                <ul className="list-none text-slate-400 mt-4">
                                    <li className="mb-2 flex"><AiOutlineCheckCircle className="text-sky-500 text-xl me-2"/> Digital Marketing Solutions for Tomorrow</li>
                                    <li className="mb-2 flex"><AiOutlineCheckCircle className="text-sky-500 text-xl me-2"/> Our Talented & Experienced Marketing Agency</li>
                                    <li className="mb-2 flex"><AiOutlineCheckCircle className="text-sky-500 text-xl me-2"/> Create your own skin to match your brand</li>
                                </ul>
                            </div>

                            <div className="mt-4">
                                <Link to="" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500 me-2 mt-2">Shop Now</Link>
                                <Link to="" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-sky-500/5 hover:bg-sky-500 border border-sky-500/10 hover:border-sky-500 text-sky-500 hover:text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500 mt-2">Add to Cart</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-10 gap-[30px]">
                    <div className="lg:col-span-3 md:col-span-5">
                        <div className="sticky top-20">
                            <ul className="flex-column p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                                <li role="presentation">
                                    <button onClick={()=>setActiveIndex(0)} className={`${activeIndex === 0 ? 'text-white bg-sky-500 hover:text-white' :''} px-4 py-2 text-start text-base font-semibold rounded-md w-full mt-3 hover:text-sky-500 transition-all duration-500 ease-in-out`}>Description</button>
                                </li>
                                <li role="presentation">
                                    <button onClick={()=>setActiveIndex(1)} className={`${activeIndex === 1 ? 'text-white bg-sky-500 hover:text-white' :''} px-4 py-2 text-start text-base font-semibold rounded-md w-full mt-3 hover:text-sky-500 transition-all duration-500 ease-in-out`}>Additional Information</button>
                                </li>
                                <li role="presentation">
                                    <button onClick={()=>setActiveIndex(2)} className={`${activeIndex === 2 ? 'text-white bg-sky-500 hover:text-white' :''} px-4 py-2 text-start text-base font-semibold rounded-md w-full mt-3 hover:text-sky-500 transition-all duration-500 ease-in-out`}>Review</button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-9 md:col-span-7">
                        <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                            {activeIndex === 0 ? 
                                <div className="">
                                    <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables.</p>
                                </div> : ""
                            }
                            {activeIndex === 1 ? 
                                <div>
                                    <table className="w-full text-start">
                                        <tbody>
                                            <tr className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-gray-700">
                                                <td className="font-semibold py-4" style={{width:"100%"}}>Name</td>
                                                <td className="text-slate-400 py-4">.com</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div> :""
                            }
                            {activeIndex === 2 ? 
                                <div>
                                    {clientData2.map((item,index) =>{
                                        return(
                                            <div className="mt-8" key={index}>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <img src={item.image} className="h-11 w-11 rounded-full shadow" alt=""/>
                    
                                                        <div className="ms-3 flex-1">
                                                            <Link to="" className="text-lg font-semibold hover:text-sky-500 transition-all duration-500 ease-in-out">{item.name}</Link>
                                                            <p className="text-sm text-slate-400">{item.date}</p>
                                                        </div>
                                                    </div>
                
                                                    <Link to="" className="text-slate-400 hover:text-sky-500 transition-all duration-500 ease-in-out ms-5"><i className="mdi mdi-reply"></i> Reply</Link>
                                                </div>
                                                <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-800 mt-6">
                                                    <ul className="list-none inline-block text-orange-400">
                                                        <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                                        <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                                        <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                                        <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                                        <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                                        <li className="inline text-slate-400 font-semibold">5.0</li>
                                                    </ul>

                                                    <p className="text-slate-400 italic">{item.desc}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
        
                                    <div className="p-6 rounded-md shadow dark:shadow-gray-800 mt-8">
                                        <h5 className="text-lg font-semibold">Leave A Comment:</h5>
            
                                        <form className="mt-8">
                                            <div className="grid lg:grid-cols-12 lg:gap-6">
                                                <div className="lg:col-span-6 mb-5">
                                                    <div className="text-start">
                                                        <label htmlFor="name" className="font-semibold">Your Name:</label>
                                                        <div className="form-icon relative mt-2">
                                                            <FiUser className="w-4 h-4 absolute top-3 start-4"/>
                                                            <input name="name" id="name" type="text" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0" placeholder="Name :"/>
                                                        </div>
                                                    </div>
                                                </div>
                
                                                <div className="lg:col-span-6 mb-5">
                                                    <div className="text-start">
                                                        <label htmlFor="email" className="font-semibold">Your Email:</label>
                                                        <div className="form-icon relative mt-2">
                                                            <FiMail className="w-4 h-4 absolute top-3 start-4"/>
                                                            <input name="email" id="email" type="email" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0" placeholder="Email :"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
            
                                            <div className="grid grid-cols-1">
                                                <div className="mb-5">
                                                    <div className="text-start">
                                                        <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                                                        <div className="form-icon relative mt-2">
                                                            <FiMessageCircle className="w-4 h-4 absolute top-3 start-4"/>
                                                            <textarea name="comments" id="comments" className="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0" placeholder="Message :"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" id="submit" name="send" className="py-2 px-5 inline-block tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-sky-500 hover:bg-sky-600 border-sky-500 hover:border-sky-600 text-white rounded-md w-full">Send Message</button>
                                        </form>
                                    </div>
                                </div> :''
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}
