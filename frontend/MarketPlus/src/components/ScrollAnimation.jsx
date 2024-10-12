// App.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ScrollAnimation.css"; // Assuming you want to keep CSS separate

const ScrollAnimation = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      offset: 250,
      delay: 50,
      duration: 1400, // Animation duration in milliseconds
    });
  }, []);

  return (
    <>
      <div className="card-container">
        <h1>Delivery Offers</h1>
        <div className="cards" data-aos="fade-right">
          <img
            src="https://i.pinimg.com/1200x/fa/59/3e/fa593e77a0e4e9e2d78c36bbc10e020f.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default ScrollAnimation;
