import React from 'react';
import { IoMenuOutline } from "react-icons/io5";
import { FaHandPeace, FaSearch, FaBookMedical, FaCartPlus } from "react-icons/fa";
import Image from 'next/image'; // Added Next.js Image component

export default function Navbar() {
  return (
    <div>
      <div className='container pt-8'>
        <div className='flex justify-between items-center'>
          <div className='text-xl font-medium'>Aqueel Ahmed</div>
          <ul className='gap-10 lg:gap-16 hidden md:flex'>
            <li className='menuLink'><a href="#hero">Home</a></li>
            <li className='menuLink'><a href="#about">About</a></li>
            <li className='menuLink'><a href="#projects">Projects</a></li>
            <li className='menuLink'><a href="#skills">Skills</a></li>
            <li className='menuLink'><a href="#contact">Contact</a></li>
          </ul>
          <IoMenuOutline className='md:hidden' size={30}/>
        </div>
      </div>
      <div className="grid grid-cols-1">
        <div className="p-5">
          <div className="py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-black t0-grey-900">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <FaHandPeace className="w-6 h-6 text-3xl text-red-500 hover:text-green-100" />
                <div className="relative">
                  <input
                    className="rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block"
                    placeholder="Search for your required items from menu."
                  />
                  <FaSearch className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-lime-300 hidden lg:block md:block" />
                </div>
              </div>
              <div className='flex justify-center items-center gap-2'>
                <FaBookMedical className='w-5 h-5 hidden lg:block md:block'/>
                <p className='text-sm text-white hidden lg:block md:block'>order Now and get it within
                  <span className='text-red-800'>24 hrs.</span>
                </p>
              </div>
              <FaCartPlus className='inline-block w-8 h-8 rounded-full ring-4 ring-sky-400 hover:ring-amber-400 text-green-400 hover:text-red-400 '/>
              <Image 
                className='inline-block rounded-full ring-4 ring-sky-400 hover:ring-amber-400' 
                src='/p1.jpeg'
                alt='Profile picture'
                width={40}
                height={40}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}