/*
import React from "react";
import { Link } from "react-router-dom";

import logo from '../assets/images/logo-icon-64.png'

import {AiOutlineShoppingCart, AiOutlineDribbble,AiOutlineBehance,AiFillLinkedin, BiLogoFacebook, AiOutlineInstagram, AiOutlineMail,AiOutlineTwitter, AiOutlineFile} from '../assets/icons/vander'

export default function Footer(){
    return(
        <footer className="footer bg-slate-900 dark:bg-slate-950 relative text-gray-200">    
            <div className="container relative">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="py-[60px] px-0">                    
                            <div className="grid grid-cols-1">
                                <div className="text-center">
                                    <img src={logo} className="block mx-auto" alt=""/>
                                    <p className="max-w-xl mx-auto mt-8">Splash your dream color Bring your home to lively Colors. We make it a priority to offer flexible services to accomodate your needs</p>
                                </div>

                                <ul className="list-none text-center mt-8 space-x-1">
                                    <li className="inline"><Link to="https://1.envato.market/hoxia-react" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border-gray-800 rounded-md border hover:border-sky-500 dark:hover:border-sky-500 hover:bg-sky-500 dark:hover:bg-sky-500 focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none"><AiOutlineShoppingCart className="align-middle text-base"/></Link></li>
                                    <li className="inline"><Link to="https://dribbble.com/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border-gray-800 rounded-md border hover:border-sky-500 dark:hover:border-sky-500 hover:bg-sky-500 dark:hover:bg-sky-500 focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none"><AiOutlineDribbble className="align-middle"/></Link></li>
                                    <li className="inline"><Link to="https://www.behance.net/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border-gray-800 rounded-md border hover:border-sky-500 dark:hover:border-sky-500 hover:bg-sky-500 dark:hover:bg-sky-500 focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none"><AiOutlineBehance className="align-middle"/></Link></li>
                                    <li className="inline"><Link to="http://linkedin.com/company/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border-gray-800 rounded-md border hover:border-sky-500 dark:hover:border-sky-500 hover:bg-sky-500 dark:hover:bg-sky-500 focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none"><AiFillLinkedin className="align-middle"/></Link></li>
                                    <li className="inline"><Link to="https://www.facebook.com/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border-gray-800 rounded-md border hover:border-sky-500 dark:hover:border-sky-500 hover:bg-sky-500 dark:hover:bg-sky-500 focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none"><BiLogoFacebook className="align-middle"/></Link></li>
                                    <li className="inline"><Link to="https://www.instagram.com/shreethemes/" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border-gray-800 rounded-md border hover:border-sky-500 dark:hover:border-sky-500 hover:bg-sky-500 dark:hover:bg-sky-500 focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none"><AiOutlineInstagram className="align-middle"/></Link></li>
                                    <li className="inline"><Link to="https://twitter.com/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border-gray-800 rounded-md border hover:border-sky-500 dark:hover:border-sky-500 hover:bg-sky-500 dark:hover:bg-sky-500 focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none"><AiOutlineTwitter/></Link></li>
                                    <li className="inline"><Link to="mailto:support@shreethemes.in" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border-gray-800 rounded-md border hover:border-sky-500 dark:hover:border-sky-500 hover:bg-sky-500 dark:hover:bg-sky-500 focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none"><AiOutlineMail className="align-middle"/></Link></li>
                                    <li className="inline"><Link to="https://forms.gle/QkTueCikDGqJnbky9" target="_blank" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border-gray-800 rounded-md border hover:border-sky-500 dark:hover:border-sky-500 hover:bg-sky-500 dark:hover:bg-sky-500 focus:ring-[3px] focus:ring-sky-500 focus:ring-opacity-25 focus:outline-none"><AiOutlineFile className="align-middle"/></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-[30px] px-0 border-t border-slate-800">
                <div className="container relative text-center">
                    <div className="grid md:grid-cols-1">
                        <p className="mb-0">© {new Date().getFullYear()} Dreameld. Design & Develop with <i className="mdi mdi-heart text-red-600"></i> by <Link to="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
    
    
}
    Se documenta código para probar Footer*/

