import React from "react";
import { Link } from "react-router-dom";

import serverImg from '../assets/images/3.png'

import Navbar from "../components/navbar";
import WorldMap from "../components/worldMap";
import Newsletter from "../components/newslatter";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

import { serviceData,teamData } from "../data/data";
import {AiOutlineCheckCircle, MdMailOutline,FiHexagon, FiFacebook, FiInstagram, FiLinkedin,AiOutlineQuestionCircle} from '../assets/icons/vander'

export default function AboutUs(){
  
    return(
        <>
        <Navbar navClass= "defaultscroll is-sticky" ulClass='navigation-menu justify-end nav-light' navLight={true}/>

        <section className="relative table w-full py-36 bg-[url('../../assets/images/bg/bg9.jpg')] bg-center bg-no-repeat bg-cover">
            <div className="absolute inset-0 bg-sky-900/80"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-10">
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
    
    {/* TÍTULO: Grande, blanco y dominante */}
    <h1 style={{ 
        color: '#ffffff', 
        fontSize: '2.5rem', 
        fontWeight: '700', 
        marginBottom: '16px',
        lineHeight: '1.2' 
    }}>
        Transformando ideas en experiencias digitales. Esto es Dreameld.
    </h1>

    {/* SUBTÍTULO: Más chico, gris claro y estilizado */}
    <p style={{ 
        color: '#b3b3b3', // Un gris claro elegante que contrasta con el fondo morado
        fontSize: '1.15rem', 
        fontWeight: '400', 
        lineHeight: '1.6',
        maxWidth: '700px',
        margin: '0 auto'
    }}>
        En Dreameld no te atienden robots. Somos un equipo apasionado de ingenieros dedicados a mantener tus proyectos en línea funcionando al 100%, 24/7.
    </p>

</div>
                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block text-[15px] font-medium duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/index">Hoxia</Link></li>
                    <li className="inline-block text-[15px] text-white ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block text-[15px] font-medium duration-500 ease-in-out text-white">About Us</li>
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
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-5 md:col-span-6">
                        <img src={serverImg} alt=""/>
                    </div>

                    <div className="lg:col-span-7 md:col-span-6 mt-14 md:mt-0">
                        <div className="lg:ms-5">
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-medium">Welcome to Hoxia Web Hosting</h3>

                            <p className="text-slate-400 max-w-xl">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                            <p className="text-slate-400 max-w-xl mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora facere commodi ex ipsum, optio vitae rerum quisquam ducimus eaque minima voluptas iste consequatur nostrum. Harum rem laudantium error quidem tempora.</p>

                            <ul className="list-none text-slate-400 mt-4">
                                <li className="mb-1 flex items-center"><AiOutlineCheckCircle className="text-sky-500 text-xl me-2"/>Digital Marketing Solutions for Tomorrow</li>
                                <li className="mb-1 flex items-center"><AiOutlineCheckCircle className="text-sky-500 text-xl me-2"/>Our Talented & Experienced Marketing Agency</li>
                                <li className="mb-1 flex items-center"><AiOutlineCheckCircle className="text-sky-500 text-xl me-2"/>Create your own skin to match your brand</li>
                            </ul>
                        
                            <div className="mt-6">
                                <Link to="/contact" className="inline-flex items-center px-8 py-2.5 text-[16px] font-medium tracking-wide bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-md text-center align-middle transition-all duration-500"><MdMailOutline className="me-1"/> Contact us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-medium">Why choose Shared Hosting ?</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {serviceData.map((item,index) =>{
                        let Icon = item.icon
                        return(
                            <div className="group relative p-6 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-sky-500 dark:hover:bg-sky-500 transition-all duration-500 ease-in-out rounded-md bg-white dark:bg-slate-900 overflow-hidden" key={index}>
                                <div className="relative overflow-hidden text-transparent -m-3">
                                    <FiHexagon className="h-24 w-24 fill-sky-500/[0.07] group-hover:fill-white/20"/>
                                    <div className="absolute top-2/4 -translate-y-2/4 start-8 text-sky-500 rounded-md group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                        <Icon/>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <h5><Link to="#" className="text-lg font-medium group-hover:text-white transition-all duration-500 ease-in-out">{item.title}</Link></h5>
                                    <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3">{item.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <WorldMap/>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-medium">Our Team Members</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                </div>

                <div className="grid md:grid-cols-4 grid-cols-2 mt-8 gap-[30px]">
                    {teamData.map((item,index) =>{
                        return(
                            <div className="group text-center" key={index}>
                                <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                    <img src={item.image} className="" alt=""/>

                                    <ul className="list-none absolute top-1/2 -translate-y-1/2 -end-20 group-hover:end-5 transition-all duration-500 ease-in-out">
                                        <li className=""><Link to="" className="h-8 w-8 inline-flex items-center text-center justify-center text-base bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-full align-middle transition-all duration-500"><FiFacebook className="h-4 w-4"/></Link></li>
                                        <li className="mt-1"><Link to="" className="h-8 w-8 inline-flex items-center text-center justify-center text-base bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-full align-middle transition-all duration-500"><FiInstagram className="h-4 w-4"/></Link></li>
                                        <li className="mt-1"><Link to="" className="h-8 w-8 inline-flex items-center text-center justify-center text-base bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-full align-middle transition-all duration-500"><FiLinkedin className="h-4 w-4"/></Link></li>
                                    </ul>
                                </div>

                                <div className="content mt-3">
                                    <Link to="" className="text-lg hover:text-sky-500 transition-all duration-500 ease-in-out h5 font-medium">{item.name}</Link>
                                    <p className="text-slate-400">{item.title}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-medium">Questions & Answers</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <div className="flex">
                        <AiOutlineQuestionCircle className="h-8 text-sky-500 me-3 w-6"/>
                        <div className="flex-1">
                            <h5 className="mb-2 text-lg font-medium">How our <span className="text-sky-500">Hoxia</span> work ?</h5>
                            <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.</p>
                        </div>
                    </div>
                    
                    <div className="flex">
                        <AiOutlineQuestionCircle className="h-8 text-sky-500 me-3 w-6 "/>
                        <div className="flex-1">
                            <h5 className="mb-2 text-lg font-medium"> What is the main process open account ?</h5>
                            <p className="text-slate-400">If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact</p>
                        </div>
                    </div>
                    
                    <div className="flex">
                        <AiOutlineQuestionCircle className="h-8 text-sky-500 me-3 w-6"/>
                        <div className="flex-1">
                            <h5 className="mb-2 text-lg font-medium"> How to make unlimited data entry ?</h5>
                            <p className="text-slate-400">Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.</p>
                        </div>
                    </div>
                    
                    <div className="flex">
                        <AiOutlineQuestionCircle className="h-8 text-sky-500 me-3 w-6"/>
                        <div className="flex-1">
                            <h5 className="mb-2 text-lg font-medium"> Is <span className="text-sky-500">Hoxia</span> safer to use with my account ?</h5>
                            <p className="text-slate-400">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin.</p>
                        </div>
                    </div>
                </div>
            </div>
        <Newsletter/>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}