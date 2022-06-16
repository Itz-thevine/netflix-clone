import './login.css';
import { Link } from 'react-router-dom'

function LogIn() {
    return (
        <div className='logIn'>
            <div className='top'>
                <div className='wrapper'>
                <Link to='/'>
                    <img src='https://www.freepnglogos.com/uploads/netflix-logo-0.png'></img>            
                </Link>
                </div>
            </div>
            <div className='container'>
                <form className='logInForm'>
                    <h1>Sign In</h1>
                    <input type='email' className='containerInput' placeholder='enter email or phone number'/>
                    <input type='password' className='containerInput' placeholder='enter email'/>
                    <button className='logInBtn'>Sign In</button>
                    <span>New to Netflix ? <b>Sign Up Now.</b></span>
                    <small>This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more.</b></small>
                </form>
            </div>
        </div>
    )
}

export default LogIn
