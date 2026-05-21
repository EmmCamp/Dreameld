import React, { useState } from "react";
import { Link } from "react-router-dom";

import clientImage from "../assets/images/client/01.jpg"

import Navbar from "../components/navbar";
import MobileApp from "../components/mobileApp";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

import { orderData } from "../data/data";

import {AiOutlineDashboard, AiOutlineUnorderedList,BsArrowDownCircle, FiMapPin, RiLogoutCircleRLine,AiOutlineUser, FiArrowRight, BiEdit,} from '../assets/icons/vander'
import {IoCallOutline} from 'react-icons/io5'

export default function MyAccount(){
    let [activeIndex, setActiveIndex] = useState(0)
    return(
        <>
        <Navbar navClass= "defaultscroll is-sticky" ulClass='navigation-menu justify-end' />
        <section className="relative table w-full md:py-40 py-36 bg-[url('../../assets/images/bg/bg5.png')] bg-center bg-cover">
            <div className="absolute inset-0 bg-sky-500/5"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-12">
                    <h3 className="md:text-4xl text-3xl md:leading-snug leading-snug font-medium">My Account</h3>
                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block text-[15px] font-medium duration-500 ease-in-out hover:text-sky-500"><Link to="/index">Hoxia</Link></li>
                    <li className="inline-block text-[15px] ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block text-[15px] font-medium duration-500 ease-in-out text-sky-500">Account</li>
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
                    <div className="lg:col-span-3 md:col-span-5">
                        <div className="flex items-center">
                            <img src={clientImage} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
                            <div className="ms-2">
                                <p className="font-medium text-slate-400">Hello,</p>
                                <h5 className="text-lg font-medium">Cally Joseph</h5>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-9 md:col-span-7">
                        <p className="text-slate-400 max-w-xl">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                    </div>

                    <div className="lg:col-span-3 md:col-span-5">
                        <div className="sticky top-20">
                            <ul className="flex-column p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md" >
                                <li role="presentation">
                                    <button onClick={()=>{setActiveIndex(0)}} className={`${activeIndex === 0 ? 'text-white bg-sky-500 hover:text-white' : ''} px-4 py-2 mt-3 inline-flex items-center text-start text-base font-medium rounded-md w-full hover:text-sky-500 transition-all duration-500 ease-in-out`}><AiOutlineDashboard className="text-[20px] me-2 align-middle"/> Dashboard</button>
                                </li>
                                <li role="presentation">
                                    <button onClick={()=>{setActiveIndex(1)}} className={`${activeIndex === 1 ? 'text-white bg-sky-500 hover:text-white' : ''} px-4 py-2 mt-3  inline-flex items-center text-start text-base font-medium rounded-md w-full hover:text-sky-500 transition-all duration-500 ease-in-out`}><AiOutlineUnorderedList className="text-[20px] me-2 align-middle"/> Orders</button>
                                </li>
                                <li role="presentation">
                                    <button onClick={()=>{setActiveIndex(2)}} className={`${activeIndex === 2 ? 'text-white bg-sky-500 hover:text-white' : ''} px-4 py-2 mt-3  inline-flex items-center text-start text-base font-medium rounded-md w-full hover:text-sky-500 transition-all duration-500 ease-in-out`} ><BsArrowDownCircle className="text-[20px] me-2 align-middle"/> Downloads</button>
                                </li>
                                <li role="presentation">
                                    <button onClick={()=>{setActiveIndex(3)}} className={`${activeIndex === 3 ? 'text-white bg-sky-500 hover:text-white' : ''} px-4 py-2 mt-3  inline-flex items-center text-start text-base font-medium rounded-md w-full hover:text-sky-500 transition-all duration-500 ease-in-out`}><FiMapPin className="text-[20px] me-2 align-middle"/> Addresses</button>
                                </li>
                                <li role="presentation">
                                    <button onClick={()=>{setActiveIndex(4)}} className={`${activeIndex === 4 ? 'text-white bg-sky-500 hover:text-white' : ''} px-4 py-2 mt-3  inline-flex items-center text-start text-base font-medium rounded-md w-full hover:text-sky-500 transition-all duration-500 ease-in-out`} ><AiOutlineUser className="text-[20px] me-2 align-middle"/> Account Details</button>
                                </li>
                                <li role="presentation">
                                    <Link to="/login" className="px-4 py-2 inline-flex items-center text-start text-base font-medium rounded-md w-full mt-3 transition-all duration-500 ease-in-out hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-sky-500 dark:hover:text-white"><RiLogoutCircleRLine className="text-[20px] me-2 align-middle"/> Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-9 md:col-span-7">
                        <div id="myTabContent" className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                            {activeIndex === 0 ? 
                                <div>
                                    <p className="text-slate-400 font-medium">Hello <span className="text-slate-900 dark:text-white">cally_joseph</span> (not <span className="text-slate-900 dark:text-white">cally_joseph</span>? <Link to="#" className="text-red-600">Log out</Link>)</p>

                                    <p className="text-slate-400 font-medium mt-4">From your account dashboard you can view your <Link to="#" className="text-red-600">recent orders</Link>, manage your <Link to="#" className="text-red-600">shipping and billing addresses</Link>, and <Link to="#" className="text-red-600">edit your password and account details</Link>.</p>
                                </div> : ''
                            }
                            {activeIndex === 1 ? 
                                <div>
                                    <div className="relative overflow-x-auto shadow dark:shadow-gray-800 rounded-md">
                                        <table className="w-full text-start text-slate-500 dark:text-slate-400">
                                            <thead className="text-sm uppercase bg-slate-50 dark:bg-slate-800">
                                                <tr className="text-start">
                                                    <th scope="col" className="px-2 py-3 text-start">Order no.</th>
                                                    <th scope="col" className="px-2 py-3 text-start">Date</th>
                                                    <th scope="col" className="px-2 py-3 text-start">Status</th>
                                                    <th scope="col" className="px-2 py-3 text-start">Total</th>
                                                    <th scope="col" className="px-2 py-3 text-start">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {orderData.map((item,index) =>{
                                                    return(
                                                        <tr className="bg-white dark:bg-slate-900 text-start" key={index}>
                                                            <th className="px-2 py-3 text-start" scope="row">{item.orderNo}</th>
                                                            <td className="px-2 py-3 text-start">{item.date}</td>
                                                            {item.status === 'Delivered' ? <td className="px-2 py-3 text-start text-green-600">{item.status}</td>: ''}
                                                            {item.status === 'Processing' ? <td className="px-2 py-3 text-start text-slate-400">{item.status}</td>: ''}
                                                            {item.status === 'Canceled' ? <td className="px-2 py-3 text-start text-red-600">{item.status}</td>: ''}
                                                            <td className="px-2 py-3 text-start">{item.price}{""}<span className="text-slate-400">{item.item}</span></td>
                                                            <td className="px-2 py-3 text-start"><Link to="#" className="text-sky-500 flex items-center">View <FiArrowRight className="ms-1"/></Link></td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div> :''
                            }
                            {activeIndex === 2 ? 
                                <div>
                                    <div className="relative overflow-x-auto shadow dark:shadow-gray-800 rounded-md">
                                        <table className="w-full text-start text-slate-500 dark:text-slate-400">
                                            <thead className="text-sm uppercase bg-slate-50 dark:bg-slate-800">
                                                <tr className="text-start">
                                                    <th scope="col" className="px-2 py-3 text-start min-w-[160px]">Product Name</th>
                                                    <th scope="col" className="px-2 py-3 text-start min-w-[360px]">Description</th>
                                                    <th scope="col" className="px-2 py-3 text-start min-w-[160px]">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="bg-white dark:bg-slate-900 text-start">
                                                    <th className="px-2 py-3 text-start" scope="row">Quick heal</th>
                                                    <td className="px-2 py-3 text-start">It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody.</td>
                                                    <td className="px-2 py-3 text-start text-green-600">Downloaded</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div> : ''
                            }
                            {activeIndex === 3 ? 
                                <div>
                                    <h6 className="text-slate-400 mb-0">The following addresses will be used on the checkout page by default.</h6>
                                    <div className="md:flex mt-6">
                                        <div className="md:w-1/2 md:px-3">
                                            <div className="flex items-center mb-4 justify-between">
                                                <h5 className="text-xl font-medium">Billing Address:</h5>
                                                <Link to="#" className="text-sky-500 text-lg"><BiEdit/></Link>
                                            </div>
                                            <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                                                <p className="text-lg font-medium mb-2">Cally Joseph</p>

                                                <ul className="list-none">
                                                    <li className="flex">
                                                        <FiMapPin className=" text-lg me-2 mt-1"/>
                                                        <p className="text-slate-400">C/54 Northwest Freeway, Suite 558, <br/> Houston, USA 485</p>
                                                    </li>

                                                    <li className="flex mt-1">
                                                        <IoCallOutline className=" text-lg me-2 mt-1"/>
                                                        <p className="text-slate-400">+123 897 5468</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <div className="md:w-1/2 md:px-3 mt-[30] md:mt-0">
                                            <div className="flex items-center mb-4 justify-between">
                                                <h5 className="text-xl font-medium">Shipping Address:</h5>
                                                <Link to="#" className="text-sky-500 text-lg"><BiEdit/></Link>
                                            </div>
                                            <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                                                <p className="text-lg font-medium mb-2">Cally Joseph</p>

                                                <ul className="list-none">
                                                    <li className="flex">
                                                        <FiMapPin className=" text-lg me-2 mt-1"/>
                                                        <p className="text-slate-400">C/54 Northwest Freeway, Suite 558, <br/> Houston, USA 485</p>
                                                    </li>

                                                    <li className="flex mt-1">
                                                        <IoCallOutline className=" text-lg me-2 mt-1"/>
                                                        <p className="text-slate-400">+123 897 5468</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div> : ''
                            }
                            {activeIndex === 4 ? 
                                <div>
                                    <h5 className="text-lg font-medium mb-4">Personal Detail :</h5>
                                    <form>
                                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                                            <div>
                                                <label className="form-label font-medium">First Name : <span className="text-red-600">*</span></label>
                                                <input type="text" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0 mt-2" placeholder="First Name:" id="firstname" name="name" required=""/>
                                            </div>
                                            <div>
                                                <label className="form-label font-medium">Last Name : <span className="text-red-600">*</span></label>
                                                <input type="text" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0 mt-2" placeholder="Last Name:" id="lastname" name="name" required=""/>
                                            </div>
                                            <div>
                                                <label className="form-label font-medium">Your Email : <span className="text-red-600">*</span></label>
                                                <input type="email" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0 mt-2" placeholder="Email" name="email" required=""/>
                                            </div>
                                            <div>
                                                <label className="form-label font-medium">Occupation : </label>
                                                <input name="name" id="occupation" type="text" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0 mt-2" placeholder="Occupation :"/>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1">
                                            <div className="mt-5">
                                                <label className="form-label font-medium">Description : </label>
                                                <textarea name="comments" id="comments" className="form-input w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0 mt-2" placeholder="Message :"></textarea>
                                            </div>
                                        </div>

                                        <input type="submit" id="submit" name="send" className="py-2 px-5 inline-block font-medium tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-sky-500 hover:bg-sky-600 border-sky-500 hover:border-sky-600 text-white rounded-md mt-5" value="Save Changes"/>
                                    </form>

                                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-6">
                                        <div>
                                            <h5 className="text-lg font-medium mb-4">Contact Info :</h5>
        
                                            <form>
                                                <div className="grid grid-cols-1 gap-5">
                                                    <div>
                                                        <label className="form-label font-medium">Phone No. :</label>
                                                        <input name="number" id="number" type="number" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0 mt-2" placeholder="Phone :"/>
                                                    </div>
        
                                                    <div>
                                                        <label className="form-label font-medium">Website :</label>
                                                        <input name="url" id="url" type="url" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0 mt-2" placeholder="Url :"/>
                                                    </div>
                                                </div>
        
                                                <button className="py-2 px-5 inline-block font-medium tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-sky-500 hover:bg-sky-600 border-sky-500 hover:border-sky-600 text-white rounded-md mt-5">Add</button>
                                            </form>
                                        </div>
                                        
                                        <div> 
                                            <h5 className="text-lg font-medium mb-4">Change password :</h5>
                                            <form>
                                                <div className="grid grid-cols-1 gap-5">
                                                    <div>
                                                        <label className="form-label font-medium">Old password :</label>
                                                        <input type="password" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0 mt-2" placeholder="Old password" required=""/>
                                                    </div>
            
                                                    <div>
                                                        <label className="form-label font-medium">New password :</label>
                                                        <input type="password" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0 mt-2" placeholder="New password" required=""/>
                                                    </div>
            
                                                    <div>
                                                        <label className="form-label font-medium">Re-type New password :</label>
                                                        <input type="password" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0 mt-2" placeholder="Re-type New password" required=""/>
                                                    </div>
                                                </div>
            
                                                <button className="py-2 px-5 inline-block font-medium tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-sky-500 hover:bg-sky-600 border-sky-500 hover:border-sky-600 text-white rounded-md mt-5">Save password</button>
                                            </form>
                                        </div>
                                    </div>
                                </div> :''
                            }
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