/* Footer de prueba basado en WP */
import React from 'react';
import { Link } from 'react-router-dom';
import { LuServer } from 'react-icons/lu'; // Icono para hosting
import { FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi'; // Iconos de redes

export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#16082c', color: '#b3b3b3', position: 'relative', width: '100%' }}>
            
            {/* CONTENEDOR PRINCIPAL CENTRAL (Evita que el texto se pegue a la izquierda) */}
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
                
                {/* GRID DE 4 COLUMNAS */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 gap-x-8 text-start">
                    
                    {/* COLUMNA 1: LOGO Y TEXTO */}
                    <div className="md:pr-6">
                       <div style={{ marginBottom: '16px' }}>
    <img src="/Dreameld_3B.png" style={{ height: '55px', width: 'auto', display: 'block' }} alt="Dreameld" />
</div>
                        
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Llevando tu infraestructura digital al siguiente nivel de forma segura y profesional.
                        </p>
                        
                        {/* REDES SOCIALES */}
                        <ul className="list-none space-x-3 mt-6 flex items-center">
                            <li>
                                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-[#9333ea] text-gray-400 hover:text-white transition-all duration-300">
                                    <FiFacebook className="w-4 h-4" />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-[#9333ea] text-gray-400 hover:text-white transition-all duration-300">
                                    <FiTwitter className="w-4 h-4" />
                                </a>
                            </li>
                            <li>
                                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-[#9333ea] text-gray-400 hover:text-white transition-all duration-300">
                                    <FiYoutube className="w-4 h-4" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* COLUMNA 2: SERVICIOS */}
                    <div>
                        <h5 className="text-white font-semibold tracking-wide text-base mb-6">Servicios</h5>
                        <ul className="list-none space-y-3">
                            <li><Link to="/licencias" className="text-gray-400 hover:text-white duration-300 block">💻 Licencias Microsoft</Link></li>
                            <li><Link to="/desarrollo-web" className="text-gray-400 hover:text-white duration-300 block">🌐 Desarrollo Web</Link></li>
                            <li><Link to="/hosting" className="text-gray-400 hover:text-white duration-300 flex items-center gap-2">
                                <LuServer className="w-4 h-4 text-[#9333ea]" /> Hosting
                            </Link></li>
                        </ul>
                    </div>

                    {/* COLUMNA 3: AYUDA */}
                    <div>
                        <h5 className="text-white font-semibold tracking-wide text-base mb-6">Ayuda</h5>
                        <ul className="list-none space-y-3">
                            <li><Link to="/aboutus" className="text-gray-400 hover:text-white duration-300 block">➔ Sobre Nosotros</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-white duration-300 block">➔ Contacto</Link></li>
                            <li><Link to="/faqs" className="text-gray-400 hover:text-white duration-300 block">➔ Preguntas Frecuentes</Link></li>
                            <li><Link to="/manuales" className="text-gray-400 hover:text-white duration-300 block">➔ Centro de ayuda</Link></li>
                        </ul>
                    </div>

                    {/* COLUMNA 4: LEGAL */}
                    <div>
                        <h5 className="text-white font-semibold tracking-wide text-base mb-6">Legal y Pagos</h5>
                        <ul className="list-none space-y-3">
                            <li><Link to="/privacidad" className="text-gray-400 hover:text-white duration-300 block">➔ Aviso de Privacidad</Link></li>
                            <li><Link to="/terminos" className="text-gray-400 hover:text-white duration-300 block">➔ Términos y Condiciones</Link></li>
                            <li><Link to="/reembolso" className="text-gray-400 hover:text-white duration-300 block">➔ Políticas de Reembolso</Link></li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* SECCIÓN DE COPYRIGHT (Alineada abajo con fondo más oscuro) */}
            <div style={{ backgroundColor: '#0d041b', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '24px 0' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }} className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© 2026 <span className="text-white font-semibold">Dreameld</span>. Todos los derechos reservados.</p>
                    <p className="mt-2 md:mt-0 flex items-center gap-1">
                        ⚡ Potenciando tu infraestructura digital.
                    </p>
                </div>
            </div>




<a
    href={`https://wa.me/521234567890?text=${encodeURIComponent("¡Hola, Dreameld! Me interesa obtener más información sobre sus servicios. 🚀")}`}
    target="_blank"
    rel="noopener noreferrer"
    title="Contáctanos por WhatsApp"
    style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        backgroundColor: '#25D366',
        color: 'white',
        borderRadius: '50px',
        width: '60px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)',
        zIndex: 999999,
    }}
>
    {/* SVG Nativo de WhatsApp (Cero imports, cero errores) */}
    <svg 
        viewBox="0 0 24 24" 
        style={{ width: '34px', height: '34px', fill: 'white' }}
    >
        <path d="M12.004 2c-5.51 0-9.993 4.483-9.993 9.993 0 1.763.457 3.49 1.329 5.024L2 22l5.13-1.346a9.946 9.946 0 004.874 1.275h.005c5.51 0 9.993-4.483 9.993-9.995S17.514 2 12.004 2zm5.25 13.984c-.21.593-1.21 1.134-1.673 1.2-.42.06-1.048.063-2.911-.703-2.383-.98-3.923-3.4-4.043-3.56-.118-.16-.97-1.288-.97-2.454 0-1.166.612-1.74.832-1.97.218-.23.48-.288.64-.288.16 0 .32.002.46.008.146.006.342-.056.536.41.2.484.686 1.674.746 1.793.06.12.06.26 0 .38-.06.12-.12.2-.24.337l-.362.423c-.12.14-.246.29-.105.534.14.244.624 1.03 1.335 1.662.915.815 1.684 1.067 1.928 1.188.244.12.385.102.527-.06.14-.162.61-.712.773-.956.164-.244.327-.204.55-.122.223.082 1.41.664 1.652.784.242.12.403.18.463.284.06.103.06.602-.15 1.196z"/>
    </svg>
</a>

        </footer>
    );
}