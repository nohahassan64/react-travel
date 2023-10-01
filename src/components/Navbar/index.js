import React , { useState } from 'react';
import './style.css';
import { MdTravelExplore } from  'react-icons/md'
import { AiFillCloseCircle } from  'react-icons/ai'
import { PiDotsNineBold } from  'react-icons/pi'

const Navbar = () => {
    const [ active , setActive ] = useState('navbarUl');
    const showNav = () => {
        setActive('navbarUl activeNavbar');
    }
    const removeNav = () => {
        setActive('navbarUl');
    }
  return (
    <section className='section'>
        <header className='navbar flex'>
            <div className='logo'>
                <a href='#' className='logoIcon flex'>
                    <h1>
                        <MdTravelExplore className="icon" />
                        Travel.
                    </h1>
                </a>  
            </div>
            <div className={active}>
                <ul className='navlist flex'>

                    <li className='navItem'>
                        <a href='#' className='navLink'>Home</a>
                    </li>

                    <li className='navItem'>
                        <a href='#' className='navLink'>Package</a>
                    </li>

                    <li className='navItem'>
                        <a href='#' className='navLink'>Shop</a>
                    </li>

                    <li className='navItem'>
                        <a href='#' className='navLink'>About</a>
                    </li>

                    <li className='navItem'>
                        <a href='#' className='navLink'>Pages</a>
                    </li>

                    <li className='navItem'>
                        <a href='#' className='navLink'>News</a>
                    </li>

                    <li className='navItem'>
                        <a href='#' className='navLink'>Contact</a>
                    </li>

                    <button className='btn'>
                        <a href='#'>Book Now</a>
                    </button>
                </ul>
                <div className='closeNav' onClick={removeNav}>
                    <AiFillCloseCircle className='icon' />
                </div>
            </div>
            <div className='toggleNav' onClick={showNav} >
                    <PiDotsNineBold className='icon' />
            </div>
        </header>

    </section>
  )
}

export default Navbar