import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/Images1/abimg1/189.jpeg)] bg-left lg:bg-[15%] bg-cover'
        style={{backgroundSize: "35%"}}
        >
    <Navbar />
    <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[60px] sm:text-[80px] font-bold leading-tight flex justify-center items-center '>
            <div>
                <p data-aos="zoom-in-up">i'm</p>
                <p data-aos="zoom-in-up">Aqeel</p>
                <p data-aos="zoom-in-up">Ahmed</p>
            </div>
        </div>
        </div>  
    </div>
  )
}

export default Hero