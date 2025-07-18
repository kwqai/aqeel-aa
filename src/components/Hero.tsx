/*

import React from 'react';
import Navbar from './Navbar';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col flexCenter gap-20 py-10 pb-32 md:gap-28 lg:py-20 lg:flex-row'>
      <span className='max-container absolute top-64 left-44'></span>
    <div 
      id="hero" 
      className='min-h-screen bg-no-repeat bg-[url(/Images1/abimg1/189.jpeg)] bg-left lg:bg-[15%] bg-cover'
      style={{ backgroundSize: "30%" }}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='flex justify-center items-center'>
          <div className='text-center lg:text-left font-sans space-y-2'>
            <p 
              data-aos="zoom-in-up"
              data-aos-duration="500"
              className="text-xl sm:text-2xl text-gray-600 opacity-0 animate-fadeIn"
            >
              I&apos;m
            </p>
            <p 
              data-aos="zoom-in-up"
              data-aos-delay="100"
              data-aos-duration="600"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 opacity-0 animate-fadeIn"
            >
              Aqeel Ahmed
            </p>
            <p 
              data-aos="zoom-in-up"
              data-aos-delay="200"
              data-aos-duration="700"
              className="text-lg sm:text-xl font-semibold text-gray-700 uppercase tracking-wider opacity-0 animate-fadeIn"
            >
              DEPUTY REGISTRAR (Legal)
            </p>
            A { ' ' }
            <span>
            <Typewriter
            words={['Eat', 'Sleep', 'Code', 'Repeat!']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            />
            </span>
            </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Hero;

*/

/*
import React from 'react';
import Navbar from './Navbar';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <div 
      id="hero" 
      className='min-h-screen bg-no-repeat bg-[url(/Images1/abimg1/189.jpeg)] bg-left lg:bg-[15%] bg-white'
      style={{ backgroundSize: "30%" }}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='flex justify-center items-center'>
          <div className='text-center lg:text-left font-sans space-y-2'>
            <p 
              data-aos="zoom-in-up"
              data-aos-duration="500"
              className="text-xl sm:text-2xl text-gray-600 opacity-0 animate-fadeIn"
            >
              I&apos;m
            </p>
            <p 
              data-aos="zoom-in-up"
              data-aos-delay="100"
              data-aos-duration="600"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 opacity-0 animate-fadeIn"
            >
              Aqeel Ahmed
            </p>
            <p 
              data-aos="zoom-in-up"
              data-aos-delay="200"
              data-aos-duration="700"
              className="text-lg sm:text-xl font-semibold text-gray-700 uppercase tracking-wider opacity-0 animate-fadeIn"
            >
              DEPUTY REGISTRAR (Legal)
            </p>
            <p 
              data-aos="zoom-in-up"
              data-aos-delay="300"
              data-aos-duration="800"
              className="text-base sm:text-lg text-gray-600 opacity-0 animate-fadeIn"
            >
              Secretariat Provincial Ombudsman
            </p>
            <p 
              data-aos="zoom-in-up"
              data-aos-delay="400"
              data-aos-duration="900"
              className="text-sm sm:text-base font-bold text-gray-500 italic opacity-0 animate-fadeIn"
            >
              (Mohtasib Sindh) Karachi
            </p>

            A { ' ' }
            <span style={{ color: 'red', fontWeight: '900', fontSize: '1.5rem', lineHeight: '1.2' }}>
             <Typewriter
            words={['DEPUTY REGISTRAR (Legal)', 'FreeLancer', 'Teacher', 'Programmer']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

*/

import Navbar from './Navbar';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <div id="hero" className="min-h-screen bg-slate-950 flex flex-col">
      <Navbar />
      
      <div className="container mx-auto grid lg:grid-cols-2 flex-grow items-center gap-16 px-8 py-12">
        {/* XL Profile Image Section */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative group w-full max-w-2xl">
            {/* Oversized Profile Image */}
            <div className="w-full aspect-square rounded-xl overflow-hidden shadow-2xl border-[6px] border-white transform transition-all duration-500 group-hover:scale-[1.02]">
              <img
                src="/Images1/abimg1/189.jpeg"
                alt="Aqeel Ahmed"
                className="w-full h-full object-cover"
                data-aos="fade-right"
                data-aos-duration="800"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20"></div>
            </div>
            
            {/* Position Badge */}
            <div className="absolute -bottom-6 -right-6 bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg">
              <p className="font-bold text-lg">DEPUTY REGISTRAR</p>
              <p className="text-sm">(Legal Specialist)</p>
            </div>
          </div>
        </div>

        {/* Enlarged Content Section */}
        <div className="text-center lg:text-left space-y-6">
          <p 
            data-aos="fade-up"
            className="text-2xl font-medium text-blue-600 uppercase tracking-wider"
          >
            Welcome, I'm
          </p>
          
          <h1 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight"
          >
            Aqeel <span className="text-blue-600">Ahmed</span>
          </h1>
          
          <div 
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex flex-col space-y-2 text-gray-600"
          >
            <p className="text-2xl font-medium">Secretariat Provincial Ombudsman</p>
            <p className="text-lg font-light italic">(Mohtasib Sindh) Karachi</p>
          </div>

          <div 
            data-aos="fade-up"
            data-aos-delay="300"
            className="pt-6"
          >
            <div className="inline-flex items-center bg-gray-100 rounded-full px-6 py-3">
              <span className="text-xl text-gray-700 mr-3"></span>
            </div>
          </div>

          {/* Professional Highlights - XL */}
          
        </div>
      </div>

      {/* Watermark Signature */}
      <div className="absolute bottom-8 right-8 opacity-20 hidden lg:block">
        <p className="text-6xl font-light italic tracking-widest">A.Ahmed</p>
      </div>
    </div>
  );
};

export default Hero;