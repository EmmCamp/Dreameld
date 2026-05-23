import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/navbar";
import MobileApp from "../components/mobileApp";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

import {GoMention} from '../assets/icons/vander'

export default function Checkouts(){
    return(
        <>
        <Navbar navClass= "defaultscroll is-sticky" ulClass='navigation-menu justify-end'/>
        <section className="relative table w-full md:py-40 py-36 bg-[url('../../assets/images/bg/bg5.png')] bg-center bg-cover">
            <div className="absolute inset-0 bg-sky-500/5"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-12">
                    <h3 className="md:text-4xl text-3xl md:leading-snug leading-snug font-medium">Checkouts</h3>
                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block text-[15px] font-medium duration-500 ease-in-out hover:text-sky-500"><Link to="/index">Hoxia</Link></li>
                    <li className="inline-block text-[15px] ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block text-[15px] font-medium duration-500 ease-in-out text-sky-500">Checkout</li>
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
                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-[30px]">
                    <div className="lg:col-span-8">
                        <div className="p-6 rounded-md shadow dark:shadow-gray-800">
                            <h3 className="text-xl leading-normal font-medium">Billing address</h3>

                            <form>
                                <div className="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-5">
                                    <div className="lg:col-span-6">
                                        <label className="form-label font-medium">First Name : <span className="text-red-600">*</span></label>
                                        <input type="text" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0 mt-2" placeholder="First Name:" id="firstname" name="name" required=""/>
                                    </div>

                                    <div className="lg:col-span-6">
                                        <label className="form-label font-medium">Last Name : <span className="text-red-600">*</span></label>
                                        <input type="text" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0 mt-2" placeholder="Last Name:" id="lastname" name="name" required=""/>
                                    </div>

                                    <div className="lg:col-span-6">
                                        <label className="form-label font-medium">Username</label>
                                        <div className="relative mt-2">
                                            <span className="absolute top-0.5 start-0.5 w-9 h-9 text-xl bg-gray-100 dark:bg-slate-800 inline-flex justify-center items-center text-dark dark:text-white rounded" id="basic-addon1"><GoMention/></span>
                                            <input type="text" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0" placeholder="username" id="username" required/>
                                        </div>
                                    </div>

                                    <div className="lg:col-span-6">
                                        <label className="form-label font-medium">Your Email : <span className="text-red-600">*</span></label>
                                        <input type="email" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0 mt-2" placeholder="Email" name="email" required=""/>
                                    </div>

                                    <div className="lg:col-span-12">
                                        <label className="form-label font-medium">Address : <span className="text-red-600">*</span></label>
                                        <input type="text" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0 mt-2" placeholder="Address:" id="address" name="name" required=""/>
                                    </div>

                                    <div className="lg:col-span-12">
                                        <label className="form-label font-medium">Address 2 : </label>
                                        <input type="text" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0 mt-2" placeholder="Address:" id="address2" name="name" required=""/>
                                    </div>

                                    <div className="lg:col-span-4">
                                        <label className="font-medium">Country:</label>
                                        <select className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0">
                                            <option value="USA">USA</option>
                                            <option value="CAD">Canada</option>
                                            <option value="CHINA">China</option>
                                        </select>
                                    </div>

                                    <div className="lg:col-span-4">
                                        <label className="font-medium">State:</label>
                                        <select className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0">
                                            <option value="CAL">California</option>
                                            <option value="TEX">Texas</option>
                                            <option value="FLOR">Florida</option>
                                        </select>
                                    </div>

                                    <div className="lg:col-span-4">
                                        <label className="form-label font-medium">Zip Code : <span className="text-red-600">*</span></label>
                                        <input type="number" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0 mt-2" placeholder="Zip:" id="zipcode" name="number" required=""/>
                                    </div>

                                    <div className="lg:col-span-12">
                                        <div className="flex items-center w-full mb-0">
                                            <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-sky-500 focus:border-sky-300 focus:ring focus:ring-offset-0 focus:ring-sky-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="sameaddress"/>
                                            <label className="form-check-label text-slate-400" htmlFor="sameaddress">Shipping address is the same as my billing address</label>
                                        </div>

                                        <div className="flex items-center w-full mb-0">
                                            <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-sky-500 focus:border-sky-300 focus:ring focus:ring-offset-0 focus:ring-sky-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="savenexttime"/>
                                            <label className="form-check-label text-slate-400" htmlFor="savenexttime">Save this information for next time</label>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <h3 className="text-xl leading-normal font-medium mt-6">Payment</h3>

                            <form>
                                <div className="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-5">
                                    <div className="lg:col-span-12">
                                        <div className="block">
                                            <div>
                                                <label className="inline-flex items-center">
                                                    <input type="radio" className="form-radio border-gray-200 dark:border-gray-800 text-sky-500 focus:border-sky-300 focus:ring focus:ring-offset-0 focus:ring-sky-200 focus:ring-opacity-50 me-2" name="radio-colors" value="1" defaultChecked/>
                                                    <span className="text-slate-400">Credit card</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="block mt-2">
                                            <div>
                                                <label className="inline-flex items-center">
                                                    <input type="radio" className="form-radio border-gray-200 dark:border-gray-800 text-sky-500 focus:border-sky-300 focus:ring focus:ring-offset-0 focus:ring-sky-200 focus:ring-opacity-50 me-2" name="radio-colors" value="1"/>
                                                    <span className="text-slate-400">Debit Card</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="block mt-2">
                                            <div>
                                                <label className="inline-flex items-center">
                                                    <input type="radio" className="form-radio border-gray-200 dark:border-gray-800 text-sky-500 focus:border-sky-300 focus:ring focus:ring-offset-0 focus:ring-sky-200 focus:ring-opacity-50 me-2" name="radio-colors" value="1"/>
                                                    <span className="text-slate-400">PayPal</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:col-span-6">
                                        <label className="form-label font-medium">Account Holder Name : <span className="text-red-600">*</span></label>
                                        <input type="text" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0 mt-2" placeholder="Name:" id="accountname" name="name" required=""/>
                                    </div>

                                    <div className="lg:col-span-6">
                                        <label className="form-label font-medium">Credit card number : <span className="text-red-600">*</span></label>
                                        <input type="number" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0 mt-2" placeholder="**** **** **** ****" id="cardnumber" name="number" required=""/>
                                    </div>

                                    <div className="lg:col-span-3">
                                        <label className="form-label font-medium">Expiration : <span className="text-red-600">*</span></label>
                                        <input type="number" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0 mt-2" placeholder="" id="expiration" name="number" required=""/>
                                    </div>

                                    <div className="lg:col-span-3">
                                        <label className="form-label font-medium">CVV : <span className="text-red-600">*</span></label>
                                        <input type="number" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0 mt-2" placeholder="" id="cvv" name="number" required=""/>
                                    </div>
                                </div>
                            </form>
                            <div className="mt-4">
                                <input type="submit" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500 w-full" value="Continue to checkout"/>
                            </div>
                        </div>

                    </div>

                    <div className="lg:col-span-4">
                        <div className="p-6 rounded-md shadow dark:shadow-gray-800">
                            <div className="flex justify-between items-center">
                                <h5 className="text-lg font-medium">Your Cart</h5>

                                <Link to="#" className="bg-sky-500 flex justify-center items-center text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full h-5">3</Link>
                            </div>

                            <div className="mt-4 rounded-md shadow dark:shadow-gray-800">
                                <div className="p-3 flex justify-between items-center">
                                    <div>
                                        <h5 className="font-medium">Product Name</h5>
                                        <p className="text-sm text-slate-400">Brief description</p>
                                    </div>

                                    <p className="text-slate-400 font-medium">$ 12</p>
                                </div>
                                <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                                    <div>
                                        <h5 className="font-medium">Second product</h5>
                                        <p className="text-sm text-slate-400">Brief description</p>
                                    </div>

                                    <p className="text-slate-400 font-medium">$ 18</p>
                                </div>
                                <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                                    <div>
                                        <h5 className="font-medium">Third item</h5>
                                        <p className="text-sm text-slate-400">Brief description</p>
                                    </div>

                                    <p className="text-slate-400 font-medium">$ 20</p>
                                </div>
                                <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-slate-800 text-green-600">
                                    <div>
                                        <h5 className="font-medium">Promo code</h5>
                                        <p className="text-sm text-green-600">EXAMPLECODE</p>
                                    </div>

                                    <p className="text-red-600 font-medium">-$ 10</p>
                                </div>
                                <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                                    <div>
                                        <h5 className="font-medium">Total (USD)</h5>
                                    </div>

                                    <p className="font-medium">$ 30</p>
                                </div>
                            </div>

                            <div className="subcribe-form mt-6">
                                <form className="relative max-w-xl">
                                    <input type="email" id="subcribe" name="email" className="py-4 pe-40 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800" placeholder="Promo code"/>
                                    <button type="submit" className="py-2 px-5 inline-block font-medium tracking-wide align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white rounded-full">Redeem</button>
                                </form>
                            </div>
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