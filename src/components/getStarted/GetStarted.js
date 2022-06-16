import React, { useState } from 'react'
import {signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import {auth, provider} from '../../firebase'
import {useNavigate} from 'react-router-dom'

import './getStarted.css'

const GetStarted = () => {

    // show either the email or the password
    const [showemail, setShowEmail] = useState(true)
    const showPass = ()=>{
        if (email.length === 0) {
            setShowEmail(true)
            setErr('Field is required')
        }else{
            setShowEmail(false)
        }

    }

    // focus and blur
    const [focused, setfocused] = useState(false)
    const notFocused = () => {
        setfocused(false)
    }
    const isFocused = ()=>{
        setfocused(true)
    }
    
    // value of the email
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
    
    // assign value
    const blurry = () => focused === false && email.length === 0 ? 'big' : 'small'

    const blurryPass = () => focused === false && password.length === 0 ? 'big' : 'small'

    
    const [err, setErr] = useState(false)
    const navigate = useNavigate() 
    const signUpWithEmailAndPass= (e) => {
        e.preventDefault();
        if (email != null && password != null) {
        
        createUserWithEmailAndPassword(auth, email, password).then((res)=> {
            // console.log(res)
            navigate('/logIn')
            }).catch((err)=> {
            let dError = JSON.stringify(err)
            let getError = JSON.parse(dError).code
            let value = getError.replace("-", " ");
            let mainErr = value.replace("auth/", '')
            setErr(mainErr.charAt(0).toUpperCase() + mainErr.slice(1))
            setShowEmail(true)
            })
        
        }
    }   


  return (
    <div className='getStarted'>
        <form action="" className='formStyle'>
            {
                showemail === true ? (
                    <>
                        <div className='ctrlform'>
                            <input type="email" className='inp' name='email' onFocus={isFocused} value={email} onBlur={notFocused} onChange={(e)=>changeEmail(e.target.value)}/>
                            <div className='btn s20' onClick={showPass}>Next</div>
                            <div className={blurry()} onClick={isFocused}>
                                Enter Email Address
                            </div>
                        </div>
                        {
                           err &&  (
                                <div className='showErr'>{err}</div>
                            )
                        }
                    </>
                ):(
                    <div className='ctrlform'>
                        <input type="password" className='inp' name='password' onFocus={isFocused} value={password} onBlur={notFocused} onChange={(e)=>changePassword(e.target.value)}/>
                        <input type='submit' value='Get Start' className='btn s20' onClick={(e)=> signUpWithEmailAndPass(e)}/>
                        <div className={blurryPass()} onClick={isFocused}>
                            Enter password
                        </div>
                    </div>


                )
            }
                
        </form>
    </div>
  )
}

export default GetStarted