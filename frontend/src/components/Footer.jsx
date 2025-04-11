import "./LandingPage.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom"

function Footer() {
    return (
        <div>
            <footer>
                <div className="footer-container">
                    <div className="footer-links">
                        <Link to="/privacy-policy">Privacy Policy</Link>
                        <Link to="/term-condition">Terms & Conditions</Link>
                        <Link to="/return-policy">Return Policy</Link>
                        <Link to="/contact-us">Contact Us</Link>
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
        </div>
    )
}

export default Footer
