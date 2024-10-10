import { useState } from "react";



import "./LandingPage.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
// import required modules

export default function LandingPage() {
    const [setShowModal] = useState(true); // Add this line to control modal visibility

    const divStyle = {
        backgroundImage: `url('/images/home2.jpg')`,
        height: "600px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative", // Add this line
        display: "flex", // Add this line
        justifyContent: "center", // Add this line
        alignItems: "center", // Add this line
    };

    return (
        <>

            <section style={divStyle}>

                <div className="modal-container">
                    <div className="modal-content">
                        <div className="welcom">
                            <h2>WELCOME TO MARKET + </h2>
                        </div>
                        <p>
                            <i>Unfortunately, we can't ship to </i>
                            <strong>INDIA</strong> <i>right now.</i>
                        </p>
                        <button className="continue-btn" onClick={() => setShowModal(false)}>CONTINUE ANYWAY</button>
                        <div className="country-selector">
                            <label htmlFor="country">
                                <i>Change your shipping country</i> :{" "}
                            </label>
                            <select id="country">
                                <option value="India">Argentina</option>
                            </select>
                        </div>
                    </div>
                </div>

            </section>
            <footer>
                <div className="footer-container">
                    <div className="footer-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Return Policy</a>
                        <a href="#">Contact Us</a>
                    </div>

                    <div className="social-icons">
                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                    <div className="footer-copy">
                        <p>&copy; 2024 Market +. All rights reserved.</p>
                    </div>
                </div>
            </footer>

        </>
    );
}
