import React, { useState, useRef } from 'react';
import CustomHook from './CustomHook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';


const Projects = () => {
    const [listProjects] = useState([
        {
            name: 'Project Real-tine chating in website',
            des: 'Sunt consequat ad laboris do non ipsum proident labore ipsun anin sit. Sit tempor laborum voluptate ut mollit. Proident ea non aliquip ad duis velit ullamco. Nulla velit exercitation nisi.',
            mission: "Back-end Developer, systen analysis and design",
            language: 'HTMLS, CSS3, React Js, Socketio,....',
            images: '/Project-2.png'
        },
        {
            name: 'Project Real-tine chating in website',
            des: 'Sunt consequat ad laboris do non ipsum proident labore ipsun anin sit. Sit tempor laborum voluptate ut mollit. Proident ea non aliquip ad duis velit ullamco. Nulla velit exercitation nisi.',
            mission: "Back-end Developer, systen analysis and design",
            language: 'HTMLS, CSS3, React Js, Socketio,....',
            images: '/Project-2.png'
        },
        {
            name: 'Project Real-tine chating in website',
            des: 'Sunt consequat ad laboris do non ipsum proident labore ipsun anin sit. Sit tempor laborum voluptate ut mollit. Proident ea non aliquip ad duis velit ullamco. Nulla velit exercitation nisi.',
            mission: "Back-end Developer, systen analysis and design",
            language: 'HTMLS, CSS3, React Js, Socketio,....',
            images: '/Project-2.png'
        },
        {
            name: 'Project Real-tine chating in website',
            des: 'Sunt consequat ad laboris do non ipsum proident labore ipsun anin sit. Sit tempor laborum voluptate ut mollit. Proident ea non aliquip ad duis velit ullamco. Nulla velit exercitation nisi.',
            mission: "Back-end Developer, systen analysis and design",
            language: 'HTMLS, CSS3, React Js, Socketio,....',
            images: '/Project-3.jpg'
        },
    ]);
    const refTab = useRef();
    const refDivs = useRef([]);
    CustomHook(refTab, refDivs);

    return (
        <section className="projects" ref={refTab}>
            <div className="title" ref={(el) => el && refDivs.current.push(el)}>
                These are my projects till now...
            </div>
            <div className="des" ref={(el) => el && refDivs.current.push(el)}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quam voluptatem earum porro eligendi autem architecto amet ipsum, dolorem aut illum quasi maxime, quod hic itaque nobis sunt doloremque quae!
            </div>
            <div className='list'>
                {
                    listProjects.map((value, key) => (
                        <div key={key} className='item'>
                            <div className='images' ref={(el) => el && refDivs.current.push(el)}>
                                <img src={value.images} alt="" />
                            </div>
                            <div className='content' ref={(el) => el && refDivs.current.push(el)}>
                                <h3>{value.name}</h3>
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