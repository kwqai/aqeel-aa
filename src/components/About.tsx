import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const About = () => {
  return (
    <>

<div id='about' className='container pt-32'>
        <h2 className='text-4xl text-white md:text-5xl' data-aos="zoom-in-up">About me</h2>
        <p className='text-gray-500 pt-4 text-justify' data-aos="zoom-in-up">
          My first job was: I joined a private company in 1986 namely M/s Habibullah Associates (Pvt) Ltd. 
          After that, I entered government service on December 10, 1992 as a Stenographer at the Secretariat of Provincial Ombudsman Sindh Karachi.
          In 2007, I joined the Ministry of Foreign Affairs Islamabad as a Stenographer. In the same year (2007), I rejoined the Secretariat of Provincial Ombudsman Sindh Karachi after being relieved from foreign service Islamabad on August 25, 2007 as Assistant Registrar BPS-17. I was posted as Assistant Registrar at Regional Office Karachi Central, Provincial Ombudsman Sindh, Karachi. 
          <br /><br />
          I was sent for three months to the newly established Regional Office West to start investigation work and establish working procedures. I started office functions, trained the staff, and set up English drafting of notices, decisions, etc. I created the inward and outward registers and taught the Junior Clerk how to enter all incoming mails in the Inward Register and outgoing letters, notices, decisions, replies to Governor's office, and replies to the court.
          <br /><br />
          After that, I continued my responsibility at Regional Office Karachi Central, Provincial Ombudsman Sindh as Assistant Registrar. Later, I was transferred to the Head Office of Provincial Ombudsman Sindh and was posted with Registrar Provincial Ombudsman Sindh, who handed over the Complaint Section to me. Subsequently, I was again transferred to the Regional Office Karachi Central as Assistant Registrar where I continued my work.
          <br /><br />
          In May 2024, I was promoted to the post of Deputy Registrar BPS-18 and have been working as Deputy Registrar since then. In August 2024, I was transferred to the Regional Office Karachi South as Deputy Registrar, where I have been continuously performing my duties as Deputy Registrar.
        </p>
      </div>      
      
       <div className="container mx-auto grid lg:grid-cols-2 flex-grow items-center gap-16 px-8 py-12">
        {/* XL Profile Image Section */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative group w-full max-w-2xl">
            {/* Oversized Profile Image */}
            <div className="w-full aspect-square rounded-xl overflow-hidden shadow-2xl border-[6px] border-white transform transition-all duration-500 group-hover:scale-[1.02]">
              <img
                src="/Images1/abimg1/185.jpeg"
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
              <span className="font-bold text-red-600 text-xl">
                <Typewriter
                  words={[
                    'Legal Professional', 
                    'Government Officer', 
                    'Public Servant',
                    'Policy Expert',
                    'Administrative Leader'
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </div>
          </div>

          {/* Professional Highlights - XL */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="grid grid-cols-2 gap-4 pt-8 max-w-xl mx-auto lg:mx-0"
          >
            <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
              <p className="text-sm text-gray-500">Years of Service</p>
              <p className="font-bold text-2xl">25+</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
              <p className="text-sm text-gray-500">Specialization</p>
              <p className="font-bold text-2xl">Legal Affairs</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
              <p className="text-sm text-gray-500">Sector</p>
              <p className="font-bold text-2xl">Government</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
              <p className="text-sm text-gray-500">Location</p>
              <p className="font-bold text-2xl">Karachi</p>
            </div>
          </div>
        </div>
      </div>

      {/* Watermark Signature */}
      <div className="absolute bottom-8 right-8 opacity-20 hidden lg:block">
        <p className="text-6xl font-light italic tracking-widest">A.Ahmed</p>
      </div>
      <div id='about' className='container pt-32'>
        <h2 className='text-4xl text-white md:text-5xl' data-aos="zoom-in-up">About me</h2>
        <p className='text-gray-500 pt-4 text-justify' data-aos="zoom-in-up">
          My first job was: I joined a private company in 1986 namely M/s Habibullah Associates (Pvt) Ltd. 
          After that, I entered government service on December 10, 1992 as a Stenographer at the Secretariat of Provincial Ombudsman Sindh Karachi.
          In 2007, I joined the Ministry of Foreign Affairs Islamabad as a Stenographer. In the same year (2007), I rejoined the Secretariat of Provincial Ombudsman Sindh Karachi after being relieved from foreign service Islamabad on August 25, 2007 as Assistant Registrar BPS-17. I was posted as Assistant Registrar at Regional Office Karachi Central, Provincial Ombudsman Sindh, Karachi. 
          <br /><br />
          I was sent for three months to the newly established Regional Office West to start investigation work and establish working procedures. I started office functions, trained the staff, and set up English drafting of notices, decisions, etc. I created the inward and outward registers and taught the Junior Clerk how to enter all incoming mails in the Inward Register and outgoing letters, notices, decisions, replies to Governor's office, and replies to the court.
          <br /><br />
          After that, I continued my responsibility at Regional Office Karachi Central, Provincial Ombudsman Sindh as Assistant Registrar. Later, I was transferred to the Head Office of Provincial Ombudsman Sindh and was posted with Registrar Provincial Ombudsman Sindh, who handed over the Complaint Section to me. Subsequently, I was again transferred to the Regional Office Karachi Central as Assistant Registrar where I continued my work.
          <br /><br />
          In May 2024, I was promoted to the post of Deputy Registrar BPS-18 and have been working as Deputy Registrar since then. In August 2024, I was transferred to the Regional Office Karachi South as Deputy Registrar, where I have been continuously performing my duties as Deputy Registrar.
        </p>
      </div>      
      
    </>
  );
}

export default About;