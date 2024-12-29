import { useContext, useRef, useState } from 'react'
import './Navbar.css'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { contextStore } from '../../Context/StoreContext';
import menu_arrow from '../assets/menu_arrow.png'

const Navbar = () => {

    const [navbarColor, setNavbarColor] = useState(false);
    const { getTotalCartItem } = useContext(contextStore);
    const menuRef = useRef()

    window.addEventListener("scroll", () => {
        if (window.scrollY >= 1) {
            setNavbarColor(true);
        } else {
            setNavbarColor(false);
        }
    })

    const handleToggle = (e) => {
        console.log(menuRef);
        e.target.classList.toggle('rotate-icon')
        menuRef.current.classList.toggle("open-menu")
    }

    return (
        <div className={navbarColor ? "navbar navbar-active-color" : "navbar"}>
            <div className="nav-logo">
                <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                    <img src={Logo} alt="" />
                    <p>Shopper</p>
                </Link>
            </div>
            <img src={menu_arrow} onClick={handleToggle} className='menu-arrow' alt="" />
            <ul ref={menuRef} className="nav-list">
                <li className="nav-list-item"><Link to="/" onClick={() => window.scrollTo(0, 0)}>Shop</Link></li>
                <li className="nav-list-item"><Link to="/men" onClick={() => window.scrollTo(0, 0)}>Mens</Link></li>
                <li className="nav-list-item"><Link to="/women" onClick={() => window.scrollTo(0, 0)}>Womens</Link></li>
                <li className="nav-list-item"><Link to="/kid" onClick={() => window.scrollTo(0, 0)}>Kid` s</Link></li>
            </ul>
            <div className="nav-log-cart">
                <Link to="/login" onClick={() => window.scrollTo(0, 0)}>
                    <button className="btn">
                        Login
                    </button>
                </Link>
                <Link to="/cart" onClick={() => window.scrollTo(0, 0)}>
                    <i className="bi bi-cart-plus">
                        <span className="active-cart">{getTotalCartItem()}</span>
                    </i>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;