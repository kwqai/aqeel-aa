import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [

{
    id: 0,
    title: "To do List",
    desc: " A react and typescript based app",
    img: "/project01_01.jpg",
    tags: ["React", "React", "React", "React", "React"],

},

{
    id: 1,
    title: "To do List",
    desc: " A react and typescript based app",
    img: "/project01_01.jpg",
    tags: ["React", "React", "React", "React", "React"],

},

{
    id: 2,
    title: "To do List",
    desc: " A react and typescript based app",
    img: "/project01_01.jpg",
    tags: ["React", "React", "React", "React", "React"],

},

{
    id: 3,
    title: "To do List",
    desc: " A react and typescript based app",
    img: "/project01_01.jpg",
    tags: ["React", "React", "React", "React", "React"],

},

{
    id: 4,
    title: "To do List",
    desc: " A react and typescript based app",
    img: "/project01_01.jpg",
    tags: ["React", "React", "React", "React", "React"],

},

{
    id: 5,
    title: "To do List",
    desc: " A react and typescript based app",
    img: "/project01_01.jpg",
    tags: ["React", "React", "React", "React", "React"],

},

{
    id: 6,
    title: "To do List",
    desc: " A react and typescript based app",
    img: "/project01_01.jpg",
    tags: ["React", "React", "React", "React", "React"],

},

];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title = 'My Projects' />
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
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
 