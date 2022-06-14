import './register.css';
import {useRef} from 'react'
import {useState} from 'react';


function  Register() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("")
    const [emailErr, setEmailErr] = useState("")

    var RegEmail = /^[a-z]+[a-z0-9]@[a-z]+\.[a-z]+\.?[a-z]$/;

    const handleEmail_input = (userEmail) => {
       
    }

    const handleClick = ()=>{
        setEmail(emailRef.current.value);
    }

    const handlePassword_input = () => {
        setPassword(passwordRef.current.value)
    }

    const handleFinish = ()=>{
        console.log(password)
        console.log(email);  
    }    


    return (
        <div className='register'>
            <div className='top'>
                <div className='wrapper'>
                <img src='https://www.freepnglogos.com/uploads/netflix-logo-0.png'></img>           
                <button className='signInBtn'>Sign In</button>    
                </div>
            </div>
            <div className='container'>
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className='input'>
                    {!email ?
                        <>
                            <input type='email' placeholder='email address' ref={emailRef} onChange={(e)=> handleEmail_input(e.target.value)}/>
                            <button className='registerButton' onClick={handleClick}>Get Started</button>
                        </>
                    :
                        <>
                            <input type='password' ref={passwordRef} placeholder='password' value={password} onChange={handlePassword_input}/>
                            <button className='registerButton' onClick={handleFinish}> Start</button>
                        </>
                    } 
                </div>
                <div className='err'>
                    <p className='err'>{emailErr}</p>
                </div>
            </div>
        </div>
    )
}

export default Register
