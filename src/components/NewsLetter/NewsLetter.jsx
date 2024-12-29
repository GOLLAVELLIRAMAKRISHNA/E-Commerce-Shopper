import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div className='newLetter'>
            <h1>get exclusive offers on your email.</h1>
            <p>subscribe to our newsletter and stay updated.</p>
            <div className="newLetter-form">
                <input type="email" placeholder='Enter Email Id' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter