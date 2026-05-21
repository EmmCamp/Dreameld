import React from "react";
import { Link,useParams } from "react-router-dom";

import blogImage from '../assets/images/blog/9.jpg'
import clientImage from '../assets/images/client/01.jpg'

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

import { blogData } from "../data/data";

import {FiFacebook,FiInstagram,FiTwitter,FiLinkedin,FiGithub,FiYoutube,FiGitlab,FiArrowRight} from '../assets/icons/vander'


export default function BlogDetails(){
    let params = useParams();
    let id = params.id
    let data = blogData.find((blog)=>blog.id === parseInt(id))
    return(
        <>
        <Navbar navClass= "defaultscroll is-sticky" ulClass='navigation-menu justify-end'/>
        <section className="relative table w-full md:py-40 py-36 bg-[url('../../assets/images/bg/bg5.png')] bg-center bg-cover">
            <div className="absolute inset-0 bg-sky-500/5"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-12">
                    <h3 className="text-3xl leading-snug font-medium">{data?.title ? data?.title : "How to work with Web Hosting ?"}</h3>

                    <ul className="list-none mt-6">
                        <li className="inline-block text-slate-400 mx-5"> <span className="text-slate-900 dark:text-white block">Author :</span> <span className="block">Google</span></li>
                        <li className="inline-block text-slate-400 mx-5"> <span className="text-slate-900 dark:text-white block">Date :</span> <span className="block">{data?.date ? data?.date : "21st Feb, 2023"}</span></li>
                        <li className="inline-block text-slate-400 mx-5"> <span className="text-slate-900 dark:text-white block">Time :</span> <span className="block">8 Min Read</span></li>
                    </ul>
                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block text-[15px] font-medium duration-500 ease-in-out hover:text-sky-500"><Link to="/index">Hoxia</Link></li>
                    <li className="inline-block text-[15px] ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block text-[15px] font-medium duration-500 ease-in-out text-sky-500">Blogs</li>
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
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                    <div className="lg:col-span-8 md:col-span-6">
                        <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">

                            <img src={data?.image? data.image :blogImage} alt=""/>

                            <div className="p-6">
                                <p className="text-slate-400">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script.</p>
                                <p className="text-slate-400 italic border-x-4 border-sky-500 rounded-ss-xl rounded-ee-xl mt-3 p-3">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "</p>
                                <p className="text-slate-400 mt-3">The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>
                            </div>
                        </div>

                        <div className="p-6 rounded-md shadow dark:shadow-gray-800 mt-8">
                            <h5 className="text-lg font-semibold">Leave A Comment:</h5>

                            <form className="mt-8">
                                <div className="grid lg:grid-cols-12 lg:gap-6">
                                    <div className="lg:col-span-6 mb-5">
                                        <div className="text-start">
                                            <label htmlFor="name" className="font-semibold">Your Name:</label>
                                            <input name="name" id="name" type="text" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-lg outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0 mt-2" placeholder="Name :"/>
                                        </div>
                                    </div>
    
                                    <div className="lg:col-span-6 mb-5">
                                        <div className="text-start">
                                            <label htmlFor="email" className="font-semibold">Your Email:</label>
                                            <input name="email" id="email" type="email" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-lg outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0 mt-2" placeholder="Email :"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1">
                                    <div className="mb-5">
                                        <div className="text-start">
                                            <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                                            <textarea name="comments" id="comments" className="form-input w-full text-[15px] py-2 px-3 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-lg outline-none border border-gray-200 focus:border-sky-500 dark:border-gray-800 dark:focus:border-sky-500 focus:ring-0 mt-2 h-28" placeholder="Message :"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" id="submit" name="send" className="inline-block px-8 py-2.5 text-[16px] font-medium tracking-wide bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500 w-full">Send Message</button>
                            </form>
                        </div>
                    </div>

                    <div className="lg:col-span-4 md:col-span-6">
                        <div className="sticky top-20">
                            <h5 className="text-lg font-medium bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center">Author</h5>
                            <div className="text-center mt-8">
                                <img src={clientImage} className="h-20 w-20 mx-auto rounded-full shadow mb-4" alt=""/>

                                <Link to="" className="text-lg font-medium hover:text-sky-500 transition-all duration-500 ease-in-out h5">Cristina Romsey</Link>
                                <p className="text-slate-400">Content Writer</p>
                            </div>

                            <h5 className="text-lg font-medium bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Social sites</h5>
                            <ul className="list-none text-center mt-8 space-x-1">
                                <li className="inline"><Link to="" className="h-8 w-8 inline-flex items-center text-center justify-center text-base border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-sky-500 hover:text-white hover:bg-sky-500 focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none align-middle transition-all duration-500"><FiFacebook className="h-4 w-4"/></Link></li>
                                <li className="inline"><Link to="" className="h-8 w-8 inline-flex items-center text-center justify-center text-base border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-sky-500 hover:text-white hover:bg-sky-500 focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none align-middle transition-all duration-500"><FiInstagram className="h-4 w-4"/></Link></li>
                                <li className="inline"><Link to="" className="h-8 w-8 inline-flex items-center text-center justify-center text-base border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-sky-500 hover:text-white hover:bg-sky-500 focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none align-middle transition-all duration-500"><FiTwitter className="h-4 w-4"/></Link></li>
                                <li className="inline"><Link to="" className="h-8 w-8 inline-flex items-center text-center justify-center text-base border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-sky-500 hover:text-white hover:bg-sky-500 focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none align-middle transition-all duration-500"><FiLinkedin className="h-4 w-4"/></Link></li>
                                <li className="inline"><Link to="" className="h-8 w-8 inline-flex items-center text-center justify-center text-base border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-sky-500 hover:text-white hover:bg-sky-500 focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none align-middle transition-all duration-500"><FiGithub className="h-4 w-4"/></Link></li>
                                <li className="inline"><Link to="" className="h-8 w-8 inline-flex items-center text-center justify-center text-base border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-sky-500 hover:text-white hover:bg-sky-500 focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none align-middle transition-all duration-500"><FiYoutube className="h-4 w-4"/></Link></li>
                                <li className="inline"><Link to="" className="h-8 w-8 inline-flex items-center text-center justify-center text-base border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-sky-500 hover:text-white hover:bg-sky-500 focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none align-middle transition-all duration-500"><FiGitlab className="h-4 w-4"/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-medium">Related Blogs</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px] mt-8">
                    {blogData.slice(0,3).map((item,index)=>{
                        return(
                            <div className="relative overflow-hidden group rounded-md shadow hover:shadow-md dark:shadow-gray-800 transition duration-500" key={index}>
                                <img src={item.image} alt=""/>
        
                                <div className="p-6">
                                    <span className="bg-sky-500/5 text-sky-500 text-xs font-semibold px-2.5 py-0.5 rounded-full h-5 ms-1">VPS Hosting</span>
        
                                    <h5 className="mt-3"><Link to={`/blog-detail/${item.id}`} className="title text-lg font-medium hover:text-sky-500 duration-500">{item.title}</Link></h5>
                                
                                    <p className="text-slate-400 mt-3">{item.desc}</p>
                                    
                                    <div className="mt-4">
                                        <Link to={`/blog-detail/${item.id}`} className="relative inline-flex items-center tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-sky-500 hover:text-sky-500 after:bg-sky-500 duration-500 ease-in-out">Read More <FiArrowRight className="ms-1"/></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}