import { useState } from "react";
import './LandingPage.css'
import { Link } from "react-router-dom";

function Nav() {
    const [showToggle, setShowToggle] = useState(false);
    return (
        <>
            <div className="nav">
                <div className="navmenu">
                    <Link href="">HOME</Link>
                    <Link href="">SHOP</Link>
                    <Link href="">CONTACT</Link>
                    <Link href="">ABOUT</Link>
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
                        <Link href="/login"  className="login">LOG IN</Link>
                        <Link href="/signup" className="signup">SIGN UP</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav
