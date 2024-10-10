import "./LandingPage.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
    return (
        <div>
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
        </div>
    )
}

export default Footer
