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
                    <img className='icons' src='https://media-exp1.licdn.com/dms/image/C4E03AQHWzJBxnRD5RA/profile-displayphoto-shrink_800_800/0/1638644433707?e=1646870400&v=beta&t=ZU7gt65sAcRJLa-1Ax5tI1Afq1bzmOvhoQZdHTafT1Y'></img>
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
