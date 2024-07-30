import React, { useState, useRef } from 'react';
import CustomHook from './CustomHook';

const Contacts = () => {

    const [listContacts] = useState([
        {
            title: 'Phone Number',
            value: '+91 7567054535',
            locate: '#'
        },
        {
            title: 'Email',
            value: 'iamrohitkandpal@gmail.com',
            locate: 'mailto:iamrohitkandpal@gmail.com'
        },
        {
            title: 'LinkedIn',
            value: 'https://www.linkedin.com/in/rohit-kandpal-',
            locate: 'https://www.linkedin.com/in/rohit-kandpal-'
        }
    ]);
    const divs = useRef([]);
    const scrollTab = useRef();
    CustomHook(scrollTab, divs);

    return (
        <section className='contacts' ref={scrollTab}>
            <div className='title' ref={(el) => el && divs.current.push(el)}>
                These are options to connect with me
            </div>
            <div className="des" ref={(el) => el && divs.current.push(el)}>
                LFeel free to reach out through any of these channels. I am always open to discussions, feedback, or opportunities and look forward to connecting with you.
            </div>
            <div className="list" ref={(el) => el && divs.current.push(el)}>
                {
                    listContacts.map((value, key) => (
                        <a target='blank' key={key} href={value.locate}>
                            <div className="item" key={key}>
                                <h3>{value.title}</h3>
                                <div>{value.value}</div>
                            </div>
                        </a>
                    ))
                }
            </div>
        </section>
    )
}

export default Contacts;