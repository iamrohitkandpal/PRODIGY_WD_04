import React, { useState, useRef } from 'react';
import CustomHook from './CustomHook';

const Contacts = () => {

    const [listContacts] = useState([
        {
            title: 'Phone Number',
            value: '+91 7567054535'
        },
        {
            title: 'Email',
            value: 'iamrohitkandpal@gmail.com'
        },
        {
            title: 'LinkedIn',
            value: 'https://www.linkedin.com/in/rohit-kandpal-'
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores temporibus dolorum eligendi error, libero aperiam consequuntur itaque tenetur facilis fuga.
            </div>
            <div className="list" ref={(el) => el && divs.current.push(el)}>
                {
                    listContacts.map((value, key) => (
                        <div className="item" key={key}>
                            <h3>{value.title}</h3>
                            <div>{value.value}</div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Contacts;