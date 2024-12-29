import Hero_icon from '../assets/hero_image.png'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>new arrival only</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>new</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <button className='latest-btn'>
                        <label>latest collection</label>
                        <img src={arrow_icon} alt="" />
                    </button>
                </div>
            </div>
            <div className="hero-right">
                <img src={Hero_icon} alt="" />
            </div>
        </div>
    )
}

export default Hero