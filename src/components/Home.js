import React from 'react';

const Home = () => {
    return (
        <section className='home'>
            <div className="content">
                <div className="name">
                    MY NAME IS <span>ROHIT</span>
                </div>
                <div className="des">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem dicta culpa consequuntur earum recusandae accusamus? Nihil provident ut asperiores explicabo impedit laudantium veritatis, eius magni corporis ea sed ipsum sunt!
                </div>
                <a href="/Resume - Rohit Kandpal.pdf" target='_blank' rel='noopener no referrer'>Download My CV</a>
            </div>
            <div className="avatar">
                <div class="card">
                    <img src="/avatar.jpeg" alt="" />
                    <div class="info">
                        <div>Developer</div>
                        <div>Indian</div>
                        <div>01/03</div>
                        <div>male</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;