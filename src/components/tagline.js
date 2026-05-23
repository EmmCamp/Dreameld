import React from "react";
import { Link } from "react-router-dom";
import {FiKey, FiPhoneOutgoing, FiMail,FiHelpCircle} from '../assets/icons/vander'
export default function Tagline(){
    return(
        <>
        <div className="tagline bg-gradient-to-tr from-sky-500 to-blue-700">
            <div className="container relative">                
                <div className="grid grid-cols-1">
                    <div className="flex justify-between">
                        <ul className="list-none space-x-1">
                            <li className="inline-flex items-center"><FiPhoneOutgoing className="h-4 w-4 text-white me-2"/><Link to="tel:+152534-468-854" className="text-white/70 hover:text-white transition-all duration-500">+152 534-468-854</Link></li>
                            <li className="inline-flex items-center ps-2"><FiMail className="h-4 w-4 text-white me-2"/><Link to="mailto:contact@example.com" className="text-white/70 hover:text-white transition-all duration-500">contact@example.com</Link></li>
                        </ul>

                        <ul className="list-none space-x-1">
                            <li className="inline-flex items-center"><FiKey className="h-4 w-4 text-white me-2"/><Link to="/login" className="text-white/70 hover:text-white transition-all duration-500">Login</Link></li>
                            <li className="inline-flex items-center ps-2"><FiHelpCircle className="h-4 w-4 text-white me-2"/><Link to="/helpcenter-overview" className="text-white/70 hover:text-white transition-all duration-500">Support</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}