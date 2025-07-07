import React, { useRef,useEffect } from 'react';
import '../index.css';
import '../constantes/index.js'



import VanillaTilt from "vanilla-tilt";


import imagenHtml from '../assets/html5.svg';
import imagenCSS from '../assets/css.svg'; 
import imagenMySQL from '../assets/mysql.svg'; 
import imagenJs from '../assets/js.svg'; 
import imagenGit from '../assets/github.svg'; 
import imagenPostman from '../assets/postman.svg'; 
import imagenVs from '../assets/visualstudio.svg'; 
import imagenPhotoshop from '../assets/ps.svg'; 
import imagenBlender from '../assets/blender_icon_512x512.png'; 
import imagenOffice from '../assets/Office.png'; 

import imagenAS from '../assets/Android_Studio_Logo_2024.svg'; 
import imagenJV from '../assets/java-icon.svg'; 
import imagenR from '../assets/reactjs-icon.svg'; 
import imagenTW from '../assets/tailwind-css-2.svg'; 



const getAssetPath = (path) => {
    return import.meta.env.PROD 
      ? `/CV${path}`
      : `src${path}`;
};



function Tecnologias() {

    const tiltRefs = useRef([]);

    useEffect(() => {
        tiltRefs.current.forEach((el) => {
        if (el) {
            VanillaTilt.init(el, {
            max: -35,
            glare: true,
            "max-glare": 0.3,
            scale: 1.2, // Escala al hacer hover
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

    // Datos de las tecnologías (para evitar repetir código)
    const tecnologias = [
        { nombre: "HTML 5", imagen: imagenHtml },
        { nombre: "CSS", imagen: imagenCSS },
        { nombre: "MySQL", imagen: imagenMySQL },
        { nombre: "Javascript", imagen: imagenJs },
        { nombre: "Github", imagen: imagenGit },
        { nombre: "Postman", imagen: imagenPostman },
        { nombre: "Visual Studio", imagen: imagenVs },
        { nombre: "Photoshop", imagen: imagenPhotoshop },
        { nombre: "Blender", imagen: imagenBlender },
        { nombre: "Office", imagen: imagenOffice },
        { nombre: "Android Studio", imagen: imagenAS },
        { nombre: "Java", imagen: imagenJV },
        { nombre: "React", imagen: imagenR },
        { nombre: "Tailwind", imagen: imagenTW },





    ];


  return (
    <div 
    className="min-h-screen flex flex-col justify-center"
    id="Tecnologias"
    >
        <section          
          className="mx-auto w-full flex flex-col md:flex-row justify-center items-center text-center text-white 
          marginTopBotom-5 bg-Aoscuro p-4 md:p-6 lg:p-8 xl:p-10"
          style={{
            width: 'fit-content',
            borderRadius: '12px', // Más redondeado que 'rounded-lg'
            border: '1px solid #7DD3FC',
            boxShadow: '0px 10px 20px rgba(0,0,0,1.9)'

          }}>
        
          
          <div className= "w-full max-w-4xl  p-5 overflow-y-auto " >
            
                <h1 className="text-5xl md:text-7xl font-bold mb-4 p-10 "
                style={{ fontFamily: 'Geist Mono' }}
                >Tecnologias y herramientas</h1>
                <p className='text-xl text-center sm:text-lg md:text-2xl'
                style={{ fontFamily: 'Geist Mono' }}
                > Estas son algunas de las tecnologias con las que he trabajado y he hecho uso a lo largo de mi formacion y carrera profesional o en proyectos personales.</p>
                <div className="cajas">
                    <div className="cajagrupo">
                    {tecnologias.map((tech, index) => (
                        <div
                          key={tech.nombre}
                          ref={(el) => (tiltRefs.current[index] = el)} // Asigna ref única
                          data-effect="js-tilt"
                          className="caja hover:bg-opacity-90 transition-transform duration-200"
                          style={{
                              background: "#1F4552",
                              willChange: "transform",
                              color: "#FFFFFF",
                              fontFamily: 'Geist Mono'
                          }}
                          >
                          <p>{tech.nombre}</p>
                          <img src={tech.imagen} alt={tech.nombre} />
                        </div>
                    ))}
                    </div>
                    
            </div>

          </div>


      </section>

    </div>
    
  );
}

export default Tecnologias;