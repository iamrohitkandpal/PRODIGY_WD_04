import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faCss3, faJs, faNodeJs, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

const Skills = () => {

    const divs = useRef([]);
    const scrollTab = useRef();
    CustomHook(scrollTab, divs);
    const [listSkills] = useState([
        
        {
            name: 'JavaScript',
            des: 'JavaScript is essential for adding interactivity to web pages. I am learning its diverse features and capabilities to enhance user experiences on my projects.',
            icon: faJs
        },
        {
            name: 'Git Version Control',
            des: 'I use Git for version control, managing code changes efficiently and collaborating smoothly with others, ensuring project integrity and seamless teamwork.',
            icon: faGithub
        },
        {
            name: 'CSS',
            des: 'CSS helps me style web pages. I enjoy learning techniques to create visually appealing and functional designs that enhance user experience.',
            icon: faCss3
        },
        {
            name: 'ReatJs',
            des: 'I am exploring ReactJS to build dynamic user interfaces, enhancing my front-end skills and learning to create responsive, interactive web applications.',
            icon: faReact
        },
        {
            name: 'NodeJs',
            des: 'Node.js enables server-side development. I am learning it to build efficient, scalable backend solutions for more robust web applications.',
            icon: faNodeJs
        },
        {
            name: 'MongoDB',
            des: 'I use MongoDB for data storage in my projects, learning its features to manage databases efficiently and effectively.',
            icon: faDatabase
        },
       
    ])

    return (
        <section className='skills' ref={scrollTab}>
            <div className="title" ref={(el) => el && divs.current.push(el)}>
                This is my tech stack
            </div>
            <div className="des" ref={(el) => el && divs.current.push(el)}>
            I'm learning the MERN stack, including ReactJS and Node.js. I enjoy using CSS and frontend libraries to build functional and practical projects.
            </div>
            <div className="list">
                {
                    listSkills.map((value, key) => (
                        <div className={'item '} key={key} ref={(el) => el && divs.current.push(el)}>
                          <FontAwesomeIcon icon={value.icon} />
                          <h3>{ value.name }</h3>
                          <div className="des">{value.des}</div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Skills;