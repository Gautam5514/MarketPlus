import { useState } from "react";
import './LandingPage.css'
import { Link } from "react-router-dom";
import { useCart } from '../contexts/CartContext';
import Cart from './Cart';

function Nav() {
    const [showToggle, setShowToggle] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const { getCartItemCount } = useCart();
    return (
        <>
            <div className="nav">
                <div className="navmenu">
                    <Link to="">HOME</Link>
                    <Link to="">SHOP</Link>
                    <Link to="">CONTACT</Link>
                    <Link to="">ABOUT</Link>
                </div>
                <div className="logo">
                    <img src="./images/brandlogo.png" alt="" />
                </div>
                <div className="icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <i
                        className="fa-regular fa-user"
                        onMouseEnter={() => setShowToggle(true)}
                        onMouseLeave={() => setShowToggle(false)}
                    ></i>
                    <div className="cart-icon-container" style={{ position: 'relative', display: 'inline-block' }}>
                        <i 
                            className="fa-solid fa-bag-shopping"
                            style={{ cursor: 'pointer' }}
                            onClick={() => setShowCart(true)}
                        ></i>
                        {getCartItemCount() > 0 && (
                            <span 
                                className="cart-count"
                                style={{
                                    position: 'absolute',
                                    top: '-8px',
                                    right: '-8px',
                                    backgroundColor: '#dc3545',
                                    color: 'white',
                                    borderRadius: '50%',
                                    width: '18px',
                                    height: '18px',
                                    fontSize: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 'bold'
                                }}
                            >
                                {getCartItemCount()}
                            </span>
                        )}
                    </div>
                </div>
                <div
                    className={`toggle ${showToggle ? 'show' : ''}`}
                    onMouseEnter={() => setShowToggle(true)}
                    onMouseLeave={() => setShowToggle(false)}
                >
                    <div className="auth">
                        <Link to="/login"  className="login">LOG IN</Link>
                        <Link to="/signup" className="signup">SIGN UP</Link>
                    </div>
                </div>
                <Cart isOpen={showCart} onClose={() => setShowCart(false)} />
            </div>
        </>
    )
}

export default Nav
