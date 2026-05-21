import React, { useState, useEffect } from 'react'

import logo from '../assets/images/logo-icon-40.png'

import Switcher from '../components/switcher';
import BackButton from '../components/backButton';

export default function Maintenance(){
    let [minutes, setMinutes] = useState(0);
    let [remainingSeconds, setRemainingSeconds] = useState(0);
    useEffect(() => {

        let intervalId = setInterval(() => {
            calculateTimeRemaining()
        }, 1000);

        var seconds = 3599;
        function calculateTimeRemaining() {

            let minutes = Math.round((seconds - 30) / 60);
            let remainingSeconds = seconds % 60;

            setMinutes(minutes);
            setRemainingSeconds(remainingSeconds);

            if (seconds === 0) {
                clearInterval(intervalId);
            } else {
                seconds = seconds - 1;
            }
        }

        return () => {
            clearInterval(intervalId);
        };
    }, []);
    return(
        <>
        <section className="md:h-screen py-36 flex items-center justify-center relative overflow-hidden bg-[url('../../assets/images/bg/bg6.jpg')] bg-no-repeat bg-center bg-cover">
            <div className="absolute inset-0 bg-slate-950/70"></div>
            <div className="container relative z-3 text-center">
                <div className="grid grid-cols-1">
                    <img src={logo} className="mx-auto h-10" alt=""/>
                    <h1 className="text-white mb-6 mt-8 md:text-5xl text-3xl font-semibold">We Are Back Soon...</h1>
                    <p className="text-white/70 text-md max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                </div>

                <div className="grid grid-cols-1 mt-10">
                    <div className="text-center">
                        <span id="maintenance" className="timer text-white text-[56px] tracking-[1px]">{ minutes }:{ remainingSeconds }</span>
                        <span className="block text-base font-medium uppercase text-white">Minutes</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 mt-8">
                    <div className="text-center subcribe-form">
                        <form className="relative mx-auto max-w-xl">
                            <input type="email" id="subemail" name="name" className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-slate-900 dark:text-white rounded-lg bg-white/70 dark:bg-slate-900/70 border dark:border-gray-700" placeholder="Enter your email id.."/>
                            <button type="submit" className="absolute top-[2px] end-[3px] h-[46px] inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-lg align-middle transition-all duration-500">Subcribe Now</button>
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