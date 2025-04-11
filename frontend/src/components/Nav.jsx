import { useState } from "react";
import './LandingPage.css'

function Nav() {
    const [showToggle, setShowToggle] = useState(false);
    return (
        <>
            <div className="nav">
                <div className="navmenu">
                    <a href="">HOME</a>
                    <a href="">SHOP</a>
                    <a href="">CONTACT</a>
                    <a href="">ABOUT</a>
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
                    <i className="fa-solid fa-bag-shopping"></i>
                </div>
                <div
                    className={`toggle ${showToggle ? 'show' : ''}`}
                    onMouseEnter={() => setShowToggle(true)}
                    onMouseLeave={() => setShowToggle(false)}
                >
                    <div className="auth">
                        <a href="/login"  className="login">LOG IN</a>
                        <a href="/signup" className="signup">SIGN UP</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav
