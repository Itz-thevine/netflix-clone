import './register.css';
import {useRef} from 'react'
import {useState} from 'react';
import HomeOther from '../../components/homeOther/HomeOther';
import Question from '../../components/question/Question';


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
        <>
        <div className='register'>
            <div className='top'>
                <div className='wrapper'>
                <img src='https://www.freepnglogos.com/uploads/netflix-logo-0.png'></img>           
                <button className='signInBtn'>Sign In</button>    
                </div>
            </div>
            <div className='container'>
                <h1 className='s50'>Unlimited movies, TV shows, and more.</h1>
                <h2 className='s20'>Watch anywhere. Cancel anytime.</h2>
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
        <div>
            <HomeOther>
                <div className='other'>
                    <div className='otherSection'>
                        <h1 className='s50'>Enjoy your Tv.</h1>
                        <h2 className='s20'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
                    </div>
                    <div className='post'>
                        <div className="our-story-card-animation-container">
                            <img alt="" className="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"/>
                            <div className="our-story-card-animation">
                                <video className="our-story-card-video" autoPlay muted width='460px'><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"/></video>
                                <div className="our-story-card-animation-text">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </HomeOther>
            <HomeOther>
                <div className='other'>
                    
                    <div className='post'>
                        <div className="our-story-card-animation-container">
                            <img alt="" className="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"/>
                        </div>
                    </div>
                    <div className='otherSection'>
                        <h1 className='s50'>Download your shows to watch offline.</h1>
                        <h2 className='s20'>Save your favorites easily and always have something to watch.</h2>
                    </div>
                </div>
            </HomeOther>
            <HomeOther>
                <div className='other'>
                    <div className='otherSection'>
                        <h1 className='s50'>Watch everywhere.</h1>
                        <h2 className='s20' style={{width: '40%'}}>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
                    </div>
                </div>
            </HomeOther>
            <HomeOther>
                <div className='other'>
                    
                    <div className='post'>
                        <div className="our-story-card-animation-container">
                            <img alt="" className="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/kidsValueProp.png"/>
                        </div>
                    </div>
                    <div className='otherSection'>
                        <h1 className='s50'>Create profiles for kids.</h1>
                        <h2 className='s20'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>
                    </div>
                </div>
            </HomeOther>
            <HomeOther>
                <div className='question'>
                    <h1 className='s50'>Frequently Asked Questions</h1>
                    <Question 
                        question='What is Netflix?' 
                        answer= "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
                    />
                    <Question 
                        question='How much does netflix cost?' 
                        answer= "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦1,200 to ₦4,400 a month. No extra costs, no contracts."
                    />
                    <Question 
                        question='Where can I watch' 
                        answer= "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
                    />
                    <div style={{marginTop: '4%'}}>
                        <p className='s20'>
                            Ready to watch? Enter your email to create or restart your membership.
                        </p>
                    </div>
                </div>
            </HomeOther>
            
        </div>
        </>
    )
}

export default Register
