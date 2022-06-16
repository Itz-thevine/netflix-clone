import './login.css';
import { Link } from 'react-router-dom'
import { useState } from 'react';

function LogIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const changeEmail = (email) => {
        setEmail(email)       
        // console.log(email) 
    }
    const changePassword = (password) => {
        setPassword(password) 
        // console.log(password) 
    }

    const [focusedM, setFocusedM] = useState(false)
    const [focusedP, setFocusedP] = useState(false)
    const focusedMail = (e)=> {
        setFocusedM(!e)
    }

    const focusPass= (e) => {
        setFocusedP(!e)
    }

    const blurry = () => focusedM === false && email.length === 0 ? 'bigd' : 'small'

    const blurryPass = () => focusedP === false && password.length === 0 ? 'bigd' : 'small'

    

    return (
        <div className='logIn'>
            <div className='top'>
                <div className='wrapper'>
                <Link to='/'>
                    <img src='https://www.freepnglogos.com/uploads/netflix-logo-0.png'></img>            
                </Link>
                </div>
            </div>
            <div className='cont'>
                <form className='logInForm'>
                    <h1>Sign In</h1>
                    <div className='styleForm' style={{marginTop: '10%'}}>
                        <input type='email' onChange={(e)=>changeEmail(e.target.value)} onFocus={()=> focusedMail(focusedM)} value={email} onBlur={()=> focusedMail(focusedM)} className='containerInput'/>
                        <div className={blurry()}>
                                Enter Email Address
                        </div>
                    </div>
                    <div className='styleForm'>
                         <input type='password' onFocus={()=> focusPass(focusedP)} value={password} onBlur={()=> focusPass(focusedP)} onChange={(e)=>changePassword(e.target.value)} className='containerInput'/>
                         <div className={blurryPass()}>
                                Enter Password
                        </div>
                    </div>
                    <input type='submit' value='Sign In' className='logInBtn'/>
                    <span>New to Netflix ? <Link to='/'><b>Sign Up Now.</b></Link></span>
                    <small>This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more.</b></small>
                </form>
            </div>
        </div>
    )
}

export default LogIn
