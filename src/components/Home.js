import React, { useRef } from 'react';
import CustomHook from './CustomHook';

const Home = () => {
const refTab = useRef();
CustomHook(refTab);

    return (
        <section className='home' ref={refTab}>
            <div className="content">
                <div className="name">
                    MY NAME IS <span>ROHIT</span>
                </div>
                <div className="des">
                On my journey to becoming a skilled web developer, I consider myself a learner. I'm passionate about creating functional projects with the MERN stack, and I'm currently learning ReactJS and Node.js.
                </div>
                <a href="/Resume - Rohit Kandpal.pdf" target='_blank' rel='noopener no referrer'>Download My CV</a>
            </div>
            <div className="avatar">
                <div className="card">
                    <img src="/avatar.jpeg" alt="" />
                    <div className="info">
                        <div>Developer</div>
                        <div>Indian</div>
                        <div>01/03</div>
                        <div>Male</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;