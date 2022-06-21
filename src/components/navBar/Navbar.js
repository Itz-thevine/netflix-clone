import {useState} from 'react';
import './Navbar.css'
import * as BiIcon from 'react-icons/bi'
import * as IoIcon5 from 'react-icons/io5'
import * as IoIcon from 'react-icons/io'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null)
    }

    const logOut = () =>{
        Cookies.remove('token')
        localStorage.removeItem('view')
        navigate('/login')
        localStorage.removeItem('mos')
    }
    
    const setSeries = () =>{
        localStorage.setItem('mos', JSON.stringify('Series'))
        window.location.reload(false);
    }
    
    const setMovies = () =>{
        localStorage.setItem('mos', JSON.stringify('Movie'))
        window.location.reload(false);
    }
    
    const removeAll = () => {
        localStorage.removeItem('mos')
        window.location.reload(false)
    }

    return (
        <div className={isScrolled ? 'navBar scrolled' : 'navBar'}>
            <div className='containerd'>
                <div className='left'>
                    <img src='https://www.freepnglogos.com/uploads/netflix-logo-0.png'></img>
                    <span onClick={removeAll}>Home</span>
                    <span onClick={setSeries}>Series</span>
                    <span onClick={setMovies}>Movies</span>
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
                            <span onClick={logOut}>Log Out</span>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default Navbar
