import './Footer.css'
import footer_logo from '../assets/logo_big.png'
import insta_icon from '../assets/instagram_icon.png'
import whatsup_icon from '../assets/whatsapp_icon.png'
import pinterest_icon from '../assets/pintester_icon.png'


const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>shopper</p>
            </div>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Office</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icons">
                <div className="icon-container">
                    <img src={insta_icon} alt="" />
                </div>
                <div className="icon-container">
                    <img src={pinterest_icon} alt="" />
                </div>
                <div className="icon-container">
                    <img src={whatsup_icon} alt="" />
                </div>
            </div>
            <hr />
            <div className="footer-copyright">
                <p>Copyright @ 2024 - All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer