import React,{useState} from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

import {FiArrowRight,MdKeyboardArrowDown} from '../assets/icons/vander'
import { accordionData } from "../data/data";

export default function Terms(){
    let[activeIndex, setActiveIndex] = useState(1)

    let setActiveData = (id) =>{
        setActiveIndex(id)
    }
    return(
        <>
        <Navbar navClass= "defaultscroll is-sticky" ulClass='navigation-menu justify-end nav-light' navLight={true}/>
        <section className="relative table w-full py-36 bg-[url('../../assets/images/bg/bg6.jpg')] bg-center bg-no-repeat bg-cover">
            <div className="absolute inset-0 bg-sky-900/80"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-10">
                    <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">Terms & Services</h3>
                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block text-[15px] font-medium duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/index">Hoxia</Link></li>
                    <li className="inline-block text-[15px] text-white ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block text-[15px] font-medium duration-500 ease-in-out text-white">Terms & Services</li>
                </ul>
            </div>
        </section>
        <div className="relative">
            <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <section className="relative lg:py-24 py-16">
            <div className="container relative">
                <div className="md:flex justify-center">
                    <div className="md:w-3/4">
                        <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                            <h5 className="text-xl font-medium mb-4">Introduction :</h5>
                            <p className="text-slate-400">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</p>

                            <h5 className="text-xl font-medium mb-4 mt-8">User Agreements :</h5>
                            <p className="text-slate-400">The most well-known dummy text is the 'Lorem Ipsum', which is said to have <span className="text-red-600">originated</span> in the 16th century. Lorem Ipsum is <span className="text-red-600">composed</span> in a pseudo-Latin language which more or less <span className="text-red-600">corresponds</span> to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also <span className="text-red-600">incomprehensible</span>, but it imitates the rhythm of most European languages in Latin script. The <span className="text-red-600">advantage</span> of its Latin origin and the relative <span className="text-red-600">meaninglessness</span> of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's <span className="text-red-600">attention</span> from the layout.</p>
                            <p className="text-slate-400 mt-3">There is now an <span className="text-red-600">abundance</span> of readable dummy texts. These are usually used when a text is <span className="text-red-600">required purely</span> to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or <span className="text-red-600">nonsensical</span> stories.</p>
                            <p className="text-slate-400 mt-3">It seems that only <span className="text-red-600">fragments</span> of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</p>
                            
                            <h5 className="text-xl font-medium mb-4 mt-8">Restrictions :</h5>
                            <p className="text-slate-400">You are specifically restricted from all of the following :</p>
                            <ul className="list-none text-slate-400 mt-3">
                                <li className="flex items-center mt-2"><FiArrowRight className="text-sky-500 align-middle me-2"/>Digital Marketing Solutions for Tomorrow</li>
                                <li className="flex items-center mt-2"><FiArrowRight className="text-sky-500 align-middle me-2"/>Our Talented & Experienced Marketing Agency</li>
                                <li className="flex items-center mt-2"><FiArrowRight className="text-sky-500 align-middle me-2"/>Create your own skin to match your brand</li>
                                <li className="flex items-center mt-2"><FiArrowRight className="text-sky-500 align-middle me-2"/>Digital Marketing Solutions for Tomorrow</li>
                                <li className="flex items-center mt-2"><FiArrowRight className="text-sky-500 align-middle me-2"/>Our Talented & Experienced Marketing Agency</li>
                                <li className="flex items-center mt-2"><FiArrowRight className="text-sky-500 align-middle me-2"/>Create your own skin to match your brand</li>
                            </ul>

                            <h5 className="text-xl font-medium mt-8">Users Question & Answer :</h5>

                            <div className="mt-6">
                            {accordionData.slice(0,4).map((item, index) => {
                            return(
                                <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4" key={index}>
                                    <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                        <button type="button" onClick={() => setActiveData(item.id)} className={`${activeIndex === item.id ? 'flex justify-betwee bg-gray-50 dark:bg-slate-800 text-sky-500 ':""} flex justify-between items-center p-5 w-full font-medium text-start`}>
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

                            <div className="mt-6">
                                <Link to="" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-lg align-middle transition-all duration-500">Accept</Link>
                                <Link to="" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-transparent hover:bg-sky-500 border border-sky-500 text-sky-500 hover:text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-lg align-middle transition-all duration-500 ms-1">Decline</Link>
                            </div>
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