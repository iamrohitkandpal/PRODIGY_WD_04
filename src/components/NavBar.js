import React, { useState } from 'react';
import { connect, Connect, useDispatch } from 'react-redux'
import { changeTabActive } from '../redux/action';


const NavBar = ({activeTab}) => {
    const [listNav] = useState(['home', 'skills', 'projects', 'contacts'])
    const dispatch = useDispatch();
    const changeTab = (value) => {
        dispatch(changeTabActive(value));
    } 
    return (
        <>
            <header>
                <div className='logo'>
                    <img src='/main-logo.png' alt='Logo' />
                </div>
                <nav>
                    {
                        listNav.map((item, index) => (
                            <span key={index}
                            onClick={() => changeTab(item)} 
                            className={activeTab === item ? 'active' : ''}>{item}</span>
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