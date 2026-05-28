import React from "react";
import { Link } from "react-router-dom";

import serverImg from '../assets/images/5.png'

import Navbar from "../components/navbar";
import WorldMap from "../components/worldMap";
import Newsletter from "../components/newslatter";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

import { serviceData, pilaresData, teamData } from "../data/data";
import { AiOutlineCheckCircle, MdMailOutline, FiHexagon, FiFacebook, FiInstagram, FiLinkedin, AiOutlineQuestionCircle } from '../assets/icons/vander'

export default function AboutUs() {

    return (
        <>
            <Navbar navClass="defaultscroll is-sticky" ulClass='navigation-menu justify-end nav-light' navLight={true} />

            <section className="relative table w-full py-36 bg-[url('../../assets/images/bg/bg7.png')] bg-center bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-slate-950/65 backdrop-blur-md"></div>
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
                                color: '#ffffff', // Un gris claro elegante que contrasta con el fondo morado
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
                        <li className="inline-block text-[15px] font-medium duration-500 ease-in-out text-white hover:text-sky-500">
                            <Link to="/index" className="text-white hover:text-sky-500">DREAMELD</Link></li>
                        <li className="inline-block text-[15px] ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                        <li className="inline-block text-[15px] font-medium duration-500 ease-in-out" style={{ color: '#ffffff' }}>Nosotros</li>
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
                        {/* Imagen rectangular /> 
                        <div className="lg:col-span-5 md:col-span-6">
                            <img src={serverImg} alt="" />
                        </div> Imagen rectangular*/}
                        {/* Imagen Circular /> */}
                        {/* COLUMNA DE LA IMAGEN CON EFECTO DE LEVITACIÓN Y MÁSCARA */}
                        <div className="lg:col-span-5 md:col-span-6 relative flex justify-center items-center">

                            {/* Resplandor morado de fondo que rompe las líneas rectas */}
                            <div className="absolute -inset-4 bg-[#7c3aed]/20 rounded-full blur-2xl opacity-60 pointer-events-none animate-pulse"></div>

                            {/* Contenedor animado que FLOTA solo en la pantalla */}
                            <div
                                className="relative rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.03]"
                                style={{
                                    animation: 'floatAnimation 4s ease-in-out infinite',
                                    borderRadius: '40px' // Forzamos esquinas súper ovaladas directas
                                }}
                            >
                                <img
                                    src={serverImg}
                                    alt="Dreameld"
                                    className="w-full h-auto object-cover block"
                                    style={{ borderRadius: '40px' }} // Doble candado para que la imagen se óvale sí o sí
                                />
                            </div>

                            {/* Estilo CSS inyectado rápido para que la animación de flotar funcione sin tocar configuraciones */}
                            <style>{`
        @keyframes floatAnimation {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
            100% { transform: translateY(0px); }
        }
    `}</style>
                        </div>

                        <div className="lg:col-span-7 md:col-span-6 mt-14 md:mt-0">
                            <div className="lg:ms-5">
                                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-medium">¿Quiénes Somos?</h3>

                                <p className="text-slate-400 max-w-xl">Dreameld nació para romper las reglas del hosting y desarrollo tradicional. Nos cansamos de ver proyectos tratados como simples números de ticket en sistemas automatizados.</p>
                                <p className="text-slate-400 max-w-xl mt-3">Sabemos que detrás de tu plataforma hay un negocio que no puede fallar; por eso fusionamos infraestructura de alto rendimiento con lo que casi nadie ofrece hoy: atención directa por ingenieros expertos, en minutos y sin lidiar con bots.</p>

                                <ul className="list-none text-slate-400 mt-4 space-y-1">
                                    <li className="mb-1 flex items-center">
                                        <AiOutlineCheckCircle className="text-xl me-2" style={{ color: '#16082c' }} />
                                        Soporte Humano 24/7 (Sin respuestas automáticas)
                                    </li>
                                    <li className="mb-1 flex items-center">
                                        <AiOutlineCheckCircle className="text-xl me-2" style={{ color: '#16082c' }} />
                                        Soporte técnico que resuelve, no que da largas
                                    </li>
                                    <li className="mb-1 flex items-center">
                                        <AiOutlineCheckCircle className="text-xl me-2" style={{ color: '#16082c' }} />
                                        Tu sitio en línea y estable, sin sorpresas ni caídas
                                    </li>
                                </ul>

                                {/* BOTÓN MORADO INMUNE A ERRORES */}
                                <div className="mt-6">
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center px-8 py-2.5 text-[16px] font-medium tracking-wide text-white rounded-md text-center align-middle transition-all duration-500 hover:opacity-90 shadow-lg"
                                        style={{
                                            backgroundColor: '#16082c',
                                            borderColor: '#16082c',
                                            borderWidth: '1px',
                                            borderStyle: 'solid'
                                        }}
                                    >
                                        <MdMailOutline className="me-2 text-white" />
                                        Habla con un Ingeniero
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
    {/* 1. TÍTULO Y SUBTÍTULO MODIFICADOS */}
    <div className="grid grid-cols-1 pb-8 text-center">
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-medium text-slate-900 dark:text-white">
            Nuestros Pilares Tecnológicos
        </h3>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            La infraestructura de alto rendimiento es solo el inicio. Nos mueven los valores de la ingeniería transparente y el soporte humano real.
        </p>
    </div>

    {/* GRIDS DE LAS TARJETAS */}
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
        {pilaresData.map((item, index) => {
            let Icon = item.icon
            return (
                <div 
                    className="group relative p-6 shadow-md dark:shadow-gray-800 hover:shadow-xl hover:bg-[#7c3aed] transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden border border-gray-100 dark:border-gray-800" 
                    key={index}
                >
                    {/* Contenedor del Icono Hexagonal */}
                    <div className="relative overflow-hidden text-transparent -m-3 mb-2">
                        <FiHexagon className="h-24 w-24 fill-[#7c3aed]/[0.08] group-hover:fill-white/20 transition-all duration-500" />
                        <div className="absolute top-2/4 -translate-y-2/4 start-8 text-[#7c3aed] group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                            <Icon />
                        </div>
                    </div>

                    {/* Textos de la tarjeta (Títulos y descripciones) */}
                    <div className="mt-6 relative z-10">
                        <h5 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-white transition-all duration-500 ease-in-out">
                            {item.title}
                        </h5>
                        <p className="text-slate-400 group-hover:text-white/80 transition-all duration-500 ease-in-out mt-3 text-sm leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                </div>
            )
        })}
    </div>
</div>
            <WorldMap />

            {/* SECCIÓN TEAM MEMBERS */}
            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-medium">Our Team Members</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                </div>

                <div className="grid md:grid-cols-4 grid-cols-2 mt-8 gap-[30px]">
                    {teamData.map((item, index) => {
                        return (
                            <div className="group text-center" key={index}>
                                <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                    <img src={item.image} className="" alt="" />
                                    <ul className="list-none absolute top-1/2 -translate-y-1/2 -end-20 group-hover:end-5 transition-all duration-500 ease-in-out">
                                        <li className=""><Link to="" className="h-8 w-8 inline-flex items-center text-center justify-center text-base bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-full align-middle transition-all duration-500"><FiFacebook className="h-4 w-4" /></Link></li>
                                        <li className="mt-1"><Link to="" className="h-8 w-8 inline-flex items-center text-center justify-center text-base bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-full align-middle transition-all duration-500"><FiInstagram className="h-4 w-4" /></Link></li>
                                        <li className="mt-1"><Link to="" className="h-8 w-8 inline-flex items-center text-center justify-center text-base bg-sky-500 hover:bg-sky-600 border border-sky-500 hover:border-sky-600 text-white focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none rounded-full align-middle transition-all duration-500"><FiLinkedin className="h-4 w-4" /></Link></li>
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

            {/* SECCIÓN PREGUNTAS FRECUENTES */}
            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-medium">Questions & Answers</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <div className="flex">
                        <AiOutlineQuestionCircle className="h-8 text-sky-500 me-3 w-6" />
                        <div className="flex-1">
                            <h5 className="mb-2 text-lg font-medium">How our <span className="text-sky-500">Hoxia</span> work ?</h5>
                            <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.</p>
                        </div>
                    </div>

                    <div className="flex">
                        <AiOutlineQuestionCircle className="h-8 text-sky-500 me-3 w-6 " />
                        <div className="flex-1">
                            <h5 className="mb-2 text-lg font-medium"> What is the main process open account ?</h5>
                            <p className="text-slate-400">If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact</p>
                        </div>
                    </div>

                    <div className="flex">
                        <AiOutlineQuestionCircle className="h-8 text-sky-500 me-3 w-6" />
                        <div className="flex-1">
                            <h5 className="mb-2 text-lg font-medium"> How to make unlimited data entry ?</h5>
                            <p className="text-slate-400">Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.</p>
                        </div>
                    </div>

                    <div className="flex">
                        <AiOutlineQuestionCircle className="h-8 text-sky-500 me-3 w-6" />
                        <div className="flex-1">
                            <h5 className="mb-2 text-lg font-medium"> Is <span className="text-sky-500">Hoxia</span> safer to use with my account ?</h5>
                            <p className="text-slate-400">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <Newsletter />
        </section>
        
            <Footer />
            <Switcher />
        </>
    )
}