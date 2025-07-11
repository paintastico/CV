import React, { useRef,useEffect } from 'react';
import '../index.css';
import { sobremiItems } from '../constantes/index.js';


import imagenPerfil from '../assets/images.jpg'; 

import VanillaTilt from "vanilla-tilt";








function SobreMi() {

  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 5,       // Máxima inclinación (en grados)
        speed: 400,    // Velocidad de la animación
        glare: true,   // Habilita el efecto de reflejo
        "max-glare": 0.1, // Opacidad máxima del reflejo (0 a 1)
      });
    }

    // Limpieza al desmontar el componente
    return () => {
      if (tiltRef.current && tiltRef.current.vanillaTilt) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, []);



  return (
    <div 
    id="sobre-mi"  
    className="xl:m-10 lg:m-10  min-h-screen  bg-gradient-to-br from-BlueBackground to-black flex flex-col justify-center border-[4px] border-dotted border-[#7DD3FC]"
    style={{
      borderRadius: '12px',


    }}>

      <section
      
      ref={tiltRef}
      data-effect="js-tilt"
      className="mx-auto w-full flex flex-col md:flex-row justify-center items-center text-center text-white 
        bg-Aoscuro p-4 md:p-6 lg:p-8 xl:p-10 "
      style={{
         willChange: "transform",
        width: 'fit-content',
        borderRadius: '12px', // Más redondeado que 'rounded-lg'
        border: '1px solid #7DD3FC'
      }}>
      
      
      <div className= "flex-shrink-0 mb-6 md:mb-0 md:mr-8" 
      >
        <img 
            src={imagenPerfil} alt="Felipe"
            className="transition-all duration-300 hover:scale-110 hover:brightness-125 marginTopBotom-5"
            style={{
              width: 'fit-content',
              borderRadius: '12px', // Más redondeado que 'rounded-lg'
              border: '1px solid #7DD3FC'
            }}
            
            />
            
      </div>
      

      




      <div className= "w-full max-w-4xl p-5" >
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 p-10 text-left "
        style={{ fontFamily: 'Geist Mono' }}
        >Sobre mi</h1>
        <div >
        {sobremiItems.map((item, idx) => (
          <p className='text-2xl text-left'
          style={{ fontFamily: 'Geist Mono' }}>           
            {item.description}
          </p>
        ))}        
        </div><br/>
        <ul className ="list-disc list-inside text-left text-xl"
        style={{ fontFamily: 'Geist Mono' }}>
            <li><strong>Frontend:</strong> Maquetación web con HTML5, CSS3, Bootstrap y lógica en JavaScript.</li>
            <li><strong>Bases de datos: </strong>Diseño y optimización de consultas SQL, manejo de datos relacionales.</li>                        
            <li><strong>Android (Java):</strong> Desarrollo de aplicaciones móviles nativas.</li>
        </ul>
        <br/>
        

        <p className='text-xl text-left'
        style={{ fontFamily: 'Geist Mono' }}
        >Mi formación en <a href = "#id-marketing"> <strong>Ingeniería en Marketing</strong></a> me permite crear soluciones técnicas que no solo son funcionales, sino también intuitivas y alineadas con las necesidades del usuario.</p> 

        {/* Botón opcional */}
        <div className='md:flex-row pointer-events-auto items-center'>
          <button className="pointer-events-auto mt-8 px-8 py-3 bg-white text-black font-bold rounded-full 
          hover:bg-opacity-90 hover:[transform:scale(1.2)] transition-transform duration-200 marginLR-5" href="#">
          Linkdin
          </button>
          <button className="pointer-events-auto mt-8 px-8 py-3 bg-white text-black font-bold rounded-full 
          hover:bg-opacity-90 hover:[transform:scale(1.2)] transition-transform duration-200 " href="#">
          Github
          </button>
        </div>


          

      </div>
    </section>

    </div>
    
  );
}

export default SobreMi;