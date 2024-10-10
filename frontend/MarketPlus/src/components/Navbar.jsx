import { useState } from "react";
import './LandingPage.css'
function NavBar() {
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
                    {/* <img src="/images/logo2.jpg" alt="" /> */}
                    <h2>Market +</h2>
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
                        <button className="login">LOG IN</button>
                        <button className="signup">SIGN UP</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar
