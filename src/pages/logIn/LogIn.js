import './login.css';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { Formik, Form } from 'formik'
import {signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'
import Cookie from 'js-cookie'
import {auth, provider} from '../../firebase'
import {useNavigate} from 'react-router-dom'

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
    const Mailblur = ()=>  setFocusedM(false)
    const Mailfocus = ()=> setFocusedM(true)

    const passBlur= () => setFocusedP(false)
    const passFocus= () => setFocusedP(true);
    

    const blurry = () => focusedM === false && email.length === 0 ? 'bigd' : 'small'

    const blurryPass = () => focusedP === false && password.length === 0 ? 'bigd' : 'small'

    
    // formik validation
    const navigate = useNavigate()
  

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }

                if(!values.password){
                    errors.password = 'required';
                }else if(
                    !/^(?=[\w' \t]{4,60}$)[\w']+(?:[ \t][\w']+)*$/i.test(values.password)
                ){
                    errors.password = 'Your password must contain between 4 and 60 characters.'
                }

                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  let authVal = JSON.stringify(values, null, 2);
                  let getAuth = JSON.parse(authVal)
                  signInWithEmailAndPassword(auth, getAuth.email, getAuth.password).then((res)=> {
                    console.log(res)
                    Cookie.set('token', res.user.accessToken, {
                      expires: 1,
                      secure:true,
                      sameSite: 'strict',
                      path:'/'
                    })
                    localStorage.setItem('users', JSON.stringify(res))
                    navigate('/home')
                    // setErrMsg(false)
                    }).catch((err)=> {
                    //   let dError = JSON.stringify(err);
                    //   let getError = JSON.parse(dError) 
                    //   setErrMsg(getError.code)
                    console.log(err)
                      
                    })

                  setSubmitting(false);
                }, 400);

              }}
        >
        {
            ({
               values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting, 
            }) => (

                <div className='logIn'>
                    <div className='top'>
                        <div className='wrapper'>
                        <Link to='/'>
                            <img src='https://www.freepnglogos.com/uploads/netflix-logo-0.png'></img>            
                        </Link>
                        </div>
                    </div>
                    <div className='cont'>
                        <Form className='logInForm'>
                            <h1>Sign In</h1>
                            <div className='styleForm' style={{marginTop: '10%'}}>
                                <input type='email' name="email" onChange={(e)=>changeEmail(e.target.value), handleChange} onFocus={Mailfocus} value={values.email} onBlur={Mailblur, handleBlur} className='containerInput'/>
                                <div className='showErr'>
                                    {errors.email && touched.email && errors.email}
                                </div>
                                <div className={blurry()}>
                                        Enter Email Address
                                </div>

                            </div>
                            <div className='styleForm'>
                                <input type='password'  name="password"  onChange={(e)=>changePassword(e.target.value), handleChange} onFocus={passFocus} value={values.password} onBlur={passBlur, handleBlur} className='containerInput'/>
                                {/* <input type='password'  name="password" value={values.password}  onFocus={()=> focusPass(focusedP), handleChange} onBlur={()=> focusPass(focusedP), handleBlur} onChange={(e)=>changePassword(e.target.value)} className='containerInput'/> */}
                                <div className='showErr'>
                                    {errors.password && touched.password && errors.password}
                                </div>
                                <div className={blurryPass()}>
                                        Enter Password
                                </div>
                            </div>
                            <input type='submit' value='Sign In' className='logInBtn'/>
                            <span>New to Netflix ? <Link to='/'><b>Sign Up Now.</b></Link></span>
                            <small>This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more.</b></small>
                        </Form>
                    </div>
                </div>
            )
        }
           
        </Formik>
    )
}

export default LogIn
