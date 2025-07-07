import React, { useRef, useEffect } from 'react';
import '../index.css';
import '../constantes/index.js';
import { useState } from 'react';
import { formacionItems } from '../constantes/index.js';

import VanillaTilt from "vanilla-tilt";

function Portafolio() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div 
            id="portafolio" 
            className="relative bg-gradient-to-b from-BlueBackground to-black pt-10 pb-10 overflow-hidden"
        >
            <section 
                className="relative z-20 mx-auto w-full flex flex-col md:flex-row justify-center items-center text-center text-white 
                marginTopBotom-5 p-4 md:p-6 lg:p-8 xl:p-10 bg-Aoscuro opacity-80 "
                style={{
                    width: 'fit-content',
                    borderRadius: '12px',
                    border: '1px solid #7DD3FC'
                }}
            >

                

                {/* Contenido visible */}
                <div className="w-full max-w-4xl overflow-y-auto justify-left mx-auto marginTopBotom- ">
                    <h1 
                        className="text-5xl md:text-7xl font-bold mb-4 m-4 md:m-8 lg:m-12"
                        style={{ fontFamily: 'Geist Mono' }}
                    >
                        Portafolio
                    </h1>
                    <p 
                        className='text-xl text-center sm:text-lg md:text-2xl'
                        style={{ fontFamily: 'Geist Mono' }}
                    >
                        Aquí pueden ver alguno de los proyectos en los que he trabajado...
                    </p>
                    <br />
                    <div className="formacionContent text-lg text-left sm:text-lg md:text-2xl rounded-2xl ">
                        <div 
                            className="formacionHeader"
                            style={{
                                borderRadius: '12px',
                                padding: '1rem',
                                border: '1px solid #7DD3FC',
                                background: "#1F4552",
                                fontFamily: 'Geist Mono',
                            }}
                        >
                            <h1>Hola aún no pongo nada :'v</h1>
                        </div>
                        <div 
                            className="formacionHeader"
                            style={{
                                borderRadius: '12px',
                                padding: '1rem',
                                border: '1px solid #7DD3FC',
                                background: "#1F4552",
                                fontFamily: 'Geist Mono',
                            }}
                        >
                            <h1>no habemus nada :c</h1>
                        </div>
                        <div 
                            className="formacionHeader"
                            style={{
                                borderRadius: '12px',
                                padding: '1rem',
                                border: '1px solid #7DD3FC',
                                background: "#1F4552",
                                fontFamily: 'Geist Mono',
                            }}
                        >
                            <h1>Pero aqui van a ir pantallazos y links a otros proyectos que haya hecho</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fondo animado detrás del contenido */}
                <div className="fixed-bottom absolute inset-0 z-10 flex justify-center pointer-events-none">
                    <div className="FondoAnim2 text-Aoscuro text-6xl opacity-50">
                        <span style={{ fontFamily: 'Geist Mono' }}>
                            &lt;Felipe-Pardo/&gt;
                        </span>
                    </div>
            </div>
        </div>
    );
}

export default Portafolio;
