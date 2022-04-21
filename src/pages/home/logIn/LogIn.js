import './login.css';

function LogIn() {
    return (
        <div className='logIn'>
            <div className='top'>
                <div className='wrapper'>
                <img src='https://www.freepnglogos.com/uploads/netflix-logo-0.png'></img>            
                </div>
            </div>
            <div className='container'>
                <form>
                    <h1>Sign In</h1>
                    <input type='email' placeholder='enter email or phone number'/>
                    <input type='password' placeholder='enter email'/>
                    <button className='logInBtn'>Sign In</button>
                    <span>New to Netflix ? <b>Sign Up Now.</b></span>
                    <small>This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more.</b></small>
                </form>
            </div>
        </div>
    )
}

export default LogIn
