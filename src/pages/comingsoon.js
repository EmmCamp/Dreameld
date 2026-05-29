import React, { useEffect, useState } from 'react' 
import { Link } from "react-router-dom";

import logo from '../assets/images/logo-icon-40.png'

import Switcher from '../components/switcher';
import BackButton from '../components/backButton';

export default function Comingsoon(){

    let [days, setDays] = useState(0);
    let [hours, setHours] = useState(0);
    let [minutes, setMinutes] = useState(0);
    let [seconds, setSeconds] = useState(0);
  
    let deadline = "December, 31, 2024";
  
    let getTime = () => {
      let time = Date.parse(deadline) - Date.now();
  
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    };
  
    useEffect(() => {
      let interval = setInterval(() => getTime(deadline), 1000);
  
      return () => clearInterval(interval);
    }, []);

    return(
        <>
        <section className="md:h-screen py-36 flex items-center justify-center relative overflow-hidden bg-[url('../../assets/images/bg/bg6.jpg')] bg-no-repeat bg-center bg-cover">
            <div className="absolute inset-0 bg-slate-950/70"></div>
            <div className="container-fluid relative z-3">
                <div className="grid grid-cols-1">
                    <div className="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
                        <div className="text-center">
                            <Link to="/"><img src={logo} className="mx-auto h-10" alt=""/></Link>
                        </div>
                        <div className="title-heading text-center my-auto">
                            <h1 className="text-white mt-3 mb-6 md:text-5xl text-3xl font-semibold">We Are Coming Soon...</h1>
                            <p className="text-white/70 text-md max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                        
                            <div id="countdown">
                                <ul className="count-down list-none inline-block text-white text-center mt-8 m-6">
                                    <li  className="count-number inline-block m-2">{days}<p className='count-head'>Days</p></li>
                                    <li  className="count-number inline-block m-2">{hours}<p className='count-head'>Hours</p></li>
                                    <li  className="count-number inline-block m-2">{minutes}<p className='count-head'>Mins</p></li>
                                    <li  className="count-number inline-block m-2">{seconds}<p className='count-head'>Secs</p></li>
                                    <li className="h1"></li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="mb-0 text-slate-400 font-medium">© {new Date().getFullYear()} Dreameld. Design & Develop with <i className="mdi mdi-heart text-red-600"></i> by <Link to="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
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