import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [

{
    id: 0,
    title: "To do List",
    desc: " A react and typescript based app",
    img: "/Images1/abimg1/mon245.jpeg",
    tags: ["React", "React", "React", "React", "React"],

},

{
    id: 1,
    title: "To do List",
    desc: " A react and typescript based app",
    img: "/Images1/abimg1/mon245.jpeg",
    tags: ["React", "React", "React", "React", "React"],

},

{
    id: 2,
    title: "To do List",
    desc: " A react and typescript based app",
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
    img: "/Images1/abimg1/79.jpeg",
    tags: ["PC Hotel", "React"],

},

{
    id: 7,
    title: "To do List",
    desc: " A react and typescript based app",
    img: "/Images1/abimg1/79.jpeg",
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

const Projects = () => {
  return (
    <div id='visits' className='container pt-12 text-white'>
        <Heading title = 'My Visits' />
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

export default Projects
 