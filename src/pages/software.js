import React from "react";
import { Link } from "react-router-dom";

// IMPORTAMOS LOS COMPONENTES PRINCIPALES DE TU PLANTILLA
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Software() {
    return (
        <>
            {/* ACTIVAMOS EL NAVBAR Y LE DECIMOS QUE MARQUE LA SECCIÓN SOFTWARE */}
            <Navbar manu="software" />

            {/* SECCIÓN HERO INTEGRADA AL ESTILO DREAMELD */}
            <section className="relative table w-full py-36 bg-[url('../assets/images/bg/pages.jpg')] bg-center bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-slate-900/60"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">
                            Licencias de Software
                        </h3>
                        <p className="text-slate-300 text-lg max-w-xl mx-auto mt-3">
                            Garantiza la seguridad y legalidad de tu infraestructura. Activación inmediata de ingeniero a ingeniero.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECCIÓN DE PRODUCTOS */}
            <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800 text-slate-900 dark:text-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        
                        {/* BLOQUE WINDOWS */}
                        <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-3xl">🪟</span>
                                <div>
                                    <h2 className="text-xl font-bold">Windows & Windows Server</h2>
                                    <p className="text-xs text-slate-400">Licencias Perpetuas (OEM / RETAIL)</p>
                                </div>
                            </div>
                            
                            <p className="text-sm text-slate-400 mb-6">
                                Ideales para activar tus servidores virtuales (VPS), servidores dedicados o los equipos de cómputo de tu oficina de manera definitiva.
                            </p>

                            {/* LISTA DE VERSIONES */}
                            <div className="space-y-3">
                                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-gray-700">
                                    <span className="text-sm font-semibold">Windows 11 Pro</span>
                                    <span className="text-sm font-bold text-violet-600 dark:text-violet-400">$29.99 USD</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-gray-700">
                                    <span className="text-sm font-semibold">Windows Server 2022 Standard</span>
                                    <span className="text-sm font-bold text-violet-600 dark:text-violet-400">$149.99 USD</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-gray-700">
                                    <span className="text-sm font-semibold">Windows Server 2025 Datacenter</span>
                                    <span className="text-sm font-bold text-violet-600 dark:text-violet-400">$299.99 USD</span>
                                </div>
                            </div>

                            <Link to="/contacto" className="mt-6 block w-full text-center py-2.5 px-4 font-semibold text-sm bg-violet-600 hover:bg-violet-700 text-white rounded-xl transition-all duration-300 shadow-md shadow-violet-600/10">
                                Cotizar Licencias Windows
                            </Link>
                        </div>

                        {/* BLOQUE MICROSOFT 365 */}
                        <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-3xl">📦</span>
                                <div>
                                    <h2 className="text-xl font-bold">Microsoft 365 / Office</h2>
                                    <p className="text-xs text-slate-400">Suscripciones Anuales y Familiares</p>
                                </div>
                            </div>

                            <p className="text-sm text-slate-400 mb-6">
                                Herramientas esenciales de productividad en la nube. Incluye Word, Excel, Teams, Outlook y almacenamiento en OneDrive para tu empresa.
                            </p>

                            {/* LISTA DE VERSIONES */}
                            <div className="space-y-3">
                                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-gray-700">
                                    <span className="text-sm font-semibold">Microsoft 365 Business Basic</span>
                                    <span className="text-sm font-bold text-violet-600 dark:text-violet-400">$6.00 USD</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-gray-700">
                                    <span className="text-sm font-semibold">Microsoft 365 Business Standard</span>
                                    <span className="text-sm font-bold text-violet-600 dark:text-violet-400">$12.50 USD</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-gray-700">
                                    <span className="text-sm font-semibold">Office Home & Business 2024</span>
                                    <span className="text-sm font-bold text-violet-600 dark:text-violet-400">$249.99 USD</span>
                                </div>
                            </div>

                            <Link to="/contacto" className="mt-6 block w-full text-center py-2.5 px-4 font-semibold text-sm bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-all duration-300 shadow-md shadow-indigo-600/10">
                                Adquirir Microsoft 365
                            </Link>
                        </div>

                    </div>

                    {/* SECCIÓN DE GARANTÍAS RECALCADAS */}
                    <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-center">
                        <div className="p-4">
                            <span className="text-2xl">🔑</span>
                            <h4 className="font-semibold mt-2 text-sm text-slate-900 dark:text-white">Entrega Inmediata</h4>
                            <p className="text-xs text-slate-400 mt-1">Recibe tus claves digitales directamente en tu correo tras confirmar el pago.</p>
                        </div>
                        <div className="p-4">
                            <span className="text-2xl">🛡️</span>
                            <h4 className="font-semibold mt-2 text-sm text-slate-900 dark:text-white">Garantía de Activación</h4>
                            <p className="text-xs text-slate-400 mt-1">Soporte técnico directo si requieres asistencia instalando o validando tu ID.</p>
                        </div>
                        <div className="p-4">
                            <span className="text-2xl">🧾</span>
                            <h4 className="font-semibold mt-2 text-sm text-slate-900 dark:text-white">Licencias 100% Legales</h4>
                            <p className="text-xs text-slate-400 mt-1">Claves genuinas que pasan auditorías de software sin bloqueos sorpresa.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CERRAMOS CON EL FOOTER OFICIAL */}
            <Footer />
        </>
    );
}