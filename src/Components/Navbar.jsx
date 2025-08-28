import { useState } from "react";
import {HashLink} from 'react-router-hash-link'
import icon from "../assets/icon.png"


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
     
      <nav className="fixed w-full flex justify-between items-center px-6 py-3 top-0 left-0 bg-white/40 backdrop-blur-md z-50 h-16">
     
        <div >
            <img src={icon} className="h-16 w-16 object-contain"/>
        </div>

        
        <button
          className="md:hidden text-3xl text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "X" : "☰"}
        </button>

      
        <div className="hidden md:flex gap-12 text-xl">
          <HashLink smooth to="#home">Home</HashLink>
          <HashLink smooth to="#about">About</HashLink>
          <HashLink smooth to="#contactus">Contact</HashLink>
          <HashLink smooth to="#blog">Blog</HashLink>
        </div>
      </nav>

     
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white/30 backdrop-blur-lg shadow-md transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8 p-6 text-lg mt-12  ">
          <HashLink smooth to="#home" onClick={() => setIsOpen(false)}>Home</HashLink>
          <HashLink smooth to="#about" onClick={() => setIsOpen(false)}>About</HashLink>
          <HashLink smooth to="#contactus" onClick={() => setIsOpen(false)}>Contact</HashLink>
          <HashLink smooth to="#blog" onClick={() => setIsOpen(false)}>Blog</HashLink>
        </div>
      </div>
     
    </>
  );
}
