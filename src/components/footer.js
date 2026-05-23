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
                        <p className="mb-0">© {new Date().getFullYear()} Hoxia. Design & Develop with <i className="mdi mdi-heart text-red-600"></i> by <Link to="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
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

export default function Footer() {
  return (
    <footer style={{ display: 'block', width: '100%' }}>
      
      {/* SECCIÓN SUPERIOR: Contenido Morado Oscuro */}
      <div 
        style={{ 
          backgroundColor: '#1a0933', 
          color: '#cbd5e1', 
          paddingTop: '4rem', 
          paddingBottom: '3rem' 
        }}
      >
        {/* Agregamos md:gap-x-16 para dar un espacio chingón entre cada columna */}
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-x-16">
          
          {/* Columna 1: Logo, Eslogan contenido y Redes */}
          {/* El md:max-w-[240px] obliga al eslogan a quebrarse antes y no pegarse a Servicios */}
          <div className="flex flex-col space-y-4 w-full md:max-w-[240px]">
            <img 
              src="/Dlogo.jpeg" 
              alt="Dreameld Logo" 
              className="w-24 h-auto rounded-lg object-contain block" 
            /> 
            <p className="text-sm leading-relaxed block" style={{ color: '#94a3b8' }}>
              Llevando tu infraestructura digital al siguiente nivel con hosting de alta fidelidad.
            </p>
            
            {/* Redes Sociales SVGs en Blanco */}
            <div className="flex space-x-3 pt-2">
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded flex items-center justify-center hover:bg-blue-600 transition" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.1979 9.50977H13.198V7.51978C13.198 6.51978 13.198 5.50977 15.1979 5.50977H17.1979V1.5H13.198C9.19795 1.5 9.19795 3.5 9.19795 6.51978V9.50977H6.19795L5.802 13.4901H9.19795V21.5Z" />
                </svg>
              </a>

              {/* Twitter (X) */}
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded flex items-center justify-center hover:bg-sky-400 transition" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M1.33203 2.5L9.66602 12.3164L1.33203 22.1328H3.33203L10.666 13.4414L16.666 22.1328H23.666L14.666 11.5L22.332 2.5H20.332L13.666 10.375L8.33203 2.5H1.33203ZM4.33203 4.5H7.33203L19.666 20.1328H16.666L4.33203 4.5Z" />
                </svg>
              </a>

              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded flex items-center justify-center hover:bg-red-600 transition" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M23.666 6.33203C23.666 6.33203 23.332 4.16602 22.332 3.16602C21.166 1.83203 19.832 1.83203 19.166 1.66602C14.666 1.33203 11.666 1.33203 11.666 1.33203H11.666H11.666C11.666 1.33203 8.66602 1.33203 4.16602 1.66602C3.49902 1.83203 2.16602 1.83203 0.999023 3.16602C0.166023 4.16602 0.166023 6.33203 0.166023 6.33203S0 8.33203 0 10.332V12.332C0 14.332 0.166023 16.332 0.166023 16.332S0.499023 18.498 1.49902 19.498C2.66602 20.832 3.83203 20.832 4.49902 20.998C6.99902 21.332 11.666 21.332 11.666 21.332H11.666C11.666 21.332 16.333 21.332 18.833 20.998C19.499 20.832 20.832 20.832 21.999 19.498C22.999 18.498 23.332 16.332 23.332 16.332S23.666 14.332 23.666 12.332V10.332C23.666 8.33203 23.332 6.33203 23.332 6.33203ZM9.33203 15.332V7.33203L16 11.332L9.33203 15.332Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Columna 2: Servicios */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: '600', fontSize: '1.125rem', marginBottom: '1rem' }}>Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/licencias-microsoft" style={{ color: '#cbd5e1' }} className="hover:text-white transition">💻 Licencias Microsoft</Link></li>
              <li><Link to="/desarrollo-wordpress" style={{ color: '#cbd5e1' }} className="hover:text-white transition">🌐 Desarrollo WordPress</Link></li>
              <li><Link to="/poliza-mantenimiento" style={{ color: '#cbd5e1' }} className="hover:text-white transition">⚙️ Póliza de Mantenimiento</Link></li>
              <li><Link to="/hosting-alta-fidelidad" style={{ color: '#cbd5e1' }} className="hover:text-white transition">🖲️ Hosting de Alta Fidelidad</Link></li>
            </ul>
          </div>

          {/* Columna 3: Soporte */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: '600', fontSize: '1.125rem', marginBottom: '1rem' }}>Soporte</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/sobre-nosotros" style={{ color: '#cbd5e1' }} className="hover:text-white transition">➔ Sobre Nosotros</Link></li>
              <li><Link to="/contacto" style={{ color: '#cbd5e1' }} className="hover:text-white transition">➔ Contacto</Link></li>
              <li><Link to="/soporte-tecnico" style={{ color: '#cbd5e1' }} className="hover:text-white transition">➔ Soporte Técnico</Link></li>
              <li><Link to="/faq" style={{ color: '#cbd5e1' }} className="hover:text-white transition">➔ Preguntas Frecuentes (FAQ)</Link></li>
              <li><Link to="/centro-ayuda" style={{ color: '#cbd5e1' }} className="hover:text-white transition">➔ Centro de ayuda</Link></li>
            </ul>
          </div>

          {/* Columna 4: Legal y Pagos */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: '600', fontSize: '1.125rem', marginBottom: '1rem' }}>Legal y Pagos</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/aviso-privacidad" style={{ color: '#cbd5e1' }} className="hover:text-white transition">➔ Aviso de Privacidad</Link></li>
              <li><Link to="/terminos-condiciones" style={{ color: '#cbd5e1' }} className="hover:text-white transition">➔ Términos y Condiciones</Link></li>
              <li><Link to="/politicas-reembolso" style={{ color: '#cbd5e1' }} className="hover:text-white transition">➔ Políticas de Reembolso</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* SECCIÓN INFERIOR: Derechos Reservados */}
      <div 
        style={{ 
          backgroundColor: '#0f051d', 
          color: '#94a3b8', 
          paddingTop: '1.25rem', 
          paddingBottom: '1.25rem',
          textAlign: 'center',
          fontSize: '0.75rem',
          borderTop: '1px solid rgba(255,255,255,0.05)'
        }}
      >
        <p>
          © 2026 <span style={{ color: '#fff', fontWeight: '600' }}>Dreameld</span>. Todos los derechos reservados. ⚡ Potenciando tu infraestructura digital.
        </p>
      </div>

    </footer>
  );
}