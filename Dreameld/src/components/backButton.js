import React from "react";
import { Link } from "react-router-dom";
import {FiArrowLeft} from '../assets/icons/vander'

export default function BackButton(){
    return(
        <div className="fixed bottom-3 end-3">
            <Link to="/" className="back-button h-9 w-9 inline-flex items-center text-center justify-center text-base bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-full align-middle transition-all duration-500"><FiArrowLeft className="h-4 w-4"/></Link>
        </div>
    )
}