import { useState } from "react";
import "./LandingPage.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from "./Footer";
import Offers from "./Offers";
import Nav from "./Nav";

export default function LandingPage() {
    const [showModal, setShowModal] = useState(true); // Corrected useState declaration

    const divStyle = {
        backgroundImage: `url('/images/home2.jpg')`, // Corrected the image path syntax
        height: "600px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    return (
        <>
            <Offers />
            <Nav />
            <section style={divStyle}>
                {showModal && ( // Show modal only when showModal is true
                    <div className="modal-container">
                        <div className="modal-content">
                            <div className="welcom">
                                <h2>WELCOME TO MARKET +</h2>
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
                                    <option value="Argentina">Argentina</option>
                                </select>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* Product Image Card Section */}
            <section className="product-card-section">
                <h3 className="text-center"><strong>Featured Products </strong></h3>
                <div className="product-card-container">
                    <div className="product-card">
                        <img src="/images/clothes.jpg" alt="Product 1" />
                        <h4>Clothes</h4>
                    </div>
                    <div className="product-card">
                        <img src="/images/shoes.webp" alt="Product 2" />
                        <h4>Shoes</h4>
                    </div>
                    <div className="product-card">
                        <img src="/images/mobiles.jpg" alt="Product 3" />
                        <h4>Mobile</h4>
                    </div>
                    <div className="product-card">
                        <img src="/images/pharmacy.jpg" alt="Product 4" />
                        <h4>Pharmacy</h4>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
