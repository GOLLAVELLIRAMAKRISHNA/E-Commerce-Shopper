import './LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='LoginSignup'>
      <div className="LoginSignup-container">
        <h1>Sign up</h1>
        <div className="input-field">
          <input type="text" placeholder='Enter your name' />
          <input type="email" placeholder='Enter your email' />
          <input type="password" placeholder='Create password' />
        </div>
        <button>Continue</button>
        <p>Already have an account? <span>Login here</span></p>
        <div className="agree-block">
          <input type="checkbox" id='check' />
          <label htmlFor="check">By continuing, i agree to the terms of use & privacy policy.</label>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup