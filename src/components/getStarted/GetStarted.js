import React, { useState } from 'react'
import './getStarted.css'

const GetStarted = () => {
    // show either the email or the password
    const [showemail, setShowEmail] = useState(true)
    const showPass = ()=>{
        email.length === 0 ? setShowEmail(true):setShowEmail(false)

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
        return false
    }
    const changePassword = (password) => {
        setPassword(password)  
        
       return false
    }
    
    // assign value
    const blurry = () => focused === false && email.length === 0 ? 'big' : 'small'

    const blurryPass = () => focused === false && password.length === 0 ? 'big' : 'small'

  return (
    <div className='getStarted'>
        <form action="" className='formStyle'>
            {
                showemail === true ? (
                    <div className='ctrlform'>
                        <input type="email" className='inp' name='email' onFocus={isFocused} value={email} onBlur={notFocused} onChange={(e)=>changeEmail(e.target.value)}/>
                        <div className='btn s20' onClick={showPass}>Next</div>
                        <div className={blurry()} onClick={isFocused}>
                            Enter Email Address
                        </div>
                    </div>
                ):(
                    <div className='ctrlform'>
                        <input type="password" className='inp' name='password' onFocus={isFocused} value={password} onBlur={notFocused} onChange={(e)=>changePassword(e.target.value)}/>
                        <div className='btn s20'>Get Started</div>
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