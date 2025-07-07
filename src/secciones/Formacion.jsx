import React, { useRef,useEffect } from 'react';
import '../index.css';
import '../constantes/index.js';
import { useState } from 'react';
import { formacionItems } from '../constantes/index.js';


import VanillaTilt from "vanilla-tilt";

import cornerCat from '../assets/catto.png';


function Formacion() {
    const [openIndex, setOpenIndex] = useState(null);

    const [currentImage, setCurrentImage] = useState(cornerCat);


    
    const [isAnimatingOut, setIsAnimatingOut] = useState(false);
    const [nextImage, setNextImage] = useState(null);



    const handleClick = (idx) => {
    if (openIndex === idx) {
      // Si se hace clic en el mismo ítem, simplemente cerrar
      setIsAnimatingOut(true);
      setTimeout(() => {
        setOpenIndex(null);
        setIsAnimatingOut(false);
      }, 500); // Duración de la animación
    } else {
      // Si es un ítem diferente
      if (openIndex !== null) {
        // Primero animar la salida
        setIsAnimatingOut(true);
        setTimeout(() => {
          setCurrentImage(formacionItems[idx]?.image || cornerCat);
          setOpenIndex(idx);
          setIsAnimatingOut(false);
        }, 500);
      } else {
        // Si no hay nada abierto, mostrar directamente
        setCurrentImage(formacionItems[idx]?.image || cornerCat);
        setOpenIndex(idx);
      }
    }
  };

    const tiltRefs = useRef([]);
    
        useEffect(() => {
            tiltRefs.current.forEach((el) => {
            if (el) {
                VanillaTilt.init(el, {
                max: -5,
                glare: true,
                "max-glare": 0.1,
                scale: 0.9 // Escala al hacer hover (opcional)
                });
            }
            });
    
            return () => {
            tiltRefs.current.forEach((el) => {
                if (el?.vanillaTilt) {
                el.vanillaTilt.destroy();
                }
            });
            };
        }, []);

    
    return (
        <div className="p-4 md:p-6 lg:p-8 xl:p-10" id="formación">
      <div>
            <img
            src={currentImage}
            alt="Decoration"
            className="fixed bottom-0 right-0 z-50 xl:w-[25rem] xl:h-[25rem] lg:w-[20rem] lg:h-[20rem] md:w-[15rem] md:h-[15rem] w-[10rem] h-[10rem] transition-all duration-500 ease-in-out"
            style={{
                transform: !isAnimatingOut && openIndex !== null ? 'translateY(0)' : 'translateY(100%)',
                opacity: !isAnimatingOut && openIndex !== null ? 1 : 0,
                pointerEvents: !isAnimatingOut && openIndex !== null ? 'auto' : 'none',
                transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
            }}
            />

            </div>
            



            <section 
            
                className="mx-auto w-full flex flex-col md:flex-row justify-center items-center text-center text-white 
                marginTopBotom-5 p-4 md:p-6 lg:p-8 xl:p-10 bg-Aoscuro relative"
                style={{
                width: 'fit-content',
                borderRadius: '12px', // Más redondeado que 'rounded-lg'
                border: '1px solid #7DD3FC',
                boxShadow: '0px 10px 20px rgba(0,0,0,1.9)'
                }}>


                


                <div className="w-full max-w-4xl overflow-y-auto justify-left mx-auto marginTopBotom- " 
                
                
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 m-4 md:m-8 lg:m-12 "
                    style={{ fontFamily: 'Geist Mono' }}
                    >Formación 🎓</h1>
                    
                    <div className="formacionContent text-lg text-left sm:text-lg md:text-2xl rounded-2xl ">
                        <ul className="space-y-2 ">
                            {formacionItems.map((item, idx) => (
                                <li className="List-Item" 
                                key={idx}
                                ref={(el) => (tiltRefs.current[idx] = el)} // Asigna ref única
                                data-effect="js-tilt"

                                    style={{
                                        borderRadius: '12px',
                                        padding: '1rem',
                                        border: '1px solid #7DD3FC',
                                        background: "#1F4552",
                                    }}
                                >
                                    <h3                           
                                        className="text-2xl clickable transition-all text-Destacado duration-300 transform hover:scale-110 hover:text-blue-600"
                                        onClick={() => handleClick(idx)}
                                        style={{ 
                                            cursor: "pointer", 
                                            color: "#7DD3FC",
                                            display: "inline-block",
                                            fontFamily: 'Geist Mono',
                                            
                                            
                                            paddingLeft: "2rem",
                                            marginBottom: "0.3rem",
                                            transition: "all 0.3s ease"
                                        }}
                                    >
                                        <strong>{item.title}</strong>
                                    </h3>
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-in-out`}
                                        style={{
                                            maxHeight: openIndex === idx ? `${item.description.length * 1}px` : "10px",
                                            opacity: openIndex === idx ? 1 : 0,
                                            paddingLeft: "2rem",
                                            marginBottom: "1rem",
                                            fontFamily: 'Geist Mono'
                                        }}
                                    >
                                        <p className="pt-2">
                                            {item.description}<br/>
                                        </p>
                                        
                                    </div>                      

                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </section>

        </div>
        
    );
}

export default Formacion;