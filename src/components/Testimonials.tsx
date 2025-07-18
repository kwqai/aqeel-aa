import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [

{
    id: 0,
    title: "From a Superior — Justice (Retd.) Naima Ali, Former Ombudsman Sindh",
    desc: " Mr. Aqeel Ahmed has been an invaluable asset to our team. His meticulous approach to legal documentation and ability to handle high-pressure cases with professionalism set him apart. I have always relied on his expertise for sensitive legal matter",
    img: "/Images1/abimg1/mon242.jpeg",
    tags: ["React", "React", "React", "React", "React"],

},

{
    id: 1,
    title: "From a Colleague — Farhan Raza, Deputy Director, Law Division",
    desc: " Working alongside Aqeel was a privilege. His knowledge of government procedures and dedication to public service inspired our entire team. He has a rare ability to simplify complex legal issues for stakeholders.",
    img: "/Images1/abimg1/mon245.jpeg",
    tags: ["React", "React", "React", "React", "React"],

},

{
    id: 2,
    title: "From a Subordinate — Sara Khan, Assistant Registrar",
    desc: " As our Deputy Registrar, Mr. Ahmed mentored junior staff with patience and clarity. His leadership made our office more efficient, and his fairness in handling complaints earned him immense respect.",
    img: "/Images1/abimg1/mon246.jpeg",
    tags: ["React", "React", "React", "React", "React"],

},

{
    id: 3,
    title: "To do List",
    desc: " A react and typescript based app",
    img: "/Images1/abimg1/mon244.jpeg",
    tags: ["React", "React", "React", "React", "React"],

},

{
    id: 4,
    title: "D J Science College",
    desc: " Talkimg with Pricipal",
    img: "/Images1/abimg1/501.jpeg",
    tags: ["React", "React", "React", "React", "React"],

},

{
    id: 5,
    title: "To do List",
    desc: " Discussing with Professors",
    img: "/Images1/abimg1/502.jpeg",
    tags: ["React", "React", "React", "React", "React"],

},

{
    id: 6,
    title: "Seminar",
    desc: "With Registrar Provincial Ombudsman Sindh",
    img: "/Images1/abimg1/197.jpeg",
    tags: ["PC Hotel", "React"],

},

{
    id: 7,
    title: "To do List",
    desc: " A react and typescript based app",
    img: "/Images1/abimg1/197.jpeg",
    tags: ["React", "React", "React", "React", "React"],

},

{
    id: 8,
    title: "To do List",
    desc: " A react and typescript based app",
    img: "/Images1/abimg1/mon246.jpeg",
    tags: ["React", "React", "React", "React", "React"],

},

];

const Testimonials = () => {
  return (
    <div id='Testimonials' className='container pt-12 text-white'>
        <Heading title = 'Testimonials' />
        <div className='grid gap-10 text-white xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el) => (<Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            />))}


        </div>

      
    </div>




  )
}

export default Testimonials
