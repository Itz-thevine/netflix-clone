import {useState} from 'react';
import './Navbar.css'
import * as BiIcon from 'react-icons/bi'
import * as IoIcon5 from 'react-icons/io5'
import * as IoIcon from 'react-icons/io'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null)
    }
    return (
        <div className={isScrolled ? 'navBar scrolled' : 'navBar'}>
            <div className='container'>
                <div className='left'>
                    <img src='https://www.freepnglogos.com/uploads/netflix-logo-0.png'></img>
                    <span>Home</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>Popular</span>
                    <span>My List</span>
                </div>
                <div className='right'>
                    <BiIcon.BiSearchAlt2 className='icons'/>
                    <span className='icons'>Kids</span>
                    <IoIcon5.IoNotificationsSharp className='icons'/>
                    <img className='icons' src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'></img>
                    <div className='profile'>
                        <IoIcon.IoMdArrowDropdown className='icons'/>
                        <div className='option'>
                            <span>Settings</span>
                            <span>Log Out</span>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default Navbar
