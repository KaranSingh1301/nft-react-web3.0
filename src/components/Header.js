import React from 'react'
import './Header.css'
import punklogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitchLogo from '../assets/header/theme-switch.png'

const Header = () => {
    return (
        <div className='header'>

            <div className='logo-container'>
                <img src={punklogo} className='punkLogo' alt= '' />
            </div>

            <div className='searchBar'>
                <div className='searchIconConatiner'>
                    <img src={searchIcon} alt=""/>
                </div>
                <div>
                    <input className='searchInput' placeholder='Collection, item or user ...' ></input>
                </div>
            </div>

            <div className='headerItems'>
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>

            <div className='headerActions'>
                <div className='themeSwitchContiner'>
                    <img src ={themeSwitchLogo} alt='' />
                </div>
            </div>

            <div className='loginButton'>GET IN</div>
            
        </div>
    )
}

export default Header
