import React from 'react'
import  { useState } from "react";
import {navLinks} from "../constantes/index.js";

import imagenMenu from '../assets/menu.svg';
import imagenClose from '../assets/close.svg';

const NavItems = () => {
    return (
        <ul className="nav-ul">
            {navLinks.map(({ id, href,  name }) => (
                <li key={id} className="nav-li">
                    <a href={href} className="nav-li_a" onClick={() =>{}}>
                        {name}
                    </a>
                </li>
            ))}
            
        </ul>
    )
}
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-Aoscuro/90">
            <div className="max-w-8xl mx-auto">
                <div className="flex items-center justify-between items-center py-5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        Felipe Pardo 🦆
                    </a>
                    <button onClick={toggleMenu} className="sm:hidden">
                        <img src={isOpen ? imagenClose : imagenMenu} alt="toggle" className="w-6 h-6"/>

                    </button>

                    <nav className="sm:flex hidden">
                        <NavItems/>
                    </nav>

                    



                </div>
            </div>

            
            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>

                <nav className="p-5">
                    <NavItems/>
                </nav>

            </div>


        </header>
    )
}
export default Navbar