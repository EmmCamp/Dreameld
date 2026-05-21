import React from "react";
import { Link } from "react-router-dom";

import logo from '../assets/images/logo-icon-64.png'

import {AiOutlineShoppingCart, AiOutlineDribbble,AiOutlineBehance,AiFillLinkedin, BiLogoFacebook, AiOutlineInstagram, AiOutlineMail,AiOutlineTwitter, AiOutlineFile} from '../assets/icons/vander'

export default function Footer(){
    return(
        <footer className="footer bg-slate-900 dark:bg-slate-950 relative text-gray-200">    
            <div className="container relative">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="py-[60px] px-0">                    
                            <div className="grid grid-cols-1">
                                <div className="text-center">
                                    <img src={logo} className="block mx-auto" alt=""/>
                                    <p className="max-w-xl mx-auto mt-8">Splash your dream color Bring your home to lively Colors. We make it a priority to offer flexible services to accomodate your needs</p>
                                </div>

                                <ul className="list-none text-center mt-8 space-x-1">
                                    <li className="inline"><Link to="https://1.envato.market/hoxia-react" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border-gray-800 rounded-md border hover:border-sky-500 dark:hover:border-sky-500 hover:bg-sky-500 dark:hover:bg-sky-500 focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none"><AiOutlineShoppingCart className="align-middle text-base"/></Link></li>
                                    <li className="inline"><Link to="https://dribbble.com/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border-gray-800 rounded-md border hover:border-sky-500 dark:hover:border-sky-500 hover:bg-sky-500 dark:hover:bg-sky-500 focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none"><AiOutlineDribbble className="align-middle"/></Link></li>
                                    <li className="inline"><Link to="https://www.behance.net/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border-gray-800 rounded-md border hover:border-sky-500 dark:hover:border-sky-500 hover:bg-sky-500 dark:hover:bg-sky-500 focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none"><AiOutlineBehance className="align-middle"/></Link></li>
                                    <li className="inline"><Link to="http://linkedin.com/company/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border-gray-800 rounded-md border hover:border-sky-500 dark:hover:border-sky-500 hover:bg-sky-500 dark:hover:bg-sky-500 focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none"><AiFillLinkedin className="align-middle"/></Link></li>
                                    <li className="inline"><Link to="https://www.facebook.com/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border-gray-800 rounded-md border hover:border-sky-500 dark:hover:border-sky-500 hover:bg-sky-500 dark:hover:bg-sky-500 focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none"><BiLogoFacebook className="align-middle"/></Link></li>
                                    <li className="inline"><Link to="https://www.instagram.com/shreethemes/" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border-gray-800 rounded-md border hover:border-sky-500 dark:hover:border-sky-500 hover:bg-sky-500 dark:hover:bg-sky-500 focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none"><AiOutlineInstagram className="align-middle"/></Link></li>
                                    <li className="inline"><Link to="https://twitter.com/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border-gray-800 rounded-md border hover:border-sky-500 dark:hover:border-sky-500 hover:bg-sky-500 dark:hover:bg-sky-500 focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none"><AiOutlineTwitter/></Link></li>
                                    <li className="inline"><Link to="mailto:support@shreethemes.in" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border-gray-800 rounded-md border hover:border-sky-500 dark:hover:border-sky-500 hover:bg-sky-500 dark:hover:bg-sky-500 focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none"><AiOutlineMail className="align-middle"/></Link></li>
                                    <li className="inline"><Link to="https://forms.gle/QkTueCikDGqJnbky9" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border-gray-800 rounded-md border hover:border-sky-500 dark:hover:border-sky-500 hover:bg-sky-500 dark:hover:bg-sky-500 focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none"><AiOutlineFile className="align-middle"/></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-[30px] px-0 border-t border-slate-800">
                <div className="container relative text-center">
                    <div className="grid md:grid-cols-1">
                        <p className="mb-0">© {new Date().getFullYear()} Hoxia. Design & Develop with <i className="mdi mdi-heart text-red-600"></i> by <Link to="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
    
    
}