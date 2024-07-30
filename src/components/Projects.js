import React, { useState, useRef } from 'react';
import CustomHook from './CustomHook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';


const Projects = () => {
    const [listProjects] = useState([
        {
            name: 'Scatch - All Bag Luxury E-Commerce App',
            link: '',
            des: 'An e-commerce app for luxury bags featuring a sleek design, secure payment integration, and efficient backend development for managing product listings and transactions. Under Development',
            mission: "Backend Development, Database Management, Payment",
            language: 'EJS, JavaScript, NodeJS, MongoDB,....',
            images: '/Project-1.png'
        },
        {
            name: 'Aakash Vaani - Voice Controlled GIS App',
            link: 'https://github.com/iamrohitkandpal/Geo-Voice-Navigator.git',
            des: 'A GIS application controlled by voice commands, integrating machine learning for accurate voice recognition and backend management to handle geospatial data.',
            mission: "Voice Control, Backend Development, Machine Learning",
            language: 'EJS, Leaflet, ExpressJS, NodeJS, Tensorflow,....',
            images: '/Project-2.png'
        },
        {
            name: 'Obyss Agency Full Page UI Clone',
            link: 'https://github.com/iamrohitkandpal/Obys-Agency-UI-Project.git',
            des: 'A full-page UI clone of Obyss Agency, focusing on advanced frontend development, animations, and smooth design to replicate the originals aesthetic and functionality.',
            mission: "Back-end Developer, systen analysis and design",
            language: 'HTMLS, CSS3, GSAP, SheryJS, LocomotiveJS,....',
            images: '/Project-3.png'
        },
        {
            name: 'College Lost and Found Section Full Page',
            link: '',
            des: 'A college project featuring a “Lost and Found” section with a clean, user-friendly interface, focusing on frontend development and design to manage lost items effectively.',
            mission: "Frontend Development, College Project, Design",
            language: 'HTMLS, CSS3, Other Libraries,....',
            images: '/Project-4.png'
        },
    ]);
    const refTab = useRef();
    const refDivs = useRef([]);
    CustomHook(refTab, refDivs);

    return (
        <section className="projects" ref={refTab}>
            <div className="title" ref={(el) => el && refDivs.current.push(el)}>
                These are some of my projects...
            </div>
            <div className="des" ref={(el) => el && refDivs.current.push(el)}>
            These are a few projects I’ve worked on, showcasing my learning and growth. Each project reflects my effort to apply different technologies and improve my skills in real-world scenarios.
            </div>
            <div className='list'>
                {
                    listProjects.map((value, key) => (
                        <div key={key} className='item'>
                            
                                <div className='images' ref={(el) => el && refDivs.current.push(el)}>
                                    <img src={value.images} alt="" />
                                </div>
                            
                            <div className='content' ref={(el) => el && refDivs.current.push(el)}>
                                <a href={value.link} alt=""><h3>{value.name}</h3></a>
                                <div className="des">{value.des}</div>
                                <div className='mission'>
                                    <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                                    <div>
                                        <h4>Mission</h4>
                                        <div className="de">{value.mission}</div>
                                    </div>
                                </div>
                                <div className='mission'>
                                    <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                                    <div>
                                        <h4>Mission</h4>
                                        <div className="de">{value.language
                                }</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>

    )
}

export default Projects;
