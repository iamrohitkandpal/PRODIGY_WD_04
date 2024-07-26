import React, { useState } from 'react';
import { connect, Connect } from 'react-redux'
import { changeTabActive } from '../redux/action';


const NavBar = ({activeTab}) => {
    const [listNav] = useState(['home', 'skills', 'projects', 'contacts'])
    return (
        <>
            <header>
                <div className='logo'>
                    <img src='/main-logo.png' alt='Logo' />
                </div>
                <nav>
                    {
                        listNav.map((item, index) => (
                            <span key={index} className={activeTab === item ? 'active' : ''}>{item}</span>
                        ))
                    }
                </nav>
            </header>
        </>
    )
}

const mapStateToProps = (state) => ({
    activeTab: state.activeTab
})

export default connect(mapStateToProps, {changeTabActive})(NavBar);