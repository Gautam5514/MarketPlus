import { useState } from "react";



import "./LandingPage.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from "./Footer";
import Offers from "./Offers";
import Nav from "./Nav";

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
        <Offers />
        <Nav />
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
            <Footer />

        </>
    );
}
