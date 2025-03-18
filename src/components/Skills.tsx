import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-in-up">
                <h2 className='text-4xl md:text-5xl'>Technologies i work .....</h2>
                <p className='text-gray-500 pt-2'>
                    I have a solid foundation in web development, specializing in HTML, CSS and JavaSceipt. My experience extends to using frameworks like React and Next.js my skill set and contribute effectively to projects.</p>
            </div>
        </div>
        <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'></div>
        <div className='space-y-2'>
            <h2 data-aos="zoom-in-up">B.Com</h2>
            <h2 data-aos="zoom-in-up">LLB</h2>
            <h2 data-aos="zoom-in-up">LLM</h2>
        </div>
        <div className='space-y-2'>
            <h2 data-aos="zoom-in-up">M.A - Economics</h2>
            <h2 data-aos="zoom-in-up">M.A - International Relation</h2>
            <h2 data-aos="zoom-in-up">M.A - Islamic History</h2>
            <h2 data-aos="zoom-in-up">Oracle Programming training  Certificate this training of six months from Government of Sind</h2>
            <h2 data-aos="zoom-in-up">One Year Post Graduate Certificate in Accounting from ICMAP</h2>
        </div>
      
    </div>
  )
}

export default Skills
