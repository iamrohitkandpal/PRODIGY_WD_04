import React, { useState } from 'react';
import { connect, Connect, useDispatch } from 'react-redux'
import { changeTabActive } from '../redux/action';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NavBar = ({activeTab}) => {
    const [listNav] = useState(['home', 'skills', 'projects', 'contacts'])
    const dispatch = useDispatch();
    const changeTab = (value) => {
        dispatch(changeTabActive(value));
        toggleNav();
    } 
    const [statusNav, setStatusNav] = useState('');
    const toggleNav = () => {
        setStatusNav(statusNav === 'active' ? null : 'active');
    }
    return (
        <>
            <header>
                <div className='logo'>
                    <img src='/main-logo.png' alt='Logo' />
                </div>
                <nav className={statusNav}>
                    {
                        listNav.map((item, index) => (
                            <span key={index}
                            onClick={() => changeTab(item)} 
                            className={activeTab === item ? 'active' : ''}
                            >{item}</span>
                        ))
                    }
                </nav>
                <div className="icon-bar" onClick={toggleNav}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </header>
        </>
    )
}

const mapStateToProps = (state) => ({
    activeTab: state.activeTab
})

export default connect(mapStateToProps, {changeTabActive})(NavBar);