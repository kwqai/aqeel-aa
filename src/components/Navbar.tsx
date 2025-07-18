import React from 'react';
import { IoMenuOutline } from "react-icons/io5";
import { FaHandPeace, FaSearch, FaBookMedical, FaCartPlus } from "react-icons/fa";
import Image from 'next/image'; // Added Next.js Image component
import Link from 'next/link';



export default function Navbar() {
  return (
    <div>
      <div className='container pt-8'>
        <div className='flex justify-between items-center'>
          <div className='text-xl text-white font-extrabold'>Aqueel Ahmed</div>
          <ul className='gap-10 text-white lg:gap-16 hidden md:flex'>
            <li className='menuLink'><a href="#hero">Home</a></li>
            <li className='menuLink'><a href="#about">About</a></li>
            <li className='menuLink'><a href="#projects">Projects</a></li>
            <li className='menuLink'><a href="#skills">Skills</a></li>
            <li className='menuLink'><a href="#services">Services</a></li>
            <li className='menuLink'><a href="#mywork">My Work</a></li>
            <li className='menuLink'><a href="#contact">Contact</a></li>
          </ul>
          <IoMenuOutline className='md:hidden' size={30}/>
        </div>
      </div>
      
    </div>
  );
}


