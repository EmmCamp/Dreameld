import React,{useState} from "react";
import { Link } from "react-router-dom";

import comImg from '../assets/images/shop/com.jpg'
import bizImg from '../assets/images/shop/biz.jpg'
import netImg from '../assets/images/shop/net.jpg'

import Navbar from "../components/navbar";
import MobileApp from "../components/mobileApp";
import Footer from "../components/footer";
import Switcher from "../components/switcher";


export default function Cart(){
    let [count,setcount] = useState(1)
    let [count1,setcount1] = useState(2)
    let [count2,setcount2] = useState(1)
    
    return(
        <>
        <Navbar navClass= "defaultscroll is-sticky" ulClass='navigation-menu justify-end'/>
        <section className="relative table w-full md:py-40 py-36 bg-[url('../../assets/images/bg/bg5.png')] bg-center bg-cover">
            <div className="absolute inset-0 bg-sky-500/5"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-12">
                    <h3 className="md:text-4xl text-3xl md:leading-snug leading-snug font-medium">Shop Cart</h3>
                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block text-[15px] font-medium duration-500 ease-in-out hover:text-sky-500"><Link to="/index">Dreameld</Link></li>
                    <li className="inline-block text-[15px] ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block text-[15px] font-medium duration-500 ease-in-out text-sky-500">Cart</li>
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
            <div className="container">
                <div className="grid lg:grid-cols-1">
                    <div className="relative overflow-x-auto shadow dark:shadow-gray-800 rounded-md">
                        <table className="w-full text-start">
                            <thead className="text-sm uppercase bg-slate-50 dark:bg-slate-800">
                                <tr>
                                    <th scope="col" className="font-medium p-4 w-4"></th>
                                    <th scope="col" className="font-medium text-start p-4 min-w-[220px]">Product</th>
                                    <th scope="col" className="font-medium p-4 w-24 min-w-[100px]">Price</th>
                                    <th scope="col" className="font-medium p-4 w-56 min-w-[220px]">Qty</th>
                                    <th scope="col" className="font-medium p-4 w-24 min-w-[100px]">Total($)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white dark:bg-slate-900">
                                    <td className="p-4"><Link to=""><i className="mdi mdi-window-close text-red-600"></i></Link></td>
                                    <td className="p-4">
                                        <span className="flex items-center">
                                            <img src={comImg} className="rounded shadow dark:shadow-gray-800 w-12" alt=""/>
                                            <span className="ms-3">
                                                <span className="block font-medium">hoxia.com</span>
                                            </span>
                                        </span>
                                    </td>
                                    <td className="p-4 text-center">$ 11</td>
                                    <td className="p-4 text-center">
                                        <div className="qty-icons space-x-1">
                                            <button onClick={() =>setcount(count - 1)} className="inline-block h-8 w-8 text-[16px] font-medium tracking-wide bg-sky-500/10 hover:bg-sky-500 border border-sky-500/10 hover:border-sky-500 text-sky-500 hover:text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500 minus">-</button>
                                            <input min="0" name="quantity" defaultValue={count} type="number" className="h-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-sky-500/10 border border-sky-500/10 hover:border-sky-500 text-sky-500 hover:text-white pointer-events-none w-16 ps-4 quantity"/>
                                            <button onClick={() =>setcount(count + 1)} className="inline-block h-8 w-8 text-[16px] font-medium tracking-wide bg-sky-500/10 hover:bg-sky-500 border border-sky-500/10 hover:border-sky-500 text-sky-500 hover:text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500 plus">+</button>
                                        </div>
                                    </td>
                                    <td className="p-4  text-end">$ 11</td>
                                </tr>

                                <tr className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800">
                                    <td className="p-4"><Link to=""><i className="mdi mdi-window-close text-red-600"></i></Link></td>
                                    <td className="p-4">
                                        <span className="flex items-center">
                                            <img src={bizImg}className="rounded shadow dark:shadow-gray-800 w-12" alt=""/>
                                            <span className="ms-3">
                                                <span className="block font-medium">hoxia.biz</span>
                                            </span>
                                        </span>
                                    </td>
                                    <td className="p-4 text-center">$ 11</td>
                                    <td className="p-4 text-center">
                                        <div className="qty-icons space-x-1">
                                            <button onClick={() =>setcount1(count1 - 1)} className="inline-block h-8 w-8 text-[16px] font-medium tracking-wide bg-sky-500/10 hover:bg-sky-500 border border-sky-500/10 hover:border-sky-500 text-sky-500 hover:text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500 minus">-</button>
                                            <input min="0" name="quantity" defaultValue={count1} type="number" className="h-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-sky-500/10 border border-sky-500/10 hover:border-sky-500 text-sky-500 hover:text-white pointer-events-none w-16 ps-4 quantity"/>
                                            <button onClick={() =>setcount1(count1 + 1)} className="inline-block h-8 w-8 text-[16px] font-medium tracking-wide bg-sky-500/10 hover:bg-sky-500 border border-sky-500/10 hover:border-sky-500 text-sky-500 hover:text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500 plus">+</button>
                                        </div>
                                    </td>
                                    <td className="p-4  text-end">$ 11</td>
                                </tr>

                                <tr className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800">
                                    <td className="p-4"><Link to=""><i className="mdi mdi-window-close text-red-600"></i></Link></td>
                                    <td className="p-4">
                                        <span className="flex items-center">
                                            <img src={netImg} className="rounded shadow dark:shadow-gray-800 w-12" alt=""/>
                                            <span className="ms-3">
                                                <span className="block font-medium">hoxia.net</span>
                                            </span>
                                        </span>
                                    </td>
                                    <td className="p-4 text-center">$ 11</td>
                                    <td className="p-4 text-center">
                                        <div className="qty-icons space-x-1">
                                            <button onClick={() =>setcount2(count2 - 1)} className="inline-block h-8 w-8 text-[16px] font-medium tracking-wide bg-sky-500/10 hover:bg-sky-500 border border-sky-500/10 hover:border-sky-500 text-sky-500 hover:text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500 minus">-</button>
                                            <input min="0" name="quantity" defaultValue={count2} type="number" className="h-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-sky-500/10 border border-sky-500/10 hover:border-sky-500 text-sky-500 hover:text-white pointer-events-none w-16 ps-4 quantity"/>
                                            <button onClick={() =>setcount2(count2 + 1)} className="inline-block h-8 w-8 text-[16px] font-medium tracking-wide bg-sky-500/10 hover:bg-sky-500 border border-sky-500/10 hover:border-sky-500 text-sky-500 hover:text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500 plus">+</button>
                                        </div>
                                    </td>
                                    <td className="p-4  text-end">$ 11</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                        <div className="lg:col-span-9 md:order-1 order-3">
                            <Link to="" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500 me-2 mt-2">Shop Now</Link>
                            <Link to="" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-sky-500/10 hover:bg-sky-500 border border-sky-500/10 hover:border-sky-500 text-sky-500 hover:text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500 mt-2">Add to Cart</Link>
                        </div>

                        <div className="lg:col-span-3 md:order-2 order-1">
                            <ul className="list-none shadow dark:shadow-gray-800 rounded-md">
                                <li className="flex justify-between p-4">
                                    <span className="font-medium">Subtotal :</span>
                                    <span className="text-slate-400">$ 33</span>
                                </li>
                                <li className="flex justify-between p-4 border-t border-gray-100 dark:border-gray-800">
                                    <span className="font-medium">Taxes :</span>
                                    <span className="text-slate-400">$ 3</span>
                                </li>
                                <li className="flex justify-between font-medium p-4 border-t border-gray-200 dark:border-gray-600">
                                    <span className="font-medium">Total :</span>
                                    <span className="font-medium">$ 36</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

           <MobileApp/>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}