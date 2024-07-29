import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faNodeJs, } from '@fortawesome/free-brands-svg-icons';
// import CustomHook from './CustomHook';

const Skills = () => {

    const divs = useRef([]);
    const scrollTab = useRef();
    // CustomHook(scrollTab, divs);
    const [listSkills] = useState([
        {
            name: 'HTMl',
            des: 'Consectetur labore anim nulla occaecat dolore aliquip-Ullamco tempor sint ex velit occaecat consequat incididunt.Culpa pariatur cillum fugiat id anim aute nulla officia cillum',
            icon: faHtml5
        },
        {
            name: 'CSS',
            des: 'Consectetur labore anim nulla occaecat dolore aliquip-Ullamco tempor sint ex velit occaecat consequat incididunt.Culpa pariatur cillum fugiat id anim aute nulla officia cillum',
            icon: faCss3
        },
        {
            name: 'JavaScript',
            des: 'Consectetur labore anim nulla occaecat dolore aliquip-Ullamco tempor sint ex velit occaecat consequat incididunt.Culpa pariatur cillum fugiat id anim aute nulla officia cillum',
            icon: faJs
        },
        {
            name: 'ReatJs',
            des: 'Consectetur labore anim nulla occaecat dolore aliquip-Ullamco tempor sint ex velit occaecat consequat incididunt.Culpa pariatur cillum fugiat id anim aute nulla officia cillum',
            icon: faReact
        },
        {
            name: 'NodeJs',
            des: 'Consectetur labore anim nulla occaecat dolore aliquip-Ullamco tempor sint ex velit occaecat consequat incididunt.Culpa pariatur cillum fugiat id anim aute nulla officia cillum',
            icon: faNodeJs
        },
        {
            name: 'MongoDB',
            des: 'Consectetur labore anim nulla occaecat dolore aliquip-Ullamco tempor sint ex velit occaecat consequat incididunt.Culpa pariatur cillum fugiat id anim aute nulla officia cillum',
            icon: <FontAwesomeIcon icon="fa-database" />
        },
    ])

    return (
        <section className='skills'>
            <div className="title" ref={(el) => el && divs.current.push(el)}>
                This is my Skills
            </div>
            <div className="des" ref={(el) => el && divs.current.push(el)}>
            Lorem apsum dolor sit amet consectetur adipisicing eist. Dolorum neque laudantium a modi sure aut mollitia quidem, veracacs mic volupture.
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