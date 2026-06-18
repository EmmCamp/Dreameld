import React, { useState } from "react";
import { Link } from "react-router-dom";

// Componentes globales de tu sitio
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

export default function Consultoria() {
  // Estado para controlar el formulario de cotización
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    tipoProyecto: "web-corporativa",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos de cotización enviados:", formData);
    alert("¡Gracias! Procesando tu solicitud de cotización para Dreameld.");
  };

  return (
    <>
      <Navbar navClass="defaultscroll is-sticky" ulClass="navigation-menu justify-end" />

      {/* HERO SECTION DE CONSULTORÍA */}
      {/* Asignamos un fondo morado oscuro contrastante (rgba 30, 7, 68, 0.85) SOLO en modo día para resaltar el logo de Dreameld */}
      <section
        className="relative table w-full md:py-40 py-36 bg-[url('../../assets/images/bg/bg5.png')] bg-center bg-cover"
        style={{
          backgroundColor: document.documentElement.classList.contains("dark")
            ? "transparent"
            : "rgba(30, 7, 68, 0.85)",
        }}
      >
        <div className="absolute inset-0 bg-transparent dark:bg-slate-950/80"></div>

        <div className="container relative" style={{ zIndex: 2 }}>
          <div className="grid grid-cols-1 text-center mt-12">
            <h3 className="md:text-4xl text-3xl md:leading-snug leading-snug font-medium text-white dark:text-white">
              Consultoría Tecnológica
            </h3>
          </div>
        </div>

        {/* Breadcrumb legible sobre fondo oscuro */}
        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 inline-block">
            <li className="inline-block text-[15px] font-medium duration-500 ease-in-out text-white/80 hover:text-sky-400">
              <Link to="/index">DREAMELD</Link>
            </li>
            <li className="inline-block text-[15px] text-white/60 ltr:rotate-0 rtl:rotate-180">
              <i className="mdi mdi-chevron-right"></i>
            </li>
            <li className="inline-block text-[15px] font-medium duration-500 ease-in-out" style={{ color: "#a78bfa" }}>
              Consultoría
            </li>
          </ul>
        </div>
      </section>

      {/* Divisor de curvas (Shape) decorativo */}
      <div className="relative">
        <div className="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden z-1 text-white dark:text-slate-900">
          <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      {/* SECCIÓN PRINCIPAL DE CONTENIDO */}
      <section className="relative lg:py-24 py-16 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="container">
          
          {/* BLOQUE A: LICENCIAMIENTO DE SOFTWARE */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#7c3aed] uppercase font-semibold text-xs tracking-wider">Infraestructura</span>
            <h2 className="text-2xl md:text-3xl font-semibold mt-2 dark:text-white">Software y Licenciamiento Oficial</h2>
            <p className="text-slate-400 mt-4">
              Adquiere soluciones de software originales y robustas para blindar y potenciar la productividad de tu organización con el respaldo de Dreameld.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-[30px] mb-20">
            {/* Card Windows */}
            <div className="bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-gray-700/50 rounded-2xl p-8 hover:border-[#7c3aed] dark:hover:border-[#7c3aed] transition-all duration-300 flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-14 h-14 rounded-xl text-3xl flex items-center justify-center mb-6" style={{ backgroundColor: "rgba(124, 58, 237, 0.1)" }}>
                  🪟
                </div>
                <h3 className="text-xl font-medium dark:text-white mb-3">Windows OS</h3>
                <p className="text-slate-400 dark:text-slate-300 text-[15px] leading-relaxed">
                  Licencias oficiales de Windows corporativas y personales (Home & Pro). Mantén los equipos de tu empresa actualizados, estables y protegidos contra amenazas informáticas.
                </p>
              </div>
              <button 
                className="mt-8 w-full text-white font-medium py-2.5 px-4 rounded-xl transition-all duration-300"
                style={{ backgroundColor: "#7c3aed", boxShadow: "0 4px 6px -1px rgba(124, 58, 237, 0.2)" }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#6d28d9"}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#7c3aed"}
              >
                Adquirir Licencias
              </button>
            </div>

            {/* Card Microsoft 365 */}
            <div className="bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-gray-700/50 rounded-2xl p-8 hover:border-[#7c3aed] dark:hover:border-[#7c3aed] transition-all duration-300 flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-14 h-14 rounded-xl text-3xl flex items-center justify-center mb-6" style={{ backgroundColor: "rgba(124, 58, 237, 0.1)" }}>
                  ☁️
                </div>
                <h3 className="text-xl font-medium dark:text-white mb-3">Microsoft 365</h3>
                <p className="text-slate-400 dark:text-slate-300 text-[15px] leading-relaxed">
                  Lleva la productividad al siguiente nivel. Acceso completo a Word, Excel, Teams y correos corporativos en la nube bajo tu propio dominio web.
                </p>
              </div>
              <button 
                className="mt-8 w-full text-white font-medium py-2.5 px-4 rounded-xl transition-all duration-300"
                style={{ backgroundColor: "#7c3aed", boxShadow: "0 4px 6px -1px rgba(124, 58, 237, 0.2)" }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#6d28d9"}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#7c3aed"}
              >
                Ver Planes Corporativos
              </button>
            </div>
          </div>

          {/* BLOQUE B: INTERFAZ DE COTIZACIÓN DE PROYECTOS */}
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px] pt-10">
            <div className="lg:col-span-6 md:col-span-6">
              <span className="text-[#7c3aed] uppercase font-semibold text-xs tracking-wider">Desarrollo a Medida</span>
              <h3 className="text-3xl font-medium dark:text-white mt-2 mb-4">¿Tienes una idea en mente? La construimos para ti.</h3>
              <p className="text-slate-400 text-[15px] leading-relaxed mb-4">
                Alineamos la sólida infraestructura de hosting de Dreameld con un diseño y desarrollo exclusivo. Creamos sitios web corporativos de alto impacto, plataformas a medida y e-commerce listos para vender.
              </p>
              <p className="text-slate-400 text-[15px] leading-relaxed">
                Completa el formulario adjunto especificando los requerimientos de tu proyecto y uno de nuestros asesores especializados preparará una propuesta técnica y económica personalizada.
              </p>
            </div>

            {/* FORMULARIO DE REQUERIMIENTOS COMPATIBLE CON MODO CLARO Y OSCURO */}
            <div className="lg:col-span-6 md:col-span-6">
              <div className="bg-gray-50 dark:bg-slate-800/60 rounded-2xl shadow dark:shadow-gray-800 border border-gray-100 dark:border-gray-700/40 p-8">
                <h4 className="mb-6 text-xl font-medium dark:text-white">Cotiza tu Proyecto Web</h4>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="font-medium dark:text-slate-300 text-sm">Nombre completo</label>
                    <input 
                      name="nombre" 
                      type="text" 
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full text-[15px] py-2 px-3 h-11 bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg outline-none border border-gray-200 focus:border-[#7c3aed] dark:border-gray-800 dark:focus:border-[#7c3aed] focus:ring-0 mt-2 transition-colors" 
                      placeholder="Ej. Juan Pérez" 
                    />
                  </div>

                  <div>
                    <label className="font-medium dark:text-slate-300 text-sm">Empresa / Organización</label>
                    <input 
                      name="empresa" 
                      type="text" 
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full text-[15px] py-2 px-3 h-11 bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg outline-none border border-gray-200 focus:border-[#7c3aed] dark:border-gray-800 dark:focus:border-[#7c3aed] focus:ring-0 mt-2 transition-colors" 
                      placeholder="Ej. Dreameld Studio" 
                    />
                  </div>

                  <div>
                    <label className="font-medium dark:text-slate-300 text-sm">¿Qué necesitas desarrollar?</label>
                    <select 
                      name="tipoProyecto"
                      value={formData.tipoProyecto}
                      onChange={handleChange}
                      className="w-full text-[15px] py-2 px-3 h-11 bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg outline-none border border-gray-200 focus:border-[#7c3aed] dark:border-gray-800 dark:focus:border-[#7c3aed] focus:ring-0 mt-2 transition-colors"
                    >
                      <option value="web-corporativa">Sitio Web Corporativo</option>
                      <option value="ecommerce">Tienda en Línea (E-commerce)</option>
                      <option value="sistema-medida">Desarrollo de Software / Sistema a Medida</option>
                      <option value="otro">Otro requerimiento</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-medium dark:text-slate-300 text-sm">Cuéntanos un poco sobre tu idea</label>
                    <textarea 
                      name="mensaje" 
                      rows="4"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      className="w-full text-[15px] py-2 px-3 bg-white dark:bg-slate-900 dark:text-slate-200 rounded-lg outline-none border border-gray-200 focus:border-[#7c3aed] dark:border-gray-800 dark:focus:border-[#7c3aed] focus:ring-0 mt-2 transition-colors resize-none" 
                      placeholder="Describe brevemente los objetivos de tu sitio web..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 font-medium tracking-wide text-white rounded-lg text-center transition-all duration-500 mt-2"
                    style={{
                      backgroundColor: "#7c3aed",
                      borderColor: "#7c3aed",
                      borderWidth: "1px",
                      boxShadow: "0 4px 6px -1px rgba(124, 58, 237, 0.3)",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "#6d28d9";
                      e.currentTarget.style.borderColor = "#6d28d9";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "#7c3aed";
                      e.currentTarget.style.borderColor = "#7c3aed";
                    }}
                  >
                    Enviar Solicitud de Cotización
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
      <Switcher />
    </>
  );
